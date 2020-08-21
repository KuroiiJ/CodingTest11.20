<template>
  <div id="app">
  
    <div class="outerWrapper">
    <!-- router - links are currently all in the navbar -->
      <div class="box">
        <Navbar />
      </div>

      <div class="box">
          <router-view :key="$route.fullPath" />
      </div>

  </div>



  </div> 

</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
   margin-top: 20px;
   background: darkgrey;
   height: 1000px;

}

.outerWrapper {
  width: 900px;
  height: 500px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background: gainsboro;
  border-style: outset;
}
 .box {
 }

</style>
