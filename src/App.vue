<template>
  <div id="app">
    <navbar></navbar>
    
    <div class="container">
      <HeroesSectionComponent></HeroesSectionComponent>
      <ServicesComponent></ServicesComponent>
      <FeatureComponent></FeatureComponent>
      <CarousselComponent></CarousselComponent>
      <PricingTableComponent></PricingTableComponent>
    </div>    
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
import CarousselComponent from './components/Caroussel.vue'
export default {
  name: 'App',
  components: {
    navbar,
    FooterComponent,
    PricingTableComponent,
    HeroesSectionComponent,
    ServicesComponent,
    FeatureComponent,
    CarousselComponent
  },

  methods: {
    
  },
}
</script>

<style lang="scss">
@import "./assets/sass/app"
</style>
