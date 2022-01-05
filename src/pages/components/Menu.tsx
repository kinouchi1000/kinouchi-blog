import type { NextPage } from 'next'
import { Dropdown } from './Dropdown'
import { FaHome, FaCode } from 'react-icons/fa'

//microcmsから引っ張る
const contents: string[] = ['content1', 'content2']

export const Menu: NextPage = () => {
  return (
    <div className='flex flex-row h-10 bg-neutral-900'>
      {/* Home */}
      <a className='my-auto mx-10' href='https://github.com/kinouchi1000'>
        <div className='flex flex-row p-2 m-auto space-x-2'>
          <FaHome className='self-center my-auto text-xl fill-white' />
          <div className='self-center font-bold text-white'>HOME</div>
        </div>
      </a>

      {/* その他Menu */}
      <div className='my-auto mx-20'>
        <Dropdown
          Name='CODE'
          Icon={<FaCode className='text-2xl fill-white' />}
          contents={contents}
        />
      </div>
    </div>
  )
}
