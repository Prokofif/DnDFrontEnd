<template>
  <div class="roomContainer">
    <h1>{{ roomNumber }}</h1>
    <PointsButtonSet />
    <Skills />
  </div>
</template>


<script>
import PointsButtonSet from "../HeroeSkills/PointsButtonSet.vue";
import Skills from "../HeroeSkills/Skills.vue";

export default {
  name: "UserProfilePage",
  components: {
    PointsButtonSet,
    Skills,
  },
  data() {
    return {
      userName: {},
    };
  },

  // //pass a value thruogh the Store (Vuex)
  computed: {
    roomNumber() {
      return this.$store.state.room;
    },
  },
};
</script>

<style scoped>
.roomContainer {
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