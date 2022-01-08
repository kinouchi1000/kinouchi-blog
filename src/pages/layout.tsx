import { ReactNode } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { client } from './api/client'
import { Head } from './components/Head'
import { Menu } from './components/Menu'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      {/* ヘッダー */}
      <Head />
      <Menu />

      <main className={styles.main}>{children}</main>

      {/* フッター */}
      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Layout
