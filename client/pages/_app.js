import Head from 'next/head'
import '../node_modules/bulma/bulma.sass'
import '../styles/globals.css'

const Caju = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Caju Cozinha Independente</title>
        <link rel="icon" href="/images/logo-caju-cozinha-independente-porto-alegre.png" />
      </Head>
       <Component {...pageProps} />
    </>
  )
}

export default Caju
