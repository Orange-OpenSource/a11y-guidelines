const cheerio = require('cheerio')
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')

const site = require('./src/_data/site')
const config = require('./src/_data/config')
const locales = require('./src/_data/locales')
const navigation = require('./src/_data/navigation')
const collections = require('./src/config/collections')

const IMAGES_EXTENSIONS = ['jpg', 'png', 'svg']

module.exports = function (eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true)

  eleventyConfig.addPassthroughCopy('src/assets/**/*.!(css|js)') // CSS & JS files are now delegated to PostCSS & Babel
  eleventyConfig.addPassthroughCopy({ 'src/assets/vendors': 'assets/vendors' })

  /**
   * As we don't need all the services provided by the base services file, we use our local `tarteaucitron.services.js` file
   * Also, we don't need to copy the Tarteaucitron CSS folder as we have our own
   */
  eleventyConfig.addPassthroughCopy({ 'node_modules/tarteaucitronjs/lang': 'assets/vendors/tarteaucitronjs/lang' })
  eleventyConfig.addPassthroughCopy({ 'node_modules/tarteaucitronjs/!(tarteaucitron.services.js)': 'assets/vendors/tarteaucitronjs' })

  /**
   * Onboard Algolia's assets instead of using the CDN
   */
  eleventyConfig.addPassthroughCopy({ 'node_modules/docsearch.js/dist/cdn/docsearch.min.(css|js)': 'assets/vendors/docsearch' })

  // Copy/paste all images and examples contents (they are not processed by 11ty. See the .eleventyignore file)
  eleventyConfig.addPassthroughCopy(`src/**/*.{${IMAGES_EXTENSIONS.join(',')}}`)
  eleventyConfig.addPassthroughCopy(`src/en/web/components-examples/**/*.{html,css,js}`)
  eleventyConfig.addPassthroughCopy(`src/fr/web/exemples-de-composants/**/*.{html,css,js}`)
  eleventyConfig.addPassthroughCopy(`src/fr/web/la-va11ydette/`)
  eleventyConfig.addPassthroughCopy(`src/**/*.xlsx`)
  eleventyConfig.addPassthroughCopy(`src/**/*.mp3`)
  eleventyConfig.addPassthroughCopy(`src/**/*.apk`)

  /**
   * Override markdown generator to create ids automatically on headings
   */
  eleventyConfig.setLibrary('md',
    markdownIt(config.eleventy.markdownIt)
      .use(markdownItAnchor, config.eleventy.markdownItAnchor)
      .use(config.eleventy.markdownItCustomParser)
  )

  eleventyConfig.addShortcode('currentYear', function () {
    return String(new Date().getFullYear())
  })

  eleventyConfig.addShortcode('localizedDate', function (date = null, locale = null) {
    if (date === null) {
      throw new Error('[localizedDate]: no date provided')
    }

    if (locale === null) {
      throw new Error('[localizedDate]: no locale provided')
    }

    const options = {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }

    return new Intl.DateTimeFormat(locale, options).format(date)
  })

  /**
   * @see https://stackoverflow.com/questions/6393943/convert-javascript-string-in-dot-notation-into-an-object-reference#answer-6394168
   */
  eleventyConfig.addFilter('translate', function (key) {
    const locale = this.ctx.locale

    if (!locales.hasOwnProperty(locale)) {
      throw new Error(`[translate]: Translation's locale \`${locale}\` does not exist`)
    }

    key = `${locale}.${key}`

    const translation = key.split('.').reduce((acc, i) => acc[i], locales)

    if (typeof translation === 'undefined') {
      throw new Error(`[translate]: No translation found for key \`${key}\``)
    }

    return translation
  })

  eleventyConfig.addFilter('redirectionPermalink', function (path) {
    // We already have a redirection template for the root page, so we don't want to generate it here
    if (path === 'index.html') {
      return false
    }

    // We remove the extension to prevent 11ty from throwing errors as it tries to write, for example : `/en/all.html/index.html`
    if (path.includes('index.html')) {
      return `/${path.replace('index.html', '')}/`
    }

    return `/${path}/`
  })

  eleventyConfig.addNunjucksFilter('slugify', function (str) {
    return config.eleventy.markdownItAnchor.slugify(str)
  })

  eleventyConfig.addNunjucksFilter('getDefaultLocale', function (locales, outputKey = null) {
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
  })

  eleventyConfig.addNunjucksFilter('isHomeUrl', function (url) {
    return Object.keys(site.locales).includes(url.replace(/\//g, ''))
  })

  eleventyConfig.addNunjucksFilter('shouldDisplaySecondaryNavigation', function (page, locale) {
    // Get the last nav object from the navigation data file which `href` property is included in the current page's URL
    const pageNavigationObject = navigation.main[locale].filter(obj => page.url.includes(obj.href)).pop()

    return pageNavigationObject.hasOwnProperty('subLevels') && pageNavigationObject.subLevels.length > 0
  })

  eleventyConfig.addNunjucksFilter('getBreadcrumb', function (data, locale, page, pageTitle) {
    const breadcrumb = []
    const navigation = data[locale]
    const homeURL = `/${locale}/`
    const home = navigation.filter(path => path.href === homeURL)[0]

    /**
     * @param target
     * @returns {boolean}
     */
    function isActive (target) {
      return target === page.url
    }

    function addBreadcrumbItem (item) {
      breadcrumb.push({
        href: item.href,
        label: item.label,
        isActive: isActive(item.href)
      })
    }

    /**
     * @param url
     * @returns {boolean}
     */
    function breadcrumbContains (url) {
      return breadcrumb.some(item => item.href === url)
    }

    addBreadcrumbItem(home)

    navigation.forEach(item => {
      if (page.url.includes(item.href) && !breadcrumbContains(item.href)) {
        addBreadcrumbItem(item)
      }
      if (item.subLevels) {
        item.subLevels.forEach(subLevel => {
          if (page.url.includes(subLevel.href) && !breadcrumbContains(subLevel.href)) {
            addBreadcrumbItem(subLevel)
          }
        })
      }
    })

    // Generally the last level, which is not included in the navigation.main data (articles, ...)
    if (!breadcrumbContains(page.url)) {
      addBreadcrumbItem({
        href: page.url,
        label: pageTitle
      })
    }

    return breadcrumb
  })

  eleventyConfig.addNunjucksFilter('getPostsTags', function (posts) {
    const tags = new Set()

    posts.forEach(post => {
      if (!post.data.tags) {
        return
      }

      post.data.tags.forEach(item => tags.add(item))
    })

    return tags
  })

  eleventyConfig.addNunjucksFilter('getHeadingsForToc', function (content) {
    if (typeof content === 'undefined') {
      console.warn('[getHeadingsForToc filter]: `content` parameter is undefined. Are you sure you imported the ui macros `with context` ?')
    }

    const $ = cheerio.load(content)
    const permalinkSymbol = config.eleventy.markdownItAnchor.permalinkSymbol

    const items = []

    $(config.toc.selector.join(',')).each(function () {
      items.push({
        id: $(this).attr('id'),
        text: $(this).text().replace(permalinkSymbol, '').trim()
      })
    })

    return items
  })

  eleventyConfig.addNunjucksFilter('limit', function (arr, limit) {
    return arr.slice(0, limit)
  })

  eleventyConfig.addNunjucksFilter('filterArrayOfObjByKey', function (arr, key, value) {
    return arr.filter(e => e[key] === value)
  })

  eleventyConfig.addNunjucksFilter('sortByField', function (values, field) {
    return values.slice().sort((a, b) => a.data[field].localeCompare(b.data[field]))
  })

  // Create collections & dynamically suffix their name by the locale key
  for (let locale in collections) {
    collections[locale].forEach(collection => {
      eleventyConfig.addCollection(`${collection.name}_${locale}`, c => c.getFilteredByGlob(collection.glob))
    })
  }

  // Because we no longer parse these files with 11ty, it cannot refresh the browser on changes
  eleventyConfig.setBrowserSyncConfig({
    files: [ '_site/assets/*.css', '_site/assets/*.js' ]
  })

  return {
    dir: {
      input: 'src'
    }
  }
}
