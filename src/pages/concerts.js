import React from 'react'
import Layout from '../components/layout'
import Article from '../components/article'
import Container from '../components/container'
import Event from '../components/event'

// import Image from "../components/image"
import SEO from '../components/seo'
import {css} from '@emotion/core'
import {rhythm} from '../styles/typography'

import {parseISO, add} from 'date-fns';



const EventsPage = ({data}) => {
  console.log(data.allMarkdownRemark);
  return (
    <Layout>
      <SEO title="Concerts" />
      <Container width="700px">
        <Article>
          <h1>Concerts</h1>
          {data.allMarkdownRemark.edges.map(({node: {frontmatter: {title, date, time, location}, fields: {path}}}) => {
            const datetime = add(parseISO(date), {minutes: time});

            return (
              <Event
                key={path}
                title={title} 
                datetime={datetime}
                location={location}
              />
            )
          })}
        </Article>
      </Container>
    </Layout>
  )
}

export default EventsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date]}) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD"),
            time
            location
          }
          fields {
            type
            path
          }
        }
      }
    }
  }
`;