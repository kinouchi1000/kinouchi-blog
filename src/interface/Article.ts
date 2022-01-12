export interface Article {
  id: string
  title: string
  abstractPic: {
    url: string
    height: number
    width: number
  }
  abstract: string
  body: string
  category: {
    subCategory: string
    mainCategory: {
      category: string
    }
  }
  publishedAt: Date
  updatedAt: Date
}
export interface Articles {
  contents: Article[]
}
export interface Content {
  params: Article
}
