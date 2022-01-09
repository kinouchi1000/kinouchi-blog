import {FaArrowRight} from 'react-icons/fa'
import React from 'react'
export const Profile:React.FC =()=>{
  return (
      <div className="w-80 h-auto rouded shadow-lg">
        <img className='w-full' src='/profile.JPG' alt='profile Picture'/>
        <div className="px-6 py-4">
          <div className='font-bold text-xl mb-2'>木内 貴浩</div>
          <p className='text-gray-700 text-base'>
            某大学で機械学習を学ぶ傍ら，趣味としてWeb開発と音楽活動に勤しむ学生です．
            まだまだ未熟な僕と一緒に勉強していきましょう．
          </p>
          <a href='' className='text-cyan-600 flex items-center mb-1 space-x-2'>
            <p>Show More</p>
            <FaArrowRight className='text-cyan-600'/>
          </a>
        </div>

      </div>
  )
}

export default Profile