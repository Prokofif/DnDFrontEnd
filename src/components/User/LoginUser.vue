<template>
  <div class="container text-center">
  <div class="col-md-7 mrgnbtm">
    <h2>Login</h2>
      <div class="row">
        <div class="form-group col-md-12">
          <label>First Name</label>
          <input
            type="text"
            class="form-control"
            v-model="firstName"
            placeholder="Enter your first name"
          />
          <button @click="login" class="btn login-btn btn-success">Login</button>
        </div>
      </div> 
  </div>
  </div>
</template>

<script>
import { getUserByNameService } from "@/services/EventService";

export default {
  name: "LoginUser",
  data() {
    return {
      firstName: "",
    };
  },

  methods: {
    login() {
      console.log("here we go login for:: ", this.firstName);
      
      getUserByNameService(this.firstName).then((response) => {
        console.log("response AAAAAAAAAAAAAAAAAAAAAAAAAAA");
        console.log(response);
        if (response.firstName == this.firstName) 
        {
            //here user name is stored and used in playerProfile page to identify user
          this.$store.state.firstName = this.firstName; 
          this.$router.push(`/playerProfile/${this.firstName}`);
        } else {
          this.$alert(`Username ${this.firstName} does not exists.`);
        }
      });
    },
  },
};
</script>

<style>
h2{
    margin-top: 40px;
}
.login-btn{
    margin: 20px;
}
</style>