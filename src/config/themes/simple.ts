import { toMerged } from 'es-toolkit'
import defaultTheme from './default'

const simpleTheme = toMerged(defaultTheme, {
  base: {
  },
  block: {
    container: {},
    h1: {
      'padding': `0.5em 1em`,
      'font-size': `1.4em`,
      'text-shadow': `1px 1px 3px rgba(0,0,0,0.05)`,
    },

    h2: {
      'padding': `0.3em 1.2em`,
      'font-size': `1.3em`,
      'border-radius': `8px 24px 8px 24px`,
      'box-shadow': `0 2px 6px rgba(0,0,0,0.06)`,
    },

    h3: {
      'padding-left': `12px`,
      'font-size': `1.2em`,
      'border-radius': `6px`,
      'line-height': `2.4em`,
      'border-left': `4px solid var(--md-primary-color)`,
      'border-right': `1px solid color-mix(in srgb, var(--md-primary-color) 10%, transparent)`,
      'border-bottom': `1px solid color-mix(in srgb, var(--md-primary-color) 10%, transparent)`,
      'border-top': `1px solid color-mix(in srgb, var(--md-primary-color) 10%, transparent)`,
      'background': `color-mix(in srgb, var(--md-primary-color) 8%, transparent)`,
    },

    h4: {
      'font-size': `1.1em`,
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

export default simpleTheme
