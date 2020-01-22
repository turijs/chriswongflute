import React from 'react';
import {rhythm} from '../styles/typography'
// import {colors} from '../styles/constants'

const Footer = (props) => (
  <footer css={{padding: rhythm(1), textAlign: 'center'}}>
    © {new Date().getFullYear()} Chris Wong
  </footer>
);

export default Footer;