import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index'
import firebase from 'firebase/compat/app';

const routes = [
    {
        path: '/',
        name: 'Index',
        meta: {
            layout: 'main'
        },
        component: Index
    },
    {
        path: '/history',
        name: 'History',
        meta: {
            layout: 'main',
            auth: true
        },
        component: () => import('../views/History.vue')
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            layout: 'empty',
        },
        component: () => import('../views/Login.vue')
    },
    {
        path: '/logout',
        name: 'Logout',
        meta: {
            layout: 'empty',
        },
        component: () => import('../views/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        meta: {
            layout: 'empty'
        },
        component: () => import('../views/Register.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser;
    const requireAuth = to.matched.some(record => record.meta.auth);

    // Если роут куда мы хотим требует авторизации и нет пользователя
    if (requireAuth && !currentUser) {
        next('/login');
    }
    else {
        next();
    }
})

export default router;
