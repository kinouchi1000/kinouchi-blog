import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  tagName?: string
}
export const Tag: React.FC<Props> = ({ tagName }) => {
  console.log('debug')
  return (
    <>
      <div className='px-5 m-2 w-fit text-indigo-50 bg-indigo-600 rounded-xl shadow-sm'>
        {tagName}
      </div>
    </>
  )
}
