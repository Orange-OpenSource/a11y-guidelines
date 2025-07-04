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
  rss: {
    title: {
      en: 'Orange digital accessibility guidelines - English',
      fr: 'Recommandations accessibilité Orange - Français'
    },
    url: {
      en: '/feed-en.xml',
      fr: '/feed-fr.xml'
    }
  },
  home: {
    lastPosts: {
      limit: 6
    }
  },
  algolia: {
    en: {
      button: {
        buttonText: 'Search in entire website',
        buttonAriaLabel: 'Search in entire website',
      },
      modal: {
        searchBox: {
          resetButtonTitle: 'Clear the query',
          resetButtonAriaLabel: 'Clear the query',
          cancelButtonText: 'Cancel',
          cancelButtonAriaLabel: 'Cancel',
        },
        startScreen: {
          recentSearchesTitle: 'Recent',
          noRecentSearchesText: 'No recent searches',
          saveRecentSearchButtonTitle: 'Save this search',
          removeRecentSearchButtonTitle: 'Remove this search from history',
          favoriteSearchesTitle: 'Favorite',
          removeFavoriteSearchButtonTitle: 'Remove this search from favorites',
        },
        errorScreen: {
          titleText: 'Unable to fetch results',
          helpText: 'You might want to check your network connection.',
        },
        footer: {
          selectText: 'to select',
          selectKeyAriaLabel: 'Enter key',
          navigateText: 'to navigate',
          navigateUpKeyAriaLabel: 'Arrow up',
          navigateDownKeyAriaLabel: 'Arrow down',
          closeText: 'to close',
          closeKeyAriaLabel: 'Escape key',
          searchByText: 'Search by',
        },
        noResultsScreen: {
          noResultsText: 'No results for',
          suggestedQueryText: 'Try searching for',
          reportMissingResultsText: 'Believe this query should return results?',
          reportMissingResultsLinkText: 'Let us know.',
        },
      }
    },
    fr: {
      button: {
        buttonText: 'Rechercher sur le site',
        buttonAriaLabel: 'Rechercher sur le site',
      },
      modal: {
        searchBox: {
          resetButtonTitle: 'Effacer la recherche',
          resetButtonAriaLabel: 'Effacer la recherche',
          cancelButtonText: 'Annuler',
          cancelButtonAriaLabel: 'Annuler',
        },
        startScreen: {
          recentSearchesTitle: 'Récent',
          noRecentSearchesText: 'Aucune recherche récente',
          saveRecentSearchButtonTitle: 'Sauvegarder cette recherche',
          removeRecentSearchButtonTitle: 'Supprimer cette recherche de l\'historique',
          favoriteSearchesTitle: 'Favoris',
          removeFavoriteSearchButtonTitle: 'Supprimer cette recherche des favoris',
        },
        errorScreen: {
          titleText: 'Impossible de récupérer les résultats',
          helpText: 'Vous devriez peut-être vérifier votre connexion réseau.',
        },
        footer: {
          selectText: 'pour sélectionner',
          selectKeyAriaLabel: 'La touche Entrée',
          navigateText: 'pour naviguer',
          navigateUpKeyAriaLabel: 'Flèche du haut',
          navigateDownKeyAriaLabel: 'Flèche du bas',
          closeText: 'pour fermer',
          closeKeyAriaLabel: 'La touche échap',
          searchByText: 'Recherché par',
        },
        noResultsScreen: {
          noResultsText: 'Aucun résulat pour',
          suggestedQueryText: 'Essayez de rechercher',
          reportMissingResultsText: 'Vous pensez que cette recherche devrait renvoyer des résultats ?',
          reportMissingResultsLinkText: 'Faites le nous savoir.',
        },
      }
    }
  },
  placeHolder: {
    en : 'Search in entire website',
    fr : 'Rechercher sur le site'
  },
  getDocSearchConfig: function (locale) {
    let algoliaTranslations ={};
    let placeHolder='';
    if(locale =="fr"){
      algoliaTranslations=this.algolia.fr
      placeHolder = this.placeHolder.fr
    }
    else{
      algoliaTranslations=this.algolia.en
      placeHolder = this.placeHolder.en
    }
    return {
      appId: 'QML88ZHQMQ',
      apiKey: '92e5543d97d72ef6a3ba61b241a75b19',
      indexName: 'a11y-guidelines-orange',
      container: '#search-input',
      searchParameters: {
        'facetFilters': [`language:${locale}`],
        attributesToHighlight: ["title", "content"]
      },
      placeholder : placeHolder,
      translations: DocSearchTranslations = algoliaTranslations,
      debug: false, // Set debug to true if you want to inspect the dropdown
      onSelect: (event) => {
        const searchTerm = event.query;
        localStorage.setItem('searchTerm', searchTerm);
      }
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
      "AcceptAllCta": true, /* Show the accept all button when highPrivacy on */
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
