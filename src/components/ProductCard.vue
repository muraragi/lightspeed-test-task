<script setup lang="ts">
import type { Product } from '@/types/product'
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'
import Card from '@/components/ui/card/Card.vue'
import CardContent from '@/components/ui/card/CardContent.vue'
import CardFooter from '@/components/ui/card/CardFooter.vue'
import BuyButton from './BuyButton.vue'

defineProps<{
  product: Product
}>()
</script>

<template>
  <RouterLink :to="`/products/${product.id}`">
    <Card class="w-full">
      <CardContent class="p-0">
        <img
          :src="product.thumbnailUrl"
          :alt="product.name"
          class="object-cover rounded-t-lg"
          loading="lazy"
        />
      </CardContent>

      <CardFooter class="pt-6">
        <div class="w-full">
          <p class="text-lg">{{ product.name }}</p>

          <div class="flex justify-between items-center mt-2">
            <p class="font-bold text-green-600">{{ product.price }} ₽</p>

            <BuyButton :product="product" />
          </div>
        </div>
      </CardFooter>
    </Card>
  </RouterLink>
</template>
