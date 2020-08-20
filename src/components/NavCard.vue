<template>
<router-link :to="`/video/${video.title}`">
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
    border-color: #edeff0;
    text-decoration: none;
}


.navItem :hover :active{
    background-color:  #d4e2fe;
    
}

h2, h2:link, h2:visited {
    font-size: 16px;
    text-align: left;
    color: black;
    
}

</style>



