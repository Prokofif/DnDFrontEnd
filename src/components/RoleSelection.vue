<template>
  <div>
    <router-link to="/gameMasterPassword">
      <button class="master-btn btn btn-info col-md-2">Game Master</button>
    </router-link>
    <router-link to="/roomPlayer">
      <button class="player-btn btn btn-success col-md-2">Player</button>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.player-btn, .master-btn {
  margin:40px;
  padding: 20px;
}

.master-btn { 
  background: #35495e;
  color:white;
}
.player-btn{
  background: #41B883;
}
</style>