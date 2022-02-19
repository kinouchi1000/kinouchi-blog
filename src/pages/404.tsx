import type { NextPage } from 'next'
import { Layout } from '../components/Templates/layout'

const Custom404: NextPage = () => {
  return (
    <Layout>
      <div className='container justify-center mx-auto text-center'>
        <p className='font-bold'>ページがありません。404</p>
      </div>
    </Layout>
  )
}

export default Custom404
