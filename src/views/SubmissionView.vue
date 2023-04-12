<template>
  <div id="submission">
    <!-- Main Title -->
    <div class="main-title">
      <h1>Submission</h1>
    	<div class="main-title-deco"></div>
    </div>
    <!-- Main Title End -->

    <!-- Important Dates -->
		<div id="important-dates">
			<h2>Important Dates</h2><hr>
      <div id="dates-table">
        <div class="date-row">
          <div class="dates">25 June 2023</div>
          <div class="due-work">Paper submission due</div>
        </div>
        <div class="date-row">
          <div class="dates">16 July 2023</div>
          <div class="due-work">Notification of paper decisions</div>
        </div>
        <div class="date-row">
          <div class="dates">30 July 2023</div>
          <div class="due-work">Canera ready papers due</div>
        </div>
        <div class="date-row">
          <div class="dates">6 September 2023</div>
          <div class="due-work">Workshop proceedings due</div>
        </div>
        <div class="date-row">
          <div class="dates">8 October & 12 October 2023</div>
          <div class="due-work">Workshop dates</div>
        </div>
      </div>
		</div>
    <!-- Important Dates Ends -->

    <!-- Topics -->
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
    <!-- Topics End -->
  </div>
</template>

<style scoped>
@media screen and (min-width: 1280px) {
  #submission {
    width: 1280px;
    min-height: calc(100vh - 80px);
    margin: 0 calc(50vw - 640px);
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

  .date-row {
    display: flex;
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
}

@media screen and (min-width: 768px) and (max-width: 1279px) {
  #submission {
    width: 720px;
    min-height: calc(100vh - 64px);
    margin: 0 calc(50vw - 360px);
    padding-top: 64px;
		padding-bottom: 120px;
  }

  .main-title {
    margin-top: 44px;
    margin-bottom: 30px;
  }

  h1 {
    margin-bottom: 0;
    font-family: Helvetica;
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

  /* Dates Table */
  #dates-table {
    padding: 10px;
  }

  .dates {
    font-family: Helvetica;
    font-size: 18px;
    line-height: 1.4;
    width: 250px;
    padding: 5px;
    color: #5A5A5A;
  }

  .date-row {
    display: flex;
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
    padding: 10px;
    font-family: Helvetica;
    font-size: 18px;
    line-height: 1.4;
    color: #000;
  }

  #topic-list {
    margin: 0;
    padding-left: 40px;
    font-family: Helvetica;
    font-size: 18px;
    line-height: 1.8;
    color: #000;
  }
  /* Topics End */
}

@media screen and (max-width: 767px) {
  #submission {
    width: 360px;
    min-height: calc(100vh - 64px);
    margin: 0 calc(50vw - 180px);
    padding-top: 64px;
		padding-bottom: 120px;
  }

  .main-title {
    margin-top: 24px;
    margin-bottom: 30px;
  }

  h1 {
    margin-bottom: 0;
    font-family: Helvetica;
    font-size: 36px;
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

  /* Dates Table */
  #dates-table {
    padding: 10px;
  }

  .dates {
    font-family: Helvetica;
    font-size: 14px;
    width: 250px;
    padding: 5px 5px 0;
    color: #5A5A5A;
  }

  .date-row {
    display: flex;
    flex-direction: column;
    padding-bottom: 5px;
  }

  .due-work {
    width: calc(100% - 10px);
    padding: 5px;
    font-family: Helvetica;
    font-size: 18px;
    line-height: 1.4;
    color: #000;
  }
  /* Dates Table End */

  /* Topics */
  #topic-description {
    padding: 10px;
    font-family: Helvetica;
    font-size: 16px;
    line-height: 1.4;
    color: #000;
  }

  #topic-list {
    margin: 0;
    padding-left: 20px;
    padding-right: 10px;
    padding-top: 10px;
    font-family: Helvetica;
    font-size: 16px;
    line-height: 1.5;
    color: #000;
  }
  /* Topics End */
}
</style>
