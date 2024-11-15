<template>
  <title>{{ $t('index') }}</title>
    <header class="Header">
      <a class="HeaderLogoLink" href="https://steamcommunity.com/id/skyrimdanilakiritory/">
        <h2 class="HeaderLogo"> <img src="./assets/images/logo.svg" title="FoxMage3243" class="HeaderLogoImg"> FoxMage3243</h2>
      </a>
      <Nav />
    </header>
    <div class="AppContentNav">
      <router-view/>
    </div>
    <Footer />
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App', 
  components: {
    Nav,
    Footer,
  },
  mounted() {
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Alegreya Sans SC', sans-serif;
}

.Header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 30px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
}

.HeaderLogoLink{
    text-decoration: none;
}

.HeaderLogo{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.7em;
    cursor: default;
    color: #dbd820;
}

.HeaderLogoImg{
    padding-right: 30px;
}

.AppContentNav{
  position: relative;
  width: 100%;
  height: 100vh;
  background: url('assets/images/background-elf.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>