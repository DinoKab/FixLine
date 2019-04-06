<template>
  <div>
    <a id="chatBotMob"></a>
    <v-container>
      <v-layout row align-center justify-center fill-height>
        <v-flex xs7>
          <v-layout row wrap justify-center text-xs-center>
            <v-flex xs12>
              <p class="title font-weight-black">Напишите «привет» и бот вызовет вам такси</p>
            </v-flex>
            <v-flex xs12 class="my-1">
              <a href="#">
                <v-img src="./img/TELEGRAM_chat.png"></v-img>
              </a>
            </v-flex>
            <!-- TO DO - ссылки на чат-боты -->
            <v-flex xs12 class="my-1">
              <a href="#">
                <v-img src="./img/viber_chat.png"></v-img>
              </a>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs4 offset-xs1>
          <a href="#">
            <v-img src="./img/bot.png"></v-img>
          </a>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
