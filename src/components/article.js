// import React from 'react'
import styled from "@emotion/styled"
import {rhythm} from '../styles/typography'
import {colors} from '../styles/constants'

const Article = styled.article`
  /* background: ${colors.light};
  color: ${colors.dark}; */
  background: ${colors.dark};
  color: ${colors.light};
  padding: ${rhythm(1)} ${rhythm(1)} 0;
  /* border: 3px solid ${colors.dark}; */
  position: relative;
  /* border-radius: 3px; */
  /* &:after {
    content: '';
    position: absolute;
    left: -3px; top: -3px; right: -3px; bottom: -3px;
    border: 1px solid #f3dec5;
    border-radius: 3px;
  } */
`

export default Article;