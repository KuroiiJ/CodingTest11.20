<template>
<router-link :to="`/video/${video.url}`">
    <div class="box">
        
            <div class="navItem">
                <h2>{{video.title}} </h2>
                <h2>{{video.minutes}}m {{video.seconds}}s</h2>
            </div>
        
    </div> 
</router-link>  
</template>

<script>
export default {
    name: 'NavCard',
    props: {
        video: Object
    },
    // data() {
    //     return {
    //         num: null
    //     }
    // },
    // methods: {
    //     getNumber: function () {
    //         let link = this.video.url 
    //         this.num = ''
    //         for(let i=55; i<link.length; i++){
    //             console.log(link[i])
    //             if(typeof link[i] === 'number') {this.num += link[i].toString()}
    //             else break
    //         }
    //         return this.num
    //     }
    // },
    // mounted: function() {
    //     this.getNumber()
    // }
}
</script>

<style scoped>

.box :hover{
    background-color: lightblue;
}

.navItem {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom-style: solid;
    border-color: rgb(218, 216, 216);
    text-decoration: none;
}


.navItem :hover :active{
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



