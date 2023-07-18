window.$ = window.jQuery = require("jquery")

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'

// global.$ = $

new Vue({
  render: h => h(App),
}).$mount('#app')
