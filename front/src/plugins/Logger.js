/*
 * Project: test
 * Author: Alejandro Herrera (alejo901003@hotmail.com)
 * File Create: Thursday, 16th February 2023 6:59:30 pm
 * Last Modified: Thursday, 16th February 2023 6:59:30 
 */

(function () {
  function Logger (Vue, options) {
    Vue.prototype.$logger = function (level, ...message) {
      var levelDef = {
        info: 'info',
        error: 'error',
        warn: 'warn',
        log: 'log'
      }
      level = level || levelDef.info
      if (options.loggin) {
        console[level](message)
      }
    }
    Vue.$logger = function (level, ...message) {
      var levelDef = {
        info: 'info',
        error: 'error',
        warn: 'warn',
        log: 'log'
      }
      level = level || levelDef.info
      if (options.loggin) {
        console[level](message)
      }
    }
  }
  module.exports = Logger
})()
