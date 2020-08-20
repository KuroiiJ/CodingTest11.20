<template>
  <div class="wrapper">
   
    <div class="column">
      <div class="player-container">
        <vue-core-video-player src="https://assets.thankview.com/assets/videos/walkthrough/1_Creating_A_Campaign.mp4"></vue-core-video-player>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    src: String
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
