<template>
  <div class="row ps-3 pe-3 pt-3">
    <a :href="src" class="col-12 loan-block ps-4 pe-4 pt-3 pb-3" :style="{'background-color':background}">
      <div class="row justify-content-between">
        <div class="col-auto align-self-center">
          <div class="row">
            <div class="col-12 loan-block__header-text">{{ offerName }}</div>
          </div>
          <div class="row pt-2">
            <div class="col-12 loan-block__max-loan-text">До 80 000 ₽ </div>
          </div>
        </div>
        <div class="col-auto">
          <img :src="imageSrc" class="loan-block__image" alt="offer-img">
        </div>
      </div>
      <div class="row pt-3 loan-block__footer">
        <div class="col-auto">
          <div class="row">
            <div class="col-auto pe-1">
              <img src="@/assets/images/check.svg" alt="check">
            </div>
            <div class="col-auto ps-0 align-self-center">
              14 дней без %
            </div>
          </div>
        </div>
        <div class="col-auto">
          <div class="row">
            <div class="col-auto pe-1">
              <img src="@/assets/images/percent.svg" alt="percent">
            </div>
            <div class="col-auto ps-0 align-self-center">
              Ставка 0,5% в день
            </div>
          </div>
        </div>
        <div class="col-auto">
          <div class="row">
            <div class="col-auto pe-1">
              <img src="@/assets/images/age-group.svg" alt="age">
            </div>
            <div class="col-auto ps-0 align-self-center">
              Возраст 18+
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "LoanBlock",
  props : {
    background : String,
    src : String,
    bankName : String,
    offerName : String,
    imageSrc : String,
  },
  currentRoute() {
    return this.$route.name
  },
}
</script>

<style lang="scss" scoped>
  .loan-font{
    color: #FBFCFD;
    font-weight: 600;
  }
  .loan-block{
    border-radius: 16px;
  }
  .loan-block__image{
    height: 48px;
    width: 48px;
  }
  .loan-block__header-text{
    @extend .loan-font;
    font-size: 20px;
    line-height: 130%;
  }
  .loan-block__max-loan-text{
    @extend .loan-font;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.24px;
  }
  .loan-block__footer{
    @extend .loan-font;
    font-size: 10px;
    line-height: 130%;
    letter-spacing: -0.24px;
  }
</style>