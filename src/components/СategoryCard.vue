<script lang="ts" setup>
import type { Category } from '@/types/category'
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router';

defineProps<{
  category: Category
}>()
</script>

<template>
  <RouterLink :to="`/categories/${category.id}`">
    <div class="flex items-center gap-4 rounded-lg border shadow-sm px-6 py-4">
      <img :src="category.thumbnailUrl" class="h-14 object-contain" loading="lazy" />
      {{ category.name }}
    </div>
  </RouterLink>
</template>
