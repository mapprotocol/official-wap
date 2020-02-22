import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview'
import 'reset-css'
import i18n from '@/locale/index'
import 'iview/dist/styles/iview.css'
import store from './store'
import 'animate.css'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

new Vue({
  i18n,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
