<template>
  <div class="container">
    <h2>Users</h2>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>User Id</th>
          <th>Firstname</th>
          <th>Nickname</th>
          <th>Health</th>
          <th>Armor</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in users" :key="item._id">
          <td>{{ item._id }}</td>
          <td>{{ item.firstName }}</td>
          <td>{{ item.nickName }}</td>
          <td>
            Database: {{ item.healthPoints }}
            <div class="health PointsBlock">
              <PointsButton
                @pointsU="pointsUpdate($event)"
                pointsName="healthPoints" :user="item"
              />
            </div>
          </td>
          <td>
            Database: {{ item.armorPoints }}
            <div class="armor PointsBlock">
              <PointsButton
                @pointsU="pointsUpdate($event)"
                pointsName="armorPoints" :user="item"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { updateUserService } from "@/services/EventService";
import PointsButton from "../HeroeSkills/PointsButton.vue";
export default {
  components: { PointsButton },
  name: "UsersComponent",
  props: ["users"],

  methods: {
    pointsUpdate(data) {
      console.log("to update. before:", data);
      updateUserService(data).then((response) => {
        console.log(response);
      });
    },
  },
};
</script>