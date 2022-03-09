<template>
  <div class="row offers pb-3">
    <div class="col-12 pt-3">
      <component v-for="(items,index) in offers" :key="items.bankName"
                 :is="blockType"
                 :bankName="items.bankName"
                 :offerName="items.offerName"
                 :offerDesc="items.offerDescription"
                 :background="backgroundColors[index % backgroundColors.length]"
                 :src="items.src"
                 :imageSrc="items.imageSrc"></component>
    </div>
  </div>
</template>

<script>
import LoanBlock from "@/components/offers-pages/blocks/offers-blocks/LoanBlock";
import CardBlock from "@/components/offers-pages/blocks/offers-blocks/CardBlock";

export default {
  name: "OffersBlock",
  components: {LoanBlock, CardBlock},
  data: () => {
    return {
      offers: [],
      picturesSrc: [],
      mfoColors: ["#4ECA9C", "#4EBACA", "#4FA5D3", "#568BC7", "#4E7CCA"],
      debitColors: ["#BA3FA7", "#BA3F6A", "#903FBA", "#3F6ABA"],
      creditColors: ["#5B9EEC", "#605BEC", "#EC5B7A", "#EC5BE7"]
    }
  },
  async mounted() {
    await fetch("https://api.podberu.su/api/v1/offers/?type=" + this.currentRoute)
        .then(async response =>  {
          return response.json()
        })
        .then(async json => {
          let requiredPicturePartnerNames = [];
          this.offers = json["data"];
          for (let i=0; i< json["data"].length ; i++) {
            if (json["data"][i].partner) {
              requiredPicturePartnerNames.push(json["data"][i].partner);
            }
            else {
              requiredPicturePartnerNames.push(json["data"][i].name);
            }

          }
          await this.fetchPictures(requiredPicturePartnerNames)
        });
    let offerBlocks = this.offers;
    for (let i = 0; i < offerBlocks.length; i++) {
      let partner = "";
      if (offerBlocks[i].partner) {
        partner = offerBlocks[i].partner
      }
      this.offers[i] = new this.offerBlock(offerBlocks[i].name, offerBlocks[i].header, offerBlocks[i].url, partner, this.picturesSrc[i]);
    }
  },
  computed: {
    currentRoute() {
      return this.$route.name
    },
    blockType() {
      if (this.currentRoute === "mfo") {
        return "LoanBlock";
      }
      return "CardBlock";
    },
    backgroundColors() {
      switch (this.currentRoute) {
        case 'mfo' :
          return this.mfoColors;
        case 'debit' :
          return this.debitColors;
        case 'credit_card' :
          return this.creditColors;
      }
      return []
    }
  },
  methods: {
    offerBlock: function (offerName, offerDescription, src, bankName, imageSrc) {
      this.bankName = bankName;
      this.offerName = offerName;
      this.offerDescription = offerDescription;
      this.src = src;
      this.imageSrc = imageSrc;
    },
    async fetchPictures(partnersNames) {
      console.log(partnersNames)
      let pictures = [];
      let srcMap = new Map();
      await fetch('https://api.podberu.su/api/v1/partner/')
          .then(response => response.json())
          .then(json => {
            for (let i = 0; i < json["data"].length; i++) {
              srcMap.set(json["data"][i].name, json["data"][i].icon);
            }
            for (let i = 0; i < partnersNames.length; i++) {
              pictures.push(srcMap.get(partnersNames[i]));
            }
            this.picturesSrc = pictures
          });
    }
  }
}
</script>

<style lang="scss" scoped>
.offers {
  margin-top: -24px;
  border-radius: 24px;
  background: #FFFFFF;
}
</style>