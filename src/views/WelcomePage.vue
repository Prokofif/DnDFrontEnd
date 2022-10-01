
<script>
import WelcomeMessage from "../components/WelcomeMessage.vue";
import RoleSelection from '../components/RoleSelection.vue';

export default {
  components: {
    WelcomeMessage,
    RoleSelection,
  },

};


</script>

<template>
  <div>
    <img alt="Vue logo" src="../../src/assets/logo.png" />
    <WelcomeMessage msg="Welcome to Dungeon and Dragons" />
    
    <role-selection></role-selection>
    
  </div>
</template>
