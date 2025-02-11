<!-- <script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const errorMessage = ref('');
    const router = useRouter();

    const handleLogin = () => {
      if (username.value === 'admin' && password.value === 'password') {
        router.push('/buckets'); // Redirect to buckets page
      } else {
        errorMessage.value = 'Invalid username or password';
      }
    };

    return { username, password, errorMessage, handleLogin };
  },
};
</script> -->
<!-- <template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <input type="text" v-model="username" placeholder="Username" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </template>
   -->

<template>
    <section class="section  md:items-center ">
        <div class="w-[626px]">
            <h1 class="textH1 self-start">Welcome back,</h1>
        </div>
        <h2 class="textH2 md:max-w-[626px]">
            Hi, my name is Eventful Moments, I am a bucket… no, not the bucket of water but I store awesome moments you will like to have in coming years.
        </h2>
        <form action="" class="form">
            <div class="gap-2 flex flex-col">
                <h3 class="textH3">Email</h3>
                <input 
                type="email"  
                class="rounded-2xl w-full border-[#707070] border-2 px-6 py-4 md:w-[626px]"/>
            </div>
            <div class="gap-2 flex flex-col">
                <h3 class="textH3">Password</h3>
                <input 
                type="password"
                class="rounded-2xl w-full border-[#707070] border-2 px-6 py-4 md:w-[626px]"
                />
            </div>
            <button class="button">Login</button>
        </form>
    </section>
</template>