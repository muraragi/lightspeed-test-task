<script setup lang="ts">
import ProductsPage from '@/components/ProductsPage.vue'
</script>

<template>
  <ProductsPage :category-id="Number($route.params.id)" />
</template>
