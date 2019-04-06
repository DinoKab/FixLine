<template>
  <div>
    <v-btn
      fixed
      bottom
      right
      icon
      large
      dark
      color="red"
      style="opacity:0.6; border:1px solid rgb(255,255,255,0.4) !important; z-index: 1;"
      href="/#start"
    >
      <v-icon>keyboard_arrow_up</v-icon>
    </v-btn>

    <HomeInfDesctope class="hidden-sm-and-down"></HomeInfDesctope>
    <HomeInfMobile class="hidden-md-and-up"></HomeInfMobile>
    <HomeChoice></HomeChoice>
    <HomeOffer class="hidden-sm-and-down"></HomeOffer>
    <HomeOfferMobile class="hidden-md-and-up"></HomeOfferMobile>
    <HomeAboutCompany class="hidden-sm-and-down"></HomeAboutCompany>
    <HomeAboutCompanyMobile class="hidden-md-and-up"></HomeAboutCompanyMobile>
    <HomeTariffs></HomeTariffs>
    <HomeChatBot class="hidden-sm-and-down"></HomeChatBot>
    <HomeChatBotMobile class="hidden-md-and-up"></HomeChatBotMobile>
    <Contacts class="hidden-sm-and-down"></Contacts>
    <ContactsMobile class="hidden-md-and-up"></ContactsMobile>
  </div>
</template>

<script>
import HomeInfDesctope from "../components/Home/HomeInfDesctope.vue";
import HomeInfMobile from "../components/Home/HomeInfMobile.vue";
import HomeChoice from "../components/Home/HomeChoice.vue";
import HomeOffer from "../components/Home/HomeOffer.vue";
import HomeAboutCompany from "../components/Home/HomeAboutCompany.vue";
import HomeAboutCompanyMobile from "../components/Home/HomeAboutCompanyMobile.vue";
import HomeTariffs from "../components/Home/HomeTariffs.vue";
import Contacts from "../components/Contacts.vue";
import ContactsMobile from "../components/ContactsMobile.vue";
import HomeOfferMobile from "../components/Home/HomeOfferMobile.vue";
import HomeChatBot from "../components/Home/HomeChatBot.vue";
import HomeChatBotMobile from "../components/Home/HomeChatBotMobile.vue";

export default {
  components: {
    HomeInfDesctope,
    HomeInfMobile,
    HomeChoice,
    HomeOffer,
    HomeAboutCompany,
    HomeAboutCompanyMobile,
    HomeTariffs,
    Contacts,
    ContactsMobile,
    HomeOfferMobile,
    HomeChatBot,
    HomeChatBotMobile
  }
};
</script>