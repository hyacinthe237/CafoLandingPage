window.$ = window.jQuery = require("jquery")

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/js/dist/collapse.js'
// import 'bootstrap/js/dist/popover.js'
// import 'bootstrap/dist/js/bootstrap.js'
// import 'jquery/src/jquery.js'
// global.$ = $

new Vue({
  render: h => h(App),
}).$mount('#app')
