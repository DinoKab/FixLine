<template>
  <div>
    <v-img src="./img/БАННЕР МОБ ГЛ.jpg" style="z-index: 2;"></v-img>

    <v-img src="./img/телефон_mob.jpg" style="z-index: 2;">
      <v-container fluid text-xs-center>
        <v-layout row wrap justify-center class="mb-5">
          <v-flex xs5 class="mt-4">
            <v-img src="./img/logo.png"></v-img>
          </v-flex>
          <v-flex xs12 class="mt-4">
            <p
              class="title font-weight-black"
            >Установи бесплатное приложение с фиксированными тарифами</p>
          </v-flex>

          <!-- TO DO - ссылки на app store и google play -->
          <v-flex xs6 class="mt-4">
            <a href="#">
              <v-img src="./img/app_store.png"></v-img>
            </a>
          </v-flex>
          <v-flex xs6 class="mt-4">
            <a href="#">
              <v-img src="./img/google_play.png"></v-img>
            </a>
          </v-flex>

          <v-flex xs11 class="mt-3">
            <v-rating v-model="rating" half-increments background-color="red" color="red"></v-rating>
          </v-flex>

          <v-flex xs12 class="mt-5 pb-5">
            <p class="title font-weight-black red--text">ОНЛАЙН СЕРВИС АРЕНДЫ АВТО С ЭКИПАЖЕМ</p>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container>
        <v-container fluid text-xs-center class="pt-5">
          <v-layout row class="mt-5">
            <v-flex>
              <v-btn color="red" dark large class="mt-4"  href="http://go.fixline.by">On-line заказ</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-container>
    </v-img>

    <v-layout row wrap justify-center text-xs-center>
      <v-flex xs10 md9>
        <a name="attendanceMob"></a>
        <p class="headline font-weight-black mt-4">УСЛУГИ</p>
        <p class="caption">
          FixLine – это сервис аренды авто с водителем, который поднимает обслуживание клиентов на новый уровень. Куда бы Вы ни ехали – мы готовы предложить Вам лучшие условия по соотношению цена\качество. Едите за ребенком в школу , детский сад или решили не возвращаться из супермаркета с тяжелыми сумками на автобусе? За любую поездку короче 6 километров в FixLine вы платите по фиксированному тарифу
          <span
            class="font-weight-bold red--text"
          >5 рублей</span>! Возникла необходимость проехать через весь город? Нет проблем –
          <span
            class="font-weight-bold red--text"
          >единый тариф 10 рублей</span> и наш комфортабельный автомобиль отвезет Вас в любую точку Минска.
        </p>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 4.5
    };
  }
};
</script>
