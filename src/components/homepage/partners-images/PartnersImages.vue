<template>
    <img src="@/assets/images/tinkoff.svg" class="partners__logos__image" alt="partner-logo">
    <img src="@/assets/images/joymoney.svg" class="partners__logos__image" alt="partner-logo">
</template>

<script>
export default {
  name: "PartnersImages",
  props : {
    imageSrc : String
  }
}
</script>

<style scoped>
.partners__logos__image{
  margin-left: 10px;
  margin-right: 10px;
}
</style>