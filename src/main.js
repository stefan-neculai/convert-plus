import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { store } from './store/store'
import { routes } from "./routes"
Vue.use(VueRouter)

const router = new VueRouter({
  routes
});

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCcVisa, faCcMastercard } from '@fortawesome/free-brands-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faCcVisa, faCcMastercard, faTrashCan)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.filter('round', function (value) {
  return Math.round(value * 100) / 100;
})

Vue.filter('hide', function(value) {
  return "*".repeat(value.length)
})

Vue.filter('hideCardNr', function(value) {
  return "*".repeat(value.length - 4) + value.slice(-4);

})

Vue.config.productionTip = false


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
