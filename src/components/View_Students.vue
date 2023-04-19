<template>
  <div>
      <h1>Students</h1>
    <table class="student-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.id }}</td>
          <td>{{ student.firstName }} {{ student.lastName }}</td>
          <td>{{ student.email }}</td>
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

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/users')
        students.value = response.data.data
        console.log(students.value)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    onMounted(fetchData)

    return {
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
