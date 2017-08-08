// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router/router.js'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueSource from 'vue-resource'
Vue.use(VueSource)

/*bootstrap-vue*/
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);

/*vuex+axios*/
import axios from 'axios'
Vue.prototype.$ajax=axios

Vue.config.productionTip = false

/*vuex store*/
import Vuex from 'vuex'
import store from './vuex/store'
Vue.use(Vuex)

const  router = new VueRouter({ 
  routes: routes
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
})
