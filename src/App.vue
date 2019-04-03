<template>
  <div id="app">
    <question></question>
  </div>
</template>

<script>
import Question from './components/Question.vue'

export default {
  name: 'app',
  components: {
    Question
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
  background-size: cover;
}
</style>
