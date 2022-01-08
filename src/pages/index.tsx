import { ReactNode, createContext, useContext } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { client } from './api/client'
import { Layout } from './layout'
<<<<<<< HEAD
import styles from '../styles/Home.module.css'
import type { SubCategories, MainCategories, SubCategory, Category } from '../interface/Category'
import type { Article, Articles } from '../interface/Article'
=======
>>>>>>> f7fb7cbcf1bcb81cb9cb3ab6ef270850826da7ee

export const Home: NextPage = ({ blog }: { children?: ReactNode; blog?: Article[] }) => {
  return (
<<<<<<< HEAD
    <Layout>
      <h1 className={styles.title}>Welcome to my blog!</h1>
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
=======
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
>>>>>>> f7fb7cbcf1bcb81cb9cb3ab6ef270850826da7ee
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const blog: Articles = await client.get({ endpoint: 'blog' })

  return {
    props: {
      blog: blog.contents,
    },
  }
}

export default Home
