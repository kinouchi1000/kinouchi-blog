import { Head } from './Head'
import { Menu } from './Menu'
import { Profile } from './Profile'

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      {/* ヘッダー */}
      <Head />
      <Menu />

      <main className='justify-center items-center p-5 my-5 mx-auto w-4/5'>
        <div className='flex space-x-4'>
          <div className='w-3/4'>{children}</div>
          <div className='w-1/4'>
            <Profile />
          </div>
        </div>
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
