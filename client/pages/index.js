import Home from '../components/Home'
import Nav from '../components/Nav'

const Index = ({ pages }) => {
  return (
    <>
      <Nav pages={pages} />
      <Home />
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.SITE_URL}/api/paginas`);
  const json = await res.json();

  const pages = {
    produtos: json.filter(({ secao }) => secao === 'produtos'),
    comoFunciona: json.filter(({ secao }) => secao === 'como-funciona'),
  }

  return {
    props: {
      pages
    }
  }
}

export default Index;