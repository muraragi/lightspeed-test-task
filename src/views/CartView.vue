<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { X } from 'lucide-vue-next'
import { useCartStore } from '@/stores/cart'
import { useToast } from '@/components/ui/toast'
import { useRouter } from 'vue-router'

const router = useRouter()

const cartStore = useCartStore()

const { toast } = useToast()

function handlePurchase() {
  toast({ title: 'Покупка прошла успешно', description: 'Носите на здоровье' })
  cartStore.clearCart()
}
</script>

<template>
  <main class="w-[1200px] mx-auto flex gap-8">
    <template v-if="cartStore.cartSize > 0">
      <div class="basis-2/3 border rounded-lg">
        <div
          v-for="product in cartStore.cart"
          :key="product.id"
          class="flex justify-between items-center p-4 border-b last:border-0"
        >
          <div class="flex gap-4 items-center">
            <img :src="product.thumbnailUrl" class="h-14 object-contain" loading="lazy" />
            <Button variant="link" @click="router.push(`/products/${product.id}`)">{{
              product.name
            }}</Button>
          </div>

          <Button size="icon" variant="destructive" @click="cartStore.removeFromCart(product)">
            <X :size="16" />
          </Button>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <h4>
          Сумма заказа: <span class="text-green-600">{{ cartStore.cartSum }} ₽</span>
        </h4>

        <Button @click="handlePurchase"> Оформить заказ </Button>
      </div>
    </template>

    <h2 v-else>Корзина пуста</h2>
  </main>
</template>
