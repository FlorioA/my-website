<template>
  <div id="app">
    <MainNav/>
    <router-view/>
  </div>
</template>

<script>
import MainNav from './components/MainNav.vue';

export default {
  components: {
    MainNav,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.card-shadow {
  box-shadow: 0.1px 0.1px 3px #242424;
}

.btn-custom {
  color: white;
  background-color: #127196;
  border-color: #127196;
}
.btn-custom:hover {
  color: white;
  background-color: #085675;
  border-color: #085675;
}

.bg {
  background-color: #f0f0f0;
}

.ext-link {
  width: 50px;
  transition: all 0.1s ease-out;
}
.ext-link:hover {
  transform: scale(1.2);
}
</style>
