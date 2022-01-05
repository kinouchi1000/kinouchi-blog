import type { NextPage } from 'next'

export const Head: NextPage = () => {
  return (
    <div className='p-2 m-auto h-16'>
      <div className='flex flex-row items-end'>
        <div className='mx-2 font-mono text-3xl'>kinouchi blog</div>
        <div className='mx-2 font-mono text-sm text-neutral-500'>writen by kinouchi takahiro</div>
      </div>
    </div>
  )
}
