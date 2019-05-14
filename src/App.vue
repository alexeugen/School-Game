<template>
  <div id="app">
    <din id="navbar" class="display-inline">
      <router-link class="nav-item" to="/">Easy</router-link>
      <router-link  class="nav-item" to="/medium">Medium</router-link>
      <router-link  class="nav-item" to="/hard">Hard</router-link>
    </din>
    <router-link to="/medium"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Josefin Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
 
}

body {
   background-image: url('./assets/bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

#navbar {
  position: fixed;
  margin-left: -120px;
  top: 0;
}

#navbar .nav-item {
  background: white;
  margin: 10px;
  padding: 10px;
}

</style>
