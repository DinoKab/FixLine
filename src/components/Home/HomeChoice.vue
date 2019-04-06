<template>
  <div>
    <p class="title font-weight-bold text-xs-center red--text">Выбирая Fix Line, Вы выбираете:</p>
    <v-container>
      <v-container fluid>
        <v-layout row wrap justify-center>
          <v-flex md4>
            <v-card flat color="transparent">
              <v-container fluid text-xs-center>
                <v-layout column align-center justify-center>
                  <v-flex xs4>
                    <v-img
                      src="./img/рассчет_стоимости.png"
                      height="67px"
                      width="65px"
                      class="mt-2"
                    ></v-img>
                  </v-flex>
                  <v-flex xs8>
                    <div class="body-2 font-weight-black my-3">РАСЧЕТ СТОИМОСТИ ПОЕЗДКИ</div>
                    <div
                      class="caption"
                    >Исходя из выбранных услуг и маршрута стоимость рассчитывается автоматически.</div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>

          <v-flex md4>
            <v-card flat color="transparent">
              <v-container fluid text-xs-center>
                <v-layout column align-center justify-center>
                  <v-flex xs4>
                    <v-img
                      src="./img/выбор_комфортабельности.png"
                      height="67px"
                      width="73px"
                      class="mt-2"
                    ></v-img>
                  </v-flex>
                  <v-flex xs8>
                    <div class="body-2 font-weight-black my-3">ВЫБОР КОМФОРТАБЕЛЬНОСТИ</div>
                    <div
                      class="caption"
                    >Выбор машины, исходя из ее класса комфортности, если для клиента это актуально.</div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>

          <v-flex md4>
            <v-card flat color="transparent">
              <v-container fluid text-xs-center>
                <v-layout column align-center justify-center>
                  <v-flex xs4>
                    <v-img
                      src="./img/удобный_интерфейс.png"
                      height="67px"
                      width="65px"
                      class="mt-2"
                    ></v-img>
                  </v-flex>
                  <v-flex xs8>
                    <div class="body-2 font-weight-black my-3">УДОБНЫЙ ИНТЕРФЕЙС ПРИЛОЖЕНИЯ</div>
                    <div
                      class="caption"
                    >Приложение продумано до мелочей. Вызов такси еще не был таким простым.</div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>

          <v-flex md4>
            <v-card flat color="transparent">
              <v-container fluid text-xs-center>
                <v-layout column align-center justify-center>
                  <v-flex xs4>
                    <v-img src="./img/оплата_картой.png" height="67px" width="65px" class="mt-2"></v-img>
                  </v-flex>
                  <v-flex xs8>
                    <div class="body-2 font-weight-black my-3">ОПЛАТА БАНКОВСКОЙ КАРТОЙ</div>
                    <div
                      class="caption"
                    >Возможность, как наличного, так и безналичного расчета (привязка банковской карты в приложении).</div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>

          <v-flex md4>
            <v-card flat color="transparent">
              <v-container fluid text-xs-center>
                <v-layout column align-center justify-center>
                  <v-flex xs4>
                    <v-img src="./img/эл_карта.png" height="67px" width="65px" class="mt-2"></v-img>
                  </v-flex>
                  <v-flex xs8>
                    <div class="body-2 font-weight-black my-3">ЭЛЕКТРОННАЯ КАРТА МАРШРУТА</div>
                    <div
                      class="caption"
                    >Приложение сохраняет весь маршрут, включая промежуточные остановки.</div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>

          <v-flex md4>
            <v-card flat color="transparent">
              <v-container fluid text-xs-center>
                <v-layout column align-center justify-center>
                  <v-flex xs4>
                    <v-img src="./img/лучшие_водители.png" height="67px" width="65px" class="mt-2"></v-img>
                  </v-flex>
                  <v-flex xs8>
                    <div class="body-2 font-weight-black my-3">СТРЕМИМСЯ СТАТЬ ЛУЧШЕ</div>
                    <div
                      class="caption"
                    >Оценивая работу водителя, Вы сами участвуете в улучшении качества сервиса.</div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>

          <v-flex md4>
            <v-card flat color="transparent">
              <v-container fluid text-xs-center>
                <v-layout column align-center justify-center>
                  <v-flex xs4>
                    <v-img src="./img/мгновенный_поиск.png" height="67px" width="65px" class="mt-2"></v-img>
                  </v-flex>
                  <v-flex xs8>
                    <div class="body-2 font-weight-black my-3">МГНОВЕННЫЙ ПОИСК И ПОДАЧА АВТО</div>
                    <div class="caption">Быстрый вызов из любой точки Вашего города или района.</div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>

          <v-flex md4>
            <v-card flat color="transparent">
              <v-container fluid text-xs-center>
                <v-layout column align-center justify-center>
                  <v-flex xs4>
                    <v-img
                      src="./img/квалификационные_водители.png"
                      height="67px"
                      width="65px"
                      class="mt-2"
                    ></v-img>
                  </v-flex>
                  <v-flex xs8>
                    <div class="body-2 font-weight-black my-3">КВАЛИФИЦИРОВАННЫЕ ВОДИТЕЛИ</div>
                    <div
                      class="caption"
                    >Легальные и безопасные перевозки квалифицированными и опытными водителями.</div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>

          <v-flex md4>
            <v-card flat color="transparent">
              <v-container fluid text-xs-center>
                <v-layout column align-center justify-center>
                  <v-flex xs4>
                    <v-img
                      src="./img/услуги_на_любой_случай.png"
                      height="67px"
                      width="65px"
                      class="mt-2"
                    ></v-img>
                  </v-flex>
                  <v-flex xs8>
                    <div class="body-2 font-weight-black my-3">УСЛУГИ НА ЛЮБОЙ СЛУЧАЙ</div>
                    <div
                      class="caption"
                    >Сервис предоставляет доп. услуги: трезвый водитель, доставка, зарядка АКБ и другие.</div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </div>
</template>
