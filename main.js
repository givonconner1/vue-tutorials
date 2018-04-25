import Vue from 'vue'
import App from './App.vue'
import Videojs from './Videojs.vue'
import DataBind from './Data-bind.vue'
import VueFrame from './Vue-template.vue'
import Helpvue from './Help.vue'
import Aboutvue from './About.vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#new',
  render: h => h(App)
})

new Vue({
  el: '#video-js',
  render: h => h(Videojs)
})

new Vue({
  el: '#data-bind',
  render: h => h(DataBind)
})

new Vue({
  el: '#vue-frame',
  render: h => h(VueFrame)
})

new Vue({
  el: '#about',
  render: h => h(Aboutvue)
})

new Vue({
  el: '#help',
  render: h => h(Helpvue)
})

