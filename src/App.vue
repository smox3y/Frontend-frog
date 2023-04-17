<script>
import sideMenu from './components/Side_Menu.vue';

export default {
  components: {
    'side-menu': sideMenu,
  },
};
</script>

<template>
  <div id="app">
    <div class="app-container">
      <side-menu />
      <router-view></router-view>
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
