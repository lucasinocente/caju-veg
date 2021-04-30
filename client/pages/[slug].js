import Page from '../components/Page'
import Nav from '../components/Nav'

import { getAllPages, getPageBySlug } from '../helpers/content'

const Index = ({ pages, page }) => {
  return (
    <>
      <Nav pages={pages} />
      <Page page={page} />
    </>
  )
}

export async function getServerSideProps({ query: { slug } }) {
  const pages = await getAllPages()
  const page = await getPageBySlug(slug)

  return {
    props: {
      pages,
      page: page[0],
    }
  }
}

export default Index