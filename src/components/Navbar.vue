<template>
  <div class="nav">
    <h2>Nav Bar</h2>
    <nav>
      <router-link class="spacing" v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Hello World',
          page:'/projects'
        },
        {
          id: 1,
          text: 'Home',
          page:'/home'
        },
        {
          id: 2,
          text: 'About',
          page:'/about'
        },
        {
          id: 3,
          text: 'Contact',
          page:'/contact'
        }
      ]
    }
  }
}
</script>


<style>
.spacing {
  margin-right: 25px;
}

.nav {
    position: fixed;
    top: 0;
    width: 100%;
    background-color:hsla(0, 100%, 70%, 0.3);
    border-bottom-style: outset;
    border-bottom-color: hsla(0, 100%, 50%, 0.3);;
    overflow: hidden;
    padding-bottom: 30px;
}

a {
  opacity: 1;
}

.nav a:hover {
  background-color: darkgray;
  color: black;
  
}
</style>