<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { ShoppingBasket } from 'lucide-vue-next'
import { Button } from './ui/button'
import type { Product, ProductFull } from '@/types/product'
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'

const props = defineProps<{
  product: Product | ProductFull
}>()

const router = useRouter()

const cartStore = useCartStore()

const isProductInCart = computed(() => {
  return cartStore.cart.some((item) => props.product.id === item.id)
})

function handleCart() {
  if (isProductInCart.value) {
    router.push('/cart')
  } else {
    cartStore.addToCart(props.product)
  }
}
</script>

<template>
  <Button
    size="sm"
    :variant="isProductInCart ? 'outline' : 'default'"
    @click.stop.prevent="handleCart"
  >
    <ShoppingBasket :size="16" class="mr-2" /> {{ isProductInCart ? 'В корзине' : 'Купить' }}
  </Button>
</template>
