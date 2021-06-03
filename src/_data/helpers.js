const locales = require('./locales')

module.exports = {
  getDefaultLocale: function (locales, outputKey = null) {
    for (let key in locales) {
      let locale = locales[key]

      if (locale.default === true) {
        if (outputKey === null) {
          return locale
        }

        if (!locale.hasOwnProperty(outputKey)) {
          throw new Error(`[getDefaultLocale filter]: locale \`${locale.code}\` is missing outputKey \`${outputKey}\``)
        }

        return locale[outputKey]
      }
    }
  },
  translate: function (key, targetedLocale) {
    const locale = targetedLocale

    if (!locales.hasOwnProperty(locale)) {
      throw new Error(`[translate]: Translation's locale \`${locale}\` does not exist`)
    }

    key = `${locale}.${key}`

    const translation = key.split('.').reduce((acc, i) => acc[i], locales)

    if (typeof translation === 'undefined') {
      throw new Error(`[translate]: No translation found for key \`${key}\``)
    }

    return translation
  }
}
