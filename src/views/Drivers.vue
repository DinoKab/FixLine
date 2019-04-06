<template>
  <div>
    <!----------------------------------     Destop hat      --------------------------------------------->
    <v-img src="./img/водителям_баннер.jpg" class="hidden-sm-and-down">
      <v-container>
        <v-container fluid class>
          <v-layout wrap>
            <v-flex md8>
              <p class="display-2 font-weight-black mt-3">ВОДИТЕЛЯМ</p>
              <p
                class="headline font-weight-black red--text mt-4"
              >Работа с нашим приложением - это оптимальный способ, как основного заработка, так и подработки!</p>
            </v-flex>
          </v-layout>
        </v-container>
      </v-container>

      <v-container>
        <v-container fluid class="mt-1">
          <v-layout row wrap>
            <v-flex xs12>
              <p class="display-2 font-weight-black">СТАТЬ ВОДИТЕЛЕМ</p>
            </v-flex>
          </v-layout>
        </v-container>

        <v-layout row wrap justify-space-between align-center class="mt-3">
          <v-flex xs10 md3>
            <span class="title font-weight-bold ml-3">Ваш регион</span>
            <v-form class="mt-2">
              <v-text-field
                v-model="regionDriver"
                solo
                dark
                background-color="grey darken-3"
                color="blue-grey lighten-2"
                label="Минск"
              ></v-text-field>
            </v-form>
          </v-flex>
          <v-flex xs10 md3>
            <span class="title font-weight-bold ml-3">Ваш номер</span>
            <v-form class="mt-2">
              <v-text-field
                v-model="numberDriver"
                :rules="numberRules"
                solo
                dark
                background-color="grey darken-3"
                color="blue-grey lighten-2"
                label="+375"
              ></v-text-field>
            </v-form>
          </v-flex>
          <v-flex xs10 md3>
            <v-btn block large class="red white--text">Оставить заявку</v-btn>
          </v-flex>
        </v-layout>
      </v-container>

      <!-- <v-layout row justify-center text-xs-center class="mt-4">
        <v-flex xs10>
          <p>
            Перед использованием сервиса ознакомьтесь с
            <a
              href="#"
              style="text-decoration:none; color: red"
            >лицензионным соглашением</a>
          </p>
        </v-flex>
      </v-layout>-->
    </v-img>

    <!----------------------------------     Mobile hat      --------------------------------------------->
    <v-img src="./img/водителям_баннер_mob.jpg" class="hidden-md-and-up">
      <v-container>
        <v-container fluid text-xs-center class="mb-5">
          <v-layout wrap>
            <v-flex md8>
              <p class="title font-weight-black">ВОДИТЕЛЯМ</p>
              <p
                class="body-1 font-weight-black red--text mt-4"
              >Работа с нашим приложением - это оптимальный способ, как основного заработка, так и подработки!</p>
            </v-flex>
          </v-layout>
        </v-container>
      </v-container>

      <v-container>
        <v-container fluid class="mt-5">
          <v-layout row wrap text-xs-center>
            <v-flex xs12>
              <p class="title font-weight-black mt-4">СТАТЬ ВОДИТЕЛЕМ</p>
            </v-flex>
          </v-layout>
        </v-container>

        <v-layout row wrap justify-center align-center class="mt-3">
          <v-flex xs10 md3>
            <span class="title font-weight-bold ml-3">Ваш регион</span>
            <v-form class="mt-2">
              <v-text-field
                v-model="regionDriver"
                :rules="numberRules"
                solo
                dark
                background-color="grey darken-3"
                color="blue-grey lighten-2"
                label="Минск"
              ></v-text-field>
            </v-form>
          </v-flex>
          <v-flex xs10 md3>
            <span class="title font-weight-bold ml-3">Ваш номер</span>
            <v-form class="mt-2">
              <v-text-field
                v-model="numberDriver"
                solo
                dark
                background-color="grey darken-3"
                color="blue-grey lighten-2"
                label="+375"
              ></v-text-field>
            </v-form>
          </v-flex>
          <v-flex class="red mt-3" style="border-radius: 5px" xs10 md3>
            <v-btn block flat large class="white--text">Оставить заявку</v-btn>
          </v-flex>
        </v-layout>
      </v-container>

      <!-- <v-layout row justify-center text-xs-center class="mt-5">
        <v-flex xs10>
          <p class="caption">
            Перед использованием сервиса ознакомьтесь с
            <a
              href="#"
              style="text-decoration:none; color: red"
            >лицензионным соглашением</a>
          </p>
        </v-flex>
      </v-layout>-->
    </v-img>
    <!----------------------------------     End hat      --------------------------------------------->

    <v-container>
      <v-list-tile v-for="(item, i) in list" flat :key="`list${i}`">
        <v-list-tile>
          <v-img src="./img/элемент.png" width="28"></v-img>
        </v-list-tile>

        <v-list-tile-content class="mt-2">
          <p class="body-1">{{item.title}}</p>
        </v-list-tile-content>
      </v-list-tile>
    </v-container>

    <div class="grey lighten-3 pb-5">
      <v-container fluid>
        <p class="display-1 font-weight-black text-xs-center mt-3 mb-4">ТРЕБОВАНИЯ</p>
        <v-layout row wrap justify-space-around>
          <v-flex xs5 md2 text-md- class="mt-3">
            <v-img src="./img/trebovania_1.png"></v-img>
          </v-flex>
          <v-flex xs5 md2 class="mt-3">
            <v-img src="./img/trebovania_2.png"></v-img>
          </v-flex>
          <v-flex xs5 md2 class="mt-3">
            <v-img src="./img/trebovania_3.png"></v-img>
          </v-flex>
          <v-flex xs5 md2 class="mt-3">
            <v-img src="./img/trebovania_4.png"></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      regionDriver: "",
      numberDriver: "",

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
          title: "Быстрое оформление"
        },
        {
          title: "Минимальные затраты"
        },
        {
          title: "Самая низкая процентная ставка за заказ в городе"
        },
        {
          title:
            "Возможность работать без желтых номеров, таксометра и двойного ТО"
        },
        {
          title: "Возможность работы на своем авто или на авто компании"
        },
        {
          title: "Стабильное мобильное приложение для водителя (ANDROID 4.1+)"
        },
        {
          title: "Свободный график работы"
        },
        {
          title: "Большой трафик заказов"
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
