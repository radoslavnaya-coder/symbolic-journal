<template>
    <div class="categories">
          <a href="" v-for="category in 10" :key="category">Категория</a>
    </div>
</template>
<script setup>

</script>
<style scoped>
.categories {
    max-width: 1170px;
    margin: 2rem auto;
    padding: 2rem;
    overflow: auto;
}
a {
    color: black;
    padding: 1rem 2rem;
    margin: 0 1rem;
    text-decoration: none;
    font-size: 19px;
    border: 1px solid black;
}
</style>