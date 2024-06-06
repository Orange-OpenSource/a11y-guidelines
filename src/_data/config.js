const S = require('string')
let headingCount = 0;

module.exports = {
  environment: process.env.ELEVENTY_ENV,
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
      permalinkAttrs: function(slug, state) {
        headingCount++; // Incrémenter le compteur pour chaque titre
        const uniqueId = `heading-${headingCount}`;
        return {
          'id': uniqueId,
          'aria-labelledby': uniqueId
        };
      },
      slugify: str => S(str).slugify().toString()
    }
  },
  toc: {
    'selector': ['h2', 'h3', 'h4', 'h5', 'h6']
  }
}
