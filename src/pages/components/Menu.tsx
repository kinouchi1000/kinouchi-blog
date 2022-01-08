import React, { useState } from 'react'
import type { NextPage } from 'next'
import { Dropdown } from './Dropdown'
import { FaHome, FaCode, FaMusic } from 'react-icons/fa'
import { ImEarth } from 'react-icons/im'

//microcmsから引っ張る-----
interface menuitem {
  name: string
  ref: string
}
const contents: menuitem[] = [
  { name: 'content1', ref: '#' },
  { name: 'content2', ref: '#' },
]
const contents2: menuitem[] = [
  { name: 'aaa', ref: '#' },
  { name: 'bbb', ref: '#' },
]
//------
export const Menu: NextPage = () => {
  const [isOpen, setIsOpen] = useState('')

  return (
    <div className='h-10 bg-neutral-900'>
      <div className='justify-center mx-auto w-4/5'>
        <div className='flex flex-row'>
          {/* Home */}
          <a className='mx-3 hover:bg-neutral-600 rounded-sm' href={'/'}>
            <div className='flex flex-row p-2 m-auto space-x-2'>
              <FaHome className='self-center my-auto text-xl fill-white' />
            </div>
          </a>

          {/* Code */}
          <Dropdown
            isOpen={isOpen}
            onClick={setIsOpen}
            Name='CODE'
            Icon={<FaCode className='text-2xl fill-white' />}
            contents={contents}
          />
          {/* MUSIC */}
          <Dropdown
            isOpen={isOpen}
            onClick={setIsOpen}
            Name='MUSIC'
            Icon={<FaMusic className='text-2xl fill-white' />}
            contents={contents2}
          />
          {/* LIFE */}
          <Dropdown
            isOpen={isOpen}
            onClick={setIsOpen}
            Name='LIFE'
            Icon={<ImEarth className='text-2xl fill-white' />}
            contents={contents}
          />
        </div>
      </div>
    </div>
  )
}

export default Menu
