import { ReactNode, createContext, useContext } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { client } from './api/client'
import { Layout } from './components/layout'

import styles from '../styles/Home.module.css'
import type { SubCategories, MainCategories, SubCategory, Category } from '../interface/Category'
import type { Article, Articles } from '../interface/Article'
import { AbstractCard } from './components/AbstractCard'

export const Home: NextPage = ({ blog }: { children?: ReactNode; blog?: Article[] }) => {
  return (
    <Layout>
      <div>
        {blog && blog.map((article) => <AbstractCard article={article} key={article.id} />)}
      </div>
    </Layout>
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
