<template>
  <div>
    <h1>SuperFrog</h1>
    <table class="student-table">
      <thead>
        <tr>
          <th>Student ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.id }}</td>
          <td>{{ student.firstName }}</td>
          <td>{{ student.lastName }}</td>
          <td>{{ student.email }}</td>
          <td>{{ student.active ? 'Yes' : 'No' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'

export default {
  setup() {
    const students = ref([])

    async function fetchStudents() {
      // const axios = require('axios');

      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:8080/api/v1/users',
      };

      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
         students.value = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
    }

    onMounted(fetchStudents)

    return {
      print() {
        console.log(students.value)
      },
      students
    }
  }
}
</script>

<style scoped>
.student-table {
  width: 100%;
  border-collapse: collapse;
  margin-left: 60px;
}

.student-table th,
.student-table td {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
}

.student-table thead {
  background-color: #4d1979;
}
</style>
