<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { ShoppingBasket } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import { Button } from './ui/button'

const cartStore = useCartStore()
</script>

<template>
  <RouterLink to="/cart">
    <Button>
      <ShoppingBasket :size="16" class="mr-2" /> Корзина
      <div
        v-if="cartStore.cartSize > 0"
        class="flex justify-center items-center w-5 h-5 text-xs text-white bold rounded-full bg-rose-600 ml-2"
      >
        {{ cartStore.cartSize }}
      </div>
    </Button>
  </RouterLink>
</template>
