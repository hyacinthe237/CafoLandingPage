window.$ = window.jQuery = require("jquery")

import Vue from 'vue'
import App from './App.vue'
import posthogPlugin from "./plugins/posthog"

Vue.config.productionTip = false

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/js/dist/collapse.js'
// import 'bootstrap/js/dist/popover.js'
// import 'bootstrap/dist/js/bootstrap.js'
// import 'jquery/src/jquery.js'
// global.$ = $

Vue.use(posthogPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
