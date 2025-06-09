import type { Theme } from '@/types'

const defaultTheme: Theme = {
  base: {
    '--md-primary-color': `#000000`,
    'text-align': `left`,
    'line-height': `1.75`,
  },
  block: {
    container: {},
    // 一级标题
    h1: {
      'display': `table`,
      'padding': `0 1em`,
      'border-bottom': `2px solid var(--md-primary-color)`,
      'margin': `2em auto 1em`,
      'color': `hsl(var(--foreground))`,
      'font-size': `1.2em`,
      'font-weight': `bold`,
      'text-align': `center`,
    },

    // 二级标题
    h2: {
      'display': `table`,
      'padding': `0 0.2em`,
      'margin': `4em auto 2em`,
      'color': `#fff`,
      'background': `var(--md-primary-color)`,
      'font-size': `1.2em`,
      'font-weight': `bold`,
      'text-align': `center`,
    },

    // 三级标题
    h3: {
      'padding-left': `8px`,
      'border-left': `3px solid var(--md-primary-color)`,
      'margin': `2em 8px 0.75em 0`,
      'color': `hsl(var(--foreground))`,
      'font-size': `1.1em`,
      'font-weight': `bold`,
      'line-height': `1.2`,
    },

    // 四级标题
    h4: {
      'margin': `2em 8px 0.5em`,
      'color': `var(--md-primary-color)`,
      'font-size': `1em`,
      'font-weight': `bold`,
    },

    // 五级标题
    h5: {
      'margin': `1.5em 8px 0.5em`,
      'color': `var(--md-primary-color)`,
      'font-size': `1em`,
      'font-weight': `bold`,
    },

    // 六级标题
    h6: {
      'margin': `1.5em 8px 0.5em`,
      'font-size': `1em`,
      'color': `var(--md-primary-color)`,
    },

    // 段落
    p: {
      'margin': `1.5em 8px`,
      'letter-spacing': `0.1em`,
      'color': `hsl(var(--foreground))`,
    },

    // 引用
    blockquote: {
      'font-style': `normal`,
      'padding': `1em`,
      'border-left': `4px solid var(--md-primary-color)`,
      'border-radius': `6px`,
      'color': `rgba(0,0,0,0.5)`,
      'background': `var(--blockquote-background)`,
      'margin-bottom': `1em`,
    },

    // 引用内容
    blockquote_p: {
      'display': `block`,
      'font-size': `1em`,
      'letter-spacing': `0.1em`,
      'color': `hsl(var(--foreground))`,
    },

    blockquote_note: {
    },

    blockquote_tip: {
    },

    blockquote_important: {
    },

    blockquote_warning: {
    },

    blockquote_caution: {
    },

    // GFM 警告块标题
    blockquote_title: {
      'display': `flex`,
      'align-items': `center`,
      'gap': `0.5em`,
      'margin-bottom': `0.5em`,
    },

    blockquote_title_note: {
      color: `#478be6`,
    },

    blockquote_title_tip: {
      color: `#57ab5a`,
    },

    blockquote_title_important: {
      color: `#986ee2`,
    },

    blockquote_title_warning: {
      color: `#c69026`,
    },

    blockquote_title_caution: {
      color: `#e5534b`,
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

    // 代码块
    code_pre: {
      'font-size': `90%`,
      'overflow-x': `auto`,
      'border-radius': `8px`,
      'padding': `1em`,
      'line-height': `1.5`,
      'margin': `10px 8px`,
    },

    // 行内代码
    code: {
      'margin': 0,
      'white-space': `nowrap`,
      'font-size': `90%`,
      'font-family': `Menlo, Operator Mono, Consolas, Monaco, monospace`,
    },

    // 图片
    image: {
      'display': `block`,
      'max-width': `100%`,
      'margin': `0.1em auto 0.5em`,
      'border-radius': `4px`,
    },

    // 有序列表
    ol: {
      'padding-left': `1em`,
      'margin-left': `0`,
      'color': `hsl(var(--foreground))`,
    },

    // 无序列表
    ul: {
      'list-style': `circle`,
      'padding-left': `1em`,
      'margin-left': `0`,
      'color': `hsl(var(--foreground))`,
    },

    footnotes: {
      'margin': `0.5em 8px`,
      'font-size': `80%`,
      'color': `hsl(var(--foreground))`,
    },

    figure: {
      margin: `1.5em 8px`,
      color: `hsl(var(--foreground))`,
    },

    hr: {
      'border-style': `solid`,
      'border-width': `2px 0 0`,
      'border-color': `rgba(0,0,0,0.1)`,
      '-webkit-transform-origin': `0 0`,
      '-webkit-transform': `scale(1, 0.5)`,
      'transform-origin': `0 0`,
      'transform': `scale(1, 0.5)`,
      'height': `0.4em`,
      'margin': `1.5em 0`,
    },

    block_katex: {},
  },
  inline: {
    listitem: {
      'text-indent': `-1em`,
      'display': `block`,
      'margin': `0.2em 8px`,
      'color': `hsl(var(--foreground))`,
    },

    codespan: {
      'font-size': `90%`,
      'color': `var(--md-primary-color)`,
      'background': `rgba(27,31,35,.05)`,
      'padding': `3px 5px`,
      'border-radius': `4px`,
      // 'word-break': `break-all`,
    },

    em: {
      'font-style': `italic`,
      'font-size': `inherit`,
    },

    link: {
      color: `#576b95`,
    },

    wx_link: {
      'color': `#576b95`,
      'text-decoration': `none`,
    },

    // 字体加粗样式
    strong: {
      'color': `var(--md-primary-color)`,
      'font-weight': `bold`,
      'font-size': `inherit`,
    },

    table: {
      'border-collapse': `collapse`,
      'text-align': `center`,
      'margin': `1em 8px`,
      'color': `hsl(var(--foreground))`,
    },

    thead: {
      'background': `rgba(0, 0, 0, 0.05)`,
      'font-weight': `bold`,
      'color': `hsl(var(--foreground))`,
    },

    td: {
      'border': `1px solid #dfdfdf`,
      'padding': `0.25em 0.5em`,
      'color': `#3f3f3f`,
      'word-break': `keep-all`,
    },

    footnote: {
      'font-size': `12px`,
      'color': `hsl(var(--foreground))`,
    },

    figcaption: {
      'text-align': `center`,
      'color': `#888`,
      'font-size': `0.8em`,
    },

    inline_katex: {},
  },
}

export default defaultTheme
