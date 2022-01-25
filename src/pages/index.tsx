import { ReactNode, useState } from 'react'
import type { NextPage } from 'next'
import { client } from './api/client'
import { Layout } from './components/Templates/layout'
import type { Article, Articles } from '../interface/Article'
import { AbstractCard } from './components/Organisms/AbstractCard'

export const Home: NextPage = ({ blog }: { children?: ReactNode; blog?: Article[] }) => {
  const cardNo: number = 10
  const [cardNoFrom, setCardNoFrom] = useState<number>(1)

  if (blog === undefined) {
    return <>バックエンドと通信できませんでした。</>
  }

  const nextPageButtonHandler = () => {
    if (blog?.length > cardNoFrom + cardNo) {
      setCardNoFrom(cardNoFrom + cardNo)
    }
  }
  const backPageButtonHandler = () => {
    setCardNoFrom(cardNoFrom - cardNo)
  }

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
