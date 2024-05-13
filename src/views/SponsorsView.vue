<template>
    <div id="sponsors">
      <!-- Main Title -->
      <div class="main-title">
        <h1>Sponsors</h1>
        <div class="main-title-deco"></div>
      </div>
      <!-- Main Title End -->
  
      <!-- Sponsors -->
          <!-- <div id="sponsors-list">
              <h2>Sponsors</h2><hr>
          </div> -->
          <div id="sponsors-container">
            <img src="@/assets/logo_ict.png" alt="" class="sponsors-logo">
          </div>
          <div v-if="currentYear === '2023'">
          </div>
          <div v-else>
            <div id="sponsors-container">
            <img src="@/assets/sponsor_logo.png" alt="" class="sponsors-logo">
          </div>
          </div>
          
      <!-- Sponsors -->
    </div>
  </template>
  
  <style scoped>
  @media screen and (min-width: 1280px) {
    #sponsors {
      width: 1280px;
      min-height: calc(100vh - 80px);
      margin: 0 calc(50vw - 640px);
      padding-bottom: 120px;
      padding-top: 80px;
      background-color: white;
    }
  
    .main-title {
      margin-top : 44px;
      margin-bottom: 40px;
    }
  
    h1 {
      font-family: Helvetica;
      margin: 0;
      font-size: 40px;
    }
  
    .main-title-deco {
      width: 28px;
      height: 1px;
      border: solid 2px #000000;
      background-color: #5b5b5b;
    }
    h2 {
      margin-bottom: 0px;
      font-family: Helvetica;
      font-size: 28px;
    }
  
    hr {
      border: 1px solid black;
    }

    /* Sponsors Container */
    #sponsors-container {
      width: 100%;
      margin-top: 64x;
    }

    .sponsors-logo {
      height: 80px;
    }
   /* Sponsors Container End */
  }
  
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    #sponsors {
      width: 720px;
      min-height: calc(100vh - 64px);
      margin: 0 calc(50vw - 360px);
      padding-bottom: 100px;
      padding-top: 64px;
      background-color: white;
    }
  
    .main-title {
      margin-top : 44px;
      margin-bottom: 30px;
    }
  
    h1 {
      font-family: Helvetica;
      margin: 0;
      font-size: 36px;
    }
  
    .main-title-deco {
      width: 28px;
      height: 1px;
      border: solid 2px #000000;
      background-color: #5b5b5b;
    }
  
    h2 {
      margin-bottom: 0px;
      font-family: Helvetica;
      font-size: 28px;
    }
  
    hr {
      border: 1px solid black;
    }

    /* Sponsors Container */
    #sponsors-container {
      width: 100%;
      margin-top: 40px;
    }

    .sponsors-logo {
      height: 64px;
    }
   /* Sponsors Container End */
  }
  
  @media screen and (max-width: 767px) {
    #sponsors {
      width: 360px;
      min-height: calc(100vh - 84px);
      margin: 0 calc(50vw - 180px);
      padding-top: 54px;
      padding-bottom: 30px;
    }
  
    .main-title {
      margin-top : 24px;
      margin-bottom: 30px;
    }
  
    h1 {
      font-family: Helvetica;
      margin: 0;
      font-size: 24px;
    }
  
    .main-title-deco {
      width: 20px;
      height: 1px;
      border: solid 2px #000000;
      background-color: #5b5b5b;
    }
  
    h2 {
      margin-bottom: 0px;
      font-family: Helvetica;
      font-size: 20px;
    }
  
    hr {
      border: 1px solid black;
    }

    /* Sponsors Container */
    #sponsors-container {
      width: 100%;
      margin-top: 40px;
    }

    .sponsors-logo {
      height: 64px;
    }
   /* Sponsors Container End */
  }
  </style>


<script>
export default {
  computed: {
  currentYear() {
    return this.$route.params.year || new Date().getFullYear().toString();
    }
  },
  methods: {
      fetchData() {
      // Use the currentYear computed property to determine which data to fetch
      const year = this.currentYear;
      if (year === '2023') {
        // Fetch and set the data for the 2023 archive
      } else {
        // Fetch and set the data for the current year
      }
    }
  },
  created(){
    this.fetchData();
  },
}
</script>