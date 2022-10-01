<template>
  <div class="playerContainer">
    <h1>{{ userName }}</h1>
    <UserPoints />
    <Skills />
  </div>
</template>


<script>
import UserPoints from "../components/HeroeSkills/UserPoints.vue";
import Skills from "../components/HeroeSkills/Skills.vue";

export default {
  name: "UserProfilePage",
  components: {
    UserPoints,
    Skills,
  },
 

computed: {
    userName() {
      return localStorage.firstName;
    },
  },
};
</script>

<style scoped>
.playerContainer {
  box-shadow: 0px 0px 40px lightgray;
}

h1 {
  padding: 40px 0px 20px;
}

h3 {
  margin-bottom: 60px;
}

body {
  background-color: #eeeeee;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
}
</style>