import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import styled from "@emotion/styled"
import {css, Global} from "@emotion/core"
import {colors} from '../styles/constants'
import {adjustFontSizeTo, rhythm} from '../styles/typography'
import Container from "./container"


const nav = [
  {title: 'About', to: '/about/'},
  {title: 'Media', to: '/media/'},
  {title: 'Contact', to: '/contact/'},
]

const MQ1 = '@media (max-width: 700px)';
const MQ2 = '@media (max-width: 400px)';

const headerStyle = css`
  margin: ${rhythm(1)} 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 10;
`

const Title = styled(Link)`
  text-decoration: none;
  font-family: 'Montserrat', serif;
  color: ${colors.light};
  display: inline-block;
  text-transform: uppercase;
  position: relative;
  z-index: 100;
  ${adjustFontSizeTo('34px', 2)}
  ${MQ1} {
    ${adjustFontSizeTo('24px', 2)}
  }
  ${MQ2} {
    ${adjustFontSizeTo('18px', 2)}
  }
`

const Menu = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  text-transform: uppercase;
  /* font-weight: bold; */
  ${adjustFontSizeTo('110%')}
  ${MQ1} {
    display: ${p => p.active ? 'block' : 'none'};
    position: fixed;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    /* transform: translateX(-50%); */
    padding-top: ${rhythm(4)};
    text-align: center;
    background: ${colors.dark};

  }
`

const linkStyle = css`
  padding: 0 ${rhythm(1/2)};
  color: ${colors.light};
  text-decoration: none;
  &:hover {
    color: ${colors.high};
  }
  li:last-child & {
    padding-right: 0;
  }
  ${MQ1} {padding: 0;}
`
const MenuItem = ({title, to}) => (
  <li css={{margin: `0 0 0 ${rhythm(1/2)}`, [MQ1]: {margin: rhythm(1)}}}>
    <Link css={linkStyle} to={to} activeStyle={{color: colors.high}}>{title}</Link>
  </li>
)


const MenuToggle = ({active, onToggle}) => (
  <a 
    onClick={onToggle}
    role="button" 
    css={css`
      display: none;
      width: 30px; height: 24px;
      position: relative;
      z-index: 100;
      /* top: 27px; right: 30px; */
      cursor: pointer;
      > div {
        position: absolute;
        width: 100%; height: 2px;
        background: ${colors.light};
        transition: transform .3s ease;
      }
      ${MQ1} {
        display: block;
      }
    `}
  >
    <div css={css`
      top: 0;
      ${active && `transform: translateY(11.5px) rotate(45deg);`}
    `}/>
    <div css={css`
      top: 50%;
      margin-top: -1px;
      transition: opacity .3s ease;
      ${active && `opacity: 0`}
    `} />
    <div css={css`
      bottom: 0;
      ${active && `transform: translateY(-11px) rotate(-45deg);`}
    `}/>

  </a>
)

const Header = ({ siteTitle }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <Container minGap={rhythm(1)}>
      <header css={headerStyle}>
        <Title to="/">
          {siteTitle.split(',').map((piece, i) => <React.Fragment key={i}>
            {i > 0 && <span css={{color: colors.high}}>•</span>}
            {piece + ' '}
          </React.Fragment>)}
        </Title>

        <MenuToggle active={menuVisible} onToggle={() => setMenuVisible(menuVisible => !menuVisible)} />

        <Menu active={menuVisible}>
          {nav.map(({title, to}) => <MenuItem key={to} title={title} to={to} />)}
        </Menu>
      </header>

      {/* Lock body scrolling when menu open */}
      {menuVisible && <Global styles={css`${MQ1} {body {position: fixed;}}`} />}
    </Container>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
