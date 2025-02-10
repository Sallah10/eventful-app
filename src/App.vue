<script setup>
import Nav from './components/nav.vue';
import Footer from './components/footer.vue';
import Home from './components/home.vue';
import Buckets from './components/buckets.vue';
import BucketInfo from './components/bucketInfo.vue';
import AddItem from './components/addItem.vue';
import Register from './components/register.vue';
</script>

<template>
  <div class="h-[100vh]  md:w-[100%]">
    <Nav/>
    <Home/>
    <Buckets/>
    <BucketInfo/>
    <AddItem/>
    <Register/>
    <Footer/>
  </div>
</template>

