import React, { Children, useState, ReactNode } from 'react'
import type { NextPage } from 'next'
import { VscTriangleDown } from 'react-icons/vsc'

interface Props {
  Name: string
  Icon: React.ReactElement
  contents: string[]
}

export const Dropdown: React.FC<Props> = ({
  //children,
  Name,
  Icon,
  contents,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <a
        className='flex flex-row mx-auto space-x-2 w-auto hover:bg-neutral-400'
        onClick={() => setIsOpen(!isOpen)}
      >
        {Icon}
        <div className='self-center font-bold text-white'>{Name}</div>
        <VscTriangleDown className='self-center fill-white' />
      </a>
      {isOpen && (
        <div className='absolute top-12 right-2 z-50 p-4 w-64 bg-white rounded border border-gray-100 shadow-lg'>
          <ul>
            {contents &&
              contents?.map((content) => {
                ;<li>content</li>
              })}
          </ul>
        </div>
      )}
    </>
  )
}
