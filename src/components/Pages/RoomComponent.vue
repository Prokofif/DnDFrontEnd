<template>
  <div class="roomContainer">
    <h1>I don't give a Shit which room you want, so room 1221 it is.  {{roomNumber}}</h1>
    <h3>You came to die, don't expect much. </h3>
    <PointsButtonSet/>
    <Skills/>
  </div>
</template>


<script>

import PointsButtonSet from '../HeroeSkills/PointsButtonSet.vue'
import Skills from '../HeroeSkills/Skills.vue';

export default {
  props: ["roomNumber"],
  components:{
    PointsButtonSet,
    Skills
  }
};

</script>

<style scoped>
.roomContainer{
  box-shadow: 0px 0px 40px lightgray;
}

h1{
  padding: 40px 0px 20px;
}

h3{
  margin-bottom: 60px;
}
/* not reached */
/* @import url("https://fonts.googleapis.com/css?family-Montserrat:400,700"); */
body {
  background-color: #eeeeee;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
}
body,
html {
  margin: 0;
  height: 100%;
}

</style>