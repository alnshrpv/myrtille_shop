<template>
  <v-app>
    <HeaderComp />
    <v-main class="main-container">
      <img :src="bgImg" alt="Background" class="bgImg">
      <router-view></router-view>
    </v-main>
    <FooterComp />
  </v-app>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';

const resizeObserverErrBack = () => {
      let resizeObserverError = false;
      if (resizeObserverError) {
        return;
      }
      const resizeObserver = new ResizeObserver(() => {});
      const div = document.createElement('div');
      document.body.appendChild(div);
      resizeObserver.observe(div);
      setTimeout(() => {
        resizeObserver.unobserve(div);
        document.body.removeChild(div);
      }, 0);
      resizeObserverError = true;
    };
    resizeObserverErrBack();
    window.addEventListener('error', (event) => {
      if (event.message === 'ResizeObserver loop completed with undelivered notifications.') {
        event.stopImmediatePropagation();
      }
    });
export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp,
  },
  data() {
    return {
      bgImg: require('@/assets/bg.jpg')
    };
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  overflow: hidden; 
}

@font-face {
  font-family: "Phenomena-Light";
  src: url("~@/font/Phenomena-Light.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

body::-webkit-scrollbar {
  width: 0px;  
  background: transparent; 
}

.main-container {
  margin-top: -100px;
  position: relative;
  min-height: calc(100vh - 120px); 
}
.bgImg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  object-fit: cover;
}
</style>
