// pages/blog/[id].js
import { ReactNode } from 'react'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/night-owl.css'

import { client } from '../../api/client'
import { Layout } from '../../components/Templates/layout'
import type { Article, Articles, Content } from '../../interface/Article'
import { RichWrapper } from './richWrapper'

import dayjs from 'dayjs'
import 'dayjs/locale/ja' // これimportしないとエラー吐かれる

export default function BlogId({
  blog,
  highlightedBody,
}: {
  children?: ReactNode
  blog?: Article
  highlightedBody: string
}) {
  //undefindの除去
  if (blog === undefined)
    return (
      <>
        <Layout>
          <h1>記事がありません。</h1>
        </Layout>
      </>
    )

  const publishedYMDT: string = dayjs(blog?.publishedAt).locale('ja').format('YYYY/MM/DD(hh:mm:ss)')
  const updatedYMDT: string = dayjs(blog?.updatedAt).locale('ja').format('YYYY/MM/DD(hh:mm:ss)')
  return (
    <Layout>
      <div className='p-5 m-3 rounded-md border shadow-md'>
        <h1 className='p-3 m-3 text-5xl text-center'>{blog && blog.title}</h1>
        <div className='m-2 text-sm font-light text-center text-gray-400'>
          {publishedYMDT}(最終編集:{updatedYMDT})
        </div>
        <RichWrapper>
          <div
            dangerouslySetInnerHTML={{
              __html: highlightedBody,
            }}
          />
        </RichWrapper>
      </div>
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

  //codeブロックの着色
  const $ = cheerio.load(blog.body)

  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })

  return {
    props: {
      blog: blog,
      highlightedBody: $.html(),
    },
  }
}
