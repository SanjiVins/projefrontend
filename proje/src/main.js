import Vue from 'vue'
import {router} from "./route";
import App from './App.vue'
import VueResource from "vue-resource"

Vue.use(VueResource)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
