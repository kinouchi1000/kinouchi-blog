export interface Article {
  id: string
  title: string
  body: string
  publishedAt?: Date
}
export interface Articles {
  contents: Article[]
}
export interface Content {
  params: Article
}
