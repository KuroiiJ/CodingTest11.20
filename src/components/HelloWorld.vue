<template>
  <div class="wrapper" v-if="!isFetching" >
  

    
      
      <div class="player-container" >
        <!--<vue-core-video-player :src="url" :cover="video.thumb"></vue-core-video-player> -->
         <video controls :src="url" :poster="video.thumb"  v-on:ended="playNext"  width="435">
          Sorry, your browser doesn't support embedded videos! 
        </video>

        
      </div>

     

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: function () {
    return {
      isFetching: true,
      video: null,
      url: null,
      nextVideo: null,
      links: 
        [{
            "title": "Creating a Campaign",
            "minutes": 1,
            "seconds": 23,
            "url": "https://assets.thankview.com/assets/videos/walkthrough/1_Creating_A_Campaign.mp4",
            "thumb": "https://assets.thankview.com/assets/videos/thumbnails/1.jpg"
        }, {
            "title": "Adding Recipients",
            "minutes": 0,
            "seconds": 51,
            "url": "https://assets.thankview.com/assets/videos/walkthrough/2_Adding_Recipients.mp4",
            "thumb": "https://assets.thankview.com/assets/videos/thumbnails/2.jpg"
        }, {
            "title": "Email Settings",
            "minutes": 0,
            "seconds": 56,
            "url": "https://assets.thankview.com/assets/videos/walkthrough/3_Email_Settings.mp4",
            "thumb": "https://assets.thankview.com/assets/videos/thumbnails/3.jpg"
        }, {
            "title": "Landing Page Settings",
            "minutes": 1,
            "seconds": 3,
            "url": "https://assets.thankview.com/assets/videos/walkthrough/4_Landing_Page_Settings.mp4",
            "thumb": "https://assets.thankview.com/assets/videos/thumbnails/4.jpg"
        }, {
            "title": "Video  Intro Themes",
            "minutes": 0,
            "seconds": 36,
            "url": "https://assets.thankview.com/assets/videos/walkthrough/5_Video_Intro_Themes.mp4",
            "thumb": "https://assets.thankview.com/assets/videos/thumbnails/5.jpg"
        }, {
            "title": "Video  Webcam, Upload, Library",
            "minutes": 0,
            "seconds": 41,
            "url": "https://assets.thankview.com/assets/videos/walkthrough/6_Video_Webcam_Upload_Library.mp4",
            "thumb": "https://assets.thankview.com/assets/videos/thumbnails/6.jpg"
        }, {
            "title": "Video  Thumbnail & Trim Video",
            "minutes": 0,
            "seconds": 13,
            "url": "https://assets.thankview.com/assets/videos/walkthrough/7_Video_Thumbnail_Trim.mp4",
            "thumb": "https://assets.thankview.com/assets/videos/thumbnails/7.jpg"
        }, {
            "title": "Video  Add-On Video",
            "minutes": 0,
            "seconds": 28,
            "url": "https://assets.thankview.com/assets/videos/walkthrough/8_Add_On_Video.mp4",
            "thumb": "https://assets.thankview.com/assets/videos/thumbnails/8.jpg"
        }, {
            "title": "Send  Sending Tests, Send Now, Scheduling",
            "minutes": 0,
            "seconds": 30,
            "url": "https://assets.thankview.com/assets/videos/walkthrough/9_Send.mp4",
            "thumb": "https://assets.thankview.com/assets/videos/thumbnails/9.jpg"
        }, {
            "title": "Contacts  Filtering Down CSV's",
            "minutes": 0,
            "seconds": 30,
            "url": "https://assets.thankview.com/assets/videos/walkthrough/10_Contacts.mp4",
            "thumb": "https://assets.thankview.com/assets/videos/thumbnails/10.jpg"
        }, {
            "title": "Lists  Creating Lists, Adding Recipients to a List",
            "minutes": 0,
            "seconds": 17,
            "url": "https://assets.thankview.com/assets/videos/walkthrough/11_Lists.mp4",
            "thumb": "https://assets.thankview.com/assets/videos/thumbnails/11.jpg"
        }, {
            "title": "Video Library  Saving a Video, Adding a Video, etc...",
            "minutes": 0,
            "seconds": 39,
            "url": "https://assets.thankview.com/assets/videos/walkthrough/12_Video_Library.mp4",
            "thumb": "https://assets.thankview.com/assets/videos/thumbnails/12.jpg"
        }, {
            "title": "Metrics  Use Data to Improve Your Campaigns",
            "minutes": 0,
            "seconds": 34,
            "url": "https://assets.thankview.com/assets/videos/walkthrough/13_Metrics.mp4",
            "thumb": "https://assets.thankview.com/assets/videos/thumbnails/13.jpg"
        }, {
            "title": "Spam Rate & Today's Sends  Notification Banners",
            "minutes": 0,
            "seconds": 16,
            "url": "https://assets.thankview.com/assets/videos/walkthrough/14_Notification_Banners.mp4",
            "thumb": "https://assets.thankview.com/assets/videos/thumbnails/14.jpg"
        }, {
            "title": "Manage Users  Add Users, Manage Group Roles",
            "minutes": 0,
            "seconds": 16,
            "url": "https://assets.thankview.com/assets/videos/walkthrough/15_Manage_Users.mp4",
            "thumb": "https://assets.thankview.com/assets/videos/thumbnails/15.jpg"
        }]
    }
  },

  methods: {
    checkParams: function () {
      for(let i=0; i<this.links.length; i++) {
        
        if(this.links[i].title == this.$route.params.id){
          console.log(this.links[i])
          this.video = this.links[i]

          if(i === this.links.length-1) {this.nextVideo = this.links[0]}
          else {this.nextVideo = this.links[i+1]}

          break;
        }

      
      }
        this.url = this.video.url
        this.isFetching = false
    
    },
    playNext: function () {
      this.$router.push(this.nextVideo.title)
    }


  },
  mounted : function () {
    this.checkParams()
  }
}
</script>



<style>

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
}

</style>
