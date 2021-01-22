(function () {
  document.documentElement.classList.replace('no-js', 'js')
})();

/* Cookie consent banner customization */
(function () {
  window.addEventListener('tac.root_available', function (e) {
    document.getElementById('tarteaucitronPersonalize').classList.add('btn', 'btn-primary', 'btn-inverse', 'ml-2')
    document.getElementById('tarteaucitronAllAllowed').classList.add('btn', 'btn-primary', 'btn-inverse', 'ml-2')
    
    document.getElementById('tarteaucitronCloseAlert').classList.add('btn', 'btn-inverse', 'btn-info', 'ml-2')
    document.getElementById('tarteaucitronAllDenied').classList.add('btn', 'btn-inverse', 'btn-info', 'ml-2')
  }, { once: true })

  window.addEventListener('tac.open_panel', function () {
    const servicesContainer = document.getElementById('tarteaucitronServices_api')

    servicesContainer.querySelectorAll('.tarteaucitronAllow').forEach(function (button) {
      button.classList.add('btn', 'btn-primary', 'ml-2')
    })

    servicesContainer.querySelectorAll('.tarteaucitronDeny').forEach(function (button) {
      button.classList.add('btn', 'btn-secondary', 'ml-2')
    })
  }, { once: true })
})();

/* Filter bar */
(function () {
  const filtersbar = document.getElementById('filtersbar')

  if (!filtersbar) {
    return
  }

  function activateFilterElement (dataAttributeValue) {
    const el = filtersbar.querySelector(`[data-tag="${dataAttributeValue}"]`)
    el.classList.add('active')
    el.setAttribute('aria-current', 'true')
  }

  const tagToFilter = (new URL(window.location)).searchParams.get('tag')

  if (tagToFilter === null || tagToFilter === 'all') {
    activateFilterElement('all')
    return
  }

  activateFilterElement(tagToFilter)

  const posts = document.querySelectorAll('[data-tags]')
  let hiddenPosts = 0

  posts.forEach(function (post) {
    if (!post.dataset.tags.includes(tagToFilter)) {
      post.setAttribute('hidden', '')
      hiddenPosts++
    }
  })

  document.getElementById('filtersbar_counter').innerHTML = `${String(posts.length - hiddenPosts)}&nbsp;`
})();

/* Back to top link */
(function () {
  const handler = document.getElementById('back-to-top')
  const threshold = 300

  if (!handler || typeof window.requestAnimationFrame === 'undefined') {
    return
  }

  function hideHandler () {
    handler.style.right = '-99999px'
    handler.style.opacity = '0'
  }

  function showHandler () {
    handler.style.right = null
    handler.style.opacity = '1'
  }

  function onScroll () {
    if (window.pageYOffset >= threshold) {
      showHandler()
    } else {
      hideHandler()
    }
  }

  hideHandler()

  window.addEventListener('scroll', function () {
    window.requestAnimationFrame(onScroll)
  })
})();

/* Priority nav*/
function initPriorityNav () {
  const secondaryNavigation = jQuery('#secondary-navigation')

  if (!secondaryNavigation) {
    return
  }

  const locales = {
    en: 'More',
    fr: 'Plus'
  }

  if (!locales.hasOwnProperty(Application.lang)) {
    throw new Error(`[initPriorityNav()] : lang '${Application.lang}' is not managed by the method's translations`)
  }

  secondaryNavigation.prioritynav(locales[Application.lang])
}

function highlightCodeBlocks () {
  hljs.initHighlighting()

  const codeBlocks = document.querySelectorAll('.hljs')

  if (!codeBlocks.length) {
    return
  }

  const displayLanguageList = {
    'css': 'CSS',
    'html': 'HTML',
    'java': 'Java',
    'javascript': 'JavaScript',
    'json': 'JSON',
    'kotlin': 'Kotlin',
    'objectivec':'Objective-C',
    'swift': 'Swift',
    'xml': 'XML'
  }

  codeBlocks.forEach(function (codeBlock) {
    const language = codeBlock.result.language
    const displayLanguage = displayLanguageList[language] || language

    const languageWrapper = document.createElement('div')
    languageWrapper.classList.add('bg-primary', 'd-inline-block', 'p-2', 'font-weight-bold')
    languageWrapper.textContent = displayLanguage

    codeBlock.parentNode.insertBefore(languageWrapper, codeBlock)
  })
}

function enhanceSearchField () {
  const searchInputSkipLink = document.querySelector('[role="banner"] a[href="#search-input"]')
  const searchInputContainer = $('#search-input-container') // jQuery selector needed by Bootstrap v4.x.x for events
  const searchInputToggler = document.getElementById('search-input-toggler')
  const searchInput = document.getElementById('search-input')

  searchInputSkipLink.addEventListener('click', function (e) {
    e.preventDefault()

    // We place the focus inside the search input if it is already visible
    if (searchInputToggler.getAttribute('aria-expanded') === 'true') {
      searchInput.focus()
    } else {
      searchInputContainer.collapse('show')
    }
  })

  /**
   * Set focus directly in the search box with we open it
   */
  searchInputContainer.on('shown.bs.collapse', function () {
    $(this).find('[type="search"]').focus()
  })
}

window.addEventListener('DOMContentLoaded', function () {
  initPriorityNav()
  enhanceSearchField()

  if (Application.vendors.highlightJS === true) {
    highlightCodeBlocks()
  }
}, { once: true })

