<template>
    <section class="home-section" id="services">
        <div class="container">
            <div class="_title">
                <h2>Services</h2>
                <div class="description">
                    Résolvez au mieux votre problème d'entreprise.
                </div>
            </div>
            <div class="row">
                <div 
                    class="col-sm-4"
                    v-for="service in filteredServices"
                    :key="service.id"
                >
                    <div class="service elevated">
                        <i class="feather icon-check-circle"></i>
                        <h5>{{ service.name }}</h5>
                    <div class="description">
                        <p>{{ service.description }}</p>
                    </div>
                    </div>
                </div>
                <div class="col-sm text-center">
                    <div class="btn mt-20">
                        <button class="btn btn-secondary" @click="displayServices()">
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
        name :'ServicesComponent',
        data: () => ({
            services: [],
            tout: false,
            moins:true,
       
        }),
        mounted () {
            this.initServices()
            this.tout = false
        },

        computed: {
            filteredServices () {
                return this.tout ? this.services : this.services.slice(0,3)
            },

            buttonText () {
                return this.tout ? 'Afficher moins' : 'Afficher plus'
            },
        },

        methods: {
            initServices () {
                this.services = [
                    {
                        id: 1, name: 'Suivi KPI', 
                        description: 'Mesurer l\'efficacité de vos actions entreprises et prenez des décisions en fonction des résultats obtenus.' },
                    {
                        id: 2, name: 'Pilotage des équipes de ventes', 
                        description: 'Introduisez CAFO dans vos stratégies pour améliorer les performances des commerciaux et augmenter les ventes.' },
                    {
                        id: 3, name: 'Croissance du chiffre d\'affaires', 
                        description: 'CAFO vous permet d\'identifier de nouvelles opportunités de croissance et définir vos actions pour mieux les exploiter.' },
                    {
                        id: 4, name: 'Communication directe avec les clients', 
                        description: "CAFO établit une communication directe avec vos clients pour mieux comprendre leurs besoins et leurs attentes." },
                    {
                        id: 5, name: 'Analyse des données commerciales', 
                        description: "CAFO produit des données vous aidant dans la prise des décisions éclairées pour améliorer la performance commerciale." },
                    {
                        id: 6, name: 'Suivi statiques commerciales', 
                        description: "CAFO vous aide à mesurer l'efficacité des actions entreprises et de prendre des décisions en fonction des résultats obtenus." },
                    {
                        id: 7, name: 'Optimisation de la distribution', 
                        description: "CAFO optimise la distribution des produits ou services de l'entreprise pour améliorer la satisfaction client et réduire les coûts logistiques." },
                    {
                        id: 8, name: 'Developpement la performance', 
                        description: "CAFO développe la performance de l'entreprise en mettant en place des outils pour améliorer la productivité, la qualité et l'efficacité des processus." },
                    {
                        id: 9, name: 'Optimisation de la couverture d\'un territoire commercial', 
                        description: "CAFO optimise la couverture d'un territoire commercial en identifiant les zones à fort potentiel de développement." },
                ]
            },

            displayServices () {
                this.tout = !this.tout
            }
        }
       
    }
</script>