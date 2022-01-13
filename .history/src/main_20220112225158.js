import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import PortalVue from 'portal-vue'
import vuetify from './plugins/vuetify'
import numFunctionsPlugin from './plugins/numFunctionsPlugin'

Vue.config.productionTip = false
Vue.use(numFunctionsPlugin)
Vue.use(PortalVue)

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
