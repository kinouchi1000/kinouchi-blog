import { Head } from '../Organisms/Head'
import { Menu } from '../Molecules/Menu'
import { Profile } from '../Organisms/Profile'
import { Fotter } from '../Organisms/Fotter'

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
