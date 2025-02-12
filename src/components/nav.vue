<script setup>
import { RouterLink} from 'vue-router';
</script>

<template>
    <nav class="bg-[#008289] flex justify-between text-[#ffffff] px-4 py-4 md:px-6 md:py-6">
        <RouterLink to="/buckets" class="italic text-xl">Eventful Moments.</RouterLink>
        <ul class="flex gap-4 text-lg">
            <li><RouterLink to="/">Login</RouterLink></li>
            <li><RouterLink to="/register">Register</RouterLink></li>      
        </ul>
    </nav>
</template>
