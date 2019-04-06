<template>
  <div>
    <a id="chatBot"></a>
    <v-container>
      <v-layout row align-center justify-center fill-height>
        <v-flex xs2>
          <a href="#">
            <v-img src="./img/bot.png"></v-img>
          </a>
        </v-flex>
        <v-flex xs8>
          <v-layout row wrap justify-center text-xs-center>
            <v-flex xs9>
              <p class="display-1 font-weight-black">Напишите «привет» и бот вызовет вам такси</p>
            </v-flex>
            <!-- TO DO - ссылки на чат-боты -->
            <v-flex xs5 offset-md1>
              <a href="#">
                <v-img src="./img/TELEGRAM_chat.png"></v-img>
              </a>
            </v-flex>
            <v-flex xs5 offset-md1>
              <a href="#">
                <v-img src="./img/viber_chat.png"></v-img>
              </a>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
