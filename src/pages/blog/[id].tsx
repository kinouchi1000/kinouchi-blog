// pages/blog/[id].js
import { ReactNode, createContext } from 'react'
import type { NextPage } from 'next'
import { client } from '../api/client'
import { Layout } from '../layout'
import type { SubCategories, MainCategories, SubCategory, Category } from '../../interface/Category'
import type { Article, Articles, Content } from '../../interface/Article'

export const CategoriesContext = createContext<Category[] | undefined>(undefined)

export default function BlogId({
  blog,
  categories,
}: {
  children?: ReactNode
  blog?: Article
  categories?: Category[]
}) {
  return (
    <CategoriesContext.Provider value={categories}>
      <Layout>
        <h1>{blog && blog.title}</h1>
        <p>{blog && blog.publishedAt}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog && blog.body}`,
          }}
        />
      </Layout>
    </CategoriesContext.Provider>
  )
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data: Articles = await client.get({ endpoint: 'blog' })

  const paths = data.contents.map((content) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: Content) => {
  const id = context.params.id
  const blog: Article = await client.get({ endpoint: 'blog', contentId: id })
  const mainCategories: MainCategories = await client.get({ endpoint: 'maincategory' })
  const subCategories: SubCategories = await client.get({ endpoint: 'subcategory' })

  //Json作成
  const category: Category[] = []
  mainCategories.contents.map((mc) => {
    const SC: SubCategory[] = []
    subCategories.contents.map((sc) => {
      if (mc.id == sc.mainCategory.id) SC.push({ id: sc.id, category: sc.subCategory })
    })
    category.push({ id: mc.id, category: mc.category, subCategories: SC })
  })

  return {
    props: {
      blog: blog,
      categories: category,
    },
  }
}
