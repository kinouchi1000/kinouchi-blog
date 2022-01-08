import { ReactNode, createContext, useContext } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { client } from './api/client'
import { Layout } from './layout'

//ブログinterface
interface Article {
  id: string
  title: string
  body: string
}
interface Articles {
  contents: Article[]
}

interface SubCategories {
  contents: {
    id: string
    subCategory: string
    mainCategory: {
      id: string
      category: string
    }
  }[]
}
interface MainCategories {
  contents: {
    id: string
    category: string
  }[]
}
interface SubCategory {
  id: string
  category: string
}
interface Category {
  id: string
  category: string
  subCategories: SubCategory[]
}

export const CategoriesContext = createContext<Category[] | undefined>(undefined)

export const Home: NextPage = ({
  blog,
  categories,
}: {
  children?: ReactNode
  blog?: Article[]
  categories?: Category[]
}) => {
  return (
    <CategoriesContext.Provider value={categories}>
      <Layout>
        <h1 className='m-0 text-6xl leading-tight'>Welcome to my blog!</h1>
        <div>
          <ul>
            {blog &&
              blog.map((article) => (
                <li key={article.id}>
                  <Link href={`/blog/${article.id}`}>
                    <a>{article.title}</a>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </Layout>
    </CategoriesContext.Provider>
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const blog: Articles = await client.get({ endpoint: 'blog' })
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
      blog: blog.contents,
      categories: category,
    },
  }
}

export default Home
