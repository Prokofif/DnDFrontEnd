<template>
  <div class="selectRoom">
    <input
      type="text"
      v-model.number="myInput"
      placeholder="Enter a room number and your life will get better."
    />
    <router-link to="/room">
      <br />
      <button
        v-if="myInput"
        @click="setRoomNumber"
        @keypress="isNumber($event)"
      >
        Go
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "FirstInputRoom",
  data() {
    return {
      myInput: "",
    };
  },
  methods: {
    setRoomNumber() {
      this.$store.state.room = this.myInput;
    },
    isNumber: function (evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
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