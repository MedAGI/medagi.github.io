<template>
  <div id="organization">
    <div class="main-title">
      <h1>Organization</h1>
    	<div class="main-title-deco"></div>
    </div>
		
    <div v-if="currentYear === '2023'">
    <!-- 2023 -->
      <div id="organizing-team">
        <h2>Organizing Team</h2><hr>
        <div class="card-container">
          <div class="card">
            <img src='@/assets/profile/Wonki_Jeong.jpg' alt="" class="profile">
            <div class="name">Won-Ki Jeong</div>
            <div class="belong">Korea University</div>
          </div>
          <div class="card">
            <img src="@/assets/profile/hyunwoo_kim.jpeg" alt="" class="profile color-profile">
            <div class="name">Hyunwoo Kim</div>
            <div class="belong">Korea University</div>
          </div>
          <div class="card">
            <img src="@/assets/profile/Yiqing_Shen.jpg" alt="" class="profile">
            <div class="name">Yiqing Shen</div>
            <div class="belong">Johns Hopkins University</div>
          </div>
          <div class="card">
            <img src="@/assets/profile/Zhongying_Deng.jpg" alt="" class="profile">
            <div class="name">Zhongying Deng</div>
            <div class="belong">University of Surrey</div>
          </div>
          <div class="card">
            <img src="@/assets/profile/edward_choi.png" alt="" class="profile">
            <div class="name">Edward Choi</div>
            <div class="belong">KAIST</div>
          </div>
          <div class="card">
            <img src="../assets/profile/Junjun_He.webp" alt="" class="profile">
            <div class="name">Junjun He</div>
            <div class="belong">Shanghai AI Laboratory</div>
          </div>
          <div class="card">
            <img src='../assets/profile/hoon_Cho.jpeg' alt="" class="profile color-profile">
            <div class="name">Hoon Cho</div>
            <div class="belong">Broad Institute of MIT and Harvard</div>
          </div>
          <div class="card">
            <img src="@/assets/profile/donglai_sq.png" alt="" class="profile">
            <div class="name">Donglai Wei</div>
            <div class="belong">Boston College</div>
          </div>
          <div class="card">
            <img src="@/assets/profile/Jin_Ye.jpg" alt="" class="profile">
            <div class="name">Jin Ye</div>
            <div class="belong">Shanghai AI Laboratory</div>
          </div>
          <div class="card">
            <img src="@/assets/profile/Jing_Ke.jpg" alt="" class="profile color-profile">
            <div class="name">Jing Ke</div>
            <div class="belong">Shanghai Jiao Tong University</div>
          </div>
        </div>
      </div>
  </div>
  <div v-else>
    <div id="organizing-team">
        <h2>Organizing Team</h2><hr>
        <div class="card-container">
          <div class="card">
            <img src="@/assets/profile/Zhongying_Deng.jpg" alt="" class="profile">
            <div class="name">Zhongying Deng</div>
            <div class="belong">University of Cambridge</div>
          </div>
          <div class="card">
            <img src='@/assets/profile/Yiqing_Shen.jpg' alt="" class="profile">
            <div class="name">Yiqing Shen</div>
            <div class="belong">Johns Hopkins University</div>
          </div>
          <div class="card">
            <img src="@/assets/profile/hyunwoo_kim.jpeg" alt="" class="profile color-profile">
            <div class="name">Hyunwoo J. Kim</div>
            <div class="belong">Korea University</div>
          </div>
          <div class="card">
            <img src='@/assets/profile/Wonki_Jeong_2024.jpeg' alt="" class="profile">
            <div class="name">Won-Ki Jeong</div>
            <div class="belong">Korea University</div>
          </div>
          <div class="card">
            <img src="@/assets/profile/angelica.png" alt="" class="profile color-profile">
            <div class="name">Angelica I Aviles-Rivero</div>
            <div class="belong">University of Cambrigde</div>
          </div>
          <div class="card">
            <img src="@/assets/profile/junjun_he.jpeg" alt="" class="profile color-profile">
            <div class="name">Junjun He</div>
            <div class="belong">Shanghai AI Laboratory</div>
          </div>
          <div class="card">
            <img src="@/assets/profile/shaoting_zhang.jpg" alt="" class="profile color-profile">
            <div class="name">Shaoting Zhang</div>
            <div class="belong">Shanghai AI Laboratory</div>
          </div>
          <div class="card">
          </div>
          <div class="card">
          </div>
          <div class="card">
          </div>
        </div>
      </div>
  </div>
  <div v-if="currentYear === '2023'">
    <div id="program-committee">
			<h2>Program Committee</h2><hr>
      <ul id="committee-list">
        <li v-for="committee in pc" :id="committee['No']">
          <strong>{{ committee.Name }}</strong> (<span class="committee-belong">{{ committee.Affliation }}</span>) 
        </li>
      </ul>
		</div>
  </div>
  <div v-else>
    <div id="program-committee">
			<h2>Program Committee</h2><hr>
      <ul id="committee-list">
        <li v-for="committee in pc2024" :id="committee['No']">
          <strong>{{ committee.Name }}</strong> (<span class="committee-belong">{{ committee.Affliation }}</span>) 
        </li>
      </ul>
		</div>
  </div>
  <div v-if="currentYear === '2023'">
    <div id="student-contributor">
      <h2>Student Contributor</h2><hr>
        <ul id="contributor-list">
          <li><strong>Byungju Chae</strong> (<span class="committee-belong">Korea University</span>) </li>
        </ul>
    </div>
  </div>
  <div v-else>
    <div id="student-contributor">
      <h2>Student Contributor</h2><hr>
        <ul id="contributor-list">
          <li><strong>Jongha Kim</strong> (<span class="committee-belong">Korea University</span>) </li>
        </ul>
    </div>
  </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 1280px) {
	#organization {
    width: 1280px;
    min-height: calc(100vh - 80px);
    padding-left: calc(50vw - 640px);
    padding-right: calc(50vw - 640px);
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

  /* Organization Team */
  .card-container {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .card {
    width: 220px;
    padding-bottom: 40px;
  }

  .profile {
    width: 200px;
    height: 200px;
    margin: 10px;
    border-radius: 125px;
    border: solid 1px #979797;
    object-fit: contain;
  }

  .color-profile {
    object-fit: cover!important;
  }

  .name {
    margin-bottom: 4px;
    font-family: Helvetica;
    font-size: 22px;
    letter-spacing: normal;
    text-align: center;
    color: #000;
  }

  .belong {
    font-family: Helvetica;
    font-size: 12px;
    font-weight: 300;
    font-style: italic;
    text-align: center;
    color: #5C5C5C;
  }
  /* Organization Team End */

  /* Program Committee */
  #committee-list {
    margin: 0;
    padding-left: 20px;
    font-family: Helvetica;
    font-size: 20px;
    line-height: 1.8;
    color: #000;
  }

  .committee-belong {
    color: #5C5C5C;
  }

  .committee-email {
    color: #1cacd7;
    text-decoration: none;
  }
  /* Program Committee End */

  /* Student Contributor */
  #contributor-list {
    margin: 0;
    padding-left: 20px;
    font-family: Helvetica;
    font-size: 20px;
    line-height: 1.8;
    color: #000;
  }
  /* Student Contributor End */
}

@media screen and (max-width: 1279px) and (min-width: 768px){
	#organization {
    width: 720px;
    min-height: calc(100vh - 64px);
    padding-left: calc(50vw - 360px);
    padding-right: calc(50vw - 360px);
    padding-bottom: 120px;
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
    font-family: Helvetica;
    margin-bottom: 0px;
    font-family: Helvetica;
    font-size: 28px;
  }

  hr {
    border: 1px solid black;
  }

  /* Organization Team */
  .card-container {
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
  }

  .card {
    width: 180px;
    padding-bottom: 20px;
  }

  .profile {
    width: 160px;
    height: 160px;
    margin: 10px;
    border-radius: 125px;
    border: solid 1px #979797;
    object-fit: contain;
  }

  .color-profile {
    object-fit: cover!important;
  }

  .name {
    width: 100%;
    margin-bottom: 2px;
    font-family: Helvetica;
    font-size: 16px;
    letter-spacing: normal;
    text-align: center;
    color: #000;
  }

  .belong {
    width: 100%;
    font-family: Helvetica;
    font-size: 10px;
    font-weight: 300;
    font-style: italic;
    text-align: center;
    color: #5C5C5C;
  }
  /* Organization Team End */

  /* Program Committee */
  #committee-list {
    margin: 0;
    padding-left: 20px;
    font-family: Helvetica;
    font-size: 18px;
    line-height: 1.8;
    color: #000;
  }

  .committee-belong {
    color: #5C5C5C;
  }
  /* Program Committee End */

  /* Student Contributor */
  #contributor-list {
    margin: 0;
    padding-left: 20px;
    font-family: Helvetica;
    font-size: 18px;
    line-height: 1.8;
    color: #000;
  }
  /* Student Contributor End */
}

@media screen and (max-width: 767px){
	#organization {
    width: 360px;
    min-height: calc(100vh - 64px);
    padding-left: calc(50vw - 180px);
    padding-right: calc(50vw - 180px);
    padding-bottom: 60px;
    padding-top: 24px;
    background-color: white;
    }

  .main-title {
    margin-top : 54px;
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

  /* Organization Team */
  .card-container {
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .card {
    width: 180px;
    padding-bottom: 20px;
  }

  .profile {
    width: 160px;
    height: 160px;
    margin: 10px;
    border-radius: 125px;
    border: solid 1px #979797;
    object-fit: contain;
  }

  .name {
    width: 100%;
    margin-bottom: 2px;
    font-family: Helvetica;
    font-size: 16px;
    letter-spacing: normal;
    text-align: center;
    color: #000;
  }

  .belong {
    width: 100%;
    font-family: Helvetica;
    font-size: 10px;
    font-weight: 300;
    font-style: italic;
    text-align: center;
    color: #5C5C5C;
  }
  /* Organization Team End */

  /* Program Committee */
  #committee-list {
    margin: 0;
    padding-left: 16px;
    font-family: Helvetica;
    font-size: 14px;
    line-height: 1.6;
    color: #000;
  }

  .committee-belong {
    color: #5C5C5C;
  }
  /* Program Committee End */

  /* Student Contributor */
  #contributor-list {
    margin: 0;
    padding-left: 16px;
    font-family: Helvetica;
    font-size: 14px;
    line-height: 1.6;
    color: #000;
  }
  /* Student Contributor End */
}
</style>

<script>
import program_committee from "@/assets/info/program_committee.json"
import program_committee_2024 from "@/assets/info/program_committee_2024.json"

export default {
  computed: {
  currentYear() {
    return this.$route.params.year || new Date().getFullYear().toString();
    }
  },

  data() {
    return {
      pc : program_committee,
      pc2024 : program_committee_2024
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