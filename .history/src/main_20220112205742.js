import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import vuetify from './plugins/vuetify'
import numFunctionsPlugin from './plugins/numFunctionsPlugin'

Vue.config.productionTip = false
Vue.use(numFunctionsPlugin)

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
