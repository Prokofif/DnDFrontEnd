<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'WelcomeMessage',
  props: {
    msg: String
  }
}
</script>
