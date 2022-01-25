import type { NextPage } from 'next'

export const Head: NextPage = () => {
  return (
    <div className='p-2 mx-auto w-4/5 h-24 sm:h-16'>
      <div className=' items-end sm:flex sm:flex-row'>
        <div className='p-2 font-mono text-3xl'>kinouchi blog</div>
        <div className='p-2 font-mono text-sm text-neutral-500'>writen by kinouchi takahiro</div>
      </div>
    </div>
  )
}

export default Head
