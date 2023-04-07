<template>
    <div id="footer">
        <div id="logos">
            <img src="@/assets/miccai2023-logo.png" class="logo" alt="">
        </div>
        <div id="copyright">© 2023 1st International Workshop on Foundation Models for General Medical AI (FMGMAI 2023)</div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
#footer {
    width: calc(100% - 120px);
    padding: 40px 60px;
    background-color: black;
}

#copyright {
    width: 100%;
    padding-top: 20px;
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 1px;
    text-align: center;
    color: #fff;
}

#logos {
    padding-bottom: 30px;
    display: flex;
}

.logo {
    height: 100px;
}
</style>