
<template>
  <div>
    <div class="health PointsBlock">
      <p id="nbr">{{ healthPoints }} HP</p>
    </div>
    <div class="armor PointsBlock">
      <p>{{ armorPoints }} AP</p>
    </div>
    <br />
    <button @click="getUserByName" class="btn btn-info">Get user</button>
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
      speed: 100
    };
  },

  // gets user data from DB
  mounted(){
    this.getUserByName();
  },
  todo: function(){  
      // const self = this;          
      this.intervalid1 = setInterval(function(){
        getUserByNameService(this.$store.state.firstName).then((response) => {
        console.log("GET USER response"); 
        this.healthPoints = response.healthPoints;
        this.armorPoints = response.armorPoints;
        
        console.log(response);
      });
      }, 3000);
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
