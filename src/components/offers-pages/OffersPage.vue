<template>
  <header-block></header-block>
  <offers-block></offers-block>
  <SiteFooter/>
</template>

<script>
import HeaderBlock from "@/components/offers-pages/blocks/HeaderBlock";
import OffersBlock from "@/components/offers-pages/blocks/OffersBlock";
import SiteFooter from "@/components/SiteFooter";
export default {
  name: "OffersPage",
  components : {
    HeaderBlock, OffersBlock, SiteFooter
  },
}
</script>

<style scoped>

</style>