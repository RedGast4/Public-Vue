<template>
    <div class="HomeContentWelcome">
        <h3 class="Welcome"> {{ $t('home.contentWelcome') }}</h3>
        <h1 class="Content"> {{ $t('home.create') }} </h1>
        <div class="ButtonsC">
            <a class="BoostyLink" href="https://boosty.to/redgast4">
                <button class="ButtonBusty">
                    <img class="Boosty" src="../assets/images/icons/Color.svg" alt="Boost">{{ $t('home.btnBusty') }}
                </button>
            </a>
            <a class="VKFLink" href="https://vk.com/of.kajitsu">
                <button class="ButtonVKF">
                    <svg class="VKF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M427 299.1c-8.6-8-15.7-12.8-18.5-20.5-1-2.7-1.3-4.3-1-7.6.4-6 5.5-13.8 39.6-58.9 14.2-18.8 32.7-41.5 32.7-58.5 0-11-4.5-13.7-20.8-13.7h-74c-6.5 0-10.9 8.9-13.6 16.4-2.8 7.5-8.2 19-21.4 43.8-13.8 26-32.3 48.8-40 52.4-2.2 1-3.6 1-5.5.8-1.2-.1-3.8-.8-6.2-3.7-2.3-2.8-5.9-7.7-4.5-53.9.8-25.8 3.7-43.8-1.7-54.8-1.1-2.2-3.5-4.5-4.8-5.5-7.7-5.5-29.4-7.5-48-7.5s-32.9 2.1-40 4.2c-7.1 2.1-15.1 6.9-18.9 12-2.5 3.3 4.3 1.6 10.9 4.6 4 1.8 9.3 4.6 11.2 9.3 8 20.8 9.7 37.3 5.3 66.7-1.1 7.2-2.3 18.5-6.6 25.5-2.4 3.9-7.9 3.6-9.5 3.1-16.1-4.9-28.6-26-41.2-50.7-13.1-25.8-19.8-43.9-23.4-51.3s-9.1-11.4-18.4-11.4H42.3c-5.2 0-9.9 4.3-9.9 9 0 11 18.6 43 29.8 66 20.2 41.4 46.7 81.4 82.4 120.2C182 376.3 233 384 249.3 384s29-.6 33.3-1.5c2-.4 4.1-1.3 5.7-2.5 7.1-5.5 5.8-16 6.3-24.2.5-8.4 1.4-19.5 7-26 5.2-6.1 11.1-7.8 18.6-4.1 7 3.5 12 9.4 17.2 15.1 10.1 10.9 19.3 23.2 31.3 32.2 5.5 4.1 11.5 6.7 17.9 8.7 8.5 2.6 16.5 2.7 25.3 2.3 9.7-.4 17-.3 29-.3s27.7.5 33.1-3.5c2.6-2 6-5 6-11.3 0-11.9-12.2-31.7-53-69.8z"/></svg>{{ $t('home.btnFriend') }}
                </button>
            </a>
        </div>
    </div>
</template>
<script>

export default {
    name: "Home",
}
</script>

<style>
.HomeContentWelcome{
    color: #dbd820;
    text-align: center;
    letter-spacing: .1em;
    text-shadow: 0 0 10px rgba(0, 0, 0, .8);
    font-size: 0.60em;
    background: #313112a9;
    border: 1px solid rgba(255, 231, 17, .5);
    padding: 10px 10px 10px 10px;
    border-radius: 20px;
    backdrop-filter: blur(20px);
}
.Welcome{
    font-size: 2em;
}

.Content{
    font-size: 3.5em;
    padding-bottom: 30px;
}
.ButtonsC{
    display: flex;
    justify-content: center;
    align-content: center;
}
.BoostyLink{
    display: flex;
    justify-content: center;
    align-content: center;
    padding-right: 10px;
    color: #dbd820;
    text-decoration: none;  
}
.BoostyLink:hover{
    color: black;
    text-decoration: none;    
}
.ButtonBusty {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3em;
    color: #dbd820;
    font-weight: 600;
    padding: 10px 50px;
    cursor: pointer;
    border-radius: 40px;
    background: transparent;
    border: 2px solid #dbd820;
    outline: none;
    transition: .5s;
    text-decoration: none;
}
.ButtonBusty:hover{
    background: #dbd820;
    color: black;
    text-decoration: none;
    
}
.Boosty{
    width: 32px;
    height: 32px;
}
.VKFLink{
    display: flex;
    justify-content: center;
    align-content: center;
    color: #dbd820;
    text-decoration: none;  
}
.VKFLink:hover{
    color: black;
    text-decoration: none;    
}
.ButtonVKF {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3em;
    color: #dbd820;
    font-weight: 600;
    padding: 10px 50px;
    cursor: pointer;
    border-radius: 40px;
    background: transparent;
    border: 2px solid #dbd820;
    outline: none;
    transition: .5s;
    text-decoration: none;
}
.ButtonVKF:hover{
    background: #dbd820;
    color: black;
    text-decoration: none;
    
}
.VKF{
    width: 32px;
    height: 32px;
    fill: blueviolet;
}
</style>