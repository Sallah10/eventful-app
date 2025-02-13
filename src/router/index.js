import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/home.vue';
import Register from '@/components/register.vue';
import Buckets from '@/components/buckets.vue';
import BucketInfo from '@/components/bucketInfo.vue';
import AddItem from '@/components/addItem.vue';
import EditItem from '@/components/editItem.vue';
import NotFound from '@/components/notFound.vue';

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/register', name: 'register', component: Register },
    { path: '/buckets', name: 'buckets', component: Buckets },
    { path: '/bucketInfo', name: 'bucketInfo', component: BucketInfo },
    { path: '/addItem', name: 'addItem', component: AddItem },
    { path: '/editItem', name: 'editItem', component: EditItem },
    { path: '/:catchAll(.*)', name: 'not-found', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
