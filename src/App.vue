<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Store } from 'lucide-vue-next'
import CartButton from './components/CartButton.vue'
import { Toaster } from './components/ui/toast'
</script>

<template>
  <header class="border-b flex items-center px-12 h-16">
    <nav class="flex justify-between items-center w-full">
      <RouterLink to="/"><Store :size="32" /></RouterLink>
      <CartButton />
    </nav>
  </header>

  <div class="px-12 py-6 h-[calc(100vh-5.5rem)]">
    <RouterView :key="$route.path" />
  </div>

  <Toaster />
</template>
