/*
 * Project: test
 * Author: Alejandro Herrera (alejo901003@hotmail.com)
 * File Create: Thursday, 16th February 2023 6:59:30 pm
 * Last Modified: Thursday, 16th February 2023 6:59:30 
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'

import store from './store'
import router from './router'
import App from './App'
import Logger from './plugins/Logger'

// register globally
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(Logger, {loggin: true})
Vue.use(BootstrapVue)

Vue.component('app', App)

new Vue({
  router, store
}).$mount('#app')