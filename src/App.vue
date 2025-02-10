<script setup>
import Nav from './components/nav.vue';
import Footer from './components/footer.vue';
import Home from './components/home.vue';
import Buckets from './components/buckets.vue';
import BucketInfo from './components/bucketInfo.vue';
import AddItem from './components/addItem.vue';
</script>

<template>
  <div class="h-[100vh]">
    <Nav/>
    <Home/>
    <Buckets/>
    <BucketInfo/>
    <AddItem/>
    <Footer/>
  </div>
</template>

