import { Head } from './Head'
import { Menu } from './Menu'
import { Profile } from './Profile'
import { Fotter } from './Fotter'

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
      <Fotter />
    </div>
  )
}

export default Layout
