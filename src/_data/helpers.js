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
  }
}
