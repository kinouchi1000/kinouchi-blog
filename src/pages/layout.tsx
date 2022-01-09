import { Head } from './components/Head'
import { Menu } from './components/Menu'

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      {/* ヘッダー */}
      <Head />
      <Menu />

      <main className='flex flex-col flex-1 justify-center items-center px-4 min-h-screen'>
        {children}
      </main>
      {/* フッター */}
      <footer className='flex flex-1 justify-center items-center px-2 h-10 bg-gray-200'>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by Next.js
        </a>
      </footer>
    </div>
  )
}

export default Layout
