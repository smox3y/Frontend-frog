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

    async function fetchRequests() {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:8080/api/v1/appearances',
        headers: { 
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwic3ViIjoic3VwZXJmcm9nc2NoZWR1bGVyY2l0ZTMwMzYzQGdtYWlsLmNvbSIsImlkIjoxLCJleHAiOjE2ODIzODQxNDUsImlhdCI6MTY4MjM3Njk0NSwiYXV0aG9yaXRpZXMiOiJST0xFX1NQSVJJVERJUkVDVE9SIFJPTEVfU1VQRVJGUk9HIn0.Zq6QXKCfQKE9Saodkl8BntEy17GUUtI9WTzSZapTSJwJYX0Touy9XZ9fsOnxb6OIYQOWWkfQBDeLgyoBc6yu2UrilvWgblL0-nryMwIBqLFznNmydrFJRIEGp4Rgt0j3ua48tmHmPRX76Z0NedRDUNSLaS2mStyXF_TeCl_SEGLHZnsNBK7aH-vHt8dOnTxSQN_cZ7_WqUIr176Xu-3i_pBbD1MF7bnf8xCqsf7ugXIR_X14jYKtuUkgHl-N3oU8kwCoyW3BmV9AdCTlgSUgwavH6xxZxoMG6Cdqb6bernIHfn417GLlMRNjQOnjy_rSztnT4IYYjpZhXgnVSg9vCQ'
        }
      };

      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        requests.value = response.data.data
      })
      .catch((error) => {
        console.log(error);
      });

    }

    onMounted(fetchRequests)

    return {
      print() {
        console.log(students.value)
      },
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
