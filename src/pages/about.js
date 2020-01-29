import React from 'react'
// import { Link } from 'gatsby'
// import bgImage from '../images/wongportrait1.jpg'
import Layout from '../components/layout'
import SEO from '../components/seo'
// import {css} from '@emotion/core'
// import styled from "@emotion/styled"
// import {rhythm} from '../styles/typography'
// import {colors} from '../styles/constants'

import Container from '../components/container'
import Article from '../components/article'
import Img from '../components/imgFluid'
import GatsbyImg from 'gatsby-image'



const AboutPage = ({data}) => {
  return (
    <Layout>
      <SEO title="About" />
      <Container width="800px">
        <Article>

          <h1>Bio</h1>

          <Img align="right" fluid={data.bioImage.fluidChild.fluid} />
          
          <p> Praised for his brilliant stage presence and charisma, flutist Chris Wong has given performances throughout Asia, North America and Europe. A passionate soloist, Wong has experience from giving solo recitals in small school venues to performing in the Kodak Theater with the Eastman Orchestra as the winner of the Eastman School of Music Triennial Flute Concerto Competition. In addition, Wong is the first prize winner of the Tallon Perkes Memorial Flute Competition at Eastman, and prize winner of the Jefferson Symphony International Young Artist Competition and the Serge & Olga Koussevitzky Young Artist Award. </p>

          <p> As an active orchestral musician, Wong has performed with the New York Philharmonic, New York String Orchestra, The Juilliard Symphony, among others. He has participated in festivals such as Orford Music, Hamamatsu International Wind Instrument Academy and Festival etc. And has appeared in masterclasses with Julien Beaudiment, Shigenori Kudo, Ian Clarke and Marina Piccinini. </p>

          <p> Wong is also an enthusiastic educator. He believes that music can help nurture children into well-rounded human beings, as he has experienced that through his past and current mentors. He was the flute mentor of the New Horizons Program at the Eastman Community Music School during his time at Eastman. Currently he participates in the Morse Teaching Artist Fellowship, the Music Advancement Program through the Juilliard Community Engagement Programs and maintains a small private studio. </p>

          <p> Wong is currently pursuing his Master of Music degree at The Juilliard School under the tutelage of Robert Langevin, and is a proud recipient of a Kovner Fellowship. Prior to Juilliard, he graduated from the Interlochen Arts Academy in 2014 with a Music Award in Flute Performance, and the Eastman School of Music in 2018 with high distinction, along with the prestigious Performer’s Certificate. His teachers include Bonita Boyd, Nancy Stagnitta and Brian Chan. </p>
        </Article>
      </Container>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    bioImage: file(relativePath: { eq: "wongportrait2.jpg" }) {
      fixedChild: childImageSharp {
        fixed(width: 600) {
          ...GatsbyImageSharpFixed
        }
      }
      fluidChild: childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
  }
`;
