<template>
    <section class="home-section" id="faq">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="col-sm-12">
                        <div class="_title mb-40">
                            <h2>FAQ</h2>
                        </div>
                </div>
                    <div class="accordion" id="accordionExample">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <h2 class="clearfix">
                                    <a class="btn-collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                                    aria-controls="collapseOne" @click="displayFaq()">Dans quel contexte CAFO a-t-il été développé ?
                                    <i class="feather icon-chevron-up" v-show="tout"></i>
                                    <i class="feather icon-chevron-down" v-show="!tout"></i></a>
                                </h2>
                            </div>
                            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                    <ol>
                                        <li>Pas de connaissance du réseau de distribution des partenaires;</li>
                                        <li>La relation commerciale avec certains des partenaires peut être appelée à changer ou à s'arrêter en vous laissant dans l'embarras;</li>
                                        <li>Votre performance actuelle est très fortement tributaire des partenaires (plus de 80%);</li>
                                        <li>Les partenaires ont plus de contrôle que vous sur la chaîne de distribution de vos produits;</li>
                                        <li>Vous êtes dépendants des partenaires dans le développement de votre Chiffre d'Affaires dans leur réseau.</li>
                                        <li>Manque d'outils de mesure ,évaluation et recadrage des équipes commerciales directes et partenaires ;</li>
                                        <li>Votre chiffre d'affaires dépend de l'activité de vos partenaires</li>
                                        <li>Vous ne contrôlez pas votre chaîne de distribution</li>
                                        <li>Vous n’avez pas de leviers de développement de votre  réseau de distribution direct</li>                                        
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingTwo">
                                <h2 class="clearfix">
                                    <a class="btn-collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true"
                                    aria-controls="collapseTwo" @click="displayFaq1()">Quels sont les objectifs de CAFO ?
                                    <i class="feather icon-chevron-up" v-show="tout1"></i>
                                    <i class="feather icon-chevron-down" v-show="!tout1"></i></a>
                                </h2>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div class="card-body">
                                    <ol>
                                       <li>Maîtriser les routes de distribution directe et indirectes de vos produits;</li>
                                       <li>Pouvoir animer, organiser, développer, motiver et suivre votre force de vente directe;</li>
                                        <li>Prendre la main sur le développement du réseau de vos clients directs et partenaires;</li>
                                        <li>Développer de façon soutenue votre chiffre d'affaires.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingThree">
                                <h2 class="clearfix">
                                    <a class="btn-collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true"
                                    aria-controls="collapseThree" @click="displayFaq2()">Qu'est-ce que CAFO apporte de plus ?
                                    <i class="feather icon-chevron-up" v-show="tout2"></i>
                                    <i class="feather icon-chevron-down" v-show="!tout2"></i></a>
                                </h2>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div class="card-body">
                                    <ol>
                                        <li>Fournir au manager des outils pour piloter son équipe de commerciaux; les contrôler et s'assurer que chacun effectue effectivement la visite de tous les clients prévus par jour;
                                            Suivre le développement de  votre réseau indirect partenaire;</li>
                                        <li>Confirmer automatiquement des visites par le système (utilisation du GPS) et/ou par signature du Client;</li>
                                        <li>Segmenter vos clients directs et contrôler votre réseau de distribution;</li>
                                        <li>Gérer et optimiser avec flexibilité et l'autonomie des commandes jusqu'à la livraison;</li>
                                        <li>Fournir aux managers des indicateurs efficaces de développement du CA: couverture, croissance du porte-feuilles, distribution, suivi  CRM, développement du CA, etc.</li>
                                        <li>Interfaces simple et intuitive</li>
                                        <li>Validation automatique des visites par GPS ou par signature du client</li>
                                        <li>Suivi en temps réel des activités de chaque manager & commercial directs ou partenaires</li>
                                        <li>Segmentation dynamique de vos clients directs</li>
                                        <li>Gestion optimale des commandes de bout en bout</li>
                                        <li>Statistiques & KPI</li>
                                        <li>Développement du chiffre d'affaire</li>
                                        <li>Exportation des rapports utilisables par MS Excel</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        name: 'FaqComponent',

        data: () => ({
            tout: false,
            tout1: false,
            tout2: false,
        }),

        mounted () {
            this.tout = false
            this.tout1 = false
            this.tout2 = false
            
        },
        methods: {
            displayFaq () {
                this.tout = !this.tout
                this.tout1 = false
                this.tout2 = false
            },
            displayFaq1 () {
                this.tout = false
                this.tout1 = !this.tout1
                this.tout2 = false
            },
            displayFaq2 () {
                this.tout = false
                this.tout1 = false
                this.tout2 = !this.tout2
            }
        }
    }
</script>