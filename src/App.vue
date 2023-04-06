<template>
  <div id="navigation">
    <div id="title">FMGMAI</div>
    <nav id="tab-box">
      <router-link to="/" class="navigation-tab">Home</router-link>
      <router-link to="/organization" class="navigation-tab">Organization</router-link>
      <router-link to="/program" class="navigation-tab">Program</router-link>
      <router-link to="/speakers" class="navigation-tab">Speakers</router-link>
      <router-link to="/submission" class="navigation-tab">Submission</router-link>
    </nav>
  </div>
  
  <router-view/>
</template>

<style>
html, body {
  margin:0;
  border: 0;
}
#navigation {
  width: 100%;
  height: 64px;
  background-color: #862633;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
</style>
