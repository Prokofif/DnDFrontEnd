<template>
  <div>
    <button class="button button_plus" @click="pointsU">ok</button>

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
    <!-- <button class="button button_minus" @click="btnMinus">-</button> -->
  </div>
</template>

<script>
export default {
  name: "PointsButton",
  props: {
    user:Object,
    pointsName: String,
  },
  
  data() {
    return {
      pointsValue: 0
    };
  },

  mounted(){
    console.log('USER IS:', this.user)
    // this.pointsValue = this.user.healthPoints
  },
  methods: {
    // btnPlus() {
    //   // this.pointsValue++;
    //   console.log("---------------------------------------reached")
    //   this.pointsU();
    // },

    // btnMinus() {
    //   // this.pointsValue--;
    //   this.pointsU();
    // },

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
  width: auto;
  height: auto;
  color: aliceblue;
  border-radius: 10px;
}

.button {
  position: relative;
  border: none;
  color: #eeeeee;
  padding: 20px;
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
.button_minus {
  background-color: #af4c4c;
}

.button_minus:after {
  background: #f50404;
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