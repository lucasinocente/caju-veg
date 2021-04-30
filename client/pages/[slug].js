import Page from '../components/Page'
import Nav from '../components/Nav'

import { getAllPages, getPageBySlug, getImagesByPageID } from '../helpers/content'

const Index = ({ pages, page, images }) => {
  return (
    <>
      <Nav pages={pages} />
      <Page page={page} images={images}/>
    </>
  )
}

export async function getServerSideProps({ query: { slug } }) {
  const pages = await getAllPages()
  const page = await getPageBySlug(slug)
  const images = await getImagesByPageID(page[0].id)

  return {
    props: {
      pages,
      page: page[0],
      images,
    }
  }
}

export default Index