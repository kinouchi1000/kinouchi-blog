import React, { Children, useContext, useState, ReactNode, ObjectHTMLAttributes } from 'react'
import { CategoriesContext } from '../index'
import type { NextPage } from 'next'
import { VscTriangleDown } from 'react-icons/vsc'

interface Props {
  isOpen: string
  onClick: (name: string) => void
  Name: string
  Icon: React.ReactElement
}

export const Dropdown: React.FC<Props> = ({ isOpen, onClick, Name, Icon }) => {
  const categories = useContext(CategoriesContext)
  const subCategories = categories?.find((c) => c.category == Name)
  return (
    <>
      <a
        className='relative p-2 mx-2 hover:bg-neutral-600 rounded-sm cursor-pointer'
        onClick={() => {
          onClick(Name)
        }}
      >
        <div className='flex flex-row m-auto space-x-2 w-auto'>
          {Icon}
          <div className='self-center font-bold text-white'>{Name}</div>
          <VscTriangleDown className='self-center fill-white' />
        </div>

        {isOpen === Name && (
          <>
            <div className='absolute top-10 z-10 w-32 text-base list-none bg-gray-100 rounded divide-y divide-gray-100 shadow'>
              <ul className='py-1'>
                {subCategories &&
                  subCategories.subCategories.map((category) => {
                    return (
                      <>
                        <li>
                          <a
                            href={category.id}
                            className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-300'
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
