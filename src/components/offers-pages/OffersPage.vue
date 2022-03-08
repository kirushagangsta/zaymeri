<template>
  <header-block></header-block>
  <offers-block></offers-block>
</template>

<script>
import HeaderBlock from "@/components/offers-pages/blocks/HeaderBlock";
import OffersBlock from "@/components/offers-pages/blocks/OffersBlock";
export default {
  name: "OffersPage",
  components : {
    HeaderBlock, OffersBlock
  }
}
</script>

<style scoped>

</style>