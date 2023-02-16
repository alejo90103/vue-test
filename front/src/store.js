/*
 * Project: test
 * Author: Alejandro Herrera (alejo901003@hotmail.com)
 * File Create: Thursday, 16th February 2023 6:59:30 pm
 * Last Modified: Thursday, 16th February 2023 6:59:30 
 */

import Vue from 'vue'
import Vuex from 'vuex'

import postStore from './store/postStore'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    postStore
  },
  strict: debug
})
