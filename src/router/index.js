import Vue from 'vue'
import Router from 'vue-router'

// Root
import RouterRoot from '@/controllers/RouterRoot'

// Routes
import currency from './currency'

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: RouterRoot,
            children: [
                ...currency,
            ],
        },
        {
            path: '/:lang',
            component: RouterRoot,
            children: [
                ...currency,
            ],
        },
    ]
})
