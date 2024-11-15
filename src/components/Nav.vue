<template>
	<div class="menu-container">
		<input type="checkbox" class="toggler">
		<div class="hamb">
			<div></div>
		</div>
		<div class="menu">
			<div>
				<div>
					<nav class="Navigation">
						<ul>
						    <li><router-link to="/">{{ $t('nav.home') }}</router-link></li>
						    <li><router-link to="/about">{{ $t('nav.about') }}</router-link></li>
					            <li><router-link to="/blog">{{ $t('nav.services') }}</router-link></li>
						    <li><router-link to="/contacts">{{ $t('nav.contacts') }}</router-link></li>
						    <li><button class="NavigationButtonLogin-popup" @click="openModalLogin">{{$t('login.title')}}</button></li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</div>
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
.menu-container{
	position: fixed;
	top: 0;
	right: 0;
	z-index: 2;
}
.toggler{
	position: absolute;
	top: 0.5em;
	right: 0.5em;
	width: 60px;
	height: 60px;
	border-radius: 50%;
	opacity: 0;
	z-index: 3;
	cursor: pointer;
}
.hamb{
	position: absolute;
	top: 0.5em;
	right: 0.5em;
	width: 60px;
	height: 60px;
	border-radius: 50%;
	background-color: #111;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 2;
}
.hamb>div{
	position: absolute;
	width: 60%;
	height: 3px;
	border-radius: 1.5px;
	background-color: #dbd820;
	transition: .4s;
}
.hamb>div:before, .hamb>div:after{
	content: '';
	position: absolute;
	width: 100%;
	height: 3px;
	border-radius: 1.5px;
	background-color: #dbd820;
	transition: .4s;
}
.hamb>div:before{
	top: -10px;
}
.hamb>div:after{
	top: 10px;
}
.toggler:checked + .hamb>div{
	transform: rotate(135deg);
}
.toggler:checked:hover + .hamb >div{
	transform: rotate(225deg);
}
.toggler:checked + .hamb>div:after, .toggler:сhecked + .hamb>div:before{
	transform: rotate(90deg);
	top: 0;
}
.toggler:checked ~ .menu{
	visibility: visible;
}
.toggler:checked ~ .menu > div{
	transform: translateX(-50%) translateY(-50%);
}
.toggler:checked ~ .menu > div > div{
	opacity: 1;
}
.menu {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	visibility: hidden;
	transition: .6s;
}
.menu>div{
	position: absolute;
	width: 1600px;
	height: 1600px;
	border-radius: 50%;
	top: 50%;
	left: 50%;
	transform: translateX(-150%) translateY(-50%);
	background-color: rgba(0, 0, 0, 0.9);
	transition: .6s;
	display: flex;
	justify-content: center;
	align-items: center;
}
.menu>div>div{
	max-width: 90vw;
	max-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	opacity: 0;
}
.menu>div>div>ul>li{
	list-style: none;
}
.menu>div>div>ul>li>a{
	text-decoration: none;
	margin: .5em;
	display: inline-block;
	font-size: 3.5em;
    padding-bottom: 30px;
	font-weight: 550;
	text-transform: uppercase;
	color: #fff;
	transition: .3s;
}
.menu>div>div>ul>li>a:hover{
	color: #dbd820;
	transition: .3s;
}
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
@media (max-width: 768px) {
	.menu-container{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
	}
	.toggler{
		position: absolute;
		top: 0.5em;
		left: 0.5em;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		opacity: 0;
		z-index: 3;
		cursor: pointer;
	}
	.hamb{
		position: absolute;
		top: 0.5em;
		left: 0.5em;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background-color: #111;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 2;
	}
	.hamb>div{
		position: absolute;
		width: 60%;
		height: 3px;
		border-radius: 1.5px;
		background-color: #dbd820;
		transition: .4s;
	}
	.hamb>div:before, .hamb>div:after{
		content: '';
		position: absolute;
		width: 100%;
		height: 3px;
		border-radius: 1.5px;
		background-color: #dbd820;
		transition: .4s;
	}
	.hamb>div:before{
		top: -10px;
	}
	.hamb>div:after{
		top: 10px;
	}
	.toggler:checked + .hamb>div{
		transform: rotate(135deg);
	}
	.toggler:checked:hover + .hamb >div{
		transform: rotate(225deg);
	}
	.toggler:checked + .hamb>div:after, .toggler:сhecked + .hamb>div:before{
		transform: rotate(90deg);
		top: 0;
	}
	.toggler:checked ~ .menu{
		visibility: visible;
	}
	.toggler:checked ~ .menu > div{
		transform: translateX(-50%) translateY(-50%);
	}
	.toggler:checked ~ .menu > div > div{
		opacity: 1;
	}
	.menu {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		visibility: hidden;
		transition: .6s;
	}
	.menu>div{
		position: absolute;
		width: 1600px;
		height: 1600px;
		border-radius: 50%;
		top: 50%;
		left: 50%;
		transform: translateX(-150%) translateY(-50%);
		background-color: rgba(0, 0, 0, 0.9);
		transition: .6s;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.menu>div>div{
		max-width: 90vw;
		max-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		opacity: 0;
	}
	.menu>div>div>ul>li{
		list-style: none;
	}
	.menu>div>div>ul>li>a{
		text-decoration: none;
		margin: .5em;
		display: inline-block;
		font-size: 3.5em;
		padding-bottom: 30px;
		font-weight: 550;
		text-transform: uppercase;
		color: #fff;
		transition: .3s;
	}
	.menu>div>div>ul>li>a:hover{
		color: #dbd820;
		transition: .3s;
	}
}
</style>
