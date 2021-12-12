import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index'
import IndexVuex from '../views/IndexVuex'
import About from '../views/About';
import PostIdPage from '../views/PostIdPage'

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/store',
        name: 'IndexVuex',
        component: IndexVuex
    },
    {
        path: '/:id',
        component: PostIdPage
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;
