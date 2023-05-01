<script>

export default {
  props: {
    roles: {
      type: String,
      required: true,
    },
  },
  mounted() {
    console.log('Roles:', this.roles);
  },
  methods: {
    addNewStudent() {
      this.$router.push('/admin/add-student');
    },
    viewAllStudents() {
      this.$router.push('/admin/view-students');
    },
    addNewRequest() {
      this.$router.push('/admin/add-request');
    },
    viewAllRequests() {
      this.$router.push('/admin/view-requests');
    },
    EditStudent() {
      this.$router.push('/admin/Edit_Student');
    },
    calendar() {
      // Your logic for showing the calendar
    },
    reports() {
      // Your logic for generating reports
    },
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
      this.$emit('logout'); // Emit the 'logout' event
    }
  },
  computed : {
    isAdmin() {
      return this.roles.includes('SPIRITDIRECTOR');
    }
  }
};
</script>

<template>
  <div class="navbar">
    <div class="logo-container">
      <img src="../assets/logo.png" alt="Logo" class="logo" />
    </div>
    <ul class="nav-list">
      <li v-if="roles.includes('SPIRITDIRECTOR')"><a href="#" @click.prevent="addNewStudent" >Add a New Student</a></li>
      <li><a href="#" @click.prevent="viewAllStudents">View All Students</a></li>
      <li v-if="roles.includes('SPIRITDIRECTOR')"><a href="#" @click.prevent="addNewRequest">Add a New Request</a></li>
      <li><a href="#" @click.prevent="viewAllRequests">View All Requests</a></li>
      <li><a href="#" @click.prevent="calendar">Calendar</a></li>
      <li><a href="#" @click.prevent="reports">Reports</a></li>
      <li><a href="#" @click.prevent="EditStudent">Edit Student</a></li>
      <li><a href="#" @click.prevent="logout">Logout</a></li>
    </ul>

  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  flex-direction: column;
  width: 30%; /* Increase the width to 25% or another value that works for your design */
  min-width: 200px; /* Set a minimum width to ensure the navbar remains usable on smaller screens */
  height: 100vh;
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

.logout-container {
  position: absolute;
  bottom: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
}

button {
  background-color: #4d1979;
  color: white;
  border: 1px solid white;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #6f42c1;
}
</style>
