import React, { Children, useContext, useState, ReactNode, ObjectHTMLAttributes } from 'react'
import type { NextPage } from 'next'
import { VscTriangleDown } from 'react-icons/vsc'
import { Category, SubCategories, SubCategory, MainCategories } from '../../interface/Category'
import { FaHome, FaCode, FaMusic } from 'react-icons/fa'
import { ImEarth } from 'react-icons/im'
import { IconType } from 'react-icons/lib'

interface Props {
  isOpen: string
  onClick: (name: string) => void
  Name: string
  subCategories: SubCategory[]
}
interface Icons {
  name: string
  icons: React.ReactElement
}
const icons: Icons[] = [
  { name: 'CODE', icons: <FaCode className='self-center my-auto text-xl fill-white' /> },
  { name: 'MUSIC', icons: <FaMusic className='self-center my-auto text-xl fill-white' /> },
  { name: 'LIFE', icons: <ImEarth className='self-center my-auto text-xl fill-white' /> },
]

export const Dropdown: React.FC<Props> = ({ isOpen, onClick, Name, subCategories }) => {
  const icon = icons.find((i) => {
    if (i.name === Name) return true
  })?.icons

  return (
    <>
      <a
        className='relative p-2 mx-2 hover:bg-neutral-600 rounded-sm cursor-pointer'
        onClick={() => {
          onClick(Name)
        }}
      >
        <div className='flex flex-row m-auto space-x-2 w-auto'>
          {icon}
          <div className='self-center font-bold text-white'>{Name}</div>
          <VscTriangleDown className='self-center fill-white' />
        </div>

        {isOpen === Name && (
          <>
            <div className='absolute top-10 z-10 w-32 text-base list-none bg-white dark:bg-gray-600 rounded divide-y divide-gray-100 shadow'>
              <ul className='py-1'>
                {subCategories &&
                  subCategories.map((category) => {
                    return (
                      <>
                        <li>
                          <a
                            href={category.ref}
                            className='block py-2 px-4 text-sm text-gray-700 dark:text-gray-200 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600'
                          >
                            {category.category}
                          </a>
                        </li>
                      </>
                    )
                  })}
              </ul>
            </div>
          </>
        )}
      </a>
    </>
  )
}

export default Dropdown
