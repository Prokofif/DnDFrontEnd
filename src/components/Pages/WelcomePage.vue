
<script>
import FirstInputRoom from "../../components/Room/FirstInputRoom.vue";
import WelcomeMessage from "../../components/Room/WelcomeMessage.vue";

export default {
  components: {
    WelcomeMessage,
    FirstInputRoom,
  },
};
</script>

<template>
  <div>
    <img alt="Vue logo" src="../../assets/logo.png" />
    <WelcomeMessage msg="Welcome to Dungeon and Dragons" />
    <FirstInputRoom />
  </div>
</template>
