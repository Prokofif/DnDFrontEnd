<template>
  <div class="selectRoom">
    <CreateUser @createU="userCreate($event)" />
  </div>
</template>

<script>
import CreateUser from "../User/CreateUser.vue";
import { createUserService } from "@/services/EventService"; 

export default {
  name: "FirstInputRoom",
  components: {
    CreateUser,
  },
  data() {
    return {
      // myInput: "",
      myUsername: "",
    };
  },
  methods: {
    // setRoomNumber() {
    //   this.$store.state.room = this.myInput;
    // },


    userCreate(data) {
      console.log("data:::", data);
      createUserService(data).then((response) => {
        this.$store.state.room = response.firstName;
        this.$router.push('/roomPlayerProfile')
      });
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