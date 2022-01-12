import { FaArrowRight } from 'react-icons/fa'
import React from 'react'
import Image from 'next/image'

export const Profile: React.FC = () => {
  return (
    <div className='my-3 w-80 h-auto rounded border shadow-md'>
      <Image
        width={320}
        height={180}
        objectFit='cover'
        src='/profile.JPG'
        alt='profile Picture'
        className='rounded-t'
      />
      <div className='py-4 px-6'>
        <div className='mb-2 text-xl font-bold'>木内 貴浩</div>
        <p className='text-base text-gray-700'>
          某大学で機械学習を学ぶ傍ら，趣味としてWeb開発と音楽活動に勤しむ学生です．
          まだまだ未熟な僕と一緒に勉強していきましょう．
        </p>
        <a href='' className='flex items-center mb-1 space-x-2 text-cyan-600'>
          <p>Show More</p>
          <FaArrowRight className='text-cyan-600' />
        </a>
      </div>
    </div>
  )
}

export default Profile
