<template>
    <footer class="endpage elevated">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <div class="box-img">
                        <img :src="cafoLogo" class="cafo" />
                        <p class="mb-20 mt-20">Fournir au manager des outils pour piloter son équipe de commerciaux; les contrôler et s'assurer que chacun effectue effectivement la visite de tous les clients prévus par jour.</p> 
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="box">
                        <h4>Nos services</h4>
                        <ul>
                            <li><a href="#">Optimisation de la distribution</a></li>
                            <li><a href="#">Optimisation de la couverture d'un territoire commercial</a></li>
                            <li><a href="#">Pilotage des équipes de ventes</a></li>
                            <li><a href="#">Croissance du chiffre d'affaires</a></li>
                            <li><a href="#">Communication directe avec les clients</a></li>
                            <li><a href="#">Analyse des données commerciales</a></li>
                            <li><a href="#">Suivi statiques commerciales</a></li> 
                            <li><a href="#">Suivi KPI</a></li>
                            <li><a href="#">Developpement de la performance</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="box">
                        <h4>Nos fonctionalités</h4>
                        <ul>
                            <li><a href="#">Gestion des utilisateurs</a></li>
                            <li><a href="#">Gestion clients</a></li>
                            <li><a href="#">Gestion et suivi des commandes</a></li>
                            <li><a href="#">Stats & KPI</a></li>
                            <li><a href="#">Supervision des utilisateurs</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="box">
                        <h4>Nous contacter</h4>
                        <ul>
                            <li><a href="tel:+237651515151">+237651515151</a></li>
                            <li><a href="mailto:infos@cafoapp.com">infos@cafoapp.com</a></li>
                        </ul>
                    </div>
                </div>
                <div class="endfooter">
                    <div class="row">
                        <div class="col-sm-3">
                            <ul>
                                <li><a href="#">Terme</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-3">
                            <ul>
                                <li><a href="#">Tarification</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-3">
                            <ul>
                                <li><a href="#">Securité</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-3">
                            <ul>
                                <li><a href="#">Status</a></li>
                            </ul>
                        </div>
                    </div>
                <ul>
                </ul>
            </div>
            </div>
            

            </div>
    </footer>
</template>
<script>
import cafoLogo from '@/assets/CAFO.jpg'
    export default {
        name:'FooterComponent',
        data: () => ({
            cafoLogo
        }),
    }
</script>