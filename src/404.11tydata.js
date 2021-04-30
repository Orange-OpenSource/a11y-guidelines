const helpers = require('./_data/helpers')
const site = require('./_data/site')

module.exports = {
  locale: helpers.getDefaultLocale(site.locales, 'code'),
  boostedJS: true
}
