<template>
  <div id="home">
    <!-- Workshop Description -->
    <div id="workshop-description">
      <h1>Workshop Description</h1>
      <div class="main-title-deco"></div>
      <div class="description">
        In the context of medical image analysis, existing AI solutions are carefully designed and evaluated upon one specific dataset, which is difficult to transfer to another task or handle datasets curated from different medical centers. However, data modalities and task formulation vary in real clinical practices across hospitals and institutions. It results in increasing attention to a general model to tackle different medical scenarios. Precisely, a universal AI model with excellent generalization ability for processing other medical image modalities to handle a variety of medical AI tasks is termed general medical AI.<br><br>
        In computer vision domain, large-scale vision-language models or foundation models, e.g., CLIP, INTERN, and ALIGN, have shown amazing capabilities in visual recognition tasks, text-image generation, text-image retrieval, and high-level multi-modal multi-step reasoning. The outstanding generalization power of foundation models in new domains and tasks opens the door for zero-shot (or few-shot) visual recognition tasks: image classification, object detection, and segmentation. Despite the encouraging success in the computer vision domain, adopting foundation models in the medical domain is still in the early stage.<br><br>
        This workshop is dedicated to addressing the current medical AI systems and discussing opportunities for generalizing learning systems across multiple unseen tasks and domains
      </div>
    </div>
    <!-- End Workshop Description -->

    <!-- Contact -->
    <div id="contact">
      <h1>Contact</h1>
      <div class="main-title-deco"></div>
      <div class="contact">
        If you have any inquires, please e-mail us at : asdf@korea.ac.kr
      </div>
    </div>
    <!-- End Contact -->
  </div>
</template>

<style scoped>
@media screen and (min-width: 1280px) {
  /* Workshop Description */
  #home {
    width: 1280px;
    min-height: calc(100vh - 80px);
    padding-left: calc(50vw - 640px);
    padding-right: calc(50vw - 640px);
    padding-bottom: 120px;
    padding-top: 44px;
    background-color: white;
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

  .description {
    margin-top: 40px;
    margin-bottom: 100px;
    font-family: Helvetica;
    font-size: 24px;
    line-height: 1.4;
    color: #000;
  }
  /* Workshop Description End */

  /* Contact */
  .contact {
    margin-top: 40px;
    font-family: Helvetica;
    font-size: 24px;
    line-height: 1.4;
    color: #000;
  }
  /* Contact End */
}

@media screen and (min-width: 768px) and (max-width: 1279px) {
  /* Workshop Description */
  #home {
    width: 720px;
    min-height: calc(100vh - 64px);
    padding-left: calc(50vw - 360px);
    padding-right: calc(50vw - 360px);
    padding-bottom: 100px;
    padding-top: 44px;
    background-color: white;
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

  .description {
    margin-top: 30px;
    margin-bottom: 100px;
    font-family: Helvetica;
    font-size: 20px;
    line-height: 1.4;
    color: #000;
  }
  /* Workshop Description End */

  /* Contact */
  .contact {
    margin-top: 30px;
    font-family: Helvetica;
    font-size: 20px;
    line-height: 1.4;
    color: #000;
  }
  /* Contact End */
}
</style>
