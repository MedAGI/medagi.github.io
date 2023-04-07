<template>
  <div id="submission">
    <div class="main-title">
      <h1>Submission</h1>
    	<div class="main-title-deco"></div>
    </div>
		<div id="important-dates">
			<h2>Important Dates</h2><hr>
      <table id="dates-table">
        <tr>
          <td class="dates">25 June 2023</td>
          <td class="due-work">Paper submission due</td>
        </tr>
        <tr>
          <td class="dates">16 July 2023</td>
          <td class="due-work">Notification of paper decisions</td>
        </tr>
        <tr>
          <td class="dates">30 July 2023</td>
          <td class="due-work">Canera ready papers due</td>
        </tr>
        <tr>
          <td class="dates">6 September 2023</td>
          <td class="due-work">Workshop proceedings due</td>
        </tr>
        <tr>
          <td class="dates">8 October & 12 October 2023</td>
          <td class="due-work">Workshop dates</td>
        </tr>
      </table>
		</div>
    <div id="topics">
			<h2>Topics</h2><hr>
      <div id="topic-description">
        Specifically, this workshop includes (but is not limited to) the following topics with relation to medical data processing and analysis:
      </div>
      <ul id="topic-list">
        <li>AGI, foundation models & multi-purpose models</li>
        <li>Generative pre-trained models</li>
        <li>Zero-shot/few-shot learning & domain generalization/adaptation</li>
        <li>Pre-training/fine-tuning/prompt tuning</li>
        <li>Open-vocabulary object detection, segmentation</li>
        <li>Self-/Weak-supervised learning</li>
        <li>Multitask learning</li>
        <li>Federated learning</li>
        <li>Knowledge distillation, pseudo labeling</li>
        <li>Current challenges and future trends in general medical AI</li>
        <li>The social impact and ethics issues in general medical AI</li>
        <li>Large-scale, multi-modality, and multi-task medical AI benchmarks</li>
      </ul>
		</div>
  </div>
</template>

<style scoped>
#submission {
    width: 1440px;
    min-height: calc(100vh - 80px);
    margin: 0 calc(50vw - 720px);
    padding-top: 80px;
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

/* Dates Table */
#dates-table {
  padding: 20px;
}

.dates {
  font-family: Helvetica;
  font-size: 18px;
  line-height: 1.4;
  width: 250px;
  padding: 5px;
  color: #5A5A5A;
}

.due-work {
  width: calc(100% - 340px);
  padding: 5px;
  font-family: Helvetica;
  font-size: 18px;
  line-height: 1.4;
  color: #000;
}
/* Dates Table End */

/* Topics */
#topic-description {
  padding: 10px 20px;
  font-family: Helvetica;
  font-size: 20px;
  line-height: 1.4;
  color: #000;
}

#topic-list {
  margin: 0;
  padding-left: 60px;
  font-family: Helvetica;
  font-size: 20px;
  line-height: 1.8;
  color: #000;
}
/* Topics End */
</style>
