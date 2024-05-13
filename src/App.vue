<template>
  <!-- Introduction -->
  <div v-if="viewingArchive">
      <div id="introduction" v-bind:class="{'home-nav' : this.$data.page ==='Home'}">
        <div class="big-title" 
        v-bind:class="{'big-title-off' : this.$data.page !=='Home'}"
        v-bind:style="{backgroundPosition: '0 ' + offsetY + 'px'}">
          <hr class="title-deco" v-bind:class="{'hide-description' : this.$data.page !=='Home'}">
          <div id="intro-title" v-bind:class="{'hide-description' : this.$data.page !=='Home'}">MedAGI</div>
          <hr class="title-deco" v-bind:class="{'hide-description' : this.$data.page !=='Home'}">
          <div class="workshop-description" v-bind:class="{'hide-description' : this.$data.page !=='Home'}">
            MICCAI 2023 1st International Workshop on<br> Foundation Models for General Medical AI
          </div>
          <div class="workshop-time" v-bind:class="{'hide-description' : this.$data.page !=='Home'}">
            October 12, 2023 AM 8:00-11:30<br>(Meeting Room 17)</div>
        </div>
    </div>
  </div>
  <div v-else>
    <div id="introduction" v-bind:class="{'home-nav' : this.$data.page ==='Home'}">
      <div class="big-title-2024" 
        v-bind:class="{'big-title-off' : this.$data.page !=='Home'}"
        v-bind:style="{backgroundPosition: '0 ' + offsetY + 'px'}">
          <hr class="title-deco" v-bind:class="{'hide-description' : this.$data.page !=='Home'}">
          <div id="intro-title" v-bind:class="{'hide-description' : this.$data.page !=='Home'}">MedAGI</div>
          <hr class="title-deco" v-bind:class="{'hide-description' : this.$data.page !=='Home'}">
          <div class="workshop-description" v-bind:class="{'hide-description' : this.$data.page !=='Home'}">
            MICCAI 2024 2nd International Workshop on<br> Foundation Models for General Medical AI
          </div>
          <div class="workshop-time" v-bind:class="{'hide-description' : this.$data.page !=='Home'}">
            October 6, 2024 / Marrakesh, Morocco</div>
        </div>
  </div>
  </div>
  <!-- Introduction End -->

  <!-- Navigation -->
  <div id="navigation" v-bind:class="{'fixed-navigation' : this.$data.page !=='Home'}">
    <div id="title">
      <router-link to="/" tag="img">
        <img :src="logoSrc" alt="">
      </router-link>
      
    </div>
    <div v-on:click="openMenuBtn" id="menu">
            <div v-bind:class="sideBtnStyle"></div>
            <div v-bind:class="sideBtnStyle"></div>
    </div>
    <nav id="tab-box" v-bind:class="showMenuBar">
      <router-link to="/" 
        class="navigation-tab"
        v-on:click="changeMenuBtn"
        v-bind:class="{selectedTab : this.$data.page ===''}">Home</router-link>
      <router-link :to="this.$data.viewingArchive ? '/2023/organization' : '/organization'" 
        class="navigation-tab"
        v-on:click="changeMenuBtn" 
        v-bind:class="{'selected-tab' : this.$data.page === 'Organization'}">Organization</router-link>
      <router-link :to="this.$data.viewingArchive ? '/2023/program' : '/program'" 
        class="navigation-tab"
        v-on:click="changeMenuBtn" 
        v-bind:class="{'selected-tab' : this.$data.page=='Program'}">Program</router-link>
      <router-link :to="this.$data.viewingArchive ? '/2023/keynote' : '/keynote'" 
        class="navigation-tab"
        v-on:click="changeMenuBtn" 
        v-bind:class="{'selected-tab' : this.$data.page=='Keynote'}">Keynote</router-link>
      <router-link :to="this.$data.viewingArchive ? '/2023/call-for-papers' : '/call-for-papers'" 
        class="navigation-tab"
        v-on:click="changeMenuBtn" 
        v-bind:class="{'selected-tab' : this.$data.page=='Call For Papers'}">Call For Papers</router-link>
      <router-link :to="this.$data.viewingArchive ? '/2023/gallery' : '/gallery'" 
        class="navigation-tab"
        v-on:click="changeMenuBtn" 
        v-bind:class="{'selected-tab' : this.$data.page=='Gallery'}">Gallery</router-link>
      <router-link :to="this.$data.viewingArchive ? '/2023/sponsors' : '/sponsors'" 
        class="navigation-tab"
        v-on:click="changeMenuBtn" 
        v-bind:class="{'selected-tab' : this.$data.page=='Sponsors'}">Sponsors</router-link>
      <a href="http://medagi2023.github.io/#/" target="_blank" class="navigation-tab" :class="{'selected-tab' : this.$data.page=='Years'}">
  {{medAGIText}}
</a>
    </nav>
  </div>  
  <!-- Navigation End -->

  <!-- Contents -->
  <div id="contents">
    <router-view/>
    <Footer v-if="viewingArchive" />
    <Footer_2024 v-else />
  </div> 
  <!-- Contents End -->
</template>

<script>
import Footer from "@/components/Footer.vue";
import Footer_2024 from "@/components/Footer_2024.vue";
import logo from "@/assets/logo.png";
import logo2024 from "@/assets/logo_2024.png";

export default {
  name: 'Home',
  components: { Footer, Footer_2024 },
  computed: {
          sideBtnStyle: function() {
            if (!this.$data.isSideOpened) return {'side-menu-open': true };
            else return {'side-menu-close': true };
          },
          showMenuBar: function() {
            if (this.$data.isSideOpened) return {'show-menu-bar': true };
            else return {'hide-menu-bar': true };
          },
          medAGIText() {
            return this.viewingArchive ? 'Visit MedAGI 2024' : 'Visit MedAGI 2023';
          },
          logoSrc() {
            return this.viewingArchive ? logo : logo2024;
          }
  },
  methods: {
        openMenuBtn: function() {
          this.$data.isSideOpened = !(this.$data.isSideOpened);
        },
        changeMenuBtn: function() {
            this.$data.isSideOpened = false;
        },
        toggleArchiveView() {
          this.viewingArchive = !this.viewingArchive;          
        },
      },

  mounted() {
    document.title = "MedAGI";  // 문서 탭 타이틀 변경
    if (this.$data.page !== 'Home') {
      this.$data.offsetY = -1 * screen.height /2;
    }

    // Scroll 시 배경 이미지 이동
    window.addEventListener('scroll', () => {
      // Main 화면의 경우 스크롤에 따라 backgroun image가 delay scroll event를 발생시킴
      if (this.$data.page === 'Home') {
        let navHeight = document.getElementById('navigation').offsetHeight;
        this.$data.offsetY = -1 * Math.min(window.scrollY, screen.height)/2;
        this.$data.hideNavBar = screen.height - window.scrollY > navHeight*1.5;
      }
      else { this.$data.offsetY = -1 * screen.height /2 }
    });      
  },
  watch: {
    // vue-router를 활용하여 현재 방문한 카테고리를 확인
    $route(to, from) {
      this.$data.page = to.name;
      window.scrollTo(0, 0);
      if (to.name === "Home") { this.$data.offsetY = 0; }
    },
  },
  data() {
    return {
      page: '',
      offsetY: 0,
      isSideOpened: false,
      hideNavBar: false,
      viewingArchive: false,
    }}
}
</script>

<style>
html, body {
  margin: 0;
  border: 0;
}

.hide-nav-bar {
  visibility: hidden;
}

@media screen and (min-width: 1280px) {
  /* Introduction */
  #introduction {
    width: 100vw;
    position: fixed;
    z-index: 20;
  }

  .home-nav {
    position: -webkit-sticky!important;
    position: sticky!important;
    top: calc(80px - 100vh);
  }

  .big-title {
    background-image: url('./assets/intro.jpg');
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./assets/intro.jpg');
    background-attachment: fixed;
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .big-title-2024 {
    background-image: url('./assets/intro-2024.jpg');
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./assets/intro-2024.jpg');
    background-attachment: fixed;
    background-size: cover;
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .big-title-off {
    height: 80px!important;
    position: fixed;
  }

  .title-deco {
    width: 169px;
    height: 2px;
    background-color: white;
  }

  #intro-title {
    padding: 5px 0;
    font-family: Helvetica;
    font-size: 72px;
    font-weight: bold;
    color: #fff;
  }

  .hide-description {
    display: none;
  }

  .workshop-description {
    margin-top: 20px;
    font-family: Helvetica;
    font-size: 20px;
    font-weight: 100;
    line-height: 1.3;
    text-align: center;
    letter-spacing: 1px;
    color: #c0c0c0;
  }

  .workshop-time {
    margin-top: 15px;
    font-family: Helvetica;
    font-size: 18px;
    letter-spacing: 1px;
    text-align: center;
    color: #d9d9d9;
  }
  /* Introudction End */

  /* Navigation */
  #navigation {
    width: 100%;
    height: 80px;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 30;
  }

  .fixed-navigation {
    position: fixed !important;
  }

  #title {
    height: 70%;
    font-family:'Britannic W04 Bold' , 'fallback-font';
    color: #E81E25;
    font-weight: bold;
    margin-left: 48px;
  }

  #title img {
    height: 100%;
    margin: 0;
  }

  #tab-box {
    margin-right: 48px;
  }

  .navigation-tab {
    margin: 0 10px;
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 200;
    text-align: center;
    text-decoration: none;
    color: #FFFFFF;
  }

  .navigation-tab:hover {
    color: #A0A0A0;
  }

  .selected-tab {
    text-decoration: underline 2px yellow!important;
    -webkit-text-decoration-line:  underline !important;
    -webkit-text-decoration-color: yellow !important;
    -webkit-text-decoration-thickness: 2px !important;
  }
  /* Navigation End */

  #contents {
    position: relative;
    /* top: 80px; */
  }
}

@media screen and (min-width: 768px) and (max-width: 1279px) {
  /* Introduction */
  #introduction {
    width: 100vw;
    position: fixed;
    z-index: 20;
  }

  .home-nav {
    position: -webkit-sticky!important;
    position: sticky!important;
    top: calc(64px - 100vh);
  }

  .big-title {
    background-image: url('./assets/intro.jpg');
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./assets/intro.jpg');
    background-attachment: fixed;
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .big-title-2024 {
    background-image: url('./assets/intro-2024.jpg');
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./assets/intro-2024.jpg');
    background-attachment: fixed;
    background-size: cover;
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .big-title-off {
    height: 64px!important;
    position: fixed;
  }

  .title-deco {
    width: 169px;
    height: 2px;
    background-color: white;
  }

  #intro-title {
    padding: 5px 0;
    font-family: Helvetica;
    font-size: 72px;
    font-weight: bold;
    color: #fff;
  }

  .hide-description {
    display: none;
  }

  .workshop-description {
    margin-top: 20px;
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 100;
    line-height: 1.3;
    text-align: center;
    letter-spacing: 1px;
    color: #c0c0c0;
  }

  .workshop-time {
    margin-top: 10px;
    font-family: Helvetica;
    font-size: 16px;
    text-align: center;
    color: #d9d9d9;
  }
  /* Introudction End */

  /* Navigation */
  #navigation {
    width: 100%;
    height: 64px;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 30;
  }

  .fixed-navigation {
    position: fixed !important;
  }

  #title {
    height: 80%;
    font-family: 'Helvetica', Sans-Serif;
    color: white;
    margin-left: 24px;
  }

  #title img {
    height: 100%;
    margin: 0;
  }

  #tab-box {
    margin-right: 24px;
  }

  .navigation-tab {
    margin: 0 8px;
    font-family: Helvetica;
    font-size: 16px;
    font-weight: 200;
    text-align: center;
    text-decoration: none;
    color: #FFFFFF;
  }

  .navigation-tab:hover {
    color: #A0A0A0;
  }

  .selected-tab {
    text-decoration: underline 2px yellow!important;
    -webkit-text-decoration-line:  underline !important;
    -webkit-text-decoration-color: yellow !important;
    -webkit-text-decoration-thickness: 2px !important;
  }
  /* Navigation End */

  #contents {
    position: relative;
    /* top: 64px; */
  }
}

@media screen and (max-width: 767px) {
  /* Introduction */
  #introduction {
    width: 100vw;
    position: fixed;
    z-index: 20;
  }

  .home-nav {
    position: -webkit-sticky!important;
    position: sticky!important;
    top: calc(64px - 100vh);
  }

  .big-title {
    background-image: url('./assets/intro.jpg');
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./assets/intro.jpg');
    background-attachment: fixed;
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .big-title-2024 {
    background-image: url('./assets/intro-2024.jpg');
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./assets/intro-2024.jpg');
    background-attachment: fixed;
    background-size: cover;
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .big-title-off {
    height: 64px!important;
    position: fixed;
  }

  .title-deco {
    width: 69px;
    height: 2px;
    background-color: white;
  }

  #intro-title {
    padding: 5px 0;
    font-family: Helvetica;
    font-size: 60px;
    font-weight: bold;
    color: #fff;
  }

  .hide-description {
    display: none;
  }

  .workshop-description {
    margin-top: 20px;
    font-family: Helvetica;
    font-size: 16px;
    font-weight: 100;
    line-height: 1.3;
    text-align: center;
    letter-spacing: 1px;
    color: #c0c0c0;
  }

  .workshop-time {
    margin-top: 10px;
    font-family: Helvetica;
    font-size: 14px;
    text-align: center;
    color: #d9d9d9;
  }
  /* Introudction End */

  /* Navigation */
  #navigation {
    width: 100%;
    height: 64px;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 30;
  }

  .fixed-navigation {
    position: fixed !important;
  }

  #title {
    height: 80%;
    font-family: 'Helvetica', Sans-Serif;
    color: white;
    margin-left: 12px;
  }

  #title img {
    height: 100%;
    margin: 0;
  }

  #tab-box {
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 100%;
    top: 60px;
    background-color: black;
    opacity: 0.8;
  }

  .hide-menu-bar {
    display: none!important;
  }

  .navigation-tab {
    margin: 30px;
    height: 30px;
    font-family: Helvetica;
    font-size: 16px;
    font-weight: 200;
    text-align: center;
    text-decoration: none;
    color: #FFFFFF;
  }

  .navigation-tab:hover {
    color: #A0A0A0;
  }

  .selected-tab {
    text-decoration: underline 2px yellow!important;
    -webkit-text-decoration-line:  underline !important;
    -webkit-text-decoration-color: yellow !important;
    -webkit-text-decoration-thickness: 2px !important;
  }

  #menu {
    width: 20px;
    margin-right: 24px;
    z-index: 99;
    cursor: pointer;
    }

  .side-menu-open {
    width: 100%;
    height: 1px;
    background-color: white;
    margin-top: 6px;
    margin-bottom: 6px;
    border: 0;
    transition: 
        transform .3s cubic-bezier(0.04, 0.04, 0.12, 0.96),
        -webkit-transform .3s cubic-bezier(0.04, 0.04, 0.12, 0.96);
    }
    .side-menu-close {
      position: relative;
      width: 100%;
      height: 1px;
      border: 0;
      background-color: white;
      transition: 
          transform .35s cubic-bezier(0.04, 0.04, 0.12, 0.96),
          -webkit-transform .35s cubic-bezier(0.04, 0.04, 0.12, 0.96);
    }
    .side-menu-close:first-child {
      top: 0.5px;
      transform: rotate( 45deg );
    }
    .side-menu-close:last-child {
      bottom: 0.5px;
      transform: rotate( -45deg );
    }
  /* Navigation End */

  #contents {
    position: relative;
    /* top: 64px; */
  }
}
</style>
