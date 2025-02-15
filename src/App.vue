<script setup>
import Nav from '@/components/nav.vue';
import Footer from '@/components/footer.vue';
import { RouterView } from 'vue-router';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const isAuthenticated = ref(false);
const router = useRouter();

const login = () => {
  isAuthenticated.value = true;
};

const logout = () => {
  isAuthenticated.value = false;
  router.push('/'); // Redirect to login page
};
</script>

<template class="h-[100vh] max-w-[100vw] flex flex-col">
    <Nav :isAuthenticated="isAuthenticated" :logout="logout" />
    <RouterView  @login="login" />
    <Footer/>
</template>

<!-- // import Home from './components/Home.vue';
// import Buckets from './components/Buckets.vue';
// import BucketInfo from './components/BucketInfo.vue';
// import AddItem from './components/AddItem.vue';
// import Register from './components/Register.vue'; -->