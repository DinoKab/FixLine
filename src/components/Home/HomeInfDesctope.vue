<template>
  <div>
    <v-img src="./img/БАННЕР_ГЛ.jpg" style="z-index: 2;">
      <v-container fluid class="mt-5">
        <v-layout row align-content-end justify-center fill-height class="mt-3">
          <v-flex xs9 class="mt-5">
            <v-btn color="white" dark large class="mt-5 red--text" href="http://go.fixline.by">On-line заказ</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>

    <v-img src="./img/телефон.jpg" style="z-index: 2;">
      <v-container>
        <v-container fluid class="mt-5 pb-5">
          <v-layout wrap>
            <v-flex md7>
              <p class="display-2 font-weight-black red--text">ОНЛАЙН СЕРВИС АРЕНДЫ АВТО С ЭКИПАЖЕМ</p>
              <p
                class="display-2 font-weight-black mt-5"
              >Установи бесплатное приложение с фиксированными тарифами</p>
            </v-flex>
            <!-- <v-flex md7>
              <v-btn color="red" dark large class="mt-4">On-line заказ</v-btn>
            </v-flex>-->
          </v-layout>
        </v-container>

        <v-layout row align-center justify-center fill-height>
          <v-flex xs2>
            <a href="#">
              <v-img src="./img/logo.png"></v-img>
            </a>
          </v-flex>
          <v-flex xs4>
            <v-layout row wrap justify-center text-xs-center>
              <!-- <v-flex xs12>
                <p class="title">СКАЧАТЬ ПРИЛОЖЕНИЕ</p>
              </v-flex>-->

              <!-- TO DO - ссылки на app store и google play -->
              <v-flex xs6>
                <a href="#">
                  <v-img src="./img/app_store.png"></v-img>
                </a>
              </v-flex>
              <v-flex xs6>
                <a href="#">
                  <v-img src="./img/google_play.png"></v-img>
                </a>
              </v-flex>
              <v-flex xs6 md8 class="mt-3">
                <v-rating v-model="rating" half-increments background-color="red" color="red" large></v-rating>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>

    <v-container fluid text-xs-center>
      <v-layout row wrap justify-center>
        <v-flex xs10 md9>
          <a id="attendance"></a>
          <p class="display-2 font-weight-black">УСЛУГИ</p>
          <p>
            <span class="font-weight-bold red--text">FixLine</span> – это сервис аренды авто с водителем, который поднимает обслуживание клиентов на новый уровень. Куда бы Вы ни ехали – мы готовы предложить Вам лучшие условия по соотношению цена\качество. Едите за ребенком в школу , детский сад или решили не возвращаться из супермаркета с тяжелыми сумками на автобусе? За любую поездку короче 6 километров в FixLine вы платите по фиксированному тарифу
            <span
              class="font-weight-bold red--text"
            >5 рублей</span>! Возникла необходимость проехать через весь город? Нет проблем –
            <span
              class="font-weight-bold red--text"
            >единый тариф 10 рублей</span> и наш комфортабельный автомобиль отвезет Вас в любую точку Минска.
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 4.5
    };
  },
  components: {}
};
</script>
