<template>
  <div class="wrapper">
   

      <h2>TEST {{src}}</h2>
      <div class="player-container">
        <vue-core-video-player src="`${$route.params.id}`"></vue-core-video-player>
      </div>


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    src: String
  },
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
  width: 900px;
  height: 500px;
}
</style>
