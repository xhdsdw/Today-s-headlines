import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index'
import news from '../views/news'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: index
        },
        {
            path: '/index',
            component: index
        },
        {
            path: '/news',
            component: news
        }
    ]

})