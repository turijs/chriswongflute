import React from 'react';
import {css} from '@emotion/core';

const defaultBreakPoint = '600px';
/*
 * Simple usage: n (number of columns, default breakpoint)
 * Advanced usage: n:
 * {
 *   2: '700px',
 *   4: '1200px'
 * }
 */
const Columns = ({n, gap, children}) => {
  if (typeof(n) !== 'object') n = {[n]: defaultBreakPoint};

  let mqs = Object.entries(n).reduce((s, [colCount, breakpoint]) => {
    return s + `@media (min-width: ${breakpoint}) { grid-template-columns: repeat(${colCount}, 1fr); }`
  }, '');

  let style = css`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    grid-auto-rows: auto;
    grid-column-gap: ${gap};
    ${mqs}
  `
  return (
    <div css={style}>
      {children}
    </div>
  );
};

Columns.defaultProps = {
  gap: 0
}

export default Columns;