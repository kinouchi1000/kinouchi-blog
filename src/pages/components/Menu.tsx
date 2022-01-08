import React, { useContext, useState, useEffect, ReactNode } from 'react'
import { CategoriesContext } from '../index'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { Dropdown } from './Dropdown'
import { FaHome, FaCode, FaMusic } from 'react-icons/fa'
import { ImEarth } from 'react-icons/im'
import { client } from '../api/client'

export const Menu: NextPage = () => {
  const [isOpen, setIsOpen] = useState('')
  const categories = useContext(CategoriesContext)
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

          {categories &&
            categories.map((c) => (
              <>
                <Dropdown
                  isOpen={isOpen}
                  onClick={setIsOpen}
                  Name={c.category}
                  Icon={<FaCode className='text-2xl fill-white' />}
                />
              </>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Menu
