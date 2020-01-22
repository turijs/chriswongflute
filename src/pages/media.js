import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Article from '../components/article'
import Container from '../components/container'
import Youtube from '../components/youtube'


const MediaPage = () => (
  <Layout>
    <SEO title="Media" />
    <Container width="700px">
      <Article>
        <h1>Media</h1>
        <Youtube videoId="Irhjjk1axW8" />
        <Youtube videoId="urIvc9tqIKs" />
        <Youtube videoId="9E1C8us5VPg" />
        <Youtube videoId="RmYcitlAZ24" />
      </Article>
    </Container>
  </Layout>
)

export default MediaPage
