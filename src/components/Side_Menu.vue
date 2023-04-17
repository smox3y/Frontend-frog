<script>
export default {
  methods: {
    addNewStudent() {
      this.$emit('show', 'add-student');
    },
    viewAllStudents() {
      this.$emit('show', 'view-students');
    },
    addNewRequest() {
      this.$emit('show', 'add-request');
    },
    viewAllRequests() {
      this.$emit('show', 'view-requests');
    },
    calendar() {
      // Your logic for showing the calendar
    },
    reports() {
      // Your logic for generating reports
    },
  },
};
</script>

<template>
  <div class="navbar">
    <div class="logo-container">
      <img src="../assets/logo.png" alt="Logo" class="logo" />
    </div>
    <ul class="nav-list">
      <li><a href="#" @click.prevent="addNewStudent">Add a New Student</a></li>
      <li><a href="#" @click.prevent="viewAllStudents">View All Students</a></li>
      <li><a href="#" @click.prevent="addNewRequest">Add a New Request</a></li>
      <li><a href="#" @click.prevent="viewAllRequests">View All Requests</a></li>
      <li><a href="#" @click.prevent="calendar">Calendar</a></li>
      <li><a href="#" @click.prevent="reports">Reports</a></li>
    </ul>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  flex-direction: column;
  width: 30%; /* Increase the width to 25% or another value that works for your design */
  min-width: 200px; /* Set a minimum width to ensure the navbar remains usable on smaller screens */
  height: 100%;
  background-color: #4d1979;
  padding: 1rem;
  font-family: Arial, sans-serif;
}

.logo-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.logo {
  max-width: 100%;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-list li {
  margin-bottom: 1rem;
}

.nav-list a {
  color: white;
  text-decoration: none;
}

.nav-list a:hover {
  text-decoration: underline;
}
</style>
