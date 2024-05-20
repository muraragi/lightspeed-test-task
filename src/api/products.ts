import type { GetProductsReqParams, Product, ProductFull } from '@/types/product'
import { api } from './instance'

export async function getProducts(params?: GetProductsReqParams) {
  const response = await api.get<{ items: Product[] }>('/products', {
    params: {
      ...params,
      responseFields: 'items(id,thumbnailUrl,name,price)'
    }
  })
  return response.data.items
}

export async function getProductById(id: number) {
  const response = await api.get<ProductFull>(`/products/${id}`)
  return response.data
}
