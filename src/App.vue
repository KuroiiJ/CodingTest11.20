<template>
  <div id="app">
  
  <!-- router - links are currently all in the navbar -->
  <Navbar />


  <div class="main">
    <!-- <transition
        name="fade"
        mode="out-in"
      > -->
    

    <!-- View matching current router-links will render here -->
    <router-view />

    <!-- </transition> -->
  </div>



  </div> 

</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-bottom: 1000px;
  background: lightpink;
  width: 100%;
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

  .main {
    
    margin-top: 125px;

  }
</style>
