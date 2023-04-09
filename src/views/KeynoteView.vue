<template>
  <div id="keynote">
    <!-- Main Title -->
    <div class="main-title">
    	<h1>Keynote</h1>
		  <div class="main-title-deco"></div>
    </div>
    <!-- Main Title End -->

    <!-- Speakers -->
		<div id="speakers">
			<h2>Speakers</h2><hr>
			<div class="card-container">
				<div class="card">
					<img src="../assets/logo.png" alt="" class="profile">
					<div class="name">Won-Ki Jeong</div>
					<div class="belong">Korea University</div>
				</div>
			</div>
		</div>
    <!-- Speakers End -->

    <!-- Preliminary Keynotes -->
		<div id="keynotes">
			<h2>Preliminary Keynotes</h2><hr>
			<div id="keynote-container">
				<div class="keynote-box">
					<div class="keynote-title">Title Of the Keynote Talks</div>
					<div class="keynote-speaker">Speaker of the Keynote Talks</div>
					<div class="keynote-time">Sep 33, 2022 2:55PM - 3:10 PM</div>
				</div>
				<div class="keynote-box">
					<div class="keynote-title">Title Of the Keynote Talks</div>
					<div class="keynote-speaker">Speaker of the Keynote Talks</div>
					<div class="keynote-time">Sep 33, 2022 2:55PM - 3:10 PM</div>
				</div>
				<div class="keynote-box">
					<div class="keynote-title">Title Of the Keynote Talks</div>
					<div class="keynote-speaker">Speaker of the Keynote Talks</div>
					<div class="keynote-time">Sep 33, 2022 2:55PM - 3:10 PM</div>
				</div>
			</div>
		</div>
    <!-- Preliminary Keynotes End -->
  </div>
</template>

<style scoped>
@media screen and (min-width: 1280px) {
  #keynote {
    width: 1280px;
    min-height: calc(100vh - 64px);
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
    font-family: Helvetica;
    margin-bottom: 0px;
    font-family: Helvetica;
    font-size: 28px;
  }

  hr {
    border: 1px solid black;
  }

  /* Speaker */
  .card-container {
    margin-top: 20px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
  }

  .card {
    width: 250px;
    padding-bottom: 40px;
  }

  .profile {
    width: 200px;
    height: 200px;
    margin: 10px 25px;
    border-radius: 125px;
    border: solid 1px #979797;
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
    color: #484848;
  }
  /* Speaker End */

  /* Preliminary Keynote */
  #keynote-container {
    padding: 20px;
  }

  .keynote-box {
    margin-bottom: 50px;
  }

  .keynote-title {
    font-family: Helvetica;
    font-size: 40px;
    font-weight: bold;
    color: #000;
    padding-bottom: 10px;
  }

  .keynote-speaker {
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 300;
    color: #000;
    padding-bottom: 5px;
  }

  .keynote-time {
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 300;
    color: #797979;
  }
  /* Preliminary Keynote End */
}

@media screen and (min-width: 768px) and (max-width: 1279px) {
  #keynote {
    width: 720px;
    min-height: calc(100vh - 64px);
    margin: 0 calc(50vw - 360px);
    padding-bottom: 100px;
    padding-top: 44px;
    background-color: white;
  }

  .main-title {
    margin-top : 44px;
    margin-bottom: 40px;
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

  /* Speaker */
  .card-container {
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
  }

  .card {
    width: 180px;
    padding-bottom: 40px;
  }

  .profile {
    width: 160px;
    height: 160px;
    margin: 10px;
    border-radius: 125px;
    border: solid 1px #979797;
    object-fit: cover;
  }

  .name {
    width: 100%;
    margin-bottom: 4px;
    font-family: Helvetica;
    font-size: 18px;
    letter-spacing: normal;
    text-align: center;
    color: #000;
  }

  .belong {
    width: 100%;
    font-family: Helvetica;
    font-size: 12px;
    font-weight: 300;
    font-style: italic;
    text-align: center;
    color: #484848;
  }
  /* Speaker End */

  /* Preliminary Keynote */
  #keynote-container {
    padding: 10px 0;
  }

  .keynote-box {
    margin-bottom: 30px;
  }

  .keynote-title {
    font-family: Helvetica;
    font-size: 32px;
    font-weight: bold;
    color: #000;
    padding-bottom: 10px;
  }

  .keynote-speaker {
    font-family: Helvetica;
    font-size: 16px;
    font-weight: 300;
    color: #000;
    padding-bottom: 5px;
  }

  .keynote-time {
    font-family: Helvetica;
    font-size: 12px;
    font-weight: 300;
    color: #797979;
  }
  /* Preliminary Keynote End */
}
</style>
