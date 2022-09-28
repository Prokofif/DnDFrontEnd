
<template>
  <div>
    <div class="health PointsBlock">
      <p id="nbr">{{ healthPoints }} HP</p>
    </div>
    <div class="armor PointsBlock">
      <p>{{ armorPoints }} AP</p>
    </div>
    <br />
  </div>
</template>

<script>
import { getUserByNameService } from "@/services/EventService";

export default {
  components: {},
  data() {
    return {
      healthPoints: 0,
      armorPoints: 0,
    };
  },

  // gets user data from DB
  mounted() {
    this.getUserByName();
    
    setInterval(this.getUserByName, 5000);
  }, 

  methods: {
    getUserByName() {
      getUserByNameService(this.$store.state.firstName).then((response) => {
        console.log("GET USER response");
        this.healthPoints = response.healthPoints;
        this.armorPoints = response.armorPoints;

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
