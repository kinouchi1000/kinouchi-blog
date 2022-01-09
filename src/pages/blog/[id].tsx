// pages/blog/[id].js
import { ReactNode } from 'react'
import { client } from '../api/client'
import { Layout } from '../components/layout'
import type { Article, Articles, Content } from '../../interface/Article'
import {RichWrapper} from './richWrapper'

export default function BlogId({ blog }: { children?: ReactNode; blog?: Article }) {
  return (
    <Layout>
      <h1 className='text-5xl'>{blog && blog.title}</h1>
      <p>{blog && blog.publishedAt}</p>
      <RichWrapper>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog && blog.body}`,
          }}
        />
      </RichWrapper>
    </Layout>
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

  return {
    props: {
      blog: blog,
    },
  }
}
