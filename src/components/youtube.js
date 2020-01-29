import React from 'react';
import {css} from '@emotion/core';
import {adjustFontSizeTo, rhythm} from '../styles/typography'


const Youtube = ({videoId}) => (
  <div css={css`
    position: relative; 
    padding-bottom: 56.25%; 
    height: 0; 
    overflow: hidden;
    margin-bottom: ${rhythm(1)};
  `}>
    <iframe 
      src={`https://www.youtube.com/embed/${videoId}`} 
      css={css`
        position: absolute; 
        top: 0; left: 0; 
        width: 100%; height: 100%; 
        border:0;
      `}
      allowFullScreen 
      title="YouTube Video"></iframe>
  </div>
);

export default Youtube;

