const S = require('string')

module.exports = {
  eleventy: {
    markdownIt: {
      html: true,
      breaks: true,
      linkify: true
    },
    markdownItCustomParser: function (md) {
      const defaultRender = md.renderer.rules.image

      md.renderer.rules.image = function (tokens, idx, options, env, self) {
        tokens[idx].attrPush(['class', 'img-fluid'])
        return defaultRender(tokens, idx, options, env, self)
      }
    },
    markdownItAnchor: {
      level: 2,
      permalink: true,
      permalinkSymbol: '#',
      permalinkAttrs: () => ({
        'aria-labelledby': 'a11y_heading_anchor_label'
      }),
      slugify: str => S(str).slugify().toString()
    }
  },
  toc: {
    'selector': ['h2', 'h3', 'h4', 'h5', 'h6']
  }
}
