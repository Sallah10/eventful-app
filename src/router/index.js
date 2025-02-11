import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Buckets from './components/Dashboard.vue';

const routes = [
    { path: '/', name: home, component: Home },
    { path: '/buckets', name: buckets, component: Buckets },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
