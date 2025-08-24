import { toMerged } from 'es-toolkit'
import defaultTheme from './default'

const womenStackJobs = toMerged(defaultTheme, {
  base: {
  },
  block: {
    container: {},
    h1: {
      'font-size': `1.2em`,
      'color': `var(--md-primary-color)`,
      'border': `2px solid var(--md-primary-color)`,
      'border-radius': `6px`,
      'padding': `1.3em 0.8em 0.5em 0.8em`,
      'background': `radial-gradient(circle 6px at 20px 14px, var(--md-primary-color) 33%, transparent 101%),
        radial-gradient(circle 6px at 35px 14px, var(--md-primary-color) 33%, transparent 101%),
        radial-gradient(circle 6px at 50px 14px, var(--md-primary-color) 33%, transparent 101%)`,
    },

    h2: {
      'margin-top': `0.5em`,
      'padding-left': `12px`,
      'font-size': `1.1em`,
      'border-radius': `6px`,
      'border-top-right-radius': `100px`,
      'line-height': `2.4em`,
      'display': `block`,
      'color': `var(--md-primary-color)`,
      'text-align': `left`,
      'border-left': `2px solid color-mix(in srgb, var(--md-primary-color) 10%, transparent)`,
      'border-bottom': `8px solid color-mix(in srgb, var(--md-primary-color) 100%, transparent)`,
      'border-top': `8px solid color-mix(in srgb, var(--md-primary-color) 10%, transparent)`,
      'background': `color-mix(in srgb, var(--md-primary-color) 8%, transparent)`,
      'box-shadow': `0 8px 6px rgba(0,0,0,0.1)`,
    },

    h3: {
      'padding': `0.5em 1.5em 0.5em 0.5em`,
      'display': `inline`,
      'font-size': `1em`,
      'border-radius': `6px`,
      'border-top-right-radius': `100px`,
      'box-shadow': `0 6px 6px rgba(0,0,0,0.1)`,
      'background': `var(--md-primary-color)`,
      'border-top': `8px solid color-mix(in srgb, #fff 50%, transparent)`,
      'color': `white`,
    },

    h4: {
      'font-size': `1em`,
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
      'text-align': `left`,
    },

    blockquote_p: {
      'text-align': `left`,
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
export default womenStackJobs
