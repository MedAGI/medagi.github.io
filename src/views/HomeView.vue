<template>
  <div id="home">
    <div v-if="currentYear === '2023'">
      <div id="closing">
        <div id="thankyou-message">
          <span id="thankyou">MedAGI 2023 was successfully concluded. We would like to thank all the attendees for the support! See you next year!</span>
          <img id="cover-img" src="@/assets/cover.jpeg">
          <div class="go-to-gallery"><router-link to="/gallery">Go To Gallery &rarr;</router-link></div>
          <div id="award-box">
            <h2>Best Paper Award</h2>
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
        </div>
      </div>  
    </div>
    <div v-else>
    </div>
    <!-- Workshop Description -->
    <div v-if="currentYear === '2023'">
    <div id="workshop-description">
      <h1>Workshop Description</h1>
      <div class="main-title-deco"></div>
      <div class="description">
        In the context of medical image analysis, existing AI solutions are carefully designed and evaluated upon one specific dataset, which is difficult to transfer to another task or handle datasets curated from different medical centers. However, data modalities and task formulation vary in real clinical practices across hospitals and institutions. It results in increasing attention to a general model to tackle different medical scenarios. Precisely, a universal AI model with excellent generalization ability for processing other medical image modalities to handle a variety of medical AI tasks is termed general medical AI.<br><br>
        In computer vision domain, large-scale vision-language models or foundation models, e.g., CLIP, INTERN, and ALIGN, have shown amazing capabilities in visual recognition tasks, text-image generation, text-image retrieval, and high-level multi-modal multi-step reasoning. The outstanding generalization power of foundation models in new domains and tasks opens the door for zero-shot (or few-shot) visual recognition tasks: image classification, object detection, and segmentation. Despite the encouraging success in the computer vision domain, adopting foundation models in the medical domain is still in the early stage.<br><br>
        This workshop is dedicated to addressing the current medical AI systems and discussing opportunities for generalizing learning systems across multiple unseen tasks and domains
      </div>
    </div>
    </div>
    <div v-else>
      <h1>Workshop Description</h1>
      <div class="main-title-deco"></div>
      <div class="description">
        Medical image analysis has traditionally relied on AI models trained on specific datasets, which often becomes challenging when transferred to data from different medical centers. This inherent limitation has inspired a growing interest in general medical AI, capable of seamlessly adapting to various medical scenarios, data modalities, and task formulations prevalent across hospitals and institutions. Drawing parallels from the computer vision and natural language processing domains, foundation models, such as large language and vision-language models like GPT, LLaMA, stand out as quintessential general AI solutions. These models have demonstrated remarkable proficiency in a myriad of tasks owing to their massive training datasets and substantial model sizes. Yet, the translation of these successes to medical, namely the general medical AI, remains nascent. This workshop is designed to continue the success of our last year’s event and serve as a confluence of insights from the current landscape of medical AI and foundation models. This year, we aim to foster discussions that will pave the way for the evolution of task-specific medical AI systems into more generalized frameworks capable of tackling a diverse range of tasks, datasets, and domains. 
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
    font-family: Helvetica;
    font-size: 24px;
    line-height: 1.4;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 20px;
  }

  #cover-img {
    width: 100%;
    margin-bottom: 10px;
  }

  .go-to-gallery {
    width: 100%;
    margin-bottom: 40px;
    font-size: 20px;
    font-family: Helvetica;
    font-weight: bold;
    text-decoration: none;
    color: #1cacd7;
    text-align: right;
  }

  .go-to-gallery a:hover {
    color: #1cabd7ca;
  }

  .go-to-gallery a:visited {
    color: #1cacd7;
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

  #cover-img {
    width: 100%;
    margin-bottom: 10px;
  }

  #thankyou {
    width: 100%;
    font-family: Helvetica;
    font-size: 16px;
    line-height: 1.4;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .go-to-gallery {
    width: 100%;
    margin-bottom: 40px;
    font-size: 16px;
    font-family: Helvetica;
    font-weight: bold;
    text-decoration: none;
    color: #1cacd7;
    text-align: right;
  }

  .go-to-gallery a:hover {
    color: #1cabd7ca;
  }

  .go-to-gallery a:visited {
    color: #1cacd7;
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

  #cover-img {
    width: 100%;
    margin-bottom: 10px;
  }

  #thankyou {
    width: 100%;
    font-family: Helvetica;
    font-size: 12px;
    line-height: 1.3;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
    margin-bottom: 24px;
    text-align: center;
  }

  .go-to-gallery {
    width: 100%;
    margin-bottom: 40px;
    font-size: 12px;
    font-family: Helvetica;
    font-weight: bold;
    text-decoration: none;
    color: #1cacd7;
    text-align: right;
  }

  .go-to-gallery a:hover {
    color: #1cabd7ca;
  }

  .go-to-gallery a:visited {
    color: #1cacd7;
  }


  #award-box {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  #best-paper, #honorable-mention{
   width: 100%; 
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   margin-bottom: 24px;
  }

  .award, .photo {
    width: 100%;
    object-fit: contain;
    margin-bottom: 24px;
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

<script>
export default {
  computed: {
  currentYear() {
    return this.$route.params.year || new Date().getFullYear().toString();
    },
  },
  methods: {
      fetchData() {
      // Use the currentYear computed property to determine which data to fetch
      const year = this.currentYear;
      if (year === '2023') {
        // Fetch and set the data for the 2023 archive
      } else {
        // Fetch and set the data for the current year
      }
    }
  },
  created(){
    this.fetchData();
  },
}
</script>