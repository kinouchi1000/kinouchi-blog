import { ReactNode } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { client } from './api/client'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Custom404: NextPage = () => {
  return (
    <div className='container mx-auto'>
      <p className='font-bold'>ページがありません。404</p>
    </div>
  )
}

export default Custom404
