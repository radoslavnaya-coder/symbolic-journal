<script setup>

</script>
<template>
    <div class="login">
        <form>
            <h3>Регистрация</h3>
            <label for="name">Имя</label>
            <input type="text">
            <label for="mail">E-mail</label>
            <input type="mail" name="mail">
            <label for="password">Пароль</label>
            <input type="password" name="password">
            <label for="passwordRepeat">Повтор пароля</label>
            <input type="password" name="passwordRepeat">
            <button>Продолжить</button>
            <router-link to="/login">Уже зарегистрированы? Вход</router-link>
        </form>
    </div>
</template>
<style scoped>
.login {
    background: #252e41;
    min-height: 100vh;
    min-width: 100%;
}
form {
    max-width: 680px;
    color: white;
    padding: 14rem 12rem 4rem 12rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}
form h3 {
    text-align: center;
    font-size: 22px;
    margin-bottom: 2rem;
}
form input {
    color: white;
    background: none;
    border: none;
    border-bottom: 1px solid white;
    padding: 0 0 0.5rem 0;
    margin: 1rem 0;
    font-size: 16px;
}
form input:focus {
    outline: none;
}
form button {
    background: none;
    color: white;
    border: 1px solid white;
    padding: 1rem 2rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-family: 'Forum';
}
form a {
    text-decoration: none;
    color: white;
    text-align: center;
}
</style>