<template>
  <footer class="row mt-3 ps-3 pe-3 mb-4">
    <div class="col-12">
      <div class="row footer__links">
        <div class="col-6 text-start ps-0">
          Пользовательское соглашение
        </div>
        <div class="col-6 text-end pe-1">
          Политика конфиденциальности
        </div>
      </div>
      <div class="row footer__small-text mt-3">
        Мы используем cookies для сбора обезличенных персональных данных.<br/>
        © 2022, ООО «Займери». При использовании материалов гиперссылка на zaymeri.ru обязательна.<br/>
        ИНН 9701182612, ОГРН 1217700379291. 105005, г. Москва, ул. Бауманская, д.7, стр.1, антресоль 2, помещение I, ком.17
      </div>
      <div class="row justify-content-between mt-3">
        <a class="col-auto footer__social-links p-0"  :href="items.link" v-for="items in social" :key="items.src">
          <img :src="require('@/assets/images/' + items.src)" alt="social-img" class="w-100">
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "SiteFooter",
  data : () => {
    return {
      social : []
    }
  },
  mounted() {
    let src = ["vk.png","instagram.png","facebook.png","Telegram.png","Zen.png"];
    let href = ["https://vk.com/groups","https://vk.com/groups","https://vk.com/groups","https://vk.com/groups","https://vk.com/groups"];
    for (let i = 0; i<src.length; i++) {
      let img = new this.imgSocial(src[i], href[i]);
      this.social.push(img);
    }
  },
  methods : {
    imgSocial : function(src,href) {
      this.src = src;
      this.href = href
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer__links{
    font-size: 11px;
    line-height: 130%;
    letter-spacing: -0.24px;
  }
  .footer__small-text{
    font-size: 8px;
    line-height: 130%;
    letter-spacing: -0.24px;
  }
  .footer__social-links{
    width: 15%;
  }
</style>