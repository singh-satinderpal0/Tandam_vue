<template>
  <div id="app">
    <Header /> 
  </div>
</template>

<script>
import Header from './components/Header/Header'

export default {
  name: 'app',
  components: {
    Header
  },

  mounted(){
//     if (process.env.NODE_ENV === 'development') {
//     this.$devtools.connect("http://localhost:8080/", null)
// }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
