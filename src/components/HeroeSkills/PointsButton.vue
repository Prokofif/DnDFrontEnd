<template>
  <div>
    <button class="button button_plus" @click="pointsValue++">+</button>
    <p>{{ pointsValue }}{{ pointsName }}</p>
    <button class="button button_minus" @click="pointsValue--">-</button>
  </div>
</template>

<script>
export default {
  name: "PointsButton",
  props: {
    pointsName: String,
  },
  data() {
    return {
      pointsValue: 0,
    };
  },
};
</script>

<style scoped>
button {
  width: 50px;
  height: auto;
  color: aliceblue;
  border-radius: 10px;
  font-size: 1.2em;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}

.button {
  position: relative;
  border: none;
  font-size: 28px;
  color: #EEEEEE;
  padding: 20px;
  width: 200px;
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