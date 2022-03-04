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
      <test-one/><!--4 first images component-->
      <partners-images :imageSrc="images[index].src" v-for="(item,index) in images" :key="item.username"></partners-images> <!-- all images except 4 first -->
      <test-one/><!--4 first images component-->
      <partners-images :imageSrc="images[index].src" v-for="(item,index) in images" :key="item.username"></partners-images><!--2 first images component-->
    </div>
  </div>
</template>

<script>
import PartnersImages from "@/components/homepage/partners-images/PartnersImages";
import TestOne from "@/components/homepage/partners-images/testOne";
export default {
  name: "PartnersBlock",
  components : {
    TestOne,
    PartnersImages
  },
  mounted() {
    this.RowScroll();
  },
  data : function () {
    return {
      images : [
        {
          src : ""
        },
      ]
    }
  },
  methods : {
    RowScroll : function () {
      let logos = document.querySelector(".partners__logos");
      let jumpOffset;
      let additionalImagesWidth;
      let imgCounter = 4;
      let scrollImgPartPosition;
      let singleImgFullWidth = document.getElementsByClassName("partners__logos__image")[0].offsetWidth + 20;
      additionalImagesWidth = window.innerWidth - singleImgFullWidth * imgCounter;
      jumpOffset = logos.scrollWidth -additionalImagesWidth - window.innerWidth - 1;
      let imagePart = (jumpOffset % singleImgFullWidth);
      jumpOffset -= imagePart;
      scrollImgPartPosition = (logos.scrollLeft % singleImgFullWidth);
      logos.scrollBy(1,0);
      if (Math.trunc(logos.scrollLeft) > jumpOffset) {
          logos.scrollLeft = scrollImgPartPosition;
      }
      if (Math.trunc(logos.scrollLeft) === jumpOffset) {
        if (logos.scrollWidth !== window.innerWidth) {
            logos.scrollLeft = 0;
        }
      }
        setTimeout(this.RowScroll,30);
    }
  }

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