<template>
    <div id="program">
      <div class="main-title">
          <h1>Program</h1>
          <div class="main-title-deco"></div>
      </div>

      <div>
        <table id="program-table">
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
            
        </table>
      </div>
    </div>
  </template>
  
  <style scoped>
  #program {
    width: 1440px;
    min-height: calc(100vh - 64px);
    padding-left: calc(50vw - 720px);
    padding-right: calc(50vw - 720px);
    padding-top: 80px;
    background-color: white;
  }

  .main-title {
    margin-top: 44px;
    margin-bottom: 40px;
  }

  h1 {
    margin-bottom: 0;
    font-size: 48px;
  }

  .main-title-deco {
    width: 28px;
    height: 1px;
    border: solid 2px #000000;
    background-color: #5b5b5b;
  }

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
  </style>
  