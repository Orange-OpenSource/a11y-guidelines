const cheerio = require('cheerio')
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')

const site = require('./src/_data/site')
const config = require('./src/_data/config')
const locales = require('./src/_data/locales')
const collections = require('./src/config/collections')

const IMAGES_EXTENSIONS = ['jpg', 'png']

module.exports = function (eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true)

  eleventyConfig.addPassthroughCopy({ 'src/assets/': 'assets' })

  // Copy/paste all images and examples contents (they are not processed by 11ty. See the .eleventyignore file)
  eleventyConfig.addPassthroughCopy(`src/**/*.{${IMAGES_EXTENSIONS.join(',')}}`)
  eleventyConfig.addPassthroughCopy(`src/en/web/components-examples/**/*.{html,css,js}`)
  eleventyConfig.addPassthroughCopy(`src/fr/web/exemples-de-composants/**/*.{html,css,js}`)
  eleventyConfig.addPassthroughCopy(`src/**/*.xlsx`)

  /**
   * Override markdown generator to create ids automatically on headings
   */
  eleventyConfig.setLibrary('md',
    markdownIt(config.eleventy.markdownIt).use(markdownItAnchor, config.eleventy.markdownItAnchor)
  )

  /**
   * @see https://stackoverflow.com/questions/6393943/convert-javascript-string-in-dot-notation-into-an-object-reference#answer-6394168
   */
  eleventyConfig.addShortcode('translate', function (key, locale) {
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

  eleventyConfig.addNunjucksFilter('isHomeUrl', function (url) {
    return site.locales.available.includes(url.replace(/\//g, ''))
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

    // Generally the last level, which is not included in the mainNavigation data (articles, ...)
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

  // Create collections & dynamically suffix their name by the locale key
  for (let locale in collections) {
    collections[locale].forEach(collection => {
      eleventyConfig.addCollection(`${collection.name}_${locale}`, c => c.getFilteredByGlob(collection.glob))
    })
  }

  return {
    dir: {
      input: 'src'
    }
  }
}
