<template>
  <div class="nav">
    <h1>ThankView Walkthrough</h1>
    <h3> Total: {{minutes}}m  {{seconds}}s <!-- TotalTime TBD --> </h3>
    <nav class="wrapper">
      <div class="links" v-for="(video, index) in links" v-bind:key="index">
        <NavCard :video=video :num=index />
      </div>
      
    </nav>
  </div>
</template>

<script>
import NavCard from './NavCard'

export default {
  name: 'Navbar',
  components: {
    NavCard
  },
  data() {
    return {
      minutes: null,
      seconds: null,
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
    getTotalTime: function () {
      this.minutes = 0
      this.seconds = 0


      this.links.map(x => (this.seconds += x.seconds))
      this.minutes += Math.floor(this.seconds/60) 
      this.seconds = this.seconds - (this.minutes*60)

      this.links.map(x => (this.minutes += x.minutes))

  
    }
  },
  mounted: function () {
    this.getTotalTime()
  }

}
</script>


<style>
.spacing {
  margin-right: 25px;
}



.nav {
    top: 0;
    height: 100%;
    width: 100%;
    background-color:white;
    border-bottom-style: outset;
    border-bottom-color: hsla(0, 100%, 50%, 0.3);;
    padding-bottom: 30px;
    padding-top: 20px;
    padding-left: 20px;
    overflow: scroll;
}

a {
  opacity: 1;
  text-decoration: none;
}


.nav a:hover {
  background-color: lightblue;
  color: black;
  
}

h1 {
  text-align: left;
}
</style>