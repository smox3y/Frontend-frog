<template>
  <div>
    <h1>Requests</h1>
    <table class="request-table">
      <thead>
        <tr>
          <th>Request ID</th>
          <th>Requester Name</th>
          <th>Email</th>
          <th>Title</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="request in requests" :key="request.requestId">
          <td>{{ request.requestId }}</td>
          <td>{{ request.reqFirstName }} {{ request.reqLastName }}</td>
          <td>{{ request.reqEmail }}</td>
          <td>{{ request.title }}</td>
          <td>{{ request.status }}</td>
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
    const requests = ref([])

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/appearances')
        requests.value = response.data.data
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    onMounted(fetchData)

    return {
      requests
    }
  }
}
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
