import React from 'react';
import {format} from 'date-fns';
import styled from '@emotion/styled';
import {adjustFontSizeTo, rhythm} from '../styles/typography'
import {colors, MQ2} from '../styles/constants'


const Title = styled.h2`
  ${adjustFontSizeTo('20px', 1)}
  /* font-weight: normal; */
  text-align: left;
  color: ${colors.high};
  margin: 0;
`

const Square = ({datetime: dt}) => {
  return (
    <div css={{
      background: colors.light,
      color: colors.dark,
      textAlign: 'center',
      padding: rhythm(1/4),
      width: 90,
      marginRight: rhythm(1),
      flexShrink: 0,
      [MQ2]: {
        display: 'none'
      }
    }}>
      <div css={{ ...adjustFontSizeTo('14px'), textTransform: 'uppercase' }}>{format(dt, 'MMM')}</div>
      <div css={adjustFontSizeTo('28px', 1)}>{format(dt, 'd')}</div>
      <div css={adjustFontSizeTo('12px')}>{format(dt, 'h:mm a')}</div>
    </div>
  )
}

const Event = ({title, datetime, location}) => (
  <article css={{display: 'flex', alignItems: 'center', marginBottom: rhythm(1)}}>
    <Square datetime={datetime} />
    <div css={{flexGrow: 1}}>
      <Title>{title}</Title>
      <div> {format(datetime, 'EEEE, MMMM d, y')} </div>
      <div> {format(datetime, 'h:mm a')} </div>
      <div><em>{location}</em></div>
    </div>
  </article>
);

export default Event;