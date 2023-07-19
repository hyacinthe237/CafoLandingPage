<template>
    <div class="container-fluid">
        <div class="row">
        <table class="table table-striped">
            <thead>
                <tr>
                    <div><th>Tarification</th></div>
                        <th>
                        <div class="pricingTable-header">
                            <h3 class="title">Standard</h3>
                            <div class="price-value">$10</div>
                        </div>
                    </th>
                        <th>
                        <div class="pricingTable-header">
                            <h3 class="title">Business</h3>
                            <div class="price-value">$20</div>
                        </div>
                    </th>
                        <th>
                        <div class="pricingTable-header">
                            <h3 class="title">Business</h3>
                            <div class="price-value">$20</div>
                        </div>
                    </th>
                        <th>
                        <div class="pricingTable-header">
                            <h3 class="title">Business</h3>
                            <div class="price-value">$20</div>
                        </div>
                    </th>

                </tr>
            </thead>

            <tbody>
                <tr 
                    v-for="(t, index) in tarifs"
                    :key="index++"
                >
                    <td>{{ t.name }}</td>
                    <td><i :class="`feather icon-${t.icon1}`"></i></td>
                    <td><i :class="`feather icon-${t.icon2}`"></i></td>
                    <td><i :class="`feather icon-${t.icon3}`"></i></td>
                    <td><i :class="`feather icon-${t.icon4}`"></i></td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
   
        <!-- <div class="pricing-area">
  <div class="container">
    <div class="row">
      <div class="col-md-5 col-sm-6 col-xs-12">
        <div class="single-price">
          <div class="deal-top">
            <h3>Test</h3>
            <h4> 100<span class="sup">$</span></h4> 
            <h3>Pas d'engagement</h3>
          </div>
          <div class="deal-bottom">
            <ul class="deal-item">
                <li>Base données clients</li>
                 <li>Suivi des visites clients</li>
                <li>Prospection clients</li>
                <li>Stats/KPI de managers</li>
                <li>Gestion des commandes</li>
                <li>Jusqu’à 10 comptes</li>
                <li>Sécurisation</li>
                <li>Serveur dédiée</li>
                <li>Sauvegarde</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-5 col-sm-6 col-xs-12">
        <div class="single-price">
          <div class="deal-top1">
            <h3>Mensuel</h3>
            <h4> 1520<span class="sup">$</span></h4>
            <h3>Paiement trimestriel abonnement</h3>
          </div>
          <div class="deal-bottom">
            <ul class="deal-item">
                <li>Base données clients</li>
                <li>Suivi des visites clients</li>
                <li>Réseau client partenaire</li>
                <li>Prospection clients</li>
                <li>Stats/KPI de managers</li>
                <li>Gestion de commandes</li>
                <li>Jusqu’à 100 managers
Jusqu’à 300 commerciaux
Sauvegardes régulières</li>
                <li>Jusqu’à 100 managers
Jusqu’à 300 commerciaux
Sauvegardes régulières</li>
                <li>Sécurisation</li>
                <li>Serveurs dédiées</li>
                <li>Jusqu’à 100 managers
Jusqu’à 300 commerciaux
Sauvegardes régulières</li>
            </ul>
          </div>
        </div>
      </div>
    <div class="container">
    <div class="row">
      <div class="col-md-5 col-sm-6 col-xs-12 ">
        <div class="single-price">
          <div class="deal-top2">
            <h3>Annuel</h3>
            <h4> 15300<span class="sup">$</span></h4> 
            <h3>Paiement annuel abonnement</h3>
          </div>
          <div class="deal-bottom">
            <ul class="deal-item">
                <li>Base données clients</li>
                <li>Suivi des visites clients</li>
                <li>Réseau client partenaire</li>
                <li>Prospection clients</li>
                <li>Stats/KPI de managers</li>
                <li>Gestion de commandes</li>
                <li>Jusqu’à 100 managers</li>
                <li>Jusqu’à 300 commerciaux</li>
                <li>Serveurs dédiées</li>
                <li>Sauvegardes régulières</li>
                <li>Formation + Assistance</li>
                <li>Maintenance garantie</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-5 col-sm-6 col-xs-12">
        <div class="single-price">
          <div class="deal-top3">
            <h3>Licence d'exploitation</h3>
            <h4> 35000<span class="sup">$</span></h4>
            <h3>Paiement unique</h3>
          </div>
          <div class="deal-bottom">
            <ul class="deal-item">
                <li>Base données clients</li>
                <li>Suivi des visites clients</li>
                <li>Réseau client partenaire</li>
                <li>Prospection clients</li>
                <li>Stats/KPI de managers</li>
                <li>Gestion de commandes</li>
                <li>Accès illimité à tout</li>
                <li>Serveur de base de données hébergé chez le client(confidentialité)</li>
                <li>Formation + Assistance</li>
                <li>Maintenance 3ans</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
</div>
</div> -->
</template>
<script>
    export default {
        name: 'PricingTableComponent',
        data: () => ({
            tarifs: []
        }),

        mounted () {
            this.initTarifs()
        },

        methods: {
            initTarifs () {
                this.tarifs = [
                    { name: 'Base données clients', icon1: 'check', icon2: 'check', icon3: 'check', icon4: 'check'},
                    { name: 'Suivi des visites clients', icon1: 'check', icon2: 'check', icon3: 'check', icon4: 'check' },
                    { name: 'Prospection clients', icon1: 'check', icon2: 'check', icon3: 'check', icon4: 'check' },
                    { name: 'Réseau client partenaire', icon1: 'x', icon2: 'check', icon3: 'check', icon4: 'check' },
                    { name: 'Stats/KPI de managers', icon1: 'check', icon2: 'check', icon3: 'check', icon4: 'check' },
                    { name: 'Gestion de commandes', icon1: 'check', icon2: 'check', icon3: 'check', icon4: 'check' },
                    { name: 'Jusqu’à 10 compte', icon1: 'check', icon2: 'check', icon3: 'check', icon4: 'check' },
                    { name: 'Sécurisation', icon1: 'check', icon2: 'check', icon3: 'check', icon4: 'check' },
                    { name: 'Serveur dédiée', icon1: 'check', icon2: 'check', icon3: 'check', icon4: 'check' },
                    { name: 'Sauvegarde', icon1: 'check', icon2: 'check', icon3: 'check', icon4: 'check' },
                    { name: 'Stats/KPI de managers', icon1: 'check', icon2: 'check', icon3: 'check', icon4: 'check' },
                    { name: 'Jusqu’à 100 managers', icon1: 'x', icon2: 'check', icon3: 'check', icon4: 'check' },
                    { name: 'Jusqu’à 300 commerciaux', icon1: 'x', icon2: 'check', icon3: 'check', icon4: 'check' },
                    { name: 'Sauvegardes régulières', icon1: 'x', icon2: 'check', icon3: 'check', icon4: 'check' },
                    { name: 'Formation + Assistance', icon1: 'x', icon2: 'x', icon3: 'check', icon4: 'check' },
                    { name: 'Maintenance garantie', icon1: 'x', icon2: 'x', icon3: 'check', icon4: 'check' },
                    { name: 'Serveur de base de données hébergé chez le client(confidentialité)', icon1: 'x', icon2: 'x', icon3: 'x', icon4: 'check' },
                    { name: 'Maintenance 3ans', icon1: 'x', icon2: 'x', icon3: 'x', icon4: 'check' },
                    { name: 'Accès illimité à tout', icon1: 'x', icon2: 'x', icon3: 'x', icon4: 'check' },
                   
                ];
            }
        },
    }
</script>
<style>
.single-price {
    position:center;
  text-align: center;
  background: #262626;
  transition: .7s;
  margin-top: 20px;
}
.single-price h3 {
  font-size: 20px;
  color: #000;
  font-weight: 600;
  text-align: center;
  margin-top: -10px;
  font-family: poppins;
  color: #fff;
}
.single-price h4 {
  font-size: 28px;
  font-weight: 500;
  color: #fff;
}
.single-price h4 span.sup {
  vertical-align: text-top;
  font-size: 25px;
}
.deal-top  {
  position: relative;
  background: #b60c71 ;
  font-size: 16px;
  text-transform: uppercase;
  padding: 20px 24px ;
  
}
.deal-top3  {
  position: relative;
  background:red;
  font-size: 16px;
  text-transform: uppercase;
  padding: 20px 24px ;
  
}
.deal-top2  {
  position: relative;
  background:green;
  font-size: 16px;
  text-transform: uppercase;
  padding: 20px 24px ;
  
}
.deal-top1  {
  position: relative;
  background:orange;
  font-size: 16px;
  text-transform: uppercase;
  padding: 20px 24px ;
  
}
.deal-top::after {
  content: "";
  position:relative;
  bottom: -90px;
  width: 0;
  height: 0;
  border-top: 60px solid  #b60c71;
  border-left: 150px solid transparent;
  border-right: 150px solid transparent;
  padding: 0px;
}
.deal-top3::after {
  content: "";
  position:relative;
  bottom: -90px;
  width: 0;
  height: 0;
  border-top: 60px solid  red;
  border-left: 150px solid transparent;
  border-right: 150px solid transparent;
  padding: 0px;
}
.deal-top2::after {
  content: "";
  position:relative;
  bottom: -90px;
  width: 0;
  height: 0;
  border-top: 60px solid  green;
  border-left: 150px solid transparent;
  border-right: 150px solid transparent;
  padding: 0px;
}
.deal-top1::after {
  content: "";
  position:relative;
  bottom: -90px;
  width: 0;
  height: 0;
  border-top: 60px solid  orange;
  border-left: 150px solid transparent;
  border-right: 150px solid transparent;
  padding: 0px;
}
.deal-bottom {
  padding: 36px 0px 0;
}
.deal-bottom ul {
  margin: 0;
  padding: 0;
}
.deal-bottom  ul li {
  font-size: 16px;
  color: #fff;
  font-weight: 300;
  margin-top: 16px;
  border-top: 1px solid #E4E4E4;
  padding-top: 16px;
  list-style: none;
}



.single-price:hover {
  background:  #b60c71;
}
.single-price:hover .deal-top {
  background: #262626;
}
.single-price:hover .deal-top:after {
  border-top: 50px solid #262626;
}
.single-price:hover .btn-area a {
  background: #262626;
}
</style>