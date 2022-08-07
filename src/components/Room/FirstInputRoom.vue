<template>
  <div class="selectRoom">
    <input
      type="text"
      v-model.number="myInput"
      placeholder="Enter the room and your life will get better, you dump bitch"
    />
    <p>{{ myInput }}</p>
    <router-link to="/room">
      <button>Go</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myInput: "",
    };
  },

  handleClick() {
    let data = {
      id: 25,
      description: "tftf",
    };

    console.log(data);
    this.$router.push("/room"); //doesn't work

    // TODO: add myInput to this.router and return route in another component
  },
};
</script>

<style scoped>
input {
  width: 40%;
  padding: 40px;
  margin-top: 10px;
  border: none;
  font-size: 1.2em;
}

button {
  border-radius: 3px;
  color: brown;
  font-size: 1.2em;
  padding: 15px 30px;
  border-color: brown;
}
</style>