import type { NextPage } from 'next'
import { Twitter } from './Twitter'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

export const Card = ({ children, title }: { children: JSX.Element; title: string }) => {
  return (
    <>
      <div className='m-3 text-gray-700'>{title}</div>
      <div className='m-3 h-1 bg-blue-900'></div>
      <div className='justify-center m-3'>{children}</div>
    </>
  )
}

export const Fotter: NextPage = () => {
  return (
    <footer className='flex justify-center py-5 px-2 bg-gray-200'>
      <div className='flex-1'>
        <Card title='About me!'>
          <>
            <div>
              某大学で機械学習を学ぶ傍ら，趣味としてWeb開発と音楽活動に勤しむ学生です．
              まだまだ未熟な僕と一緒に勉強していきましょう．
            </div>

            <Link href='/blog/4toageima'>
              <a href='' className='flex items-center mb-1 space-x-2 text-cyan-600'>
                <p>Show More</p>
                <FaArrowRight className='text-cyan-600' />
              </a>
            </Link>
          </>
        </Card>
      </div>
      <div className='flex-1'>
        <Card title='Portfolio'>
          <div>プログラム日記</div>
        </Card>
      </div>
      <div className='flex-1'>
        <Card title='twitter'>
          <div className='flex flex-col mx-auto w-fit'>
            <Link href='https://twitter.com/takaaa_firebomb'>
              <a className='text-blue-900'>@takaa_STennis</a>
            </Link>
            <Twitter width={400} height={250} theme='dark' />
          </div>
        </Card>
      </div>
    </footer>
  )
}

export default Fotter
