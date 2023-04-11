<template>
    <div id="program">
      <!-- Main Title -->
      <div class="main-title">
          <h1>Program</h1>
          <div class="main-title-deco"></div>
      </div>
      <!-- Main Title End -->

      <!-- Program Table -->
      <div>
        TBA
        <!-- <table id="program-table">
          <tr class="timeline">
            <td class="timeline-time">8:00-08:05</td>
            <td class="timeline-contents">Welcome and Opening Remarks</td>
          </tr>
          <tr class="timeline">
            <td class="timeline-time">8:05-08:35</td>
            <td class="timeline-contents">
              <b>Keynote 1:<br>
              Prof.Dr.Marinka Zitnik<br>
              "Trustworthy AI with GNN Explainers"</b>
            </td>
          </tr>
          <tr class="timeline">
            <td class="timeline-time">8:35-09:05</td>
            <td class="timeline-contents">
              <b>Oral Session 1:</b><br>
              <ul>
                <li>
                  08:35 - 08:45<br>
                  Modular Graph Encoding and Hierarchical Readout for Functional Brain Network based eMCI Diagnosis<br>
                  <i>Lang Mei, Mianxin Liu, Lingbin Bian, Yuyao Zhang, Feng Shi, Han Zhang, Dinggang Shen</i>
                </li>
              </ul>
            </td>
          </tr>  
        </table> -->
      </div>
      <!-- Program Table End -->
    </div>
  </template>
  
  <style scoped>
  @media screen and (min-width: 1280px) {
    #program {
      width: 1280px;
      min-height: calc(100vh - 80px);
      padding-left: calc(50vw - 640px);
      padding-right: calc(50vw - 640px);
      padding-top: 80px;
      background-color: white;
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

    /* Program Table */
    #program-table {
      width: 100%
    }

    .timeline {
      min-height: 64px;
      display: flex;
    }

    .timeline:nth-child(2n+1) {
      background-color: #f7f7f7;
    }

    .timeline:nth-child(2n) {
      border-top: 1px solid #dfdfdf;
      border-bottom: 1px solid #dfdfdf;
    }

    .timeline-time {
      padding: 24px 20px;
      width: 100px;
      font-size: 18px;
      color: #606060;
    }

    .timeline-contents {
      padding: 20px;
      font-size: 20px;
      color: #606060;
      line-height: 1.5;
    }
    /* Program Table End */
  }
  
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    #program {
      width: 720px;
      min-height: calc(100vh - 64px);
      padding-left: calc(50vw - 360px);
      padding-right: calc(50vw - 360px);
      padding-top: 64px;
      background-color: white;
    }

    .main-title {
      margin-top: 44px;
      margin-bottom: 30px;
    }

    h1 {
      font-family: Helvetica;
      margin-bottom: 0;
      font-size: 36px;
    }

    .main-title-deco {
      width: 28px;
      height: 1px;
      border: solid 2px #000000;
      background-color: #5b5b5b;
    }

    /* Program Table */
    #program-table {
      width: 100%
    }

    .timeline {
      min-height: 48px;
      display: flex;
    }

    .timeline:nth-child(2n+1) {
      background-color: #f7f7f7;
    }

    .timeline:nth-child(2n) {
      border-top: 1px solid #dfdfdf;
      border-bottom: 1px solid #dfdfdf;
    }

    .timeline-time {
      padding: 24px 16px;
      width: 100px;
      font-family: Helvetica;
      font-size: 14px;
      color: #606060;
    }

    .timeline-contents {
      padding: 20px 16px;
      font-family: Helvetica;
      font-size: 16px;
      color: #606060;
      line-height: 1.5;
    }
    /* Program Table End */
  }
  </style>
  