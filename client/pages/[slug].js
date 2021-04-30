import Page from '../components/Page'
import Nav from '../components/Nav'

import { getAllPages } from '../helpers/content'

const Index = ({ pages }) => {
  return (
    <>
      <Nav pages={pages} />
      <Page />
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

export default Index