
<script>
import WelcomeMessage from "../WelcomeMessage.vue";
import RoleSelection from '../RoleSelection.vue';

export default {
  components: {
    WelcomeMessage,
    RoleSelection,
  },

};


</script>

<template>
  <div>
    <img alt="Vue logo" src="../../assets/logo.png" />
    <WelcomeMessage msg="Welcome to Dungeon and Dragons" />
    
    <role-selection></role-selection>
    
  </div>
</template>
