import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Buckets from './components/Dashboard.vue';

const routes = [
    {
        path: '/',
        name: Home,
        component: Home
    },
    {
        path: '/buckets',
        name: Buckets,
        component: Buckets
    },
    {
        path: '/:catchAll(.*)',
        name: 'not-found',
        component: NotFoundView,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
