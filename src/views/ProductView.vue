<script setup lang="ts">
import { getProductById } from '@/api/products'
import BuyButton from '@/components/BuyButton.vue'
import type { ProductFull } from '@/types/product'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const product = ref<null | ProductFull>(null)
const route = useRoute()

onMounted(async () => {
  product.value = await getProductById(Number(route.params.id))
})
</script>

<template>
  <main v-if="product" class="w-[1200px] mx-auto flex gap-8">
    <img :src="product.hdThumbnailUrl" :alt="product.name" class="basis-2/3 object-contain" />
    <div class="flex flex-col gap-4">
      <h1>{{ product.name }}</h1>

      <div v-html="product.description"></div>

      <h4 class="text-green-600">{{ product.price }} ₽</h4>

      <BuyButton :product="product" />
    </div>
  </main>
</template>
