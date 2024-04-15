<template>
    <div id="gallery">
      <div class="main-title">
          <h1>Gallery</h1>
          <div class="main-title-deco"></div>
      </div>
      <div v-if="currentYear === '2023'">
        <h2>2023</h2><hr>
        <div id="container">
          <div v-for="(image, index) in imageList" :key="index" class="gallery-item">
            <img :src="require(`@/assets/photo/${image}`)" loading="lazy" decoding="async" class="gallery-photo" />
          </div>
        </div>
      </div>
      <div v-else style="font-size: 40px;">
        <h2>2024</h2><hr>
        TBD
      </div>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      imageList: []
    };
  },
  created() {
    for (let i = 1; i <= 28; i++) {
      this.imageList.push(`${i}.jpg`); // Add image file names to the array
    };
    this.fetchData();
  },
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
  }
</script>
  
  <style scoped>
  @media screen and (min-width: 1280px) {
    #gallery {
      width: 1280px;
      min-height: calc(100vh - 80px);
      margin: 0 calc(50vw - 640px);
      padding-bottom: 120px;
      padding-top: 80px;
      background-color: white;
    }

    .main-title {
      margin-top: 44px;
      margin-bottom: 40px;
    }

    h1 {
      font-family: Helvetica;
      margin: 0;
      font-size: 40px;
    }

    h2 {
      margin-bottom: 0px;
      font-family: Helvetica;
      font-size: 28px;
    }

    hr {
      border: 1px solid black;
    }

    .main-title-deco {
      width: 28px;
      height: 1px;
      border: solid 2px #000000;
      background-color: #5b5b5b;
    }

    #container {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-bottom: 60px;
    }

    #best-paper, #honorable-mention{
    width: 100%; 
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    }

    .award, .photo {
      width: 50%;
      object-fit: contain;
    }

    .gallery-item {
      width: 400px;
      height: 300px;
    }

    .gallery-photo {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  
  }
  
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    h1 {
      font-family: Helvetica;
      margin: 0;
      font-size: 36px;
    }

    .main-title {
    margin-top : 44px;
    margin-bottom: 30px;
  }

    .main-title-deco {
      width: 28px;
      height: 1px;
      border: solid 2px #000000;
      background-color: #5b5b5b;
    }

    #gallery {
      width: 720px;
      min-height: calc(100vh - 64px);
      margin: 0 calc(50vw - 360px);
      padding-bottom: 100px;
      padding-top: 64px;
      background-color: white;
    }

    #container {
      margin-bottom: 40px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .gallery-item {
      width: 350px;
      height: 240px;
    }

    .gallery-photo {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    
  }
  
  @media screen and (max-width: 767px) {
    h1 {
      font-family: Helvetica;
      margin: 0;
      font-size: 24px;
    }

    .main-title {
    margin-top : 24px;
    margin-bottom: 30px;
  }

    .main-title-deco {
      width: 28px;
      height: 1px;
      border: solid 2px #000000;
      background-color: #5b5b5b;
    }
    #gallery {
      width: 360px;
      min-height: calc(100vh - 84px);
      margin: 0 calc(50vw - 180px);
      padding-top: 54px;
      padding-bottom: 30px;
    }

    #container {
      margin-bottom: 24px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .gallery-item {
      width: 360px;
      margin-bottom: 10px;
    }

    .gallery-photo {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    
  }
  </style>