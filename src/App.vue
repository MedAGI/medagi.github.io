<template>
  <!-- Introduction -->
  <div id="introduction">
      <div class="big-title">
        <hr class="title-deco"><div id="intro-title">FMGMAI</div><hr class="title-deco">
        <div class="workshop-description">
          MICCAI 2023 Workshop on<br> Foundation Models for general medical AI
        </div>
      </div>
  </div>
  <!-- End Introduction -->

  <!-- <div id="page"> -->
    <div id="navigation">
      <div id="title">FMGMAI</div>
      <nav id="tab-box">
        <router-link to="/" class="navigation-tab">Home</router-link>
        <router-link to="/organization" class="navigation-tab">Organization</router-link>
        <router-link to="/program" class="navigation-tab">Program</router-link>
        <router-link to="/keynote" class="navigation-tab">Keynote</router-link>
        <router-link to="/submission" class="navigation-tab">Submission</router-link>
      </nav>
    </div>  
    <div id="contents">
      <router-view/>
      <Footer/>
    </div>
    
  <!-- </div> -->
  
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: 'Home',
  components: {
    Footer,
  },
  mounted() {
    document.title = "FMGMAI"
  },
  data() {
    return {};
  }
}
</script>

<style>
html, body {
  margin:0;
  border: 0;
}

/* Introduction */
#introduction {
  width: 100vw;
  position: sticky;
  top: calc(80px - 100vh);
  z-index: 20;
}

#intro-title {
  padding: 5px 0;
  font-family: Helvetica;
  font-size: 72px;
  font-weight: bold;
  color: #fff;
}

.title-deco {
  width: 169px;
  height: 4px;
  background-color: white;
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

.workshop-description {
  margin-top: 40px;
  font-family: Helvetica;
  font-size: 24px;
  font-weight: 100;
  line-height: 1.3;
  text-align: center;
  letter-spacing: 1px;
  color: #c0c0c0;
}
/* End Introudction */

#page {
  /* margin-top: 100vh; */
  position: sticky;
  top: 0px;
}

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

#contents {
  position: -webkit-sticky;
  position: sticky;
  top: 80px;
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
  /* text-underline-offset: 4px; */
  text-decoration: underline 2px yellow;
  color: #FFFFFF;
}

.navigation-tab:hover {
  color: #A0A0A0;
}

</style>
