<template>
    <div class="menu" v-if="!isOpen" @click="isOpen = !isOpen">
            <img src="/menu.svg" alt="menu">
    </div>
    <div class="menu-open" v-if="isOpen" @click="isOpen = !isOpen">
        <img src="/menu.svg" alt="menu">
        <a href=""><img src="/create.svg" alt="create"></a>
        <a href=""><img src="/alert.svg" alt="alert"></a>
        <a href=""><img src="/favourite.svg" alt="favourite"></a>
        <router-link to="/login"><img src="/user.svg" alt="user"></router-link>
    </div>
</template>
<script setup>
import { ref } from "vue";

const isOpen = ref(false)
</script>
<style scoped>
.menu {
    display: block;
    min-height: 20rem;
    position: fixed;
    text-align: center;
    right: 0;
    top: 0;
    background: url(@/assets/img/menu-bg-small.png) no-repeat top right;
    padding: 5rem 2rem;
}
.menu img, .menu-open img{
    max-width: 70px;
}
.menu-open {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 7rem 7rem 7rem 7rem 7rem;
    height: 100%;
    position: fixed;
    text-align: center;
    right: 0;
    top: 0;
    background: url(@/assets/img/menu-bg.png) no-repeat top right;
    padding: 5rem 2rem;
}
</style>