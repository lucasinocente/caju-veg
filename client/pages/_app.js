import App from 'next/app'
import Head from 'next/head'
import Nav from '../components/Nav'

import '../node_modules/bulma/bulma.sass'
import '../styles/globals.css'

const Caju = ({ Component, pageProps, pages }) => {
  return (
    <>
      <Head>
        <title>Caju Cozinha Independente</title>
        <link rel="icon" href="/images/logo-caju-cozinha-independente-porto-alegre.png" />
      </Head>
      <Nav pages={pages} />
      <Component {...pageProps} />
    </>
  )
}

Caju.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const res = await fetch(`${process.env.VERCEL_URL}/api/paginas`);
  const json = await res.json();

  const pages = {
    produtos: json.filter(({ secao }) => secao === 'produtos'),
    comoFunciona: json.filter(({ secao }) => secao === 'como-funciona'),
  }

  return { ...appProps, pages }
}

export default Caju
