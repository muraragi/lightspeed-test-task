import type { Category, GetCategoriesReqParams } from '@/types/category'
import { api } from './instance'

export async function getCategories(params?: GetCategoriesReqParams) {
  const response = await api.get<{ items: Category[] }>('/categories', {
    params: {
      ...params,
      responseFields: 'items(id,thumbnailUrl,name,parentId)'
    }
  })
  return response.data.items
}
