<template>
  <div class="wrapper">
   

      <h2>TEST {{ $route.params.src}}</h2>
      <div class="player-container">
        <vue-core-video-player src="`${$route.params.src}`"></vue-core-video-player>
      </div>


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    checkParams: function () {
      console.log("sadf", this.route.params)
    }
  },
  mounted : function () {
    this.checkParams()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.player-container {
  width: 100%px;
  height: auto;
}
</style>
