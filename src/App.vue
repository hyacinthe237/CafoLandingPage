<template>
  <div id="app">
    <navbar></navbar>
    
    <div class="container">
      <HeroesSectionComponent></HeroesSectionComponent>
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
export default {
  name: 'App',
  components: {
    navbar,
    FooterComponent,
    PricingTableComponent,
    HeroesSectionComponent,
  },

  methods: {
    
  },
}
</script>

<style lang="scss">
@import "./assets/sass/app"
</style>
