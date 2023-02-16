/*
 * Project: test
 * Author: Alejandro Herrera (alejo901003@hotmail.com)
 * File Create: Thursday, 16th February 2023 6:59:30 pm
 * Last Modified: Thursday, 16th February 2023 6:59:30 
 */

import Vue from 'vue'
import Router from 'vue-router'

import DashboardPage from '../pages/DashboardPage'

Vue.use(Router)

// routes
const routes = [
  { path: '/', component: DashboardPage, name: 'home' }
]

export default new Router({
  mode: 'history',
  routes
})