<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'sweetalert2/dist/sweetalert2.min.css';

export default {
  name: "App",
  components: {},
};
</script>

<style> 
@font-face {
  font-family: "PixelFont";
  src: local("PixelFont"),
   url(./fonts/silkscreen/slkscr.ttf) format("truetype");
} 

#app {
  /* font-family: PixelFont, Helvetica, Arial, sans-serif; */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%; 
  margin: auto;
  background: rgb(255, 228, 201);
}

</style>

