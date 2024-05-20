export type Category = {
  id: number
  name: string
  thumbnailUrl: string
}

export type GetCategoriesReqParams = {
  parentCategoryId: number
}
