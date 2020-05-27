import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDrYfU8jmfxxYN_ONRyMmWimPSQ3w0O9Wc',
      authDomain: 'devmeetupz.firebaseapp.com',
      databaseURL: 'https://devmeetupz.firebaseio.com',
      projectId: 'devmeetupz',
      storageBucket: 'devmeetupz.appspot.com',
      messagingSenderId: '375198881852',
      appId: '1:375198881852:web:f8a6b6bc8b5a7bef1a8b39'
    })
  }
})
