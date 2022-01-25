import { ReactNode, useState } from 'react'
import type { NextPage } from 'next'
import { client } from './api/client'
import { Layout } from './components/Templates/layout'
import type { Article, Articles } from '../interface/Article'
import { AbstractCard } from './components/Organisms/AbstractCard'
import { Pagenation } from './components/Molecules/Pagenation'

export const Home: NextPage = ({ blog }: { children?: ReactNode; blog?: Article[] }) => {
  const showCardNo: number = 5
  const [cardNoFrom, setCardNoFrom] = useState<number>(0)

  if (blog === undefined) {
    return <>バックエンドと通信できませんでした。</>
  }

  const showBlog: Article[] = blog.slice(cardNoFrom, cardNoFrom + showCardNo)

  return (
    <Layout>
      <div>
        {showBlog.map((article) => (
          <AbstractCard article={article} key={article.id} />
        ))}
      </div>
      <Pagenation
        showCardNo={showCardNo}
        allCardNo={blog.length}
        cardNoFrom={cardNoFrom}
        setCardNoFrom={setCardNoFrom}
      />
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
