import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Welcome from "./components/Welcome/Welcome"
import Calendar from "./containers/calendar/calendar"
import VueMaterial from 'vue-material'
import { MdButton,MdField } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import devtools from '@vue/devtools'
import Filters from "./helper/helper";

Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.use(MdButton)
Vue.use(MdField)
Vue.use(devtools)

Vue.config.productionTip = false

const router = new VueRouter({
  routes:[
    { path:"/", component: Welcome},
    { path:"/welcome", component: Welcome },
    { path:"/calendar", component: Calendar},
  ],
  mode: "history"
})
Vue.config.productionTip = false;
Vue.config.devtools = false;
new Vue({
  router,
  Filters,
  render: h => h(App),
}).$mount('#app')
