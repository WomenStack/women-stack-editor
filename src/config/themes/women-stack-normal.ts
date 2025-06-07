import { toMerged } from 'es-toolkit'
import defaultTheme from './default'

const womenStackNormal = toMerged(defaultTheme, {
  base: {
    'line-height': `1.5`,
  },
  block: {
    h1: {
      'background-image': `url('http://8.138.185.167/womenstack.png')`,
      'background-repeat': `no-repeat`,
      'background-position': `top center`,
      'background-size': `4em`,
      'padding-top': `4em`,
      'gap': `1em`,
    },
    h2: {
      'padding': `0.5em 0.5em`,
      'margin': `1em auto 1em`,
      'border-radius': `8px`,
      'box-shadow': `0 4px 6px rgba(0,0,0,0.1)`,
    },
    h3: {
      '&::before': {
        content: `"#"`,
        position: `absolute`,
        left: `-20px`,
        color: `var(--md-primary-color)`,
        opacity: `0.5`,
      },
    },
    h4: {},
    h5: {},
    h6: {},
    p: {
      margin: `0.5em 8px`,
    },
  },
})

export default womenStackNormal
