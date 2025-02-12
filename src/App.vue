<script setup>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
// import Home from './components/Home.vue';
// import Buckets from './components/Buckets.vue';
// import BucketInfo from './components/BucketInfo.vue';
// import AddItem from './components/AddItem.vue';
// import Register from './components/Register.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="h-[100vh] ">
    <Nav/>
    <!-- <Home/>
    <Buckets/>
    <BucketInfo/>
    <AddItem/>
    <Register/> -->
    <RouterView/>
    <Footer/>
  </div>

</template>

