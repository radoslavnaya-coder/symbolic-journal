<template>
    <img class="banner" src="@/assets/img/banner.jpg" alt="banner">
    <div class="menu">
        <a>
            <img src="/menu.svg" alt="menu">
        </a>
    </div>
    <div class="menu">
        <a href=""><img src="/menu.svg" alt="menu"></a>
        <a href=""><img src="/create.svg" alt="create"></a>
        <a href=""><img src="/alert.svg" alt="alert"></a>
        <a href=""><img src="/favourite.svg" alt="favourite"></a>
        <a href=""><img src="/user.svg" alt="user"></a>
    </div>
</template>
<script>
export default {
    name: 'TheBanner'
}
</script>
<style scoped>
.banner{
    position: absolute;
}
.menu{
    display: block;
    height: 20rem;
    position: relative;
    text-align: right;
    background: url(@/assets/img/menu-bg-small.png) no-repeat top right;
    padding: 5rem 2rem;
}
.menu img{
    max-width: 70px;
}
</style>