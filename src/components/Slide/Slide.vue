<template>
  <div class="container">
    <div class="home-caroussel">
      <div class="carousel ">
        <h1 clas="nowap">Ils nous font confiance</h1>
        <VueSlickCarousel
        arrows= "false"
        :dots="false"
        :infinite= "true"
        :slidesToScroll="1"
        :slidesToShow="6"
        :autoplay="true"
        :touchThreshold="1"
        :speed="999">
        <div class="slide1"><img :src="slide"></div>
        <div class="slide1"><img :src="slide"></div>
        <div class="slide1"><img :src="slide"></div>
        <div class="slide1"><img :src="slide"></div>
        <div class="slide1"><img :src="slide"></div>
        <div class="slide1"><img :src="slide"></div>
        <div class="slide1"><img :src="slide"></div>
      </VueSlickCarousel>
    </div>
  </div>
</div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import slide from '@/assets/img/Logo.png'

export default {
  name: 'SlideComponent',

  data: () => ({
    slide,
  }),
  components: {
    VueSlickCarousel,
  },
}
</script>