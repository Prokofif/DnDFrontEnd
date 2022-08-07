
<script>
// !!!!!!! this is a test component that is never used

export default {  
  emits: ['enlarge']
};
</script>

<template>
  <div>
    <button @click="$emit('enlarge')">Enlarge </button>
  </div>
</template>

<style scoped>
h4 {
  text-align: center;
  display: inline;
}
</style>