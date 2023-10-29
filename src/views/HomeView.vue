<template>
  <div id="home">
    <!-- Closing -->
    <div id="closing">
      <div id="thankyou-message">
        <span id="thankyou">MedAGI 2023 was successfully concluded. We would like to thank all the attendees for the support! See you next year!</span>
        <div id="award-box">
          <h2>Best Paper</h2>
          <div id="best-paper">
            <img src='@/assets/award/Photo_BestPaper.jpg' alt="" class="photo">
            <img src='@/assets/award/Award_BestPaper.jpg' alt="" class="award">
          </div>
          <h2>Honorable Mention</h2>
          <div id="honorable-mention">
            <img src='@/assets/award/Photo_HonorableMention.jpg' alt="" class="photo">
            <img src='@/assets/award/Award_HonorableMention.jpg' alt="" class="award">
          </div>
        </div>
        <h2>Gallery</h2>
        <div id="gallery">
          <div v-for="(image, index) in imageList" :key="index" class="gallery-item">
            <img :src="require(`@/assets/photo/${image}`)" alt="Image" class="gallery-photo" />
          </div>
        </div>
      </div>
      
    </div>
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
        If you have any inquires, please e-mail us at : <a href="mailto:miccai.MedAGI@gmail.com" class="email">miccai.MedAGI@gmail.com</a>
      </div>
    </div>
    <!-- End Contact -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageList: []
    };
  },
  created() {
    for (let i = 1; i <= 28; i++) {
      this.imageList.push(`${i}.jpg`); // Add image file names to the array
    }
  }
};
</script>

<style scoped>
.email {
  text-decoration: underline;
  color: #1cacd7;
}
@media screen and (min-width: 1280px) {
  /* Closing */
  #thankyou-message{
    width: 100%;
  }

  #thankyou {
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 60px;
  }
  #award-box {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  #best-paper, #honorable-mention{
   width: 100%; 
   display: flex;
   justify-content: space-between;
   margin-bottom: 40px;
  }

  .award, .photo {
    width: 50%;
    object-fit: contain;
  }

  #gallery {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .gallery-item {
    width: 400px;
    height: 300px;
  }

  .gallery-photo {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  /* Closing End */

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
  /* Closing */
  #thankyou-message{
    width: 100%;
  }

  #thankyou {
    width: 100%;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  #award-box {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  #best-paper, #honorable-mention{
   width: 100%; 
   display: flex;
   justify-content: space-between;
   margin-bottom: 40px;
  }

  .award, .photo {
    width: 50%;
    object-fit: contain;
  }

  #gallery {
    margin-bottom: 40px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .gallery-item {
    width: 350px;
    height: 240px;
  }

  .gallery-photo {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  /* Closing End */

  /* Workshop Description */
  #home {
    width: 720px;
    padding-left: calc(50vw - 360px);
    padding-right: calc(50vw - 360px);
    padding-bottom: 120px;
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

@media screen and (max-width: 767px) {
  /* Closing */
  #thankyou-message{
    width: 100%;
  }

  #thankyou {
    width: 100%;
    font-size: 10px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
    margin-bottom: 24px;
  }
  #award-box {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  #best-paper, #honorable-mention{
   width: 100%; 
   display: flex;
   justify-content: space-between;
   margin-bottom: 24px;
  }

  .award, .photo {
    width: 50%;
    object-fit: contain;
  }

  #gallery {
    margin-bottom: 24px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .gallery-item {
    width: 360px;
    height: 240px;
    margin-bottom: 10px;
  }

  .gallery-photo {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  /* Closing End */
  
  /* Workshop Description */
  #home {
    width: 360px;
    min-height: calc(100vh - 64px);
    padding-left: calc(50vw - 180px);
    padding-right: calc(50vw - 180px);
    padding-bottom: 60px;
    padding-top: 24px;
    background-color: white;
  }

  h1 {
    font-family: Helvetica;
    margin: 0;
    font-size: 24px;
  }

  .main-title-deco {
    width: 28px;
    height: 1px;
    border: solid 2px #000000;
    background-color: #5b5b5b;
  }

  .description {
    margin-top: 16px;
    margin-bottom: 40px;
    font-family: Helvetica;
    font-size: 16px;
    line-height: 1.3;
    color: #000;
  }
  /* Workshop Description End */

  /* Contact */
  .contact {
    margin-top: 30px;
    font-family: Helvetica;
    font-size: 16px;
    line-height: 1.3;
    color: #000;
  }
  /* Contact End */
}
</style>
