<template>
    <div class="box">
        <router-link :to="`/video/${video.url}`">
            <div class="navItem">
                <h2>{{video.title}} <span class="time">{{video.minutes}}m {{video.seconds}}s</span></h2>
            </div>
        </router-link>
    </div>   
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

.box :hover{
    background-color: lightblue;
}

.navItem {
    padding: 10px;
    border-bottom-style: solid;
    border-color: darkgray;
}


.navItem :hover{
    background-color: lightblue;
    
}

h2, h2:link, h2:visited {
    text-align: left;
    color: black;
    text-decoration: none;
    
}

.time {
    text-align: right;
}

</style>













<router-link class="spacing" v-for="video in links" 
      v-bind:key="video.id"
      :to="video.url">{{video.title}}</router-link>