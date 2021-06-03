const helpers = require('./_data/helpers')
const site = require('./_data/site')

const locale = helpers.getDefaultLocale(site.locales, 'code')

module.exports = {
  locale: locale,
  title: helpers.translate('404.title', locale),
  boostedJS: true
}
