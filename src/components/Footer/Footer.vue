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
                        <h4>Liens important</h4>
                        <ul>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#feature">Fonctionnalités</a></li>
                            <li><a href="#tarifs">Tarifications</a></li>
                            <li><a href="#contacts">Contacts</a></li>
                            <li><a href="#faq">Foire aux questions</a></li>
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
                            <li><a href="tel:+237691304636">+237 691 30 46 36</a></li>
                            <li><a href="mailto:hyacinthe@izytechgroup.com">hyacinthe@izytechgroup.com</a></li>
                        </ul>
                    </div>
                </div>
                <div class="endfooter">
                    <ul>
                        <li><a href="#">Terme</a></li>
                        <li><a href="#tarifs">Tarification</a></li>
                        <li><a href="#">Securité</a></li>
                        <li><a href="#">Status</a></li>
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