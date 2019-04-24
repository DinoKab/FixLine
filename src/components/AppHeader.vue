<template>
  <div>
    <a id="start"></a>

    <!----------------------------------     Desctop     --------------------------------------------->
    <div class="hidden-sm-and-down">
      <v-toolbar app white color="white" style="z-index:100">
        <router-link to="/" tag="span" style="cursor:pointer" class="hidden-sm-and-down">
          <v-container fluid>
            <v-layout row>
              <v-flex offset-lg5 xs4>
                <v-img src="./img/logo.png" width="88px"></v-img>
              </v-flex>
            </v-layout>
          </v-container>
        </router-link>

        <v-spacer class="hidden-md-and-down"></v-spacer>

        <!-- <v-spacer></v-spacer> -->

        <v-toolbar-items class="hidden-sm-and-down mr-4">
          <v-btn style="text-transform: inherit" flat href="/#attendance">Услуги</v-btn>
          <v-btn style="text-transform: inherit" flat href="/drivers">Водителям</v-btn>
          <v-btn style="text-transform: inherit" flat href="/partners">Партнерам</v-btn>
          <v-btn style="text-transform: inherit" flat href="/corporativeСlients">Корпоративным клиентам</v-btn>
          <v-btn style="text-transform: inherit" flat href="/#tariffs">Тарифы</v-btn>
          <v-btn style="text-transform: inherit" flat href="/#aboutCompany">О компании</v-btn>
          <v-btn style="text-transform: inherit" flat href="/#contacts">Контакты</v-btn>
          <v-btn style="text-transform: inherit" flat href="/#chatBot">Чат-бот</v-btn>
        </v-toolbar-items>

        <!-- <v-spacer class="hidden-sm-and-down"></v-spacer> -->

        <v-toolbar-title class="hidden-md-and-down">
          <v-container fluid class="hidden-sm-and-down">
            <v-layout row wrap align-center justify-space-between>
              <v-flex xs6>
                <v-layout row wrap align-center>
                  <!-- TO DO - ссылки на instagram, facebook и vk -->
                  <v-flex xs4>
                    <a href="#">
                      <v-img src="./img/vk.png" width="18"></v-img>
                    </a>
                  </v-flex>
                  <v-flex xs4>
                    <a href="#">
                      <v-img src="./img/insta.png" width="18"></v-img>
                    </a>
                  </v-flex>
                  <v-flex xs4>
                    <a href="#">
                      <v-img src="./img/facebook.png" width="18"></v-img>
                    </a>
                  </v-flex>
                </v-layout>
              </v-flex>

              <v-flex xs5 offset-md1>
                <a
                  href="tel:7785"
                  class="headline font-weight-black"
                  style="text-decoration:none; color:black"
                >
                  <v-icon color="black">call</v-icon>7785
                </a>
              </v-flex>
            </v-layout>
          </v-container>
        </v-toolbar-title>

        <v-spacer class="hidden-md-and-down"></v-spacer>
      </v-toolbar>
    </div>

    <!----------------------------------     Mobile     --------------------------------------------->
    <div class="hidden-md-and-up">
      <v-toolbar app white color="white" style="z-index:100">
        <router-link to="/" tag="span" style="cursor:pointer" class="hidden-md-and-up">
          <v-img src="./img/logo.png" width="70px"></v-img>
        </router-link>

        <a
          href="tel:7785"
          class="title font-weight-black ml-2"
          style="text-decoration:none; color:black"
        >
          <v-icon color="black">call</v-icon>7785
        </a>

        <v-spacer></v-spacer>
        
        <!-- // TO DO - ссылки на instagram, facebook и vk -->
        <v-layout row justify-center>
          <v-flex xs4>
            <a href="#">
              <v-img src="./img/vk.png" width="18"></v-img>
            </a>
          </v-flex>
          <v-flex xs4>
            <a href="#">
              <v-img src="./img/insta.png" width="18"></v-img>
            </a>
          </v-flex>
          <v-flex xs4>
            <a href="#">
              <v-img src="./img/facebook.png" width="18"></v-img>
            </a>
          </v-flex>
        </v-layout>

        <!-- <v-spacer></v-spacer>   -->

        <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      </v-toolbar>

      <v-navigation-drawer
        fixed        
        width="400"
        temporary
        floating
        dark
        v-model="drawer"
        class="hidden-md-and-up grey darken-3"
        style="z-index:200"
      >
        <v-list>
          <v-container fluid class="mb-2">
            <v-layout row justify-end>
              <v-flex xs1>
                <v-icon @click.stop="drawer = !drawer">arrow_back_ios</v-icon>
              </v-flex>
            </v-layout>

            <v-list-tile href="/#attendanceMob">
              <v-list-tile-content>
                <v-list-tile-title>Услуги</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile href="/drivers">
              <v-list-tile-content>
                <v-list-tile-title>Водителям</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile href="/partners">
              <v-list-tile-content>
                <v-list-tile-title>Партнерам</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile href="/corporativeСlients">
              <v-list-tile-content>
                <v-list-tile-title>Корпоративным клиентам</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile href="/#tariffs">
              <v-list-tile-content>
                <v-list-tile-title>Тарифы</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile href="/#aboutCompanyMob">
              <v-list-tile-content>
                <v-list-tile-title>О компании</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile href="/#contactsMob">
              <v-list-tile-content>
                <v-list-tile-title>Контакты</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile href="/#chatBotMob">
              <v-list-tile-content>
                <v-list-tile-title>Чат-бот</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-container>
        </v-list>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  },
  computed: {
    imageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "md":
          return "18";
        case "lg":
          return "35";
        case "xl":
          return "17";
      }
    },
    textSyle() {
      return { fontSize: `${this.imageHeight}px` };
    }
  }
};
</script>

