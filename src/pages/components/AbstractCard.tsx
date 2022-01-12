import type { Article } from '../../interface/Article'
import { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dayjs from 'dayjs'
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
          <div className='p-1 m-10'>
            <p className='text-lg font-medium text-gray-600'>{article.abstract}</p>
          </div>
        </a>
      </div>
    </>
  )
}

{
  /* <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div> */
}
