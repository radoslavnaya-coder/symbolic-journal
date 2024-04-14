<template>
    <div class="news" v-for="news in 10" :key="news">
        <img src="@/assets/img/banner.jpg" alt="" width="238" height="150">
        <h3>The New</h3>
        <p>It's text Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere quae praesentium quod sapiente saepe esse sed voluptate, aperiam molestiae quo tempora et, maxime tempore sit incidunt, architecto fuga nulla minima!</p>
    </div>
</template>
<script setup>
</script>
<style scoped>
.news {
    max-width: 1170px;
    margin: 2rem auto;
    display: grid;
    grid-template-columns: 2fr 6fr;
    grid-template-rows: 1fr 3fr;
}
.news img {
    grid-row-start: 1;
    grid-row-end: 3;
}
.news h3, p {
    grid-column-start: 2;
}
</style>