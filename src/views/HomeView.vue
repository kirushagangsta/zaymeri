<template>
  <header-block/>
  <offers-block/>
  <partners-block/>
  <site-footer/>
</template>

<script>
import HeaderBlock from "@/components/homepage/HeaderBlock";
import OffersBlock from "@/components/homepage/OffersBlock";
import PartnersBlock from "@/components/homepage/PartnersBlock";
import SiteFooter from "@/components/SiteFooter";
export default {
  name: 'HomeView',
  components: {HeaderBlock , PartnersBlock, OffersBlock,SiteFooter},
}
</script>
