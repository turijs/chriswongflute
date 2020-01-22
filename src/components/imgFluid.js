import React from 'react';
import {css} from '@emotion/core'
import GatsbyImg from 'gatsby-image'
import {adjustFontSizeTo, rhythm} from '../styles/typography'

const Img = props => {
  let alignmentCSS = {};
  switch (props.align) {
    case 'left':
      alignmentCSS = {float: 'left', marginRight: rhythm(1)}
      break
    case 'right':
      alignmentCSS = {float: 'right', marginLeft: rhythm(1)}
      break
    case 'center':
      alignmentCSS = {marginLeft: 'auto', marginRight: 'auto'}
      break
  }

  return (
    <div css={css`
      width: ${props.fluid.presentationWidth}px;
      max-width: 100%;
      margin-bottom: ${rhythm(1)};
      ${alignmentCSS}
      
      @media (max-width: ${props.fluid.presentationWidth + 300}px) {
        float: none;
        margin-left: auto;
        margin-right: auto;
      }
    `}>
      <GatsbyImg {...props} />
    </div>
  )
}

export default Img;