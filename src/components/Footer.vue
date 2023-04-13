<template>
    <div id="footer">
        <div id="logos">
            <img src="@/assets/miccai2023-logo.png" class="logo" alt="">
        </div>
        <div id="copyright">© 2023 1st International Workshop on Foundation Models for General Medical AI (MedAGI 2023)</div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
@media screen and (min-width:1280px) {
  #footer {
    width: calc(100% - 120px);
    padding: 40px 60px;
    background-color: black;
  }

  #copyright {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 10px;
    font-family: Helvetica;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 1px;
    text-align: center;
    color: #f0f0f0;
  }

  #logos {
    padding-bottom: 30px;
    display: flex;
  }

  .logo {
    height: 100px;
  }
}

@media screen and (min-width:768px) and (max-width:1279px) {
  #footer {
    width: calc(100% - 100px);
    padding: 50px 50px;
    background-color: black;
  }

  #copyright {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    font-family: Helvetica;
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 1px;
    text-align: center;
    color: #f0f0f0;
  }

  #logos {
    padding-bottom: 10px;
    display: flex;
  }

  .logo {
    height: 80px;
  }
}

@media screen and (max-width:767px) {
  #footer {

    width: calc(100% - 20px);
    padding: 10px;
    background-color: black;
  }

  #copyright {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 20px;
    font-family: Helvetica;
    font-size: 6px;
    font-weight: 300;
    text-align: center;
    color: #f0f0f0;
  }

  #logos {
    padding: 10px;
    display: flex;
  }

  .logo {
    height: 50px;
  }
}


</style>