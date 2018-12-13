<template>
    <router-view></router-view>
</template>

<script>
import login from './views/login.vue'

export default {
  name: 'app',
  components: {
    login
  }
}
</script>

<style>
html{width:100%;
     height:100%}
body{width:100%; 
    height:100%;}
</style>
