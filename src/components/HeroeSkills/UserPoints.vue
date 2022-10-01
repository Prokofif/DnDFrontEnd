
<template>
  <div>
    <div class="health PointsBlock">
      <div>
          <number
            class="bold transition"
            :class="{ scaleBig: scaleClass }"
            ref="number2"
            :from="numberFromHealth"
            :to="numberToHealth"
            :duration="duration"
            easing="Power4.easeOut"
            @complete="completed"
          />
          HP
      </div>
    
      <img
        alt="HP"
        id="healthPoints"
        class="hp points"
        src="../../../src/assets/Pixel-Heart.svg"
      />
    </div>

    <div class="armor PointsBlock">
      <div>
      <number
            class="bold transition"
            :class="{ scaleBig: scaleClass }"
            ref="number2"
            :from="numberFromArmor"
            :to="numberToArmor"
            :duration="duration"
            easing="Power4.easeOut"
            @complete="completed"
          /> 
          AP
          </div>
      <img
        alt="AP"
        class="ap points"
        src="../../../src/assets/Pixel-Shield.svg"
      />
    </div>
    <br />
  </div>
</template>

<script>
import { getUserByNameService } from "@/services/EventService";

export default { 
  data() {
    return {
      healthPoints: 0,
      armorPoints: 0,

      numberFromHealth: 0,
      numberToHealth: 0,
      numberFromArmor:0,
      numberToArmor:0,
      duration: 3,
      scaleClass: false,
    };
  },

  // gets user data from DB
  mounted() {
    this.getUserByName();

    setInterval(this.getUserByName, 5000);
  },

  methods: {
    getUserByName() {
      getUserByNameService(localStorage.firstName).then((response) => {
        console.log("GET USER response");


        //todo improve variables. may be dublicate 
        if (this.healthPoints !== response.healthPoints) {
          //on HEALTH points change
          this.numberFromHealth = this.healthPoints;

          this.healthPoints = response.healthPoints;

          this.numberToHealth = response.healthPoints;
          this.playAnimation();
        }

        if (this.armorPoints !== response.armorPoints) {
          //on ARMOR points change
          this.numberFromArmor = this.armorPoints;
          
          this.armorPoints = response.armorPoints;

          this.numberToArmor = response.armorPoints;
        }

        console.log(response);
      });
    },

    //numeber animation methods
    
    completed() {
      console.log("Animation ends!");
      this.scaleClass = true;
    },
    playAnimation() {
      console.log("Animation starts!");
      this.scaleClass = false;
      this.$refs.number2.play();
    },
  },
};
</script>

<style scoped>
.hp {
  width: 4rem;
}
.ap {
  width: 4.9rem;
}

.PointsBlock {
  display: inline-block;
  padding: 10px 50px;
}

/* svg animation */
.points:hover {
  /* Start the shake animation and make the animation last for 0.5 seconds */
  animation: shake 0.5s;

  /* When the animation is finished, start again */
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>
