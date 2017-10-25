import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import cors from 'cors'

Vue.use(VueAxios, axios)
Vue.use(cors)

new Vue({
  el: '#app',
  axios,
  render: h => h(App)
})
