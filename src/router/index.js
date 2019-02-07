import Vue from 'vue'
import Router from 'vue-router'

// Root
import RouterRoot from '@/controllers/RouterRoot'

// Routes
import currency from './currency'
import error from './error'

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: RouterRoot,
            children: [
                ...currency,
                ...error,
            ],
        },
        {
            path: '/:lang',
            component: RouterRoot,
            children: [
                ...currency,
                ...error,
            ],
        },
    ]
})
