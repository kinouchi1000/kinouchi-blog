import React, { Children, useState, ReactNode, ObjectHTMLAttributes } from 'react'
import type { NextPage } from 'next'
import { VscTriangleDown } from 'react-icons/vsc'

interface menuitem {
  name: string
  ref: string
}
interface Props {
  isOpen: string
  onClick: (name: string) => void
  Name: string
  Icon: React.ReactElement
  contents: menuitem[]
}

export const Dropdown: React.FC<Props> = ({ isOpen, onClick, Name, Icon, contents }) => {
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
            <div className='absolute top-10 z-10 w-32 text-base list-none bg-white dark:bg-gray-600 rounded divide-y divide-gray-100 shadow'>
              <ul className='py-1'>
                {contents &&
                  contents.map((content) => {
                    return (
                      <>
                        <li>
                          <a
                            href={content.ref}
                            className='block py-2 px-4 text-sm text-gray-700 dark:text-gray-200 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600'
                          >
                            {content.name}
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
