import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Register from '@/components/Register.vue';
import Buckets from '@/components/Buckets.vue';
import BucketInfo from '@/components/BucketInfo.vue';
import AddItem from '@/components/AddItem.vue';
import EditItem from '@/components/EditItem.vue';
import NotFound from '@/components/NotFound.vue';

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
