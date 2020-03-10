import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Article from '../components/article'
import Container from '../components/container'
import Youtube from '../components/youtube'


const MediaPage = ({data: {markdownRemark: {frontmatter: {title, videos}}}}) => (
  <Layout>
    <SEO title={title} />
    <Container width="700px">
      <Article>
        <h1>Media</h1>
        {videos.map(vid => <Youtube key={vid} videoId={vid} />)}
      </Article>
    </Container>
  </Layout>
)

export default MediaPage;

export const pageQuery = graphql`
  query {
    markdownRemark(fields: {path: {eq: "pages/media.md"}}) {
      frontmatter {
        title
        videos
      }
      html
    }
  }
`;
