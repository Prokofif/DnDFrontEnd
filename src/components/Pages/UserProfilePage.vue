<template>
  <div class="playerContainer">
    <h1>{{ userName }}</h1>
    <UserPoints />
    <Skills />
  </div>
</template>


<script>
import UserPoints from "../HeroeSkills/UserPoints.vue";
import Skills from "../HeroeSkills/Skills.vue";

export default {
  name: "UserProfilePage",
  components: {
    UserPoints,
    Skills,
  },

  // //pass a value thruogh the Store (Vuex)
  computed: {
    userName() {
      return this.$store.state.firstName;
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
body,
html {
  margin: 0;
  height: 100%;
}
</style>