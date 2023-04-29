<template>
  <div>
    <h1>Requests</h1>
    <table class="request-table">
      <thead>
        <tr>
          <th>Request ID</th>
          <th>Requester Name</th>
          <th>Event Date</th>
          <th>Title</th>
          <th>Status</th>
          <th>Assigned <br/>SuperFrog</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="request in requests" :key="request.requestId">
          <td>{{ request.requestId }}</td>
          <td>{{ request.reqFirstName }} {{ request.reqLastName }}</td>
          <td>{{ request.eventDate }}</td>
          <td>{{ request.title }}</td>
          <td>{{ request.status }}</td>
          <td>{{ request.assignedName ? request.assignedName : 'N/A' }}</td>
          <td>
            <button @click="editRequest(request)">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
    <edit-request
    :show-modal="showEditModal"
      :students="students"
      :selected-request="requests[selectedRequestIndex]"
      @close-modal="closeModal"
      @data-updated="fetchRequests"
    ></edit-request>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import EditRequest from "./Edit_Request.vue";
import axios from "axios";

export default {
  components: {
    EditRequest,
  },
  data() {
    return {
      requests: [],
      showEditModal: false,
      selectedRequestIndex: null,
      students: [],
    };
  },
  setup() {
    const requests = ref([]);

    async function fetchRequests() {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://localhost:8080/api/v1/appearances",
      };

      try {
        const response = await axios.request(config);
        console.log(JSON.stringify(response.data));
        requests.value = response.data.data;
      } catch (error) {
        console.log(error);
      }
    }

    onMounted(fetchRequests);

    return {
      requests,
      fetchRequests,
    };
  },
  methods: {
    async fetchStudents() {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://localhost:8080/api/v1/users",
      };

      try {
        const response = await axios.request(config);
        console.log(JSON.stringify(response.data));
        this.students = response.data.data.filter(student => student.active === true);;
      } catch (error) {
        console.log(error);
      }
    },
    editRequest(request) {
      this.selectedRequestIndex = this.requests.findIndex(
        (req) => req.requestId === request.requestId
      );
      this.fetchStudents();
      this.showEditModal = true;
    },
    closeModal() {
      this.showEditModal = false;
    },
  },
};
</script>

<style scoped>
.request-table {
  width: 100%;
  border-collapse: collapse;
  margin: 60px;
}

.request-table th,
.request-table td {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
}

.request-table thead {
  background-color: #4d1979;
}
</style>
