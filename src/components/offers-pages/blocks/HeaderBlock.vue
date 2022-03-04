<template>
  <header class="row pt-4 pb-5 justify-content-end ps-0 header" :class="[{'loans-back':loansBack},{'debit-back':debitBack},{'credit-back':creditBack}]">
    <div class="">
      <div class="header__text" ref="offerName"></div>
      <div class="col-auto pe-0">
        <img :src="require('@/assets/images/header-img-'+currentRoute+'.svg')" :alt="currentRoute">
      </div>
    </div>

  </header>
</template>

<script>
export default {
  name: "HeaderBlock",
  mounted() {
    this.$refs.offerName.innerHTML = this.offerName;
  },
  computed: {
    currentRoute() {
      return this.$route.name
    },
    loansBack() {
      return this.currentRoute === "mfo";
    },
    debitBack() {
      return this.currentRoute === "debit";
    },
    creditBack() {
      return this.currentRoute === "credit_card";
    },
    offerName() {
      switch (this.currentRoute) {
        case 'mfo' : return 'Займы';
        case 'debit' : return `Дебетовые<br/>
                карты`;
        case 'credit_card' : return `Кредитные<br/>
                карты`
      }
      return null
    }
  }
}
</script>

<style lang="scss" scoped>
  .header__text{
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.38px;
    color: #FBFCFD;
    font-weight: 600;
    position: relative;
    height: 0;
    top : 5px;
    left: 5px;
  }
  .loans-back{
    background: linear-gradient(333.62deg, rgba(178, 0, 223, 0.74) -0.16%, rgba(44, 255, 179, 0.74) -0.15%, rgba(4, 0, 223, 0.74) 100%), #CEC7E6;
  }
  .debit-back{
    background: linear-gradient(333.62deg, rgba(178, 0, 223, 0.74) -0.16%, rgba(107, 36, 203, 0.74) -0.15%, rgba(223, 0, 107, 0.74) 100%), #CEC7E6;
  }
  .credit-back{
    background: linear-gradient(333.62deg, rgba(178, 0, 223, 0.74) -0.16%, rgba(108, 229, 255, 0.74) -0.15%, rgba(0, 69, 223, 0.74) 100%), #CEC7E6;
  }
</style>