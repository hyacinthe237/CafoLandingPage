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
