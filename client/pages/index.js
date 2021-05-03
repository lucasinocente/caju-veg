import Home from '../components/Home'
import Nav from '../components/Nav'

import { getAllPages } from '../helpers/content'

const Index = ({ pages }) => {
  return (
    <>
      <Nav pages={pages} />
      <Home />
    </>
  )
}

export async function getServerSideProps() {
  const pages = await getAllPages()

  return {
    props: {
      pages
    }
  }
}

export default Index;