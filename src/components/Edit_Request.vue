<template>
  <div class="modal" v-if="showModal">
    <div class="modal-content">

      <span class="close" @click="closeModal">&times;</span>
      <h3>Edit Request</h3>

      <div v-if="selectedRequest">
        <p>Request ID: {{ selectedRequest.requestId }}</p>
        <p>Title: {{ selectedRequest.title }}</p>
      </div>

      <label for="phoneNumber">Phone Number:</label>
      <input type="text" id="phoneNumber" v-model="editedRequest.reqPhoneNumber" />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="editedRequest.reqEmail" />

      <label for="eventDate">Event Date:</label>
      <input type="date" id="eventDate" v-model="editedRequest.eventDate" />

      <label for="eventTime">Event Time:</label>
      <input type="time" id="eventTime" v-model="editedRequest.startTime" />

      <label for="status">Status:</label>
      <select id="status" v-model="editedRequest.status">
        <option value="PENDING">Pending</option>
        <option value="APPROVED">Approved</option>
        <option value="ASSIGNED">Assigned</option>
        <option value="COMPLETED">Completed</option>
      </select>

      <label for="students">Assign Student:</label>
      <select id="students" v-model="selectedStudent">
        <option value="">N/A</option>
        <option v-for="student in students" :key="student.id" :value="student">{{ student.firstName }} {{ student.lastName }}</option>
      </select>

      <button @click="saveRequest">Save</button>
      <button @click="cancelRequest">Cancel</button>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
import axios from "axios";

export default {
  props: {
    showModal: Boolean,
    students: Array,
    selectedRequest: Object,
  },
  emits: ["close-modal", "data-updated"],
  setup(props, { emit }) {
    const selectedStudent = ref(null);
    const editedRequest = ref({ ...props.selectedRequest });

    watchEffect(() => {
      if (props.selectedRequest) {
        editedRequest.value = { ...props.selectedRequest };
      }
    });



    async function saveRequest() {
      if (
        JSON.stringify(props.selectedRequest) !==
        JSON.stringify(editedRequest.value)
      ) {
        let config = {
          method: "put",
          maxBodyLength: Infinity,
          url: "http://localhost:8080/api/v1/appearances/admin/" + editedRequest.value.requestId,
          headers: {
            "Content-Type": "application/json",
          },
          data: editedRequest.value,
        };

        try {
          const response = await axios.request(config);
          console.log("Updated Data: " + JSON.stringify(response.data));
          emit("data-updated");
          closeModal();
        } catch (error) {
          console.log(error);
        }
      }

      if (selectedStudent.value) {
        console.log("STUDNET IS SELECTED: ")
        editedRequest.value.assignedName = selectedStudent.value.firstName + " " + selectedStudent.value.lastName;
        console.log("ASSIGNED NAME: " + editedRequest.value.assignedName)
        editedRequest.value.assignedId = selectedStudent.value.id;
        console.log("ASSIGNED ID: " + editedRequest.value.assignedId)
      }

      if(editedRequest.value.status === "APPROVED"){
        approve(editedRequest.value.requestId)
      }else if(editedRequest.value.status === "COMPLETED"){
        complete(editedRequest.value.requestId)
      }else if (editedRequest.value.status === "REJECT"){
        reject(editedRequest.value.requestId)
      }
      
    
    }

    function approve(id){
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:8080/api/v1/appearances/approval/' + id,
      };

      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
    }

    function complete(id){
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'localhost:8080/api/v1/appearances/complete/' + id,
      }

        axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    }

    function reject(id){
      let config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: 'http://localhost:8080/api/v1/appearances/approval/' + id,
      };

      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
    }

    function closeModal() {
      emit("close-modal");
    }

    function cancelRequest() {
      closeModal();
    }

    return {
      selectedStudent,
      saveRequest,
      closeModal,
      cancelRequest,
      editedRequest,
    };
  },
};
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  color: #333;
}

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

label {
  display: block;
  margin-top: 1em;
}

select {
  display: block;
  width: 100%;
  margin-top: 0.5em;
}

button {
  margin-top: 1em;
}
</style>
