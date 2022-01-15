import type { Pic } from './Pic'
import type { Category } from './Category'
export interface Article {
  id: string
  title: string
  abstractPic: Pic
  abstract: string
  body: string
  category: {
    id: string
    subCategory: string
    mainCategory: {
      category: string
    }
  }[]
  publishedAt: Date
  updatedAt: Date
}
export interface Articles {
  contents: Article[]
}
export interface Content {
  params: Article
}
