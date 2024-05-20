export type Product = {
  id: number
  name: string
  price: number
  thumbnailUrl: string
}

export type ProductFull = {
  id: number
  name: string
  description: string
  hdThumbnailUrl: string
  thumbnailUrl: string
  price: number
}

export type GetProductsReqParams = {
  categories: string
}
