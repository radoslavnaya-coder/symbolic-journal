<template>
  <TheBanner />
</template>

<script>
import TheBanner from './views/Header/TheBanner.vue'

export default {
  name: 'App',
  components: {
    TheBanner
  }
}
</script>
<style>
@import url(@/assets/fonts/forum-font.css);

body{
  font-family: 'Forum', monospace;
}
</style>