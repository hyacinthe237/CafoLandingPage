<template>
  <div id="app">
    <navbar></navbar>
    <div class="container">
      <PricingTableComponent></PricingTableComponent>
    </div>    
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import FooterComponent from './components/Footer/Footer.vue'
import navbar from './components/Navbar/Navbar.vue'
import PricingTableComponent from './components/PricingTable.vue'
export default {
  name: 'App',
  components: {
    navbar,
    FooterComponent,
    PricingTableComponent
  },

  methods: {
    
  },
}
</script>

<style lang="scss">
@import "./assets/sass/app"
</style>
