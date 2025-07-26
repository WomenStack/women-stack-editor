import { toMerged } from 'es-toolkit'
import defaultTheme from './default'

const subBlue = toMerged(defaultTheme, {
  base: {
  },
  block: {
    container: {},
    h1: {
      'display': `block`,
      'color': `#fff`,
      'margin': `60px 0 40px 0`,
      'padding': `0 auto`,
      'font-size': `1.1em`,
      'border-radius': `6px`,
      'line-height': `2.4em`,
      'border-left': `4px solid #0a7eca`,
      'border-bottom': `3px solid #0a7eca`,
      'background': `#79c3e6`,
    },

    h2: {
      'border-radius': `6px`,
      'background': `var(--md-primary-color)`,
      'color': `#fff`,
      'display': `table`,
      'margin': `24px auto 0`,
      'padding': `0 12px`,
      'font-size': `1em`,
    },

    h3: {
      'font-size': `1em`,
      'border-radius': `6px`,
      'border': `none`,
      'display': `table`,
      'margin': `2em auto 1em`,
      'color': `#79c3e6`,
    },

    h4: {
      'font-size': `1em`,
      'border-radius': `6px`,
    },

    h5: {
      'border-radius': `6px`,
    },

    h6: {
      'border-radius': `6px`,
    },

    blockquote: {
      'font-style': `italic`,
      'padding': `1em 1em 1em 2em`,
      'color': `rgba(0,0,0,0.6)`,
      'border-bottom': `0.2px solid rgba(0, 0, 0, 0.04)`,
      'border-top': `0.2px solid rgba(0, 0, 0, 0.04)`,
      'border-right': `0.2px solid rgba(0, 0, 0, 0.04)`,
    },

    blockquote_note: {
      'font-style': `italic`,
    },

    blockquote_tip: {
      'font-style': `italic`,
    },

    blockquote_important: {
      'font-style': `italic`,
    },

    blockquote_warning: {
      'font-style': `italic`,
    },

    blockquote_caution: {
      'font-style': `italic`,
    },

    blockquote_title: {
    },

    blockquote_title_note: {

    },

    blockquote_title_tip: {
    },

    blockquote_title_important: {
    },

    blockquote_title_warning: {
    },

    blockquote_title_caution: {
    },

    blockquote_p_note: {
    },

    blockquote_p_tip: {
    },

    blockquote_p_important: {
    },

    blockquote_p_warning: {
    },

    blockquote_p_caution: {
    },

    code_pre: {
      border: `1px solid rgba(0, 0, 0, 0.04)`,
    },

    code: {
      'font-family': `'Fira Code', Menlo, Operator Mono, Consolas, Monaco, monospace`,
    },

    image: {
      'border-radius': `8px`,
      'border': `1px solid rgba(0, 0, 0, 0.04)`,
    },

    ol: {
      'padding-left': `1.5em`,
    },

    ul: {
      'list-style': `none`,
      'padding-left': `1.5em`,
    },

    hr: {
      height: `1px`,
      border: `none`,
      margin: `2em 0`,
      background: `linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0,0,0,0))`,
    },
  },
  inline: {
    listitem: {
      margin: `0.5em 8px`,
    },
  },
})

export default subBlue
