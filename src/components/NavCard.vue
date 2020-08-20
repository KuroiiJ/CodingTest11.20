<template>

<router-link v-bind:key="video.title" :to="video.url">
    <div class="navItem">
        <h2>{{key}}. {{video.title}} <span class="time">{{video.minutes}}m {{video.seconds}}s</span></h2>
        {{video}}
    </div>
</router-link>
    
</template>

<script>
export default {
    name: 'NavCard',
    props: {
        video: Object,
        key: Number
    }
}
</script>

<style scoped>
.navItem :hover{
    background-color: lightblue;
}

h2 {
    text-align: left;
}

.time {
    text-align: right;
}

</style>













<router-link class="spacing" v-for="video in links" 
      v-bind:key="video.id"
      :to="video.url">{{video.title}}</router-link>