export interface SubCategories {
  contents: {
    id: string
    subCategory: string
    ref: string
    mainCategory: {
      id: string
      category: string
    }
  }[]
}
export interface MainCategories {
  contents: {
    id: string
    category: string
  }[]
}
export interface SubCategory {
  id: string
  category: string
  ref: string
}
export interface Category {
  id: string
  category: string
  subCategories: SubCategory[]
}
