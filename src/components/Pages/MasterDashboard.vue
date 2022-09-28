<template>
  <div id="app">
    <Dashboard v-if="settings == true" />
  </div>
</template>

<script>

import Dashboard from "../User/Dashboard.vue";

export default {
  components: {
    Dashboard,
  },
  data() {
    return {
      settings: false,
    };
  },
  mounted() {
    console.log("I am in mounted!!!");
    this.settings = true;
  },
  setup() {
    console.log("I am in setup!!!");
  },
};
</script>

<style>
</style>