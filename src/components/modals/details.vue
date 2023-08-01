<template>
  <div 
    class="modal fade" 
    id="offerDetailsModal" 
    tabindex="-1" 
    aria-labelledby="exampleModalLabel" 
    aria-hidden="true"
  >
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
        <h6 class="modal-title" id="exampleModalLabel">{{ desc }}</h6>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="container">
          <div class="row">
            <div class="col-sm-3">
              <div class="pricing">
                <div class="card-title">
                  <h4>Test</h4>
                  <p>Pas d'engagement</p>
                </div>
                <div class="card-body">
                <span class="price"><sup>€</sup>100</span>
              </div>
              <ul>
                <li><i class="feather icon-check"></i>Prospection clients</li>
                <li><i class="feather icon-check"></i>Base données clients</li>
                <li><i class="feather icon-check"></i>Réseau client partenaire</li>
                <li><i class="feather icon-check"></i>Suivi des visites clients</li>
              </ul>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button class="btn btn-primary">Acheter</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  </template>

<script>
export default {
    name: 'DetailsModal',

    props: {
        title: { type: String, default: ''},
        desc: { type: String, default: ''},
        modules: { type: Array, default: () => []},
        price: { type: Number, default: 0},
    },
}
</script>