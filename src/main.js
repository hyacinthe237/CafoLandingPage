window.$ = window.jQuery = require("jquery")

import Vue from 'vue'
import App from './App.vue'
// import posthogPlugin from "./plugins/posthog"

Vue.config.productionTip = false

// Vue.use(posthogPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
