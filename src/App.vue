<template>
  <div id="app">
  
    <div class="outerWrapper">
    <!-- router - links are currently all in the navbar -->
      <div class="box">
        <Navbar />
      </div>

      <div class="box">
          <HelloWorld />
      </div>

  </div>



  </div> 

</template>

<script>
import Navbar from './components/Navbar'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    HelloWorld
  }
}
</script>

<style>
#app {
  /* display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  background: rgb(241, 234, 236); */
   background: gainsboro;
}

.outerWrapper {
  display: flex;
  justify-content: space-between;
}
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }

</style>
