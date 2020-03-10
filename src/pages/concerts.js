import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Article from '../components/article'
import Container from '../components/container'
import Event from '../components/event'

import SEO from '../components/seo'

import {parseISO, add} from 'date-fns';

function renderEvent({frontmatter: {title, date, time, location}, fields: {path}}) {
  const datetime = add(parseISO(date), {minutes: time});
  return <Event key={path} title={title} datetime={datetime} location={location} />
}

const EventsPage = ({data}) => {  
  return (
    <Layout>
      <SEO title="Concerts" />
      <Container width="700px">
        <Article>
          <h1>Concerts</h1>
          {data.future.nodes.map(renderEvent)}

          {data.past.nodes.length && <h2>Past</h2>}
          {data.past.nodes.map(renderEvent)}
        </Article>
      </Container>
    </Layout>
  )
}

export default EventsPage

export const eventFrag = graphql`
  fragment EventInfo on MarkdownRemark {
    frontmatter {
      title
      date(formatString: "YYYY-MM-DD"),
      time
      location
    }
    fields { path }
  }
`

export const pageQuery = graphql`
  query {
    future: allMarkdownRemark(sort: {fields: [frontmatter___date]} filter: {fields: {type: {eq: "events"}}, isFuture: {eq: true}}) {
      nodes { ...EventInfo }
    }
    past: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC} filter: {fields: {type: {eq: "events"}}, isFuture: {eq: false}}) {
      nodes { ...EventInfo }
    }
  }
`;