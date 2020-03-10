import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

import Container from '../components/container'
import Article from '../components/article'
import Img from '../components/imgFluid'

const AboutPage = ({data}) => {
  const {frontmatter: {title, image}, html} = data.markdownRemark;
  return (
    <Layout>
      <SEO title={title} />
      <Container width="800px">
        <Article>
          <h1>Bio</h1>

          <Img align="right" fluid={image.childImageSharp.fluid} />

          <div dangerouslySetInnerHTML={{__html: html}} />          
        </Article>
      </Container>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    markdownRemark(fields: {path: {eq: "pages/about.md"}}) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
      html
    }
  }
`;
