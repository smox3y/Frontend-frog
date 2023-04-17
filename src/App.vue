

<script>

import sideMenu from './components/Side_Menu.vue'
import AddStudent from './components/Add_Student.vue'
import ViewStudent from './components/View_Students.vue'
import AddRequest from './components/Add_Request.vue'
import ViewRequest from './components/View_Requests.vue'

export default {
  components: {
    'side-menu':sideMenu,
    'add-student':AddStudent,
    'view-students':ViewStudent,
    'add-request':AddRequest,
    'view-requests':ViewRequest,
  },
  data() {
    return {
      currentView: 'add-student',
    };
  },
  methods: {
    changeView(view) {
      this.currentView = view;
    },
  },
};
</script>

<template>
  <div id="app">
    <div class="app-container">
      <side-menu @show="changeView" />
      <component :is="currentView" />
    </div>
  </div>
</template>


<style scoped>
.app-container {
  display: flex;
  height: 100vh;
  width: 100vw;
}

.sideMenu {
  position: absolute;
  top: 0;
  left: 0;
}

#app {
  font-family: Arial, sans-serif;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
