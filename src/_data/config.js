const S = require('string')

module.exports = {
  eleventy: {
    markdownIt: {
      html: true,
      breaks: true,
      linkify: true
    },
    markdownItAnchor: {
      level: 2,
      permalink: true,
      permalinkSymbol: '#',
      slugify: str => S(str).slugify().toString()
    }
  },
  toc: {
    'selector': ['h2', 'h3', 'h4', 'h5', 'h6']
  }
}
