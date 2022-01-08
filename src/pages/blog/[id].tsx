// pages/blog/[id].js
import { ReactNode } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { client } from '../api/client'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Layout } from '../layout'

interface Article {
  id: string
  title: string
  body: string
  publishedAt: Date
}
interface Context {
  params: Article
}
interface Contents {
  contents: Article[]
}

export default function BlogId({ children, blog }: { children?: ReactNode; blog?: Article }) {
  return (
    <Layout>
      <h1>{blog && blog.title}</h1>
      <p>{blog && blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog && blog.body}`,
        }}
      />
    </Layout>
  )
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data: Contents = await client.get({ endpoint: 'blog' })

  const paths = data.contents.map((content) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: Context) => {
  const id = context.params.id
  const data: Article = await client.get({ endpoint: 'blog', contentId: id })

  return {
    props: {
      blog: data,
    },
  }
}
