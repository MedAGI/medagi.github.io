<template>
  <div id="organization">
    <div class="main-title">
      <h1>Organization</h1>
    	<div class="main-title-deco"></div>
    </div>
		<div id="organizing-team">
			<h2>Organizing Team</h2><hr>
			<div class="card-container">
				<div class="card">
					<img src="../assets/logo.png" alt="" class="profile">
					<div class="name">Won-Ki Jeong</div>
					<div class="belong">Korea University</div>
				</div>
				<div class="card">
					<img src="../assets/logo.png" alt="" class="profile">
					<div class="name">Hyunwoo Kim</div>
					<div class="belong">Korea University</div>
				</div>
				<div class="card">
					<img src="../assets/logo.png" alt="" class="profile">
					<div class="name">Edward Choi</div>
					<div class="belong">KAIST</div>
				</div>
				<div class="card">
					<img src="../assets/logo.png" alt="" class="profile">
					<div class="name">Yiqing Shen</div>
					<div class="belong">Johns Hopkins University</div>
				</div>
				<div class="card">
					<img src="../assets/logo.png" alt="" class="profile">
					<div class="name">Zhongying Deng</div>
					<div class="belong">University of Surrey</div>
				</div>
				<div class="card">
					<img src="../assets/logo.png" alt="" class="profile">
					<div class="name">Junjun He</div>
					<div class="belong">Shanghai AI Laboratory</div>
				</div>
				<div class="card">
					<img src="../assets/logo.png" alt="" class="profile">
					<div class="name">Hoon Cho</div>
					<div class="belong">Broad Institute of MIT and Harvard</div>
				</div>
				<div class="card">
					<img src="../assets/logo.png" alt="" class="profile">
					<div class="name">Donglai Wei</div>
					<div class="belong">Boston College</div>
				</div>
				<div class="card">
					<img src="../assets/logo.png" alt="" class="profile">
					<div class="name">Jin Ye</div>
					<div class="belong">Shanghai AI Laboratory</div>
				</div>
				<div class="card">
					<img src="../assets/logo.png" alt="" class="profile">
					<div class="name">Jing Ke</div>
					<div class="belong">Shanghai Jiao Tong University</div>
				</div>
			</div>
		</div>
		<div id="program-committee">
			<h2>Program Committee</h2><hr>
			<div>TBA</div>
		</div>
  </div>
</template>

<style>
#organization {
    width: 1440px;
    min-height: calc(100vh - 64px);
    margin: 0 calc(50vw - 720px);
		padding-bottom: 120px;
  }

.main-title {
  margin-top: 44px;
  margin-bottom: 40px;
}

h1 {
  margin-bottom: 0;
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
</style>
