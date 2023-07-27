window.$ = window.jQuery = require("jquery")

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/js/dist/collapse.js'
// global.$ = $

new Vue({
  render: h => h(App),
}).$mount('#app')
