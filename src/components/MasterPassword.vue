<template>
  <div class="password">
    <input type="text" v-model.lazy="passwordInput" placeholder="Pin code is 111" />
    <br />
    <button v-if="passwordInput" @click="passwordCheck">Go</button>
  </div>
</template>

<script>
export default {
  name: "FirstInputRoom",
  data() {
    return {
      passwordInput: "",
      password: "111",
      access: false,
    };
  },

  methods: {
    passwordCheck() {
      if (this.passwordInput == this.password) {
        this.access = true;
        this.$router.push("/roomGameMaster");
      } else this.access = false;
      console.log(this.access);
      return this.access;
    },
  },
};
</script>

<style scoped>
.password {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -54px;
  margin-left: -160px;
}
input {
  text-align: center;
  width: 100%;
  padding: 40px;
  margin-bottom: 20px;
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