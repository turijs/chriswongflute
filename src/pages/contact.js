import React from 'react'
// import { Link } from "gatsby"
import Layout from '../components/layout'
import SEO from '../components/seo'
import {css} from '@emotion/core'
// import styled from '@emotion/styled'
import {rhythm} from '../styles/typography'
import Article from '../components/article'
import Container from '../components/container'
import Columns from '../components/columns'
import {colors} from '../styles/constants'


const inputStyle = css`
  background: #d4cfd5;
  display: block;
  padding: calc(${rhythm(1/4)} - 1px);
  margin-bottom: ${rhythm(1/2)};
  border-radius: 3px;
  /* box-shadow: inset 2px 2px 3px #000000; */
  border: 1px solid #969296;
  width: 100%;
`

const buttonStyle = css`
  ${inputStyle}
  display: inline-block;
  background: ${colors.high};
  color: ${colors.light};
  width: auto;
  border: 0;
  padding: ${rhythm(1/4)} ${rhythm(1/2)};
  &:hover {
    box-shadow: inset 0px 2px 8px -5px #000000;
  }
  &:active {
    box-shadow: inset 0px 2px 5px -2px #000000;
  }
`

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Container width="650px">
      <Article>
        <h1>Contact</h1>
        <form name="contact" method="POST" data-netlify="true">
          <Columns n={{2: '500px'}} gap={rhythm(1/2)}>
            <input css={inputStyle} name="name" placeholder="Name" required />
            <input css={inputStyle} name="email" type="email" placeholder="Email" required />
          </Columns>
          <textarea css={css`resize: vertical; ${inputStyle}`} name="message" placeholder="Message" rows="5" />
          <div css={{textAlign: 'center'}}><input css={buttonStyle} type="submit" /></div>
          <input name="form-name" value="contact" type="hidden" />
        </form>
      </Article>
    </Container>
  </Layout>
)

export default ContactPage
