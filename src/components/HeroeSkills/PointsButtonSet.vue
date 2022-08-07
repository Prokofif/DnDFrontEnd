
<template>
  <div>
    <div class="health PointsBlock">
      <PointsButton pointsName=" HP"/>
    </div>
    <div class="armor PointsBlock">
      <PointsButton pointsName=" AP"/>
    </div>
    <div class="luck PointsBlock">
      <PointsButton pointsName="% Luck"/>
    </div>
    <div class="magic PointsBlock">
      <PointsButton pointsName=" Spells"/>
    </div>
  </div>
</template>

<script>
import PointsButton from './PointsButton.vue'

export default {
  components:{
    PointsButton
  },
};
</script>

<style scoped>
.PointsBlock {
  display: inline-block;
  padding: 10px 50px;
  
}
</style>
