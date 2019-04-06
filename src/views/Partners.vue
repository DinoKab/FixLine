<template>
  <div>
    <a id="becomeAPartner"></a>
    <!----------------------------------     Destop hat      --------------------------------------------->
    <v-img src="./img/партнерам_баннер.jpg" class="hidden-sm-and-down">
      <v-container>
        <v-container fluid>
          <v-layout wrap>
            <v-flex md8>
              <p class="display-2 font-weight-black mt-4">ПАРТНЕРАМ</p>
              <p
                class="headline font-weight-black red--text mt-4"
              >Компания Fix Line заинтересована в распространении услуг сервиса по территории Беларуси, а потому и в сотрудничестве с компаниями-партнерами.</p>
            </v-flex>
          </v-layout>
        </v-container>
      </v-container>

      <v-container class="hidden-lg-and-down mt-5 mb-5"></v-container>

      <v-container>
        <v-container fluid class="mt-4">
          <v-layout row wrap>
            <v-flex xs12>
              <p class="display-2 font-weight-black">СТАТЬ ПАРТНЕРОМ</p>
            </v-flex>
          </v-layout>
        </v-container>

        <v-layout row wrap justify-space-between align-center class="mt-3">
          <v-flex xs10 md3>
            <span class="title font-weight-bold ml-3">Ваш регион</span>
            <v-form class="mt-2">
              <v-text-field
                v-model="regionPartner"
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
                v-model="numberPartner"
                :rules="numberRules"
                solo
                dark
                background-color="grey darken-3"
                color="blue-grey lighten-2"
                label="+375"
              ></v-text-field>
            </v-form>
          </v-flex>
          <v-flex xs10 md3 class="mt-1">
            <v-btn block large class="red white--text">Стать партнером</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>

    <!----------------------------------     Mobile hat      --------------------------------------------->
    <v-img src="./img/партнерам_баннер_моб.jpg" class="hidden-md-and-up">
      <v-container>
        <v-container fluid text-xs-center class="mb-5">
          <v-layout wrap>
            <v-flex md8>
              <p class="title font-weight-black">ПАРТНЕРАМ</p>
              <p
                class="body-1 font-weight-black red--text mt-4 mb-5"
              >Компания Fix Line заинтересована в распространении услуг сервиса по территории Беларуси, а потому и в сотрудничестве с компаниями-партнерами.</p>
            </v-flex>
          </v-layout>
        </v-container>
      </v-container>

      <v-container class="mt-3">
        <a id="becomeAPartnerMob"></a>
        <v-container fluid class="mt-5">
          <v-layout row wrap text-xs-center>
            <v-flex xs12>
              <p class="title font-weight-black mt-5">СТАТЬ ПАРТНЕРОМ</p>
            </v-flex>
          </v-layout>
        </v-container>

        <v-layout row wrap justify-center align-center class="mt-2">
          <v-flex xs10 md3>
            <span class="title font-weight-bold ml-3">Ваш регион</span>
            <v-form class="mt-2">
              <v-text-field
                v-model="regionPartner"
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
                v-model="numberPartner"
                :rules="numberRules"
                solo
                dark
                background-color="grey darken-3"
                color="blue-grey lighten-2"
                label="+375"
              ></v-text-field>
            </v-form>
          </v-flex>
          <v-flex class="red mt-3" style="border-radius: 5px" xs10 md3>
            <v-btn block flat large class="white--text">Стать партнером</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
    <!----------------------------------     End hat      --------------------------------------------->

    <v-container>
      <v-container text-xs-center text-md-left fluid>
        <v-layout row wrap>
          <v-flex>
            <p class="font-weight-black" :class="titleSize">ИНФОРМАЦИЯ ПАРТНЕРАМ</p>
            <p
              :class="textSize"
            >Нашими партнерами могут стать перевозчики, таксопарки и диспетчерские службы, которые хотят развиваться и выходить на качественно новый уровень ведения бизнеса. Стать нашим партнером может компания (юр.лицо либо индивидуальный предприниматель), работающая на законных основаниях, согласно законодательству Республики Беларусь.</p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>

    <v-container>
      <v-layout justify-center>
        <v-flex xs11 sm7 md12 lg10 xl7 class="hidden-sm-and-down">
          <v-img src="./img/важно.png">
            <v-container>
              <v-container class="white--text">
                <p class="headline font-weight-black">ВАЖНО!</p>
                <p
                  class="subheading"
                >Мы не подключаем к сервису водителей напрямую, а работаем только через компанию-партнера. Ответственность за предоставленные услуги аренды авто с экипажем, посредством сервиса Fix Line полностью лежит на перевозчике, который отвечает, как за безопасность, качество и легальность оказываемых услуг, так и за уровнем профессионализма своих сотрудников (водителей), а также за предоставление ими всей необходимой профессиональной документации, подтверждающей квалификацию. Мы заключаем договора сотрудничества только с серьезными партнерами, действующими в рамках закона.</p>
              </v-container>
            </v-container>
          </v-img>
        </v-flex>
        <v-flex xs12 sm6 md8 class="hidden-md-and-up white--text">
          <v-img src="./img/важно_моб.png">
            <p class="title font-weight-black ml-5 mt-4">ВАЖНО!</p>
            <p
              class="caption ml-3 mt-4"
            >Мы не подключаем к сервису водителей напрямую, а работаем только через компанию-партнера. Ответственность за предоставленные услуги аренды авто с экипажем, посредством сервиса Fix Line полностью лежит на перевозчике, который отвечает, как за безопасность, качество и легальность оказываемых услуг, так и за уровнем профессионализма своих сотрудников (водителей), а также за предоставление ими всей необходимой профессиональной документации, подтверждающей квалификацию. Мы заключаем договора сотрудничества только с серьезными партнерами, действующими в рамках закона.</p>
          </v-img>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-container fluid text-xs-center text-md-left>
        <v-layout row wrap>
          <v-flex>
            <p class="font-weight-black" :class="titleSize">КАК ВКЛЮЧИТЬСЯ В СОТРУДНИЧЕСТВО С НАМИ?</p>
            <p
              :class="textSize"
            >После того, как Вы предоставите нам в электронном виде копию лицензии на право осуществления деятельности в области автомобильного транспорта и копию свидетельства о государственной регистрации, и мы осуществим их проверку, Вы получите код доступа в личный кабинет сервиса.</p>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container fluid text-xs-center text-md-left>
        <v-layout row wrap>
          <v-flex>
            <p
              class="font-weight-black"
              :class="titleSize"
            >ЧТО ДАЕТ КОМПАНИИ-ПЕРЕВОЗЧИКУ СОТРУДНИЧЕСТВО С FIX LINE?</p>
            <p
              :class="textSize"
            >Fix Line это в первую очередь сервис, который повышает показатели мобильности работы каждого водителя такси, а значит и таксопарка в целом. А это в свою очередь напрямую влияет на прибыльность предприятия, к которой стремится каждый предприниматель.</p>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container fluid text-xs-center text-md-left>
        <v-layout row wrap align-center>
          <v-flex>
            <p
              class="font-weight-black"
              :class="titleSize"
            >СРЕДИ ПРЕИМУЩЕСТВ FIX LINE ПРИМЕНИТЕЛЬНО К ВЫГОДАМ ДЛЯ ПЕРЕВОЗЧИКА СТОИТ ВЫДЕЛИТЬ СЛЕДУЮЩИЕ:</p>

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

    <div class="grey lighten-3 pb-5">
      <v-container fluid text-xs-center>
        <v-layout row wrap justify-center>
          <v-flex xs12 md7>
            <p
              class="font-weight-black red--text mt-4"
              :class="titleSize"
            >Если Вы заинтересованы в партнерстве с Fix Line …</p>
            <p
              class="font-weight-black mt-4"
              :class="titleSize"
            >Оставьте заявку, мы свяжемся с Вами, подпишем договор и добро пожаловать в семейство компаний-партнеров Fix Line!</p>
          </v-flex>
          <v-flex style="border-radius: 5px" class="hidden-md-and-down mt-4" xs10 md10>
            <v-btn large dark class="red" href="#becomeAPartner">Стать партнером</v-btn>
          </v-flex>
          <v-flex style="border-radius: 5px" class="hidden-sm-and-up mt-4" xs10 md10>
            <v-btn large dark class="red" href="#becomeAPartnerMob">Стать партнером</v-btn>
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
      regionPartner: "",
      numberPartner: "",

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
          title:
            "Разгрузка диспетчерской службы, поскольку заказы Ваши водители получают непосредственно через наш сервис, минуя Вашего диспетчера. Это существенно экономит время принятия заказа и время подачи авто клиенту, т.к. программа выбирает автомобиль, находящийся в данный конкретный момент ближе всего к заказчику"
        },
        {
          title:
            "Вы можете задействовать меньше диспетчеров, и при этом эффективность Вашей работы ничуть не уменьшится, а даже увеличится."
        },
        {
          title:
            "Мы даем возможность клиентам выбирать форму оплаты (наличный или безналичный расчет)."
        },
        {
          title:
            "Неважно, являетесь ли Вы государственным перевозчиком или частной компанией – мы готовы к деловым отношениям с Вами."
        },
        {
          title:
            "В личном кабинете сервиса Вы всегда можете отслеживать свой таксопарк.С нами Вы всегда сможете следить за текущей ситуацией онлайн: сколько экипажей на линии, сколько из них «занято», сколько «свободно», а также без труда найти на карте своего региона любого работающего водителя"
        },
        {
          title: "Вы самостоятельно подключаете водителей к сервису Fix Line"
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
