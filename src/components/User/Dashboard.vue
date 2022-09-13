<template>
  <div class="hello">
    <div class="container mrgnbtm">
      <div class="row">
        <div class="col-md-8">
          <CreateUser
            @createU="userCreate($event)"
            @deleteU="usersDelete($event)"
          />
        </div>
        <div class="col-md-4">
          <DisplayBoard
            :numberOfUsers="numberOfUsers"
            @getAllUsers="getAllUsers()"
          />
        </div>
      </div>
    </div>
    <div class="row mrgnbtm">
      <Users v-if="users.length > 0" :users="users" />
    </div>
  </div>
</template>

<script>
import CreateUser from "./CreateUser.vue";
import DisplayBoard from "./DisplayBoard.vue";
import Users from "./Users.vue";
import {
  getAllUsersService,
  getUserIdService,
  createUserService,
  deleteAllUsersService,
} from "@/services/EventService";
export default {
  name: "DashboardComponent",
  components: {
    CreateUser,
    DisplayBoard,
    Users,
  },
  data() {
    return {
      users: [],
      numberOfUsers: 0,
    };
  },
  methods: {
    createdUser(user) {
      getUserIdService(user).then((response) => {
        console.log("USER ID response");
        console.log(response);
        // this.$router.push('/userid/'+response)
      });
    },
    getAllUsers() {
      getAllUsersService().then((response) => {
        console.log(response);
        this.users = response;
        this.numberOfUsers = this.users.length;
      });
    },
    userCreate(data) {
      console.log("data:::", data);
      createUserService(data).then((response) => {
        // console.log(response);
        this.createdUser(response);
        this.getAllUsers();
      });
    },

    usersDelete() {
      deleteAllUsersService().then((response) => {
        console.log(response);
        this.getAllUsers();
      });
    },
  },
  mounted() {
    this.getAllUsers();
  },
};
</script>