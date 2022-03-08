<template>
    <img :src="require('@/assets/images/'+ imageSrc + '.png')" class="partners__logos__image" alt="partner-logo">
</template>

<script>
export default {
  name: "PartnersImages",
  props : {
    imageSrc : String
  },
}
</script>

<style scoped>
.partners__logos__image{
  margin-left: 10px;
  margin-right: 10px;
  width: 60px;
  height: 60px;
}
</style>