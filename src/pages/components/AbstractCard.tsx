import type { Article } from '../../interface/Article'
import { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dayjs from 'dayjs'
import { Tag } from './Tag'
import 'dayjs/locale/ja' // これimportしないとエラー吐かれる

interface Props {
  children?: ReactNode
  article?: Article
}
export const AbstractCard: React.FC<Props> = ({ article }) => {
  if (article === undefined) return <></>
  const publishedYMDT: string = dayjs(article.publishedAt)
    .locale('ja')
    .format('YYYY/MM/DD(hh:mm:ss)')
  const updatedYMDT: string = dayjs(article.updatedAt).locale('ja').format('YYYY/MM/DD(hh:mm:ss)')

  return (
    <>
      <div className='my-3 rounded border shadow-md'>
        <a href={`/blog/${article.id}`}>
          <div className='m-2 text-sm font-light text-center text-gray-400'>
            {publishedYMDT}(最終編集:{updatedYMDT})
          </div>
          <h1 className='m-3 font-sans text-4xl font-bold leading-tight text-center'>
            {article.title}
          </h1>
          <div className='relative m-3 h-96'>
            <Image
              layout='fill'
              objectFit='cover'
              src={article.abstractPic.url}
              alt='abstract Picture'
              className='rounded-md'
            />
          </div>
          <div className='p-1 mx-10 mt-5 mb-2'>
            <p className='text-lg font-medium text-gray-600'>{article.abstract}</p>
          </div>

          <div className='flex flex-wrap p-2 my-3 mx-10 h-fit'>
            {article.category.map((category) => {
              return (
                <>
                  <Tag tagName={category.subCategory} key={category.id} />
                </>
              )
            })}
          </div>
        </a>
      </div>
    </>
  )
}
