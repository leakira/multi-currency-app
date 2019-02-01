import Vue from 'vue'
import Router from 'vue-router'

// Routes
import routeCurrency from './currency'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    ...routeCurrency,
  ]
})
