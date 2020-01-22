// import React from 'react';
import styled from '@emotion/styled'

const Container = styled.div`
  margin: 0 auto;
  max-width: ${p => p.width};
  box-sizing: content-box;
  padding: 0 ${p => p.minGap};
`

Container.defaultProps = {
  width: '1000px',
  minGap: 0
}

export default Container;