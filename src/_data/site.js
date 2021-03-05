module.exports = {
  locales: {
    en: {
      code: 'en',
      displayName: 'english'
    },
    fr: {
      code: 'fr',
      displayName: 'français',
      default: true
    }
  },
  title: {
    en: 'Orange digital accessibility guidelines',
    fr: 'Recommandations accessibilité numérique Orange'
  },
  home: {
    lastPosts: {
      limit: 6
    }
  },
  getDocSearchConfig: function (locale) {
    return {
      apiKey: 'a872e031c7e0e72e65e314db546ee3bc',
      indexName: 'a11y-guidelines-orange',
      inputSelector: '#search-input',
      algoliaOptions: {
        'facetFilters': [`language:${locale}`]
      },
      debug: false // Set debug to true if you want to inspect the dropdown
    }
  },
  tracking: {
    siteName: 'accessibility-guidelines',
    phase: 'prod', // dev, qa, prod
    googletagmanagerId: "GTM-N3M5VXS",
    tarteaucitronConfig: {
      "privacyUrl": "", /* Privacy policy url */
      "hashtag": "#cookie-consent", /* Open the panel with this hashtag */
      "cookieName": "cookie-consent", /* Cookie name */
      "orientation": "bottom", /* Banner position (top - bottom) */
      "showAlertSmall": false, /* Show the small banner on bottom right */
      "cookieslist": true, /* Show the cookie list */
      "adblocker": false, /* Show a Warning if an adblocker is detected */
      "showIcon": false,
      "AcceptAllCta" : true, /* Show the accept all button when highPrivacy on */
      "highPrivacy": true, /* Disable auto consent */
      "handleBrowserDNTRequest": false, /* If Do Not Track == 1, disallow all */
      "removeCredit": false, /* Remove credit link */
      "moreInfoLink": true, /* Show more info link */
      "useExternalCss": true, /* If false, the tarteaucitron.css file will be loaded */
      //"cookieDomain": ".my-multisite-domaine.fr", /* Shared cookie for multisite */
      "readmoreLink": "/cookiespolicy", /* Change the default readmore link */
      "mandatory": false, /* Show a message about mandatory cookies */
    }
  }
}
