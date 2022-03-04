<template>
  <div class="row header ps-3 pe-3 pt-4">
    <div class="intro-block col-12">
      <div class="row justify-content-between">
        <div class="col-auto align-self-center">
          <div class="row">
            <div class="col-12 row intro-block__header">
              Займери
            </div>
          </div>
          <div class="row pt-2">
            <div class="col-12 ps-0 intro-block__offer-text">
              Выберите лучшие предложения
            </div>
          </div>
        </div>
        <div class="col-auto align-self-center intro-block__logo pe-0">
          <img src="@/assets/images/zaymeri_logo.svg" class="intro-block__logo__image" alt="logo">
        </div>
      </div>
      <div class="row pt-3 justify-content-center">
        <div class="col-12 text-center">
          <img src="@/assets/images/main-big-image.svg" class="intro-block__main-img" alt="main-image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBlock"
}
</script>

<style scoped>
.intro-block {
  color: #000000;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.38px;
  font-weight: 600;

}
.intro-block__offer-text{
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.24px;
}

</style>