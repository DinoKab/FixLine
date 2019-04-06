<template>
  <div>
    <div class="grey darken-4">
      <v-container fluid>
        <v-layout row wrap justify-space-between>
          <v-flex xs12 md6 offset-md1>
            <v-container fluid>
              <v-layout row wrap class="white--text">
                <v-flex xs7 md6>
                  <div>
                    <a style="text-decoration:none; color:white" href="#attendance">Услуги</a>
                  </div>
                  <div>
                    <a style="text-decoration:none; color:white" to="drivers">Водители</a>
                  </div>
                  <div>
                    <a style="text-decoration:none; color:white" to="partners">Партнерам</a>
                  </div>
                  <div>
                    <a
                      style="text-decoration:none; color:white"
                      to="corporativeСlients"
                    >Корпоративным клиентам</a>
                  </div>
                  <div>
                    <a style="text-decoration:none; color:white" href="#tariffs">Тарифы</a>
                  </div>
                  <div>
                    <a style="text-decoration:none; color:white" href="#aboutCompany">О компании</a>
                  </div>
                  <div>
                    <a style="text-decoration:none; color:white" href="#contacts">Контакты</a>
                  </div>
                </v-flex>
                <v-flex xs5 md6>
                  <p>
                    <a
                      style="text-decoration:none; color:white"
                      href="https://www.google.ru/maps/place/%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%9C%D0%B8%D1%85%D0%B0%D1%81%D1%8F+%D0%9B%D1%8B%D0%BD%D1%8C%D0%BA%D0%BE%D0%B2%D0%B0+35,+%D0%9C%D1%96%D0%BD%D1%81%D0%BA/@53.9286237,27.4778849,19.46z/data=!4m8!1m2!2m1!1z0KDQtdGB0L_Rg9Cx0LvQuNC60LAg0JHQtdC70LDRgNGD0YHRjCwgMjIwMTI0LCDQsy4g0JzQuNC90YHQuiwg0YPQuy4g0JwuINCb0YvQvdGM0LrQvtCy0LAsINC0LjM1LzE!3m4!1s0x46dbc519e0a9398d:0xe4e2669e658ee37b!8m2!3d53.9286565!4d27.478357"
                    >г. Минск, ул. М. Лынькова, д.35/1, каб.15</a>
                  </p>
                  <p>
                    <a
                      href="mailto:fixlineby@mail.ru"
                      style="text-decoration:none; color:white"
                    >почта: fixlineby@mail.ru</a>
                  </p>
                  <p>
                    <a href="tel:+7785" style="text-decoration:none; color:white">7785</a>
                  </p>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>

          <v-flex xs12 md4>
            <v-flex xs12 offset-md5 text-xs-center>
              <a
                href="tel:+7785"
                class="display-1 font-weight-black"
                style="text-decoration:none; color:white"
              >7785</a>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container fluid text-xs-center class="white--text">
        <v-layout row wrap align-center justify-space-around>
          <v-flex xs12 md3 class="mb-4">
            <v-layout row align-center justify-center>
              <v-flex xs4 md3>Поделится:</v-flex>
              <v-flex xs1>
                <a href="https://vk.com">
                  <v-img src="./img/vk.png"></v-img>
                </a>
              </v-flex>
              <v-flex xs1>
                <a href="https://www.instagram.com">
                  <v-img src="./img/insta.png"></v-img>
                </a>
              </v-flex>
              <v-flex xs1>
                <a href="https://www.facebook.com">
                  <v-img src="./img/facebook.png"></v-img>
                </a>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 md4 class="mb-4">© 2019 ООО «ФиксЛайн»</v-flex>
          <v-flex xs12 md3 class="mb-4">
            <v-layout row align-center justify-center>
              <v-flex xs6 md4>Мы в соц. сетях:</v-flex>
              <v-flex xs1>
                <!-- TO DO - ссылки на instagram, facebook и vk -->
                <a href="#">
                  <v-img src="./img/insta_white.png"></v-img>
                </a>
              </v-flex>
              <v-flex xs1>
                <a href="#">
                  <v-img src="./img/facebook_подвал.png"></v-img>
                </a>
              </v-flex>
              <v-flex xs1>
                <a href="#">
                  <v-img src="./img/vk_white.png"></v-img>
                </a>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <div>
      <v-layout row justify-center text-xs-center class="mt-4">
        <!-- TO DO - ссылки на лицензионное соглашение -->
        <v-flex xs10>
          <p class="caption">
            Перед использованием сервиса ознакомьтесь с
            <a
              href="#"
              style="text-decoration:none; color: red"
            >лицензионным соглашением</a>
          </p>
        </v-flex>
      </v-layout>

      <v-layout row wrap align-center class="mb-4 mt-2">
        <v-flex offset-md1 xs3 md1>
          <router-link to="/" tag="span" style="cursor:pointer">
            <v-img src="./img/logo.png"></v-img>
          </router-link>
        </v-flex>

        <v-flex xs6 md8 class="ml-4">
          <a
            class="caption"
            href="https://kandk.team/"
            style="text-decoration:none; color: #757575"
          >Дизайн и разработка сайта - K&K TEAM</a>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>
