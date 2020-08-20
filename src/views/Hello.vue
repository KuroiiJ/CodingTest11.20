<template>
    <div> 
        <br />
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <br />
    </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'PageView',
  components: {
    HelloWorld
  }
}

</script>
