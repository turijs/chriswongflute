import React from 'react'
// import { Link } from "gatsby"
import bgImage from '../images/wongportrait1.jpg'
import Layout from '../components/layout'
// import Image from "../components/image"
import SEO from '../components/seo'
import {css} from '@emotion/core'
import {rhythm} from '../styles/typography'


const imgStyle = css`
  height: calc(100vh - ${rhythm(3)});
  min-height: 1000px;
  width: auto;
  display: block;
  margin: 0 auto;
  @media (max-width: 666px) {
    width: 100%;
    height: auto;
    min-height: 0;
  }
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <img css={imgStyle} src={bgImage} />
    <hr css={{borderTop: `1px solid #4a1424`, margin: 0}}/>
  </Layout>
)

export default IndexPage
