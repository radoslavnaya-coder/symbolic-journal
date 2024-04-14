<script setup>
import Header from '../components/Header/TheHeader.vue'
</script>
<template>
    <Header />
    <div class="post-container">
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
    <div class="post">
        <img src="@/assets/img/tower.jpg" alt="" width="600">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore porro expedita quibusdam in similique consequatur hic nemo accusantium, culpa ea dolorem architecto iure fugiat laudantium, eligendi temporibus saepe natus delectus!</p>
    </div>
    <div class="time-likes">
        <p>12.06.2022</p>
        <div>
            <img src="@/assets/img/like.svg" alt="likes" width="30" height="30">
            <p>12 908</p>
        </div>
        <div>
            <img src="@/assets/img/eye.svg" alt="eyes" width="30" height="30">
            <p class="eyes">28 967</p>   
        </div>
    </div>
    <div class="post-news">
        <h2>News</h2>
        <div class="news-container">
            <div v-for="news in 3" :key="news">
                <img src="@/assets/img/tower.jpg" alt="" width="350" height="350">
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
            </div>
        </div>
    </div>
    </div>
</template>
<style scoped>
.post-container {
    max-width: 1170px;
    margin: 0 auto;
}
.post-container h2 {
    font-weight: 600;
    width: max-content;
    font-size: 22px;
    padding: 4rem 0 2rem 0;
}
.post-container h3 {
    font-weight: 600;
    width: max-content;
    font-size: 22px;
    padding: 1rem 0;
}
.post {
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    font-size: 19px;
}
.post img {
    grid-row-start: 1;
    grid-row-end: 5;
}
.post p {
    padding: 1rem 0;
}
.time-likes {
    display: grid;
    grid-template-columns: 12fr 1fr 1fr;
    padding: 0.5rem 0;
}
.time-likes div {
    display: flex;
    align-items: center;
}
.time-likes div > img {
    padding: 0 0.3rem;
}
.post-news {
    margin-top: 6rem;
}
.news-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
}
.news-container div > h3 {
    max-width: 350px;
}
</style>