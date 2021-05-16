import { useEffect } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head'
import Footer from '../components/Footer'

import '../node_modules/bulma/bulma.sass'
import '../styles/globals.css'

import { sendAnalyticsPageView } from '../helpers/analytics'

const Caju = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    const page_path = `/${router.query.slug ? router.query.slug : ''}`
    sendAnalyticsPageView(page_path, window)
  }, [router.query]);

  return (
    <>
      <Head>
        <title>Caju Cozinha Independente</title>
        <link rel="icon" href="/images/logo-caju-cozinha-independente-porto-alegre.png" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default Caju
