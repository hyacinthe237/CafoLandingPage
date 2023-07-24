<template>
  <section class="home-section">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th class="w40">
                      <h3>Tarification</h3>
                      <p>Unique pour toujours vous satisfaire.</p>
                    </th>
                    <th class="w20">
                        <div class="pricingTable-header test" @click="selectOptionTest('test')">
                            <h3 class="title">Test</h3>
                            <div class="price-value nowrap">100 €</div>
                            <p>Pas d'engagement</p>
                        </div>
                        
                    </th>
                    <th class="w20">
                        <div class="pricingTable-header mensuel" @click="selectOptionMensuel('mensuel')">
                            <h3 class="title">Mensuel</h3>
                            <div class="price-value nowrap">1520 €</div>
                            <p>Paiement trimestriel abonnement</p>
                        </div>
                    </th>
                    <th class="w20">
                        <div class="pricingTable-header annuel" @click="selectOptionAnnuel('annuel')">
                            <h3 class="title">Annuel</h3>
                            <div class="price-value nowrap">15300 €</div>
                            <p>Paiement annuel abonement</p>
                        </div>
                    </th>
                    <th class="w30">
                        <div class="pricingTable-header expl" @click="selectOptionExpl('expl')">
                            <h3 class="title">Licence d'exploitation</h3>
                            <div class="price-value nowrap">35000 €</div>
                            <p>Paiement unique</p>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr 
                  v-for="(t, index) in tarifs"
                  :key="index++"
                >
                  <td class="w40">{{ t.name }}</td>
                  <td :class="['w15', classOptionTest]"><i :class="`feather icon-${t.icon1}`"></i></td>
                  <td :class="['w15', classOptionMensuel]"><i :class="`feather icon-${t.icon2}`"></i></td>
                  <td :class="['w15', classOptionAnnuel]"><i :class="`feather icon-${t.icon3}`"></i></td>
                  <td :class="['w15', classOptionExpl]"><i :class="`feather icon-${t.icon4}`"></i></td>
                </tr>
            </tbody>
        </table>
  </section>
</template>
<script>
    export default {
        name: 'PricingTableComponent',
        data: () => ({
            tarifs: [],
            classOptionTest: '',
            classOptionMensuel: '',
            classOptionAnnuel: '',
            classOptionExpl: '',
        }),

        mounted () {
            this.initTarifs()
            this.selectOptionMensuel('mensuel')
        },

        methods: {
            initTarifs () {
                this.tarifs = [
                    { name: 'Base données clients', icon1: 'check', icon2: 'check', icon3: 'check', icon4: 'check'},
                    { name: 'Suivi des visites clients', icon1: 'check', icon2: 'check', icon3: 'check', icon4: 'check' },
                    { name: 'Prospection clients', icon1: 'check', icon2: 'check', icon3: 'check', icon4: 'check' },
                    { name: 'Stats/KPI de managers', icon1: 'check', icon2: 'check', icon3: 'check', icon4: 'check' },
                    { name: 'Gestion de commandes', icon1: 'check', icon2: 'check', icon3: 'check', icon4: 'check' },
                    { name: 'Jusqu’à 10 compte', icon1: 'check', icon2: 'check', icon3: 'check', icon4: 'check' },
                    { name: 'Sécurisation', icon1: 'check', icon2: 'check', icon3: 'check', icon4: 'check' },
                    { name: 'Serveur dédiée', icon1: 'check', icon2: 'check', icon3: 'check', icon4: 'check' },
                    { name: 'Sauvegarde', icon1: 'check', icon2: 'check', icon3: 'check', icon4: 'check' },
                    { name: 'Stats/KPI de managers', icon1: 'check', icon2: 'check', icon3: 'check', icon4: 'check' },
                    { name: 'Réseau client partenaire', icon1: 'x', icon2: 'check', icon3: 'check', icon4: 'check' },
                    { name: 'Jusqu’à 100 managers', icon1: 'x', icon2: 'check', icon3: 'check', icon4: 'check' },
                    { name: 'Jusqu’à 300 commerciaux', icon1: 'x', icon2: 'check', icon3: 'check', icon4: 'check' },
                    { name: 'Sauvegardes régulières', icon1: 'x', icon2: 'check', icon3: 'check', icon4: 'check' },
                    { name: 'Formation + Assistance', icon1: 'x', icon2: 'x', icon3: 'check', icon4: 'check' },
                    { name: 'Maintenance garantie', icon1: 'x', icon2: 'x', icon3: 'check', icon4: 'check' },
                    { name: 'Serveur de base de données hébergé chez le client(confidentialité)', icon1: 'x', icon2: 'x', icon3: 'x', icon4: 'check' },
                    { name: 'Maintenance 3ans', icon1: 'x', icon2: 'x', icon3: 'x', icon4: 'check' },
                    { name: 'Accès illimité à tout', icon1: 'x', icon2: 'x', icon3: 'x', icon4: 'check' },
                   
                ];
            },

            selectOptionTest (option) {
              this.classOptionTest = `selected-${option}`
              this.classOptionMensuel = ''
              this.classOptionAnnuel = ''
              this.classOptionExpl = ''
            },
            selectOptionMensuel (option) {
              this.classOptionMensuel = `selected-${option}`
              this.classOptionTest = ''
              this.classOptionAnnuel = ''
              this.classOptionExpl = ''
            },
            selectOptionAnnuel (option) {
              this.classOptionAnnuel = `selected-${option}`
              this.classOptionTest = ''
              this.classOptionMensuel = ''
              this.classOptionExpl = ''
            },
            selectOptionExpl (option) {
              this.classOptionExpl = `selected-${option}`
              this.classOptionTest = ''
              this.classOptionMensuel = ''
              this.classOptionAnnuel = ''
            },
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