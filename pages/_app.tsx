import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Link href="/">
        <img
          className="rounded-full cursor-pointer hover:opacity-75 fixed sm:m-8 m-4"
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
