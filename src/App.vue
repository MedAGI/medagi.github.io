<template>
  <!-- Introduction -->
  <div id="introduction">
      <div class="big-title" 
      v-bind:class="{'big-title-off' : this.$data.page !=='Home'}"
      v-bind:style="{backgroundPosition: '0 ' + offsetY + 'px'}">
        <hr class="title-deco" v-bind:class="{'hide-description' : this.$data.page !=='Home'}">
        <div id="intro-title" v-bind:class="{'hide-description' : this.$data.page !=='Home'}">FMGMAI</div>
        <hr class="title-deco" v-bind:class="{'hide-description' : this.$data.page !=='Home'}">
        <div class="workshop-description" v-bind:class="{'hide-description' : this.$data.page !=='Home'}">
          MICCAI 2023  1st International Workshop on<br> Foundation Models for general medical AI
        </div>
      </div>
  </div>
  <!-- Introduction End -->

  <!-- Navigation -->
  <div id="navigation" v-bind:class="{'fixed-navigation' : this.$data.page !=='Home'}">
    <div id="title">FMGMAI</div>
    <nav id="tab-box">
      <router-link to="/" class="navigation-tab" v-bind:class="{selectedTab : this.$data.page ===''}">Home</router-link>
      <router-link to="/organization" class="navigation-tab" v-bind:class="{'selected-tab' : this.$data.page === 'Organization'}">Organization</router-link>
      <router-link to="/program" class="navigation-tab" v-bind:class="{'selected-tab' : this.$data.page=='Program'}">Program</router-link>
      <router-link to="/keynote" class="navigation-tab" v-bind:class="{'selected-tab' : this.$data.page=='Keynote'}">Keynote</router-link>
      <router-link to="/submission" class="navigation-tab" v-bind:class="{'selected-tab' : this.$data.page=='Submission'}">Submission</router-link>
    </nav>
  </div>  
  <!-- Navigation End -->

  <!-- Contents -->
  <div id="contents">
    <router-view/>
    <Footer/>
  </div> 
  <!-- Contents End -->
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: 'Home',
  components: { Footer },
  mounted() {
    document.title = "FMGMAI";  // 문서 탭 타이틀 변경

    // Scroll 시 배경 이미지 이동
    window.addEventListener('scroll', () => {
      if (this.$data.page === 'Home') { this.$data.offsetY = -1 * Math.min(window.scrollY, screen.height)/2 }
      else { this.$data.offsetY = -1 * screen.height /2 }
    });      
  },
  watch: {
    // vue-router를 활용하여 현재 방문한 카테고리를 확인
    $route(to, from) {
      this.$data.page = to.name;
      window.scrollTo(0, 0);
      this.$data.offsetY = 0;
    },
  },
  data() {
    return {
      page: '',
      offsetY: 0
    }}
}
</script>

<style>
html, body {
  margin: 0;
  border: 0;
}

@media screen and (min-width: 1280px) {
  /* Introduction */
  #introduction {
    width: 100vw;
    position: sticky;
    top: calc(64px - 100vh);
    z-index: 20;
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
    margin-top: 40px;
    font-family: Helvetica;
    font-size: 20px;
    font-weight: 100;
    line-height: 1.3;
    text-align: center;
    letter-spacing: 1px;
    color: #c0c0c0;
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
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 30;
  }

  .fixed-navigation {
    position: fixed !important;
  }

  #title {
    font-family: 'Helvetica', Sans-Serif;
    color: white;
    font-size: 36px;
    font-weight: bold;
    margin-left: 48px;
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
  }
  /* Navigation End */

  #contents {
    position: -webkit-sticky;
    position: sticky;
    top: 80px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1279px) {
  /* Introduction */
  #introduction {
    width: 100vw;
    position: sticky;
    top: calc(64px - 100vh);
    z-index: 20;
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
    margin-top: 40px;
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 100;
    line-height: 1.3;
    text-align: center;
    letter-spacing: 1px;
    color: #c0c0c0;
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
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 30;
  }

  .fixed-navigation {
    position: fixed !important;
  }

  #title {
    font-family: 'Helvetica', Sans-Serif;
    color: white;
    font-size: 32px;
    font-weight: bold;
    margin-left: 24px;
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
  }
  /* Navigation End */

  #contents {
    position: -webkit-sticky;
    position: sticky;
    top: 64px;
  }
}
</style>
