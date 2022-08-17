import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <div>
    <Link href="/">
      <img
        className="rounded-full sm:m-8 m-4 float-right cursor-pointer fixed hover:opacity-75"
        src="https://github.com/developedbytoby.png"
        height="45"
        width="45"
      />
    </Link> 
    <Component {...pageProps}/>
  </div>
  )
}

export default MyApp
