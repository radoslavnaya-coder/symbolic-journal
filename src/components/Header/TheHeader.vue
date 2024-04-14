<script setup>
import Menu from './TheMenu.vue'
</script>
<template>
    <div class="header">
    <Menu />
    <router-link to="/">
    <h1>The Symbolic Journal</h1>
    </router-link>
    <hr />
    </div>
</template>
<style scoped>
.header h1 {
    font-size: 40px;
    text-align: center;
    padding: 2rem 0;
}
a {
    text-decoration: none;
    color: black;
}
</style>