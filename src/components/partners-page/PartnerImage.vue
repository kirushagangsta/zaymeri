<template>
  <div class="col-3 text-center  mt-3">
    <img :src="src" alt="partner-img" class="img-fluid">
  </div>
</template>

<script>
export default {
  name: "PartnerImage",
  props : {
    src : String
  }
}
</script>

<style scoped>

</style>