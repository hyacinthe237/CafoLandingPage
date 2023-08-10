<template>
    <section class="home-section">
        <div class="container">
            <div class="_title">
                <h2>Services</h2>
                <div class="description">
                    Nous les avons pensés afin de résoudre au mieux votre problème d'entreprise.
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
                        <button class="btn btn-primary">En Savoir Plus</button>
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
                        description: 'Ce service consiste à suivre les indicateurs de performance clés (KPI) pour évaluer la performance de l\'entreprise. Il permet de mesurer l\'efficacité des actions entreprises et de prendre des décisions en fonction des résultats obtenus.' },
                    {
                        id: 2, name: 'Pilotage des équipes de ventes', 
                        description: 'Ce service consiste à gérer les équipes de vente pour atteindre les objectifs fixés. Il s\'agit de mettre en place des stratégies pour améliorer les performances des commerciaux et augmenter les ventes.' },
                    {
                        id: 3, name: 'Croissance du chiffre d\'affaires', 
                        description: 'Ce service vise à augmenter le chiffre d\'affaires de l\'entreprise en mettant en place des stratégies de développement commercial. Il s\'agit d\'identifier de nouvelles opportunités de croissance et de mettre en place des actions pour les exploiter.' },
                    {
                        id: 4, name: 'Communication directe avec les clients', 
                        description: "Ce service permet d'établir une communication directe avec les clients pour mieux comprendre leurs besoins et leurs attentes. Il permet également de renforcer la relation client et d'améliorer la satisfaction client." },
                    {
                        id: 5, name: 'Analyse des données commerciales', 
                        description: "Ce service consiste à analyser les données commerciales pour mieux comprendre le marché, les tendances et les comportements d'achat des clients. Il permet de prendre des décisions éclairées pour améliorer la performance commerciale." },
                    {
                        id: 6, name: 'Suivi statiques commerciales', 
                        description: "Ce service consiste à suivre les statistiques commerciales pour évaluer la performance de l'entreprise. Il permet de mesurer l'efficacité des actions entreprises et de prendre des décisions en fonction des résultats obtenus." },
                    {
                        id: 7, name: 'Optimisation de la distribution', 
                        description: "Ce service vise à optimiser la distribution des produits ou services de l'entreprise pour améliorer la satisfaction client et réduire les coûts logistiques. Il s'agit de mettre en place des stratégies pour améliorer la gestion de la chaîne d'approvisionnement." },
                    {
                        id: 8, name: 'Developpement la performance', 
                        description: "Ce service consiste à développer la performance de l'entreprise en mettant en place des stratégies pour améliorer la productivité, la qualité et l'efficacité des processus. Il permet d'optimiser les ressources de l'entreprise et d'améliorer sa compétitivité." },
                    {
                        id: 9, name: 'Optimisation de la couverture d\'un territoire commercial', 
                        description: "Ce service vise à optimiser la couverture d'un territoire commercial en identifiant les zones à fort potentiel de développement et en mettant en place des actions pour les exploiter. Il permet d'augmenter les ventes et d'améliorer la performance commerciale de l'entreprise." },
                ]
            },

            displayServices () {
                this.tout = !this.tout
            }
        }
       
    }
</script>