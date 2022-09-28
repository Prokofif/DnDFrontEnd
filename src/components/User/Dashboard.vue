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
        if (response.acknowledged) {
          this.getAllUsers();
        } else {
          this.$alert(`Username ${data.firstName} is already taken!`);
        }
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
    
    setInterval(this.getAllUsers, 3000);
  },
};
</script>