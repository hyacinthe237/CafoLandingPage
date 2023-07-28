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
        
    </section>
   
    
</template>
<script>

  export default {
    name: 'FeatureComponent',
    
    
    data: () => ({
      feature: [],
      tout: false,
    }),

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