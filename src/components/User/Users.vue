<template>
  <div class="container">
    <h2>Users</h2>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Nickname</th>
          <th>Stats</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in users" :key="item._id">
          <td>{{ item.firstName }}</td>
          <td>{{ item.nickName }}</td>

          <td>
            <div class="stats">
              Database: {{ item.healthPoints }}
              <div class="health PointsBlock">
                <img
                  alt="HP"
                  id="PixelHeart"
                  src="../../../src/assets/Pixel-Heart.svg"
                  class="hp points"
                />
                <PointsButton
                  @pointsU="pointsUpdate($event)"
                  pointsName="healthPoints"
                  :user="item"
                />
              </div>
            </div>

            <div class="stats">
              Database: {{ item.armorPoints }}
              <div class="armor PointsBlock">
                <img
                  alt="AP"
                  id="PixelShield"
                  src="../../../src/assets/Pixel-Shield.svg"
                  class="ap points"
                />
                <PointsButton
                  @pointsU="pointsUpdate($event)"
                  pointsName="armorPoints"
                  :user="item"
                />
              </div>
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

<style scoped>

/* TODO improve code. not responsive */
.stats:first-child {
  padding: 20px;
  float: left;
}
.stats:last-child {
  padding: 20px;
  float: right;
}

.hp,
.ap {
  position: absolute;
}
.hp {
  width: 4rem;
  margin: 45px -34px;
}
.ap {
  width: 5rem;
  margin: 35px -41px;
}
</style>