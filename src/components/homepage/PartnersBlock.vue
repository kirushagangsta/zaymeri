<template>
  <div class="row partners pt-4">
    <div class="col-12">
      <div class="row ps-3 pe-3 justify-content-between">
        <div class="col-auto ps-0 partners__header">
          Популярные партнёры
        </div>
        <router-link to="/partners" class="col-auto pe-0 partners__image-block">
          <img src="@/assets/images/dots.svg" class="partners__images" alt="dots">
        </router-link>
      </div>

    </div>
    <div class="pt-3 ps-0 partners__logos" style="">
      <partners-images :imageSrc="images[index]" v-for="(item,index) in images" :key="item"></partners-images>
    </div>
  </div>
</template>

<script>
import PartnersImages from "@/components/homepage/partners-images/PartnersImages";
export default {
  name: "PartnersBlock",
  components : {
    PartnersImages
  },
  data : function () {
    return {
      images : ["tinkoff","joymoney","bistro","abb","moneyman","mts","zaymer","raif","dozp","ubrir","ekapusta","otp","glavfin","alfa","turbo"]
    }
  },

}
</script>

<style scoped>
  .partners__header{
    font-weight: 600;
    font-size: 20px;
    line-height: 130%;
  }
  .partners__logos {
    height: 80px;
    width: 100vw;
    white-space:nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    animation: 4s linear 0s infinite images-animation;
  }
  ::-webkit-scrollbar {
    display: none;
  }
</style>