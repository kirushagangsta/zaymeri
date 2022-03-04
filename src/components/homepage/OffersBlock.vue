<template>
  <div class="row mt-3 ps-3 pe-3 offers">
    <div class="col-12">
      <div class="row offers__microcredit">
        <div class="col-12">
          <div class="row">
            <router-link to="/microcredits" class="col-12 pt-3 ps-3 pb-3 offers__block_green">
              <div class="row">
                <div class="col-12">
                  Микрозаймы
                </div>
              </div>
              <div class="row">
                <div class="col-12 text-end offers__microcredit__image">
                  <img src="@/assets/images/microcredit-image.svg" alt="microcredit">
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="row pt-3 offers__debit-credit-cards">
        <div class="col-6">
          <div class="row pe-2">
            <router-link to="debit" class="col-12 pt-3 ps-3 pb-3 offers__block_lightblue">
              <div class="row">
                <div class="col-12">
                  Дебетовые<br/> карты
                </div>
              </div>
              <div class="row">
                <div class="col-12 text-end offers__debit__image">
                  <img src="@/assets/images/debit-cards__img.svg" alt="debit-card">
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-6">
          <div class="row ps-2">
            <router-link to="credit" class="col-12 pt-3 ps-3 pb-3 offers__block_blue">
              <div class="row">
                <div class="col-12">
                  Кредитные<br/> карты
                </div>
              </div>
              <div class="row">
                <div class="col-12 text-end offers__crebit__image">
                  <img src="@/assets/images/credit-cards__img.svg" alt="credit-card">
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OffersBlock"
}
</script>

<style lang="scss" scoped>
 .offers{
   font-size: 15px;
   line-height: 18px;
   font-weight: 600;
   letter-spacing: -0.24px;
 }
 .offers__block{
   border-radius: 16px;
 }
 .offers__block_green{
   @extend .offers__block;
   background: #4ECA9C;
 }
 .offers__block_lightblue{
   @extend .offers__block;
   background: #4EBACA;
 }
 .offers__block_blue{
   @extend .offers__block;
   background: #4FA5D3;
 }
 a{
   color: #FFFFFF;
 }

</style>