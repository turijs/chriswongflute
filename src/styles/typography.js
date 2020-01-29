import Typography from 'typography';
import 'typeface-inconsolata'
import 'typeface-zilla-slab'
import 'typeface-montserrat'
import {MQ2} from './constants'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Montserrat', 'sans-serif'],
  bodyFontFamily: ['Zilla Slab', 'serif'],
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    body: { width: '100%' },
    
    [MQ2]: {
      html: { fontSize: '16px' }
    },

    'h1,h2,h3,h4,h5,h6': {
      textAlign: 'center',
    },

    'input:focus, button:focus, a:focus, textarea:focus': {
      boxShadow: '0 0 2px 2px rgba(255,181,218, .7)',
      outline: 'none'
    }

  })
});

export const { scale, rhythm, adjustFontSizeTo, options } = typography;
export default typography;