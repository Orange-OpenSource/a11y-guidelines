(function () {
  document.documentElement.classList.replace('no-js', 'js')
})();

/* Cookie consent banner customization */
(function () {
  window.addEventListener('tac.root_available', function (e) {

    document.querySelectorAll('#tarteaucitronRoot button').forEach(function (button) {
      if (button.classList.contains('catToggleBtn') || button.id === 'tarteaucitronClosePanel') {
        return
      }

      if (button.classList.contains('tarteaucitronAllow')) {
        button.classList.add('btn', 'btn-inverse', 'btn-primary', 'ms-2')
      } else {
        button.classList.add('btn', 'btn-inverse', 'btn-info', 'ms-2')
      }
    })
  }, { once: true })

  window.addEventListener('tac.open_panel', function () {
    const servicesContainer = document.getElementById('tarteaucitronServices_api')

    servicesContainer.querySelectorAll('button').forEach(function (button) {
      if (button.classList.contains('tarteaucitronAllow')) {
        button.classList.add('btn', 'btn-primary', 'btn-inverse', 'ms-2')
      } else {
        button.classList.add('btn', 'btn-info', 'ms-2')
      }
    })
  }, { once: true })
})();

/* Tab language IOS */
(function(){

  document.querySelectorAll('.code-tab-pane').forEach(function(item){
    listLanguage =[];
     item.querySelectorAll('code').forEach(function (code){
       console.log(code.innerHTML)
      listLanguage.push({
        language:code.classList[0],
        html:code.outerHTML
      })
     });
     console.log(generateTabPan(listLanguage));
  });

  function generateTabPan(listLanguage){

    html='<ul class="nav nav-tabs languageinfo" role="tablist">';
    listLanguage.forEach(element => {
      html+='<li class="nav-item '+element.language+'" role="presentation">';
      html+='<button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-selected="true">'+element.language+'</button>';
      html+='</li>';
    });
    html+="</ul>"
    html+='<div class="tab-content languageinfotab">';
    listLanguage.forEach(element => {
      html+=' <div class="tab-pane objc show active" id="Description-ObjC" role="tabpanel">';
      html+=element.html;
      html+=' </div>';
    });
    html+='</div>';
    return html;
  }

  function removeActiveClass() {
    document.querySelectorAll('.languageinfo li a').forEach(function(item){
      item.classList.remove('active');
      item.setAttribute('tabindex',-1);
      item.setAttribute('aria-selected',false);
    });
    document.querySelectorAll('.languageinfotab div').forEach(function(item){
      item.classList.remove('show');
      item.classList.remove('active');
      item.setAttribute('tabindex',-1);
      item.setAttribute('aria-hidden',true);
    });
  }

  function addActiveClass(classLink, classDiv) {
    document.querySelectorAll('.'+classLink+' a').forEach(function(item){
      item.classList.add('active');
      item.setAttribute('tabindex',0);
      item.setAttribute('aria-selected',true);
    });
    document.querySelectorAll('.'+classDiv).forEach(function(item){
      item.classList.add('show');
      item.classList.add('active');
      item.setAttribute('tabindex',0);
      item.setAttribute('aria-hidden',false);
    })
  }

  document.querySelectorAll('.item-oc a').forEach(function(item){

    item.addEventListener("click", function(){

      removeActiveClass();
      addActiveClass('item-oc', 'objc');

    });
  });

  document.querySelectorAll('.item-s a').forEach(function(item){

    item.addEventListener("click", function(){

      removeActiveClass();
      addActiveClass('item-s', 'swift');

    });
  });

  document.querySelectorAll('.item-sui a').forEach(function(item){
    item.addEventListener("click", function(){

      removeActiveClass();
      addActiveClass('item-sui', 'swiftui');

    });
  });
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

  if (Application.vendors.highlightTitle === true) {

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
      'swiftui': 'SwiftUI',
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
}

function enhanceSearchField () {
  const searchInputSkipLink = document.querySelector('[role="banner"] a[href="#search-input"]')
  const searchInputContainer = document.getElementById('search-input-container') 
  const searchInputToggler = document.getElementById('search-input-toggler')
  const searchInput = document.getElementById('search-input')

  searchInputSkipLink.addEventListener('click', function (e) {
    e.preventDefault()

    // We place the focus inside the search input if it is already visible
    if (searchInputToggler.getAttribute('aria-expanded') === 'true') {
      searchInput.focus()
    } else {
      var bscollapse=new boosted.Collapse(searchInputContainer, {
        show: true
      })
    }
  })

  function removeAlgoliaAutoGeneratedAriaLabel () {
    const targetNode = document.querySelector('#algolia-autocomplete-listbox-0 > .ds-dataset-1')

    const callback = function (mutations) {
      for (let mutation of mutations) {
        if (mutation.type === 'childList') {
          let algoliaSuggestions = targetNode.querySelectorAll('.algolia-docsearch-suggestion')

          algoliaSuggestions.forEach(el => {
            el.removeAttribute('aria-label')
          })
        }
      }
    }

    const observer = new MutationObserver(callback)
    observer.observe(targetNode, { childList: true })
  }

  removeAlgoliaAutoGeneratedAriaLabel()

  /**
   * Set focus directly in the search box when we open it
   */
  searchInputContainer.addEventListener('shown.bs.collapse', function () {
    this.querySelector('[type="search"]').focus();
  })
}

window.addEventListener('DOMContentLoaded', function () {
  //initPriorityNav()
  enhanceSearchField()

  if (Application.vendors.highlightJS === true) {
    highlightCodeBlocks()
  }
}, { once: true })

