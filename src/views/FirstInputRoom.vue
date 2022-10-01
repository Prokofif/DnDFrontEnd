<template>
  <div>
    <LoginUser />
  </div>
</template>

<script>
import LoginUser from "../components/User/LoginUser.vue";

export default {
  name: "FirstInputRoom",
  components: {
    LoginUser,
  },

};
</script>

<style scoped>

button {
  border-radius: 3px;
  color: brown;
  font-size: 1.2em;
  padding: 15px 30px;
  border-color: brown;
}
</style>