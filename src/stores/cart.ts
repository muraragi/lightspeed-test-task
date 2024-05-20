import type { Product, ProductFull } from '@/types/product'
import { computed } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useCartStore = defineStore('cart', () => {
  const cart = useLocalStorage<(Product | ProductFull)[]>('cart', [])

  const cartSize = computed(() => cart.value.length)

  const cartSum = computed(() => {
    return cart.value.reduce((acc, curentValue) => {
      return acc + curentValue.price
    }, 0)
  })

  function addToCart(product: Product | ProductFull) {
    cart.value.push(product)
  }

  function removeFromCart(product: Product | ProductFull) {
    cart.value = cart.value.filter((item) => item.id !== product.id)
  }

  function clearCart() {
    cart.value = []
  }

  return { cart, cartSize, cartSum, addToCart, removeFromCart, clearCart }
})
