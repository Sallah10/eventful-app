<script setup>
import { RouterLink, useRoute} from 'vue-router';
import { defineProps } from 'vue';

const props = defineProps(['isAuthenticated', 'logout']);

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
  
}
</script>

<template>
    <nav class="bg-[#008289] flex justify-between text-[#ffffff] px-4 py-4 md:px-6 md:py-6">
        <RouterLink to="/buckets" class="italic text-xl">Eventful Moments.</RouterLink>
        <ul class="flex gap-2 md:gap-4 items-center text-lg">
          <template v-if="props.isAuthenticated">
            <li><RouterLink 
                to="/buckets"
                :class="[
                  isActiveLink('/buckets')
                    ? 'bg-[#06C3B4]'
                    : 'hover:bg-[#00000029]',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]">Buckets</RouterLink></li>
            <li><button
                :class="[
                  isActiveLink('/')
                    ? 'bg-[#06C3B4]'
                    : 'hover:bg-[#00000029]',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                @click="props.logout">Logout</button></li>   
          </template>   
          <template v-else>
            <li><RouterLink 
                to="/"
                :class="[
                  isActiveLink('/')
                    ? 'bg-[#06C3B4]'
                    : 'hover:bg-[#00000029]',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]">Login</RouterLink></li>
            <li><RouterLink 
                to="/register"
                :class="[
                  isActiveLink('/register')
                    ? 'bg-[#06C3B4]'
                    : 'hover:bg-[#00000029]',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]">Register</RouterLink></li>   
          </template>
        </ul>
    </nav>
</template>
