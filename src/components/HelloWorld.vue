<template>
  <div class="wrapper">
   

      <h2>TEST {{ $route.params.id }}</h2>
      <div class="player-container">
        <vue-core-video-player src="https://assets.thankview.com/assets/videos/walkthrough/1_Creating_A_Campaign.mp4"></vue-core-video-player>
        <!-- <vue-core-video-player src="`${$route.params.id}`"></vue-core-video-player> -->
      </div>


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    checkParams: function () {
      console.log("sadf", this.route.params.id)
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
  width: 500px;
  height: auto;
}

.wrapper {
  width: 50%;
  display: flex;

  
  flex-direction: column;
  align-items: center;
}

</style>
