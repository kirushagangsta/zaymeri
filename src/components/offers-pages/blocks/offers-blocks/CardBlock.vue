<template>
  <div class="row ps-3 pe-3 pt-3 ">
    <a :href="src" target="_blank" class="col-12 card-block ps-4 pe-4 pt-3 pb-3" :style="{'background-color':background}">
      <div class="row justify-content-between">
        <div class="col-auto align-self-center">
          <div class="row">
            <div class="col-12 card-block__header-text">{{bankName}}</div>
          </div>
          <div class="row pt-2">
            <div class="col-12 card-block__max-card-text">{{offerName}}</div>
          </div>
        </div>
        <div class="col-auto">
          <img :src="imageSrc" class="card-block__image" alt="offer-img">
        </div>
      </div>
      <div class="row pt-3 card-block__footer">
        <div class="col-auto">
          {{ offerDesc }}
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "CardBlock",
  props : {
    background : String,
    bankName : String,
    offerName : String,
    offerDesc : String,
    src : String,
    imageSrc : String
  }
}
</script>

<style lang="scss" scoped>
.card-font{
  color: #FBFCFD;
  font-weight: 600;
}
.card-block{
  border-radius: 16px;
}
.card-block_purple{
  @extend .card-block;
  background: #BA3FA7;
}
.card-block__image{
  height: 48px;
  width: 48px;
}
.card-block__header-text{
  @extend .card-font;
  font-size: 20px;
  line-height: 130%;
}
.card-block__max-card-text{
  @extend .card-font;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.24px;
}
.card-block__footer{
  @extend .card-font;
  font-size: 13px;
  line-height: 130%;
  letter-spacing: -0.24px;
  font-weight: 400;
}
</style>