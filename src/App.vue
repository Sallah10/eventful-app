<script setup>
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
import { RouterView } from 'vue-router';
</script>

<template class="h-[100vh] max-w-[100vw] flex flex-col">
    <Nav/>
    <RouterView/>
    <Footer/>
</template>

<!-- // import Home from './components/Home.vue';
// import Buckets from './components/Buckets.vue';
// import BucketInfo from './components/BucketInfo.vue';
// import AddItem from './components/AddItem.vue';
// import Register from './components/Register.vue'; -->