import '../styles/tailwind.css'
import '../styles/globals.css'
import '../styles/tailwind-util.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
