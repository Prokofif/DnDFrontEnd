<template>
  <div >
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
    <div class="inputHolder">
      <form @submit.prevent="addSkill">
        <input
          type="text"
          placeholder="Enter a skill you have..."
          v-model="skill"
        />
      </form>
    </div>
    <div class="listHolder">
      <ul>
        <li
          class="alert-in-enter-active"
          v-for="(data, index) in skills"
          :key="index"
        >
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inputHolder, .listHolder {
  width: 50%;
  margin: auto;
  font-size: 1.6em;
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
}

p {
  margin: 30px 0;
  color: gray;
  font-size: 0.6em;
}

input {
  width: 100%;
  margin-top: 60px;
  border: none;
  padding: 20px;
  box-sizing: border-box; 
  background-color: #323333;
  color: rgb(255, 255, 255);
}

.alert-in-enter-active {
  animation: bounce-in 0.5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
