<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light" id="navbar_top">
            <div class="container">
                <a  href="#" 
                    class="navbar-brand"
                >
                <img :src="logo" 
                      class="CAFO"
                >
                </a>
                
            <input type="checkbox" id="menu-bar">
            <label for="menu-bar"><i class="feather icon-menu"></i></label>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Accueil
                                <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#services">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#feature">Fonctionnalités</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#tarifs">Tarifications</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#contacts">Contacts</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#faq">Faq</a>
                        </li>
                    </ul>
                    <ul class="button navbar-nav ml-auto">
                        <li class="nav-item mr-2">
                            <button class="btn btn-primary-outline" href="#">Voir la démo</button>
                        </li>
                        <li class="nav-item ">
                            <button class="btn btn-secondary-outline" href="#">Tester</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    import logo from '@/assets/CAFO.jpg'

    export default {
        name: 'NavbarComponent',

        data: () => ({
            logo,
            services: [],
            feats: []
        }),

        mounted () {
            this.initServices()
            this.initFeatures()
            this.initScroll()
            window.$(document).ready(function() {
                window.$('.dropdown').hover(function() {
                    window.$(this).addClass('show');
                    window.$(this).find('.dropdown-menu').addClass('show');
                }, function() {
                    window.$(this).removeClass('show');
                    window.$(this).find('.dropdown-menu').removeClass('show');
                });
            });
        },
        methods: {
            initScroll () {
                document.addEventListener("DOMContentLoaded", function(){
                    window.addEventListener('scroll', function() {
                        if (window.scrollY > 50) {
                            document.getElementById('navbar_top').classList.add('fixed-top');
                            var navbar_height = document.querySelector('.navbar').offsetHeight;
                            document.body.style.paddingTop = navbar_height + 'px';
                        } else {
                            document.getElementById('navbar_top').classList.remove('fixed-top');
                            document.body.style.paddingTop = '0';
                        } 
                    });
                }); 
            },

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

            initFeatures () {
                this.feats = [
                    {id: 1, icon: 'users', name: 'Gestion des utilisateurs', description: 'Corporis nihil, illum accusamus incidunt architecto ratione tempora quis!' },
                    {id: 2, icon: 'user', name: 'Gestion clients', description: 'Corporis nihil, illum accusamus incidunt architecto ratione tempora quis!' },
                    {id: 3, icon: 'layers', name: 'Gestion et suivi des commandes', description: 'Corporis nihil, illum accusamus incidunt architecto ratione tempora quis!' },
                    {id: 4, icon: 'trending-up', name: 'Stats & KPI', description: 'Corporis nihil, illum accusamus incidunt architecto ratione tempora quis!' },
                    {id: 5, icon: 'eye', name: 'Supervision des utilisateurs', description: 'Corporis nihil, illum accusamus incidunt architecto ratione tempora quis!' },
                  ]
            },
        },
    }
</script>