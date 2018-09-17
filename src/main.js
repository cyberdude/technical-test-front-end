import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB8N0-H6pU-Zls8PIa6vdFhCMDtjBmxFCU',
    libraries: 'places'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
