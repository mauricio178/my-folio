import '../styles/global.scss'
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Header } from '../components/Header';
import Router from 'next/router'
import { MenuAsideProvider } from '../hooks/menuMobile'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {

    Router.push('/home')
  }, [])

  return (
    <>
      <MenuAsideProvider>
        <Header />
        <Component {...pageProps} />
      </MenuAsideProvider>
    </>

  )
}

export default MyApp