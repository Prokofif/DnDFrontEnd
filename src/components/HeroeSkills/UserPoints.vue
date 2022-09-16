
<template>
  <div>
    <div class="health PointsBlock">
      <p>{{ healthPoints }} HP</p>
      <button @click="getUserByName">get user</button>
    </div>
    <div class="armor PointsBlock">
      <p>{{ armorPoints }} AP</p>
    </div>
  </div>
</template>

<script>
import { getUserByNameService } from "@/services/EventService";

export default {
  components: {},
  data() {
    return {
      posts: [],
      healthPoints: 0,
      armorPoints: 0,
    };
  },
  methods: {
    getUserByName() {
      getUserByNameService(this.$store.state.firstName).then((response) => {
        console.log("GET USER response");
        this.healthPoints = response.healthPoints
        this.armorPoints = response.armorPoints
        console.log(response);
      });
    },
  },
};
</script>

<style scoped>
.PointsBlock {
  display: inline-block;
  padding: 10px 50px;
}
</style>
