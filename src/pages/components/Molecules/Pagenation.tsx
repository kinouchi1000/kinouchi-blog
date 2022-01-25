import exp from 'constants'
import React from 'react'
import type { NextPage } from 'next'
import { VscTriangleLeft, VscTriangleRight } from 'react-icons/vsc'

type Props = {
  //children: JSX.Element
  showCardNo: number
  cardNoFrom: number
  allCardNo: number
  setCardNoFrom: React.Dispatch<number>
}
export const Pagenation: NextPage<Props> = ({
  showCardNo,
  allCardNo,
  cardNoFrom,
  setCardNoFrom,
}) => {
  const countUp = (flactuation: number) => {
    const nextCardNoFrom = cardNoFrom + showCardNo * flactuation
    if (nextCardNoFrom <= allCardNo && nextCardNoFrom >= 0) setCardNoFrom(nextCardNoFrom)
  }
  const maxCardNo = (): number => {
    const nextCardNoFrom = cardNoFrom + showCardNo
    if (nextCardNoFrom <= allCardNo) return nextCardNoFrom
    return allCardNo
  }
  return (
    <div className='flex flex-row justify-center items-center p-3 m-auto w-auto h-auto'>
      <p className='p-0 m-3 cursor-pointer' onClick={() => countUp(-1)}>
        <VscTriangleLeft size={50} className='m-auto hover:fill-slate-600' />
      </p>
      <div className='p-0 my-3 mx-32 text-2xl'>
        {cardNoFrom + 1}~{maxCardNo()} / {allCardNo}
      </div>
      <p className='p-0 m-3 cursor-pointer' onClick={() => countUp(1)}>
        <VscTriangleRight size={50} className='m-auto hover:fill-slate-600' />
      </p>
    </div>
  )
}

export default Pagenation
