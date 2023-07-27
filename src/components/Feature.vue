<template>
    <section class="home-section bg-grey">
        <div class="_title">
              <h2>Fonctionnalités</h2>
            <div class="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div class="container">
              <div class="row">
                <div class="col-md-4" 
                    v-for="feature in Filteredfeature"
                    :key="feature.id">
                  <div class="main">
                    <div class="feat pt-10">
                      <div class="icon">
                        <i :class="`feather icon-${feature.icon}`"></i>
                      </div>
                      <h3 class="mt-20">{{ feature.name }}</h3>
                      <p>{{ feature.description }}</p>
                    </div>
                    <div class="shadow1"></div>
                    <div class="shadow2"></div>
                  </div>
                </div>
              </div>
              <div class="col-sm text-center">
                <div class="btn mt-40">
                  <button class="btn btn-secondary" @click="displayFeature()">
                   {{ buttonText }}
                   <i class="feather icon-arrow-up" v-show="tout"></i>
                   <i class="feather icon-arrow-down" v-show="!tout"></i>
                  </button>                    
                  </div>
              </div>
           </div>
      </div>
      <!-- <div class="carousel">
      <h1>Découvrez l'application qui simplifiera la gestion de vos equipes</h1>
    <VueSlickCarousel 
      :arrows="true" 
      :dots="true" 
      :focusOnSelect="true"
      :infinite="true" 
      :speed="500"
      :slidesToShow="5" 
      :slidesToScroll=" 2"
      :touchThreshold="2" >
      <div class="slide"><img :src="interface1"></div>
      <div class="slide"><img :src="interface2"></div>
      <div class="slide"><img :src="interface3"></div>
      <div class="slide"><img :src="interface4"></div>
      <div class="slide"><img :src="interface5"></div>
      <div class="slide"><img :src="interface6"></div>
      <div class="slide"><img :src="interface7"></div>
      <div class="slide"><img :src="interface8"></div>
      <div class="slide"><img :src="interface9"></div>
      <div class="slide"><img :src="interface10"></div>
      <div class="slide"><img :src="interface11"></div>
      <div class="slide"><img :src="interface12"></div>
      <div class="slide"><img :src="interface13"></div>
      <div class="slide"><img :src="interface14"></div>
  </VueSlickCarousel>
  </div> -->
        
    </section>
   
    
</template>
<script>
// import VueSlickCarousel from 'vue-slick-carousel'
// import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
// import interface1 from '@/assets/img/1.jpg'
// import interface2 from '@/assets/img/2.jpg'
// import interface3 from '@/assets/img/3.jpg'
// import interface4 from '@/assets/img/4.jpg'
// import interface5 from '@/assets/img/5.jpg'
// import interface6 from '@/assets/img/6.jpg'
// import interface7 from '@/assets/img/7.jpg'
// import interface8 from '@/assets/img/8.jpg'
// import interface9 from '@/assets/img/9.jpg'
// import interface10 from '@/assets/img/10.jpg'
// import interface11 from '@/assets/img/11.jpg'
// import interface12 from '@/assets/img/12.jpg'
// import interface13 from '@/assets/img/13.jpg'
// import interface14 from '@/assets/img/14.jpg'

  export default {
    name: 'FeatureComponent',
    
    
    data: () => ({
      feature: [],
      tout: false,
      // interface1,
      // interface2,
      // interface3,
      // interface4,
      // interface5,
      // interface6,
      // interface7,
      // interface8,
      // interface9,
      // interface10,
      // interface11,
      // interface12,
      // interface13,
      // interface14,
        }),
  //   settings: {
      
  //     centerMode: true,
  //     centerPadding: "20px",
  //     focusOnSelect: true,
  //     infinite: true,
  //     slidesToShow: 3,
  //     speed: 500
  //    },
  //   components: {
  //    VueSlickCarousel,
  //  },

        mounted () {
           this.initFeature()
           this.tout = false
        },
        computed: {
            Filteredfeature () {
                return this.tout ? this.feature : this.feature.slice(0,3)
            },

            buttonText () {
                return this.tout ? 'Afficher moins' : 'Afficher plus'
            },
        },

        methods: {
            initFeature () {
                this.feature = [
                    {id: 1, icon: 'users', name: 'Gestion des utilisateurs', description: 'Corporis nihil, illum accusamus incidunt architecto ratione tempora quis!' },
                    {id: 2, icon: 'user', name: 'Gestion clients', description: 'Corporis nihil, illum accusamus incidunt architecto ratione tempora quis!' },
                    {id: 3, icon: 'layers', name: 'Gestion et suivi des commandes', description: 'Corporis nihil, illum accusamus incidunt architecto ratione tempora quis!' },
                    {id: 4, icon: 'trending-up', name: 'Stats & KPI', description: 'Corporis nihil, illum accusamus incidunt architecto ratione tempora quis!' },
                    {id: 5, icon: 'eye', name: 'Supervision des utilisateurs', description: 'Corporis nihil, illum accusamus incidunt architecto ratione tempora quis!' },
                  ]
            },
            displayFeature () {
                this.tout = !this.tout
            }

    }
  }
</script>