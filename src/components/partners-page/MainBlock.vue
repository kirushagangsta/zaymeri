<template>
  <div class="row mt-4 mb-4 partners">
    <div class="col-12">
      <div class="row">
        <div class="col-12 text-center partners__header-text">Наши партнёры</div>
      </div>
      <div class="row">
        <partner-image :src="imageSrc" v-for="imageSrc in src" :key="imageSrc"></partner-image>
      </div>
    </div>
  </div>
</template>

<script>
import PartnerImage from "@/components/partners-page/PartnerImage";
export default {
  name: "MainBlock",
  components : {PartnerImage},
  data : () => {
    return {
      post : [],
      src : []
    }
  },
  async mounted() {
    await fetch('https://api.podberu.su/api/v1/partner/')
      .then(response => response.json())
      .then(json => this.post = json);
    let post = this.post["data"];
    for (let i=0 ; i<post.length ; i++) {
      this.src.push(post[i].icon);
    }
  },
}
</script>

<style lang="scss" scoped>
  .partners__header-text{
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.38px;
    font-weight: 600;
  }
</style>