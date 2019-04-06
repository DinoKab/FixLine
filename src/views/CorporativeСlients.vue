<template>
  <div>
    <!----------------------------------     Destop hat      --------------------------------------------->
    <v-img src="./img/корпоративным_баннер.jpg" class="hidden-sm-and-down">
      <v-container>
        <v-container fluid>
          <v-layout wrap>
            <v-flex md8 xl7>
              <p class="display-2 font-weight-black mt-4">FIX LINE ДЛЯ БИЗНЕСА</p>
              <p
                class="headline font-weight-black red--text mt-4"
              >Полноценное корпоративное решение для малого, среднего и крупного бизнеса.</p>
            </v-flex>

            <v-flex md3>
              <v-btn
                style="border-radius:5px"
                class="caption red white--text"
              >ВХОД ДЛЯ КОРПОРАТИВНЫХ КЛИЕНТОВ</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-container>

      <v-container>
        <v-container fluid class>
          <v-layout row wrap>
            <v-flex xs12>
              <p class="display-2 font-weight-black">СТАТЬ КЛИЕНТОМ</p>
            </v-flex>
          </v-layout>
        </v-container>

        <v-layout row wrap align-center class="mt-3">
          <v-flex xs10 md3 xl2>
            <span class="title font-weight-bold ml-3">Ваш номер</span>
            <v-form class="mt-2">
              <v-text-field
                v-model="numberClient"
                :rules="numberRules"
                solo
                dark
                background-color="grey darken-3"
                color="blue-grey lighten-2"
                label="+375"
              ></v-text-field>
            </v-form>
          </v-flex>
          <v-flex xs10 md3 xl2 offset-sm1>
            <v-btn block large class="red white--text">Оставить заявку</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>

    <!----------------------------------     Mobile hat      --------------------------------------------->
    <v-img src="./img/корпоративным_баннер_моб.jpg" class="hidden-md-and-up">
      <v-container>
        <v-container fluid text-xs-center class="mb-5">
          <v-layout wrap>
            <v-flex md8>
              <p class="title font-weight-black">FIX LINE ДЛЯ БИЗНЕСА</p>
              <p
                class="body-1 font-weight-black red--text mt-4"
              >Полноценное корпоративное решение для малого, среднего и крупного бизнеса.</p>
            </v-flex>
          </v-layout>
        </v-container>
      </v-container>
      <v-container class="mt-5">
        <v-container fluid class="mt-5">
          <v-layout row wrap text-xs-center>
            <v-flex xs12>
              <p class="title font-weight-black mt-5">СТАТЬ КЛИЕНТОМ</p>
            </v-flex>
          </v-layout>
        </v-container>

        <v-layout row wrap justify-center align-center class="mt-2">
          <v-flex xs10 md3>
            <span class="title font-weight-bold ml-3">Ваш номер</span>
            <v-form class="mt-2">
              <v-text-field
                v-model="numberClient"
                :rules="numberRules"
                solo
                dark
                background-color="grey darken-3"
                color="blue-grey lighten-2"
                label="+375"
              ></v-text-field>
            </v-form>
          </v-flex>
          <v-flex class="mb-3" xs10 md3>
            <v-btn block large class="red white--text">Оставить заявку</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
    <!----------------------------------     End hat      --------------------------------------------->

    <v-img src="./img/фон-вход корп клиентов_моб.jpg" class="hidden-md-and-up">
      <v-container fluid text-xs-center>
        <v-layout row justify-center class="mb-3">
          <v-flex md3>
            <v-btn outline block class="caption white--text">ВХОД ДЛЯ КОРПОРАТИВНЫХ КЛИЕНТОВ</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>

    <v-container text-xs-center text-md-left class="mb-4">
      <v-layout justify-center>
        <p
          class="font-weight-black red--text mt-4"
          :class="titleSize"
        >Корпоративные поездки – удобно и выгодно!</p>
      </v-layout>

      <v-container fluid text-xs-center text-md-left>
        <v-layout row wrap align-center>
          <v-flex>
            <p class="font-weight-black" :class="titleSize">Подключившись к сервису вы получаете:</p>

            <v-layout row wrapfill-height v-for="(item, i) in list" flat :key="`list${i}`">
              <v-list-tile>
                <v-img src="./img/элемент.png" width="28"></v-img>
              </v-list-tile>

              <v-list-tile-content class="mt-2">
                <p :class="textSize">{{item.title}}</p>
              </v-list-tile-content>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>

    <v-img src="./img/фон-вход корп клиентов.jpg" class="hidden-sm-and-down mb-4">
      <v-container fluid grid-list-xl text-xs-center class="mt-4">
        <v-layout row justify-center align-center fill-height>
          <v-flex md3 class>
            <v-btn outline block large class="white--text">ВХОД ДЛЯ КОРПОРАТИВНЫХ КЛИЕНТОВ</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberClient: "",

      numberRules: [
        v =>
          /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){12,20}(\s*)?$/.test(v) ||
          "Пожалуйста, используйте такой формат: +375000000000"
      ]
    };
  },

  computed: {
    list() {
      return [
        {
          title: "быстрый и надежный способ передвижения ваших сотрудников"
        },
        {
          title: "онлайн отчетность о всех поездках сотрудников"
        },
        {
          title: "отслеживание и управление заказами в личном кабинете"
        },
        {
          title: "работаем для Вас 24/7"
        },
        {
          title: "оплата наличными и с корпоративного счёта"
        },
        {
          title: "привязка сотрудников к сервису по номеру телефона"
        }
      ];
    },
    textSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "caption";
        case "sm":
          return "subheading";
        case "md":
          return "subheading";
        case "lg":
          return "subheading";
        case "xl":
          return "subheading";
      }
    },
    titleSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "title";
        case "sm":
          return "headline";
        case "md":
          return "headline";
        case "lg":
          return "headline";
        case "xl":
          return "headline";
      }
    }
  }
};
</script>
