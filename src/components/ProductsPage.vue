<script setup lang="ts">
import { onMounted, ref, defineProps } from 'vue'
import { getCategories } from '@/api/categories'
import { getProducts } from '@/api/products'
import type { Category } from '@/types/category'
import type { Product } from '@/types/product'
import CategoryCard from '@/components/СategoryCard.vue'
import ProductCard from '@/components/ProductCard.vue'

const props = defineProps<{
  categoryId: number
}>()

const categories = ref<null | Category[]>(null)
const products = ref<null | Product[]>(null)

const dataLoading = ref(true)

onMounted(async () => {
  const promises: [Promise<Category[]>, Promise<Product[]>] = [
    getCategories({ parentCategoryId: props.categoryId }),
    getProducts(props.categoryId ? { categories: `${props.categoryId}` } : undefined)
  ]
  ;[categories.value, products.value] = await Promise.all(promises)

  dataLoading.value = false
})
</script>

<template>
  <main v-if="!dataLoading">
    <h2>{{ props.categoryId ? 'Подкатегории' : 'Категории' }}</h2>

    <div class="flex gap-4 flex-wrap my-6">
      <CategoryCard
        v-for="category in categories"
        :key="category.id"
        :category="category"
        class="basis-72"
      />
    </div>

    <h2>{{ props.categoryId ? 'Товары' : 'Популярные товары' }}</h2>

    <div class="flex gap-4 flex-wrap mt-6">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        class="basis-72"
      />
    </div>
  </main>
</template>
