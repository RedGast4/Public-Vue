<template>
    <nav class="Navigation">
        <router-link to="/">{{ $t('nav.home') }}</router-link>
        <router-link to="/about">{{ $t('nav.about') }}</router-link>
        <router-link to="/blog">{{ $t('nav.services') }}</router-link>
        <router-link to="/contacts">{{ $t('nav.contacts') }}</router-link>
        <button class="NavigationButtonLogin-popup" @click="openModalLogin">{{$t('login.title')}}</button>
    </nav>
    <LoginForm ref="login"/>
</template>

<script>
import LoginForm from './LoginForm.vue';

export default {
    name: 'Nav',
    components: {
        LoginForm,
    },
    methods: {
        openModalLogin: function () {
            this.$refs.login.visual = true
            setTimeout(() => {
                document.getElementById('LoginFrom').classList.add('active-popup')
            }, 100)
        }
    }
}
</script>

<style>
.Navigation a{
    position: relative;
    color: #dbd820;
    font-size: 1.1em;
    margin-left: 40px;
    text-decoration: none;
    padding: 6px 15px;
    font-weight: 500;
    border-radius: 20px;
}
.Navigation a::after{
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 3px;
    background: #dbd820;
    border-radius: 5px;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .5s;
    border-bottom: 2px solid #dbd820;
}
.Navigation a:hover::after{
    transform-origin: left;
    transform: scaleX(1);
    border-bottom: 2px solid #dbd820;
}
.Navigation a:hover{
    border-bottom: 2px solid #dbd820;
}
.Navigation .NavigationButtonLogin-popup{
    width: 130px;
    height: 50px;
    background: transparent;
    border: 2px solid #dbd820;
    outline: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1.1em;
    color: #dbd820;
    font-weight: 500;
    margin-left: 40px;
    transition: .5s;
}
.Navigation .NavigationButtonLogin-popup:hover{
    background: #dbd820;
    color: black;
}
</style>