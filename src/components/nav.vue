<script setup>
import { RouterLink, useRoute} from 'vue-router';

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
  
}
</script>

<template>
    <nav class="bg-[#008289] flex justify-between text-[#ffffff] px-4 py-4 md:px-6 md:py-6">
        <RouterLink to="/buckets" class="italic text-xl">Eventful Moments.</RouterLink>
        <ul class="flex gap-4 text-lg">
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
        </ul>
    </nav>
</template>
