<template>
  <div class="view-students">
    <h1>Students</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Account Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.idNumber">
          <td>{{ student.idNumber }}</td>
          <td>{{ student.firstName }}</td>
          <td>{{ student.lastName }}</td>
          <td>{{ student.email }}</td>
          <td>{{ student.accountStatus ? 'Active' : 'Inactive' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: [
        {
          idNumber: '001',
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          accountStatus: true,
        },
        {
          idNumber: '002',
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'jane.doe@example.com',
          accountStatus: false,
        },
        {
          idNumber: '003',
          firstName: 'Alice',
          lastName: 'Johnson',
          email: 'alice.johnson@example.com',
          accountStatus: true,
        },
      ],
    };
  },
  // Remove created() for now, uncomment when ready to use API
  async created() {
    const response = await fetch('/api/students');
    this.students = await response.json();
  },
};
</script>

<style scoped>
.view-students {
  padding: 1rem;
  margin-left: 60px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 0.5rem;
  text-align: left;
  border: 1px solid #ccc;
}

thead {
  background-color: #4d1979;
}
</style>