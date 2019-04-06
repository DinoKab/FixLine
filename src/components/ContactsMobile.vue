<template>
  <div>
      <v-flex xs12 class="red white--text">
        <v-container fluid text-xs-center>
          <v-layout row wrap justify-center>
            <v-flex xs12 class="mt-3">
              <p class="headline font-weight-black">КОНТАКТЫ</p>

              <p class="caption ">
                Общество с ограниченной ответственностью «ФиксЛайн»
                <br>УНП 193224581
                <br>Республика Беларусь, 220124, г. Минск, ул. М. Лынькова, д.35/1, каб.15
              </p>
              <p class="caption ">
                <a
                  href="mailto:fixlineby@mail.ru"
                  style="text-decoration:none; color:white"
                >почта: fixlineby@mail.ru</a>
              </p>
              <p
                class="caption "
              >Мы всегда рады сотрудничеству! Если у Вас есть предложения или замечания к нашему сервису, мы всегда рады выслушать Вас.</p>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
 
    <a name="contactsMob"></a>
    <v-layout row>
      <v-flex xs12>
        <div style="overflow:hidden;width: 100%;position: relative;">
          <iframe
            width="100%"
            height="440"
            src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=%D0%9C%D0%B8%D0%BD%D1%81%D0%BA%20%D0%BB%D1%8B%D0%BD%D1%8C%D0%BA%D0%BE%D0%B2%D0%B0%2035%2F1+(%D0%9D%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
          <div
            style="position: absolute;width: 80%;bottom: 10px;left: 0;right: 0;margin-left: auto;margin-right: auto;color: #000;text-align: center;"
          >
            <small style="line-height: 1.8;font-size: 2px;background: #fff;">
              Powered by
              <a href="https://embedgooglemaps.com/en/">embedgooglemaps EN</a> &
              <a href="https://iamsterdamcard.it">www.iamsterdamcard.it</a>
            </small>
          </div>
        </div>
      </v-flex>

    
    </v-layout>
  </div>
</template>

<style>
#gmap_canvas img {
  max-width: none !important;
  background: none !important;
}
</style>
