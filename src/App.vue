<template>
  <div id="app">
    <navbar></navbar>    
    <!-- <div class="container"> -->
      <HeroesSectionComponent></HeroesSectionComponent>
      <SlideComponent></SlideComponent>
      <ServicesComponent></ServicesComponent>
      <FeatureComponent></FeatureComponent>
      <PricingTableComponent></PricingTableComponent>
      <ContactComponent></ContactComponent>
      <FaqComponent></FaqComponent>
    <!-- </div>     -->
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import FooterComponent from './components/Footer/Footer.vue'
import navbar from './components/Navbar/Navbar.vue'
import PricingTableComponent from './components/PricingTable.vue'
import HeroesSectionComponent from './components/HeroesSection.vue'
import ServicesComponent from './components/Services.vue'
import FeatureComponent from './components/Feature.vue'
import FaqComponent from './components/Faq.vue'
import ContactComponent from './components/Contact.vue'
import SlideComponent from './components/Slide/Slide.vue'
export default {
  name: 'App',
  components: {
    navbar,
    FooterComponent,
    PricingTableComponent,
    HeroesSectionComponent,
    SlideComponent,
    ServicesComponent,
    FeatureComponent,
    FaqComponent,
    ContactComponent,
  },

  methods: {
    
  },
}
</script>

<style lang="scss">
@import "./assets/sass/app";
</style>
