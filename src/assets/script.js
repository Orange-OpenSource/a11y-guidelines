(function () {
  document.documentElement.classList.replace('no-js', 'js')
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

/* Table Of Content */
(function Toc () {
  const toc = document.getElementById('toc')

  if (!toc) {
    return
  }

  const hash = document.location.hash
  const tocLinks = toc.querySelectorAll('a')

  window.addEventListener('hashchange', Toc)

  tocLinks.forEach(link => {
    link.classList.remove('active')
    link.removeAttribute('aria-current')

    if (link.hash === hash) {
      link.classList.add('active')
      link.setAttribute('aria-current', 'true')
    }
  })
})()
