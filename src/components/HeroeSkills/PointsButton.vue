<template>
  <div>


    <circle-slider
      v-model="pointsValue"
      :side="150"
      :min="0"
      :max="20"
      :stepSize="1"
      :circleWidthRel="20"
      :progressWidthRel="10"
      :knobRadius="10"
      @touchmove="$refs.input.blur()"
    ></circle-slider>
    <!-- @touchmove="$refs.input.blur()" - hide keyboard on touchmove at mobile devices -->

    <input ref="input" type="number" v-model.number="pointsValue" />
    <button class="button button_plus" @click="pointsU">ok</button>

  </div>
</template>

<script>
export default {
  name: "PointsButton",
  props: {
    user: Object,
    pointsName: String,
  },

  data() {
    return {
      pointsValue: 0,
    };
  },

  mounted() {
    if (this.pointsName == "healthPoints") {
      this.pointsValue = this.user.healthPoints;
    } else if (this.pointsName == "armorPoints") {
      this.pointsValue = this.user.armorPoints;
    }
  }, 
  
  methods: {
    pointsU() {
      const payload = {
        firstName: this.user.firstName,
        [this.pointsName]: this.pointsValue,
      };
      this.$emit("pointsU", payload);
    }, 
  },
}; 
  
</script>

<style scoped> 

button {
  margin-left: 5px;
  color: aliceblue;
  border-radius: 3px;
}

.button {
  position: relative;
  border: none;
  color: #eeeeee;
  padding: 3px;
  width: 60px;
  text-align: center;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
}

.button_plus {
  background-color: #4caf50;
}
.button_plus:after {
  background: #04f538;
}

.button:after {
  content: "";
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px !important;
  margin-top: -120%;
  display: block;
  opacity: 0;
  transition: all 0.8s;
}

.button:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s;
}
</style>