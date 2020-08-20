<template>
  <div id="app">
  
  <!-- router - links are currently all in the navbar -->
  <div class="boxA">
    <Navbar />
  </div>


  <div class="boxB">
    <transition
        name="fade"
        mode="out-in"
      >
      <router-view />

    </transition>
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
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  background: rgb(241, 234, 236);
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

  .boxB {
    
    margin-top: 125px;

  }
</style>
