<template>
    <section class="home-section">
        <div class="container">
            <div class="_title">
                <h2>Services</h2>
                <div class="description">
                    Corporis nihil, illum accusamus incidunt architecto ratione tempora quis!
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
                    {id: 1, name: 'Suivi KPI', description: 'Corporis nihil, illum accusamus incidunt architecto ratione tempora quis!' },
                    {id: 2, name: 'Pilotage des équipes de ventes', description: 'Corporis nihil, illum accusamus incidunt architecto ratione tempora quis!' },
                    {id: 3, name: 'Croissance du chiffre d\'affaires', description: 'Corporis nihil, illum accusamus incidunt architecto ratione tempora quis!' },
                    {id: 4, name: 'Communication directe avec les clients', description: 'Corporis nihil, illum accusamus incidunt architecto ratione tempora quis!' },
                    {id: 5, name: 'Analyse des données commerciales', description: 'Corporis nihil, illum accusamus incidunt architecto ratione tempora quis!' },
                    {id: 6, name: 'Suivi statiques commerciales', description: 'Corporis nihil, illum accusamus incidunt architecto ratione tempora quis!' },
                    {id: 7, name: 'Optimisation de la distribution', description: 'Corporis nihil, illum accusamus incidunt architecto ratione tempora quis!' },
                    {id: 8, name: 'Developpement la performance', description: 'Corporis nihil, illum accusamus incidunt architecto ratione tempora quis!' },
                    {id: 9, name: 'Optimisation de la couverture d\'un territoire commercial', description: 'Corporis nihil, illum accusamus incidunt architecto ratione tempora quis!' },
                ]
            },

            displayServices () {
                this.tout = !this.tout
            }
        }
       
    }
</script>