import { ReactNode } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { client } from './api/client'
import { Head } from './components/Head'
import { Menu } from './components/Menu'
import { Layout } from './layout'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

interface Article {
  id: string
  title: string
  body: string
}
interface Contents {
  contents: Article[]
}
export const Home: NextPage = ({
  children,
  blog,
}: {
  children?: ReactNode
  blog?: { id: string; title: string; publishedAt: string }[]
}) => {
  return (
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
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data: Contents = await client.get({ endpoint: 'blog' })

  console.log(data)

  return {
    props: {
      blog: data.contents,
    },
  }
}

export default Home
