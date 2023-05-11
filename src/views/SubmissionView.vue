<template>
  <div id="submission">
    <!-- Main Title -->
    <div class="main-title">
      <h1>Call For Paper</h1>
    	<div class="main-title-deco"></div>
    </div>
    <!-- Main Title End -->

    <!-- Scope of the Workshop -->
    <div id="scope">
      <h2>Scope of the Workshop</h2><hr>
      <div class="scope-contents">
        In the field of medical image analysis, existing AI solutions are typically designed and evaluated on specific datasets, making it challenging to transfer them to different tasks or handle datasets from diverse medical centers. However, real-world clinical practices vary across hospitals and institutions, resulting in different data modalities and task formulations. As a result, there is increasing attention toward developing a general model that can effectively handle various medical scenarios. Such a model, with excellent generalization ability to process different medical image modalities and perform a variety of medical AI tasks, is commonly referred to as a general medical AI. Inspired by recent advances in the generalization power of large-scale vision-language and foundation models in computer vision, this first workshop on foundation models for general medical AI (MedAGI) is dedicated to addressing the current medical AI systems and discussing opportunities for generalizing learning systems across multiple unseen tasks and domains specifically targeting various medical data (e.g., images, omics, clinical data) processing and analysis scenarios.
      </div>
      
    </div>
    <!-- Scope of the Workshop End -->

    <!-- Topics -->
    <div id="topics">
			<h2>Topics</h2><hr>
      <div id="topic-description">
        Topics are included but not limited to:
      </div>
      <ul id="topic-list">
        <li>AGI, Foundation models, and multi-purpose models for medical data</li>
        <li>Benchmarks for general medical AI</li>
        <li>Zero/few-shot, self-/weak-supervised learning</li>
        <li>Domain generalization and adaptation</li>
        <li>Pre-training, fine-tuning, prompt tuning</li>
        <li>Open-vocabulary object detection, segmentation</li>
        <li>Multitask learning, knowledge distillation, pseudo labeling</li>
        <li>Current challenges and/or future trends in general medical AI</li>
        <li>Social impact and/or ethical issues of general medical AI</li>
      </ul>
		</div>
    <!-- Topics End -->

    <!-- Important Dates -->
		<div id="important-dates">
			<h2>Important Dates</h2><hr>
      <div id="dates-table">
        <div class="date-row">
          <div class="dates">June 25, 2023</div>
          <div class="due-work">Paper submission due</div>
        </div>
        <div class="date-row">
          <div class="dates">July 16, 2023</div>
          <div class="due-work">Notification of paper decisions</div>
        </div>
        <div class="date-row">
          <div class="dates">July 30, 2023</div>
          <div class="due-work">Camera ready papers due</div>
        </div>
        <div class="date-row">
          <div class="dates">September 6, 2023</div>
          <div class="due-work">Workshop proceedings due</div>
        </div>
        <div class="date-row">
          <div class="dates">October 8, 2023</div>
          <div class="due-work">Workshop dates</div>
        </div>
      </div>
		</div>
    <!-- Important Dates Ends -->

    <!-- Submission Instructions -->
    <div id="instructions">
      <h2>Submission Instructions</h2><hr>
      <div>
        <!-- Submission Formats -->
        <div>
          <strong>Submission format |</strong> Submissions are in two tracks: Full-length papers and extended abstracts.
          <ol>
            <li>
              Full-length papers: Manuscripts should be up to <b>8 pages</b> (text, figures, and tables) plus up to <b>2 pages</b> of references. Submissions must be new. Accepted papers will be assigned as oral or poster presentations.
            </li>
            <li>
              Extended abstracts: Manuscripts should be up to <b>2 pages</b> (text, figures, tables, and references). Submissions may be new work or recently published/accepted papers (including posted preprints). Accepted abstracts will be assigned primarily as poster presentations. Accepted abstracts will not be formally published by publishers, but the authors can choose to make them archived on the workshop website.
            </li>
          </ol>
        </div>
        <!-- Submission Formats End -->

        <!-- Manuscript Template -->
        <div class="instruction-contents">
          <strong>Manuscript template | </strong> In general, the format requirements are the same as MICCAI 2023 main conference. No modifications to the templates are permitted. Papers must be submitted electronically in searchable pdf format following the guidelines for authors and LaTeX and MS Word templates available at <a target="_blank" href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines">Lecture Notes in Computer Science</a>.
        </div>
        <!-- Manuscript Template End -->

        <!-- Breach of anonymization End -->
        <div class="instruction-contents">
          <strong>Breach of anonymization | </strong>The review process is double-blind, i.e. the names of the authors, reviewers, and area chairs are not revealed to each other. Papers must thus be properly anonymized before submission.
        </div>
        <!-- Breach of anonymization -->

        <!-- Domain Conflicts -->
        <div class="instruction-contents">
          <strong>Domain conflicts | </strong>To avoid conflict of interest among the authors, reviewers, and meta-reviewers, all co-author information and a complete and accurate list of domain conflicts must be entered in the submission form by the submission deadline. For the same reason, i.e., to avoid conflict of interest during the review process, the author list must be complete at submission time.
        </div>
        <!-- Domain Conflicts End -->

        <!-- Publication -->
        <div class="instruction-contents">
          <strong>Publication | </strong>Accepted full-length papers will be published with MICCAI Proceedings in the Springer LNCS Series. Expanded versions of selected papers will be invited to a special issue “Foundation Models for Medical Image Analysis” of the Medical Image Analysis journal.
        </div>
        <!-- Publication End -->

        <!-- Submission Site -->
        <div class="instruction-contents">
          <strong>Submission Site | </strong> <a href="https://cmt3.research.microsoft.com/MedAGI2023" target="_blank">https://cmt3.research.microsoft.com/MedAGI2023 </a>
        </div>
        <!-- Submission Site End -->
      </div>
    </div>

  </div>
</template>

<style scoped>

a {
  color: #1cacd7;
  text-decoration: none;
}
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
    font-family: Helvetica;
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

  /* Scope of the Workshop */
  #scope {
    margin-bottom: 80px;
  }
  .scope-contents {
    padding: 10px 20px;
    font-family: Helvetica;
    font-size: 24px;
    line-height: 1.5;
    text-indent: 10px;
    color: #000;
  }
  /* Scope of the Workshop End */

  /* Topics */
  #topics {
    margin-bottom: 80px;
  }

  #topic-description {
    padding: 10px 20px;
    font-family: Helvetica;
    font-size: 24px;
    line-height: 1.4;
    color: #000;
  }

  #topic-list {
    margin: 0;
    padding-left: 60px;
    font-family: Helvetica;
    font-size: 21px;
    line-height: 1.8;
    color: #000;
  }
  /* Topics End */

  /* Important Dates */
  #important-dates {
    margin-bottom: 80px;
  }

  #dates-table {
    padding: 20px;
  }

  .dates {
    font-family: Helvetica;
    font-size: 20px;
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
    font-size: 20px;
    line-height: 1.4;
    color: #000;
  }
  /* Important Dates End */

  /* Submisiion Instructions */
  #instructions {
    font-family: Helvetica;
    font-size: 24px;
    line-height: 1.5;
    color: #000;
  }

  .instruction-contents {
    margin-bottom: 40px;
  }
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

  /* Scope of the Workshop */
  #scope {
    margin-bottom: 40px;
  }
  .scope-contents {
    padding: 10px;
    font-family: Helvetica;
    font-size: 18px;
    text-indent: 10px;
    line-height: 1.6;
    color: #000;
  }
  /* Scope of the Workshop End */

  /* Topics */
  #topics {
    margin-bottom: 40px;
  }
  
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

  /* Important Dates */
  #important-dates {
    margin-bottom: 40px;
  }

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
  /* Important Dates End */

  /* Submission Instructions */
  #instructions {
    font-family: Helvetica;
    font-size: 18px;
    line-height: 1.5;
    color: #000;
  }

  ol {
    padding-left: 30px;
  }

  ol li {
    margin-bottom: 10px;
  }

  .instruction-contents {
    margin-bottom: 20px;
  }
  /* Submission Instructions End */
}

@media screen and (max-width: 767px) {
  #submission {
    width: 360px;
    min-height: calc(100vh - 84px);
    margin: 0 calc(50vw - 180px);
    padding-top: 54px;
		padding-bottom: 30px;
  }

  .main-title {
    margin-top: 24px;
    margin-bottom: 30px;
  }

  h1 {
    margin-bottom: 0;
    font-family: Helvetica;
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

  /* Scope of the Workshop */
  #scope {
    margin-bottom: 40px;
  }

  .scope-contents {
    padding: 10px 10px 0;
    font-family: Helvetica;
    font-size: 16px;
    text-indent: 10px;
    line-height: 1.4;
    color: #000;
  }
  /* Scope of the Workshop End */

  /* Topics */
  #topics {
    margin-bottom: 40px;
  }
  #topic-description {
    padding: 10px;
    font-family: Helvetica;
    font-size: 16px;
    line-height: 1.4;
    color: #000;
  }

  #topic-list {
    margin: 0;
    padding-left: 25px;
    padding-right: 10px;
    font-family: Helvetica;
    font-size: 15px;
    line-height: 1.6;
    color: #000;
  }
  /* Topics End */

  /* Important Dates */
  #dates-table {
    padding: 10px;
  }

  .dates {
    font-family: Helvetica;
    font-size: 13px;
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
    font-size: 16px;
    line-height: 1.4;
    color: #000;
  }
  /* Important Dates End */

  /* Submission Instructions */
  #instructions {
    font-family: Helvetica;
    font-size: 16px;
    line-height: 1.5;
    color: #000;
  }

  ol {
    margin: 10px 0;
    padding-left: 30px;
  }

  ol li {
    margin-bottom: 10px;
  }

  .instruction-contents {
    margin-bottom: 20px;
  }
  /* Submission Instructions End */
}
</style>
