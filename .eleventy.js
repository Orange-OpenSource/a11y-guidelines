const cheerio = require('cheerio')
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const markdownItClass = require("markdown-it-class");


const site = require('./src/_data/site')
const config = require('./src/_data/config')
const helpers = require('./src/_data/helpers')
const navigation = require('./src/_data/navigation')
const collections = require('./src/config/collections')

const IMAGES_EXTENSIONS = ['jpg', 'png', 'svg']

module.exports = function (eleventyConfig) {
    eleventyConfig.setDataDeepMerge(true)
    eleventyConfig.addPlugin(pluginRss)

    eleventyConfig.addPassthroughCopy('src/assets/**/*.{json,woff,woff2}') // Json and Font copy
    eleventyConfig.addPassthroughCopy({'src/assets/vendors': 'assets/vendors'})

    /**
     * As we don't need all the services provided by the base services file, we use our local `tarteaucitron.services.js` file
     * Also, we don't need to copy the Tarteaucitron CSS folder as we have our own
     */
    eleventyConfig.addPassthroughCopy({'node_modules/tarteaucitronjs/lang': 'assets/vendors/tarteaucitronjs/lang'})
    eleventyConfig.addPassthroughCopy({'node_modules/tarteaucitronjs/!(tarteaucitron.services.js)': 'assets/vendors/tarteaucitronjs'})

    // Copy/paste all images and examples contents (they are not processed by 11ty. See the .eleventyignore file)
    eleventyConfig.addPassthroughCopy(`src/**/*.{${IMAGES_EXTENSIONS.join(',')}}`)
    eleventyConfig.addPassthroughCopy(`src/en/web/components-examples/**/*.{html,css,js}`)
    eleventyConfig.addPassthroughCopy(`src/fr/web/exemples-de-composants/**/*.{html,css,js}`)
    eleventyConfig.addPassthroughCopy(`src/fr/articles/**/*.{html,css,js}`)
    eleventyConfig.addPassthroughCopy(`src/en/articles/**/*.{html,css,js}`)
    eleventyConfig.addPassthroughCopy(`src/**/*.xlsx`)
    eleventyConfig.addPassthroughCopy(`src/**/*.mp3`)
    eleventyConfig.addPassthroughCopy(`src/**/*.apk`)
    eleventyConfig.addPassthroughCopy(`src/**/*.pdf`)

    /**
     * Override markdown generator to create ids automatically on headings
     */
    eleventyConfig.setLibrary('md',
        markdownIt(config.eleventy.markdownIt)
            .use(markdownItAnchor, config.eleventy.markdownItAnchor)
            .use(config.eleventy.markdownItCustomParser)
            .use(markdownItClass, {
                    h2: ['h2-focus']
                })
            )

    eleventyConfig.addShortcode('currentYear', function () {
        return String(new Date().getFullYear())
    })

    eleventyConfig.addShortcode('localizedDate', function (date = null, locale = null) {

        const dateObject = date instanceof Date ? date : new Date(date);

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

        return new Intl.DateTimeFormat(locale, options).format(dateObject)
    })

    eleventyConfig.addFilter('toISOString', function(date) {
        if (!date) return '';
        const dateObject = date instanceof Date ? date : new Date(date);
        return dateObject.toISOString();
    });

    // Convert a value to a native JavaScript Date object.
    // Useful when working with date filters like `dateToRfc3339` that require a proper Date instance.
    // Ensures compatibility even if the original value is a string or other non-Date type.
    eleventyConfig.addFilter("jsDate", function (value) {
        return new Date(value);
    });

    // Returns the most relevant date for a post.
    // Uses the update date if available, otherwise falls back to the original publication date.
    eleventyConfig.addFilter("effectiveDate", (post) => {
        if (!post) return null;
        if (!post.data) return post.date || null;
        return post.data.updateDate || post.date;
    });

    // Finds the latest date in a collection of posts.
    // Uses effectiveDate to determine the most relevant date for each post.
    eleventyConfig.addFilter("latestDate", (collection) => {
        if (!collection || !collection.length) return new Date();

        const jsDateFilter = eleventyConfig.getFilter("jsDate");

        return collection.reduce((latest, post) => {
            // Get the effective date (update date or publication date)
            const postDate = post.data && post.data.updateDate ? post.data.updateDate : post.date;

            // Convert to a JavaScript Date object
            const postDateObj = jsDateFilter(postDate);

            if (!latest) return postDateObj;
            return postDateObj > latest ? postDateObj : latest;
        }, null);
    });

    /**
     * @see https://stackoverflow.com/questions/6393943/convert-javascript-string-in-dot-notation-into-an-object-reference#answer-6394168
     */
    eleventyConfig.addFilter('translate', function (key, to = null) {
        const targetedLocale = to || this.ctx.locale
        return helpers.translate(key, targetedLocale)
    })

   eleventyConfig.addFilter("redirectionPermalink", function (path) {
        if (!path) return "/";

        let p = String(path).trim();

        // normalisation: no slash at the beginning
        p = p.replace(/^\/+/, "");

        // security: prevent empty path
        if (!p) return "/";

        // (fallback) root - Removed from redirections.json
        if (p === "index.html") return "/";

        // case .../index.html -> generate a folder URL (-> index.html)
        if (p.endsWith("index.html")) {
            const dir = p.slice(0, -"index.html".length).replace(/\/+$/, "");
            return dir ? `/${dir}/` : `/`;
        }

        // case *.html -> generate a file (exact match of the old URL)
        if (p.toLowerCase().endsWith(".html")) {
            return `/${p}`;
        }

        // otherwise: folder URL
        return `/${p}/`;
        });


    eleventyConfig.addNunjucksFilter('slugify', function (str) {
        return config.eleventy.markdownItAnchor.slugify(str)
    })

    eleventyConfig.addNunjucksFilter('getDefaultLocale', function (locales, outputKey = null) {
        return helpers.getDefaultLocale(locales, outputKey)
    })

    eleventyConfig.addNunjucksFilter('isHomeUrl', function (url) {
        return Object.keys(site.locales).includes(url.replace(/\//g, ''))
    })

    eleventyConfig.addNunjucksFilter('shouldDisplaySecondaryNavigation', function (page, locale) {
        // Get the last nav object from the navigation data file which `href` property is included in the current page's URL
        const pageNavigationObject = navigation.main[locale].filter(obj => page.url.includes(obj.href)).pop()

        return pageNavigationObject && pageNavigationObject.hasOwnProperty('subLevels') && pageNavigationObject.subLevels.length > 0
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
        function isActive(target) {
            return target === page.url
        }

        function addBreadcrumbItem(item) {
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
        function breadcrumbContains(url) {
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
                text: $(this).text().replace(permalinkSymbol, '').trim(),
                level: $(this)[0].name.substring(1)
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

    eleventyConfig.addNunjucksFilter('getSorted404Messages', function (locales) {
        return Object.values(locales).sort((a, b) => !b.default && a.default ? -1 : 1)
    })

    // Create collections & dynamically suffix their name by the locale key
    for (let locale in collections) {
        collections[locale].forEach(collection => {
            eleventyConfig.addCollection(`${collection.name}_${locale}`, c =>
                c.getFilteredByGlob(collection.glob)
                    .sort((a, b) => {
                        const dateA = a.data.updateDate || a.date;
                        const dateB = b.data.updateDate || b.date;
                        if (!dateA) return 1;
                        if (!dateB) return -1;
                        return new Date(dateA).getTime() - new Date(dateB).getTime();
                    })
            )
        })
    }

    // Because we no longer parse these files with 11ty, it cannot refresh the browser on changes
    eleventyConfig.setBrowserSyncConfig({
        files: ['_site/assets/*.css', '_site/assets/*.js']
    })

    return {
        dir: {
            input: 'src'
        }
    }
}
