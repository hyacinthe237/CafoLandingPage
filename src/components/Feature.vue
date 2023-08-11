<template>
    <section class="home-section bg-grey" id="feature">
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
                    {
                      id: 1, icon: 'users', name: 'Gestion des utilisateurs', 
                      description: "Gestion des autorisations et des niveaux d'accès pour assurer la sécurité des données." },
                    {
                      id: 2, icon: 'user', name: 'Gestion clients', 
                      description: "Création, la mise à jour et la suppression des informations de clients, ainsi que le suivi de leurs interactions avec l'entreprise." },
                    {id: 3, icon: 'layers', name: 'Gestion et suivi des commandes', 
                    description: "Gestion de l'inventaire, le traitement des commandes, la facturation et le suivi des livraisons." },
                    {
                      id: 4, icon: 'trending-up', name: 'Stats & KPI', 
                      description: "Suivre les performances de l'entreprise en utilisant des données quantitatives telles que les ventes, les marges bénéficiaires et les taux de conversion." },
                    {
                      id: 5, icon: 'eye', name: 'Supervision des utilisateurs', 
                      description: "Garantir la conformité aux politiques de sécurité et de confidentialité, ainsi que pour identifier les opportunités d'amélioration de l'efficacité et de la productivité." },
                  ]
            },
            displayFeature () {
                this.tout = !this.tout
            }

    }
  }
</script>