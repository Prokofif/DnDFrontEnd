<template>
  <div class="skillsRoot">
    <div class="holder">
      <form @submit.prevent="addSkill">
        <input
          type="text"
          placeholder="Enter a skill you have..."
          v-model="skill"
        />

      </form>
      <ul>
        <li
          class="animation-enter"
          v-for="(data, index) in skills"
          :key="index"
        >
        <i class="fa fa-minus-circle" @click="removeSkill(index)"></i>
          {{ data.skill }}
        </li>
      </ul>
      <p>These are the skills you possess.</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "skills-component",
  data() {
    return {
      skills: [{ skill: " Sword" }, { skill: "Cocklush" }],
      skill: "",
      empty_input: true,
    };
  },
  methods: {
    addSkill() {
      this.skills.push({ skill: this.skill });
      this.skill = "";
    },
    
    removeSkill(id) {
      this.skills.splice(id,1);
    },

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* below is a css animations library - used inside transition and transition-group */
/* @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"; */
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

.holder {
  width: 50%;
  margin: auto;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: urdu;
  padding: 0;
  margin: 0;
}
ul li {
  padding: 20px;
  background-color: #e0edf4;
  border-left: 5px #3eb3f6 solid;
  margin-bottom: 2px;
  font-size: 1.6em;
}

p {
  margin: 30px 0;
  color: gray;
  font-size: 0.8em;
}

input {
  font-size: 1.1em;
  width: 100%;
  margin-top: 60px;
  border: none;
  padding: 20px;
  box-sizing: border-box;
  background-color: #323333;
  color: rgb(255, 255, 255);
}

.animation-enter {
  animation: bounce-in 0.5s;
}
.animation-leave {
  animation: bounce-in 0.5s reverse;
}


@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

i {
  float: right;
  cursor: pointer;
}
</style>
