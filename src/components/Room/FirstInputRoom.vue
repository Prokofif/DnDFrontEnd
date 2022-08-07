<template>
  <div class="selectRoom">
    <input
      type="text"
      v-model.number="myInput"
      placeholder="Enter a room number and your life will get better."
    />
    <router-link to="/room">
    <br>
      <button v-if="myInput">Go</button>
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

  //doesnt work
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
  margin: 20px;
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