<template>
        <div class="LoginFrom" id="LoginFrom" v-if="visual">
            <span class="LoginFromIcon-close" @click="closeLogin">
                <ion-icon name="close"></ion-icon>
            </span>
            <div class="LoginForm-box login">
                <h2>{{ $t('login.title') }}</h2>
                <form>
                    <div class="input-box">
                        <span class="icon">
                            <ion-icon name="mail"></ion-icon>
                        </span>
                        <input type="email" required>
                        <label>{{ $t('login.email') }}</label>
                    </div>
                    <div class="input-box">
                        <span class="icon">
                            <ion-icon name="lock-closed"></ion-icon>
                        </span>
                        <input type="password" required>
                        <label>{{ $t('login.password') }}</label>
                    </div>
                    <div class="remember-forgot">
                        <label><input type="checkbox"> {{ $t('login.remember') }}</label>
                        <a href="#">{{ $t('login.forgot') }}</a>
                    </div>
                    <button type="submit" class="btn">{{ $t('login.btn') }}</button>
                    <div class="login-register">
                        <p>{{ $t('login.dont') }} <a href="#" class="register-link" @click="registerLink">{{ $t('login.link') }}</a></p>
                    </div>
                </form>
            </div>
            <div class="LoginForm-box register">
                <h2>{{ $t('register.title') }}</h2>
                <form>
                    <div class="input-box">
                        <span class="icon">
                            <ion-icon name="person"></ion-icon>
                        </span>
                        <input type="text" required>
                        <label>{{ $t('register.username') }}</label>
                    </div>
                    <div class="input-box">
                        <span class="icon">
                            <ion-icon name="mail"></ion-icon>
                        </span>
                        <input type="email" required>
                        <label>{{ $t('register.email') }}</label>
                    </div>
                    <div class="input-box">
                        <span class="icon">
                            <ion-icon name="lock-closed"></ion-icon>
                        </span>
                        <input type="password" required>
                        <label>{{ $t('register.password') }}</label>
                    </div>
                    <div class="remember-forgot">
                        <label><input type="checkbox" required> {{ $t('register.remember') }}</label>
                    </div>
                    <button type="submit" class="btn">{{ $t('register.btn') }}</button>
                    <div class="login-register">
                        <p>{{ $t('register.alread') }} <a href="#" class="login-link" @click="loginLink">{{ $t('register.link') }} </a></p>
                    </div>
                </form>
            </div>
        </div>
</template>

<script>

export default {
    name: 'LoginForm',
    data: function () {
        return {
            visual: false
        }
    },
    methods: {
        closeLogin() {
            document.getElementById('LoginFrom').classList.remove('active-popup')
            setTimeout(() => {

            }, 100)
        },
        registerLink() {
            const wrapper = document.querySelector('.LoginFrom')
            wrapper.classList.add('active')
        },
        loginLink() {
            const wrapper = document.querySelector('.LoginFrom')
            wrapper.classList.remove('active')
        },
    },
}
</script>

<style>
.LoginFrom{
    position: absolute;
    top: 200%;
    left: 40%;
    width: 400px;
    height: 440px;
    background: transparent;
    border: 2px solid rgba(255, 231, 17, .5);
    border-radius: 20px;
    backdrop-filter: blur(20px);
    box-shadow: 0 0 30px rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: transform .5s ease, height .2s ease;
    transform: scale(0);
}
.LoginFrom.active-popup{
    transform: scale(1);
    transition: transform .5s ease, height .2s ease;
}
.LoginFrom.active {
    height: 520px;
}
.LoginFrom .LoginForm-box{
    width: 100%;
    padding: 40px;
}
.LoginFrom .LoginForm-box.login{
    transition: transform .18s ease;
    transform: translateX(0);
}
.LoginFrom.active .LoginForm-box.login{
    transition: none;
    transform: translateX(-400px);
}
.LoginFrom .LoginForm-box.register{
    position: absolute;
    transition: none;
    transform: translateX(400px);
}
.LoginFrom.active .LoginForm-box.register {
    transition: transform .18s ease;
    transform: translateX(0);
}
.LoginFrom .LoginFromIcon-close{
    position: absolute;
    top: 0;
    right: 0;
    width: 45px;
    height: 45px;
    background: #dbd820;
    font-size: 2em;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 20px;
    cursor: pointer;
    z-index: 1;
}
.LoginForm-box h2{
    font-size: 2em;
    color: #dbd820;
    text-align: center;
}
.input-box{
    position: relative;
    width: 100%;
    height: 50px;
    border-bottom: 2px solid #dbd820;
    margin: 30px 0;
}
.input-box label{
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    font-size: 1em;
    color: #dbd820;
    font-weight: 500;
    pointer-events: none;
    transition: .5s;
}
.input-box input:focus~label,.input-box input:valid~label{
    top: -5px;

}
.input-box input{
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1em;
    color: #dbd820;
    font-weight: 600;
    padding: 0 35px 0 5px;
}
.input-box .icon{
    position: absolute;
    right: 8px;
    font-size: 1.2em;
    color: #dbd820;
    line-height: 57px;
}
.remember-forgot{
    font-size: .9em;
    color: #dbd820;
    font-weight: 500;
    margin: -15px 0 15px;
    display: flex;
    justify-content: space-between;
}
.remember-forgot label input {
    accent-color: #dbd820;
    margin-right: 3px;
}
.remember-forgot a{
    color: #dbd820;
    text-decoration: none;
}
.remember-forgot a:hover{
    color: #dbd820;
    text-decoration: underline;
}
.btn{
    width: 100%;
    height: 45px;
    background: #dbd820;
    border: none;
    outline: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1em;
    color: #888617;
    font-weight: 500;
    transition: .5s;
}
.btn:hover{
    width: 100%;
    height: 45px;
    background: rgb(102, 96, 9);
    border: none;
    outline: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1em;
    color: #dbd820;
    font-weight: 500;
    transition: .5s;
}
.login-register{
    font-size: .9em;
    color: #dbd820;
    text-align: center;
    font-weight: 500;
    margin: 25px 0 10px;
}
.login-register p a{
    color: #dbd820;
    text-decoration: none;
    font-weight: 600;
}
.login-register p a:hover{
    text-decoration: underline;
}
</style>