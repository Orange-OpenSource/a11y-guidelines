(function () {
    document.documentElement.classList.replace('no-js', 'js')
    let RGAAWCAG = document.getElementsByClassName("RGAAWCAG");
    if (RGAAWCAG !== null) {

        for (let item of RGAAWCAG) {
            item.children[0].classList.add("table");
        }
    }
})();

/* Cookie consent banner customization */
(function () {

    // Utility function to apply Bootstrap classes to buttons
    function applyButtonClasses(button, small = false) {
        const sizeClass = small ? 'btn-sm' : null;

        if (button.classList.contains('tarteaucitronAllow')) {
            button.classList.add('btn', 'btn-success', 'ms-2', ...(sizeClass ? [sizeClass] : []));
        } else if (button.classList.contains('tarteaucitronDeny')) {
            button.classList.add('btn', 'btn-danger', 'ms-2', ...(sizeClass ? [sizeClass] : []));
        } else {
            button.classList.add('btn', 'btn-secondary', 'ms-2', ...(sizeClass ? [sizeClass] : []));
        }
    }

    // Event: main banner available
    window.addEventListener('tac.root_available', function () {
        const alertBig = document.getElementById('tarteaucitronAlertBig');

        // Apply dark theme to the alert banner
        alertBig.setAttribute('data-bs-theme', 'dark');

        document.querySelectorAll('#tarteaucitronRoot button').forEach(function (button) {
            if (
              button.classList.contains("catToggleBtn") ||
              button.id === "tarteaucitronClosePanel" ||
              button.id === "tarteaucitronBack"
            ) {
              return;
            }
            applyButtonClasses(button, true);
        });
    }, { once: true });

    // Event: services panel opened
    window.addEventListener('tac.open_panel', function () {
        const servicesContainer = document.getElementById('tarteaucitronServices_api');
        const mainLineOffset = document.getElementById('tarteaucitronMainLineOffset');

        // Apply dark theme to the main line offset
        mainLineOffset.setAttribute('data-bs-theme', 'dark');

        // Apply Boosted classes to buttons
        servicesContainer.querySelectorAll('button').forEach(function (button) {
            applyButtonClasses(button);
        });

        // Build a complete aria-label on .tarteaucitronStatusInfo
        servicesContainer
          .querySelectorAll(".tarteaucitronStatusInfo")
          .forEach(function (statusEl) {
            // Add role="status" so screen readers announce the content
            statusEl.setAttribute("role", "status");

            // Helper function to build and apply the aria-label
            function updateAriaLabel() {
              const serviceName = statusEl
                .closest(".tarteaucitronName")
                .querySelector(".tarteaucitronH3")
                ?.textContent.trim();

              const currentStatus = statusEl
                .querySelector(".tacCurrentStatus")
                ?.textContent.trim();

              if (serviceName && currentStatus) {
                const label = `${serviceName} ${currentStatus}`;
                statusEl.setAttribute("aria-label", label);
              }
            }

            // Build the aria-label on first open
            updateAriaLabel();

            // Watch for status changes and rebuild the aria-label accordingly
            const observer = new MutationObserver(updateAriaLabel);
            observer.observe(statusEl.querySelector(".tacCurrentStatus"), {
              childList: true,
              characterData: true,
              subtree: true,
            });
          });
    }, { once: true });

})();

/* Tab language IOS */
function automaticTabPan() {
    var AllLanguage = {
        "objectivec": {
            name: "Objective C",
            class: "item-oc",
            active: "active show",
            selected: "aria-selected=\"true\"",
            classTab: "objc"
        },
        "swift": {
            name: "Swift",
            class: "item-s",
            active: "",
            selected: "aria-selected=\"false\"",
            classTab: "swift"
        },
        "swiftui": {
            name: "Swift UI",
            class: "item-sui",
            active: "",
            selected: "aria-selected=\"false\"",
            classTab: "swiftui"
        },
    };

    document.querySelectorAll('.code-tab-pane').forEach(function (item, index) {

        listLanguage = [];
        item.querySelectorAll('code').forEach(function (code) {
            let object = {...AllLanguage[code.classList[0]], ...{html: code.outerHTML}};
            listLanguage.push(object);
        });
        //console.log(item)
        item.innerHTML = generateTabPan(listLanguage, index);
    });
}

function generateTabPan(listLanguage, id) {

    html = '<ul class="nav nav-tabs languageinfo" role="tablist">';
    listLanguage.forEach((element, index) => {
        uniqueIDTab = 'tabID-0' + id.toString() + index.toString();
        uniqueIDPan = 'tabID-1' + id.toString() + index.toString();
        html += '<li class="nav-item ' + element.class + '" role="presentation">';
        html += '<button class="nav-link ' + element.active + '" id="' + uniqueIDTab + '" data-bs-toggle="tab" data-bs-target="#' + uniqueIDPan + '" type="button" role="tab" aria-controls="' + uniqueIDPan + '" ' + element.selected + '>' + element.name + '</button>';
        html += '</li>';
    });
    html += "</ul>"
    html += '<div class="tab-content languageinfotab">';
    listLanguage.forEach((element, index) => {
        uniqueIDTab = 'tabID-0' + id.toString() + index.toString();
        uniqueIDPan = 'tabID-1' + id.toString() + index.toString();
        html += ' <div class="tab-pane fade ' + element.classTab + ' ' + element.active + '" id="' + uniqueIDPan + '" role="tabpanel" aria-labelledby="' + uniqueIDTab + '">';
        html += '<pre>';
        html += element.html;
        html += '</pre>';
        html += ' </div>';
    });
    html += '</div>';
    return html;
}

function manageEventTabPan() {

    function removeActiveClass() {
        document.querySelectorAll('.languageinfo li button').forEach(function (item) {
            item.classList.remove('active');
            item.setAttribute('aria-selected', false);
        });
        document.querySelectorAll('.languageinfotab div').forEach(function (item) {
            item.classList.remove('show');
            item.classList.remove('active');
            item.setAttribute('aria-hidden', true);
        });
    }

    function addActiveClass(classLink, classDiv) {
        document.querySelectorAll('.' + classLink + ' button').forEach(function (item) {
            item.classList.add('active');
            item.setAttribute('aria-selected', true);
        });
        document.querySelectorAll('.' + classDiv).forEach(function (item) {
            item.classList.add('show');
            item.classList.add('active');
            item.setAttribute('aria-hidden', false);
        })
    }

    document.querySelectorAll('.item-oc button').forEach(function (item) {

        item.addEventListener("click", function () {

            removeActiveClass();
            addActiveClass('item-oc', 'objc');

        });
    });

    document.querySelectorAll('.item-s button').forEach(function (item) {

        item.addEventListener("click", function () {

            removeActiveClass();
            addActiveClass('item-s', 'swift');

        });
    });

    document.querySelectorAll('.item-sui button').forEach(function (item) {
        item.addEventListener("click", function () {

            removeActiveClass();
            addActiveClass('item-sui', 'swiftui');

        });
    });
}

/* Filter bar */
(function () {
    const filtersbar = document.getElementById('filtersbar')
    let tagText = '';

    if (!filtersbar) {
        return
    }

    function activateFilterElement(dataAttributeValue) {
        const el = filtersbar.querySelector(`[data-tag="${dataAttributeValue}"]`)
        el.classList.add('active')
        el.setAttribute('aria-current', 'true')
        tagText = el.innerText
        if (dataAttributeValue !== "all") {
            el.focus();
        }
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

    const locales = {
        en: 'Articles for the theme ' + tagText + ' - Orange digital accessibility guidelines',
        fr: 'Articles pour la thématique ' + tagText + ' - Recommandations accessibilité numérique Orange'
    }
    document.getElementById('filtersbar_counter').innerHTML = `${String(posts.length - hiddenPosts)}`
    let title = `${String(posts.length - hiddenPosts)}` + ' ' + locales[Application.lang];
    document.title = title;
})();

/* Filter docsearch */
(function () {
  const observer = new MutationObserver(function (mutations, obs) {
    const svgLoupe = document.querySelector(".DocSearch-Search-Icon");
    const svgCtrl = document.querySelector(".DocSearch-Control-Key-Icon");
    const buttonKeys = document.querySelector(".DocSearch-Button-Keys");

    if (svgLoupe && svgCtrl && buttonKeys) {
      // Hide the search icon from assistive technologies
      svgLoupe.setAttribute("aria-hidden", "true");
      svgLoupe.setAttribute("focusable", "false");

      // Hide the decorative Ctrl SVG from assistive technologies
      svgCtrl.setAttribute("aria-hidden", "true");
      svgCtrl.setAttribute("focusable", "false");

      // Hide the decorative keyboard shortcut keys from assistive technologies
      buttonKeys.setAttribute("aria-hidden", "true");

      // Stop observing once all elements are found and updated
      obs.disconnect();
      clearTimeout(safetyTimeout);
    }
  });

  // Stop observing after 10 seconds as a safety measure
  const safetyTimeout = setTimeout(function () {
    observer.disconnect();
  }, 10000);

  // Start observing the DOM for changes
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
})();

/**
 * DocSearch Accessibility Enhancements
 * Adds ARIA labels for screen reader support in search results
 */
(function () {
    const lang = Application.lang;

    const i18n = {
        fr: {
            inputLabel: 'Rechercher sur le site',
            noResults: 'Aucun résultat',
            resultsCount: function (n) { return n + ' résultat' + (n > 1 ? 's' : '') + ' trouvé' + (n > 1 ? 's' : ''); },
            resultsList: 'Résultats de recherche'
        },
        en: {
            inputLabel: 'Search in entire website',
            noResults: 'No results',
            resultsCount: function (n) { return n + ' result' + (n !== 1 ? 's' : '') + ' found'; },
            resultsList: 'Search results'
        }
    };

    const t = i18n[lang] || i18n.en;

    // Live region for screen reader announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'visually-hidden';
    document.body.appendChild(liveRegion);

    // Announce a message to screen readers.
    // Resetting textContent before the timeout forces NVDA to detect the change
    // even when the new message is identical to the previous one.
    function announce(message) {
        liveRegion.textContent = '';
        setTimeout(function () { liveRegion.textContent = message; }, 50);
    }

    /*
     * Outer observer – watches <body> for direct child changes.
     * DocSearch appends its modal as a direct child of <body> when the user
     * opens the search dialog, so childList: true (without subtree) is enough
     * and avoids unnecessary overhead.
     */
    let modalWasOpen = false;

    const bodyObserver = new MutationObserver(function () {
        const modal = document.querySelector('.DocSearch-Modal');

        // Focus restoration on modal close.
        // DocSearch does not return focus to the trigger button when the modal
        // is closed, causing Tab navigation to restart from the top of the page.
        // We detect the modal disappearing and restore focus to .DocSearch-Button.
        if (!modal && modalWasOpen) {
            modalWasOpen = false;
            const triggerButton = document.querySelector('.DocSearch-Button');
            if (triggerButton) {
                triggerButton.focus();
            }
            return;
        }

        if (!modal) return;
        modalWasOpen = true;

        const input = modal.querySelector('input.DocSearch-Input');

        // Fix 1 – aria-label and aria-labelledby conflict.
        // DocSearch sets both aria-labelledby (pointing to the magnifier label)
        // and aria-label on the input. Per the ARIA spec, aria-labelledby takes
        // precedence over aria-label, making aria-label ineffective.
        // We remove aria-labelledby and rely solely on aria-label so that our
        // locale-aware label is actually read by screen readers.
        if (input) {
            input.removeAttribute('aria-labelledby');
            if (input.getAttribute('aria-label') !== t.inputLabel) {
                input.setAttribute('aria-label', t.inputLabel);
            }
        }

        // Fix 2 – aria-activedescendant management for NVDA.
        //
        // Problem A: DocSearch sets aria-activedescendant to the first result
        // as soon as results appear, causing NVDA to read the result item
        // instead of echoing the user's typed characters.
        //
        // Problem B: DocSearch internally tracks a highlighted index starting
        // at 0. If we remove aria-activedescendant during typing but DocSearch
        // keeps index=0, the first ArrowDown advances to item 1 and the first
        // result is skipped.
        //
        // Solution:
        //  - While typing: remove aria-activedescendant → NVDA echoes chars.
        //  - First ArrowDown/Up after typing: intercept in capture phase,
        //    block the event so DocSearch keeps index=0, then manually set
        //    aria-activedescendant to the already-highlighted first item.
        //  - Subsequent arrows: let DocSearch handle normally (index 0→1→2…).
        if (input && !input.dataset.a11yPatched) {
            input.dataset.a11yPatched = 'true';

            // Ensure the input is reachable via Tab
            input.setAttribute('tabindex', '0');

            let isNavigating = false;

            // Capture-phase keydown handler on the modal intercepts arrow keys
            // BEFORE DocSearch's own handler can process them.
            modal.addEventListener('keydown', function (e) {
                if (e.target !== input) return;

                if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                    if (!isNavigating) {
                        // First arrow press after typing: block DocSearch from
                        // advancing its internal index counter.
                        isNavigating = true;
                        e.stopPropagation();
                        e.preventDefault();

                        // Announce the already-highlighted first item by pointing
                        // aria-activedescendant to its ID.
                        // Prefer [aria-selected="true"]; fall back to the first hit item.
                        const activeItem = modal.querySelector('[aria-selected="true"]');
                        if (activeItem && activeItem.id) {
                            input.setAttribute('aria-activedescendant', activeItem.id);
                        } else {
                            const firstHit = modal.querySelector('.DocSearch-Hit[id]');
                            if (firstHit) {
                                input.setAttribute('aria-activedescendant', firstHit.id);
                            }
                        }
                        return;
                    }
                    // Subsequent arrows: let DocSearch handle normally
                } else {
                    // Any non-arrow key resets navigation state
                    isNavigating = false;
                    input.removeAttribute('aria-activedescendant');
                }
            }, true); // capture phase

            // Reset navigation state and clear aria-activedescendant on every keystroke
            input.addEventListener('input', function () {
                isNavigating = false;
                input.removeAttribute('aria-activedescendant');
            });

            // Strip aria-activedescendant whenever DocSearch re-applies it
            // after a re-render that occurs during typing (not during navigation).
            const inputAttrObserver = new MutationObserver(function (mutations) {
                if (isNavigating) return;
                mutations.forEach(function (m) {
                    if (m.attributeName === 'aria-activedescendant') {
                        input.removeAttribute('aria-activedescendant');
                    }
                });
            });
            inputAttrObserver.observe(input, {
                attributes: true,
                attributeFilter: ['aria-activedescendant']
            });
        }

        /*
         * Inner observer – watches the modal's entire subtree for DOM changes.
         * Every keystroke causes DocSearch to re-render the result list, so we
         * react to those mutations to:
         *   1. Announce "no results" or the result count to screen readers.
         *   2. Fix duplicate IDs and broken ARIA relationships left by DocSearch.
         */
        const resultsObserver = new MutationObserver(function () {
            const noResults = modal.querySelector('.DocSearch-NoResults');
            if (noResults) {
                announce(t.noResults);
                return;
            }

            const hits = modal.querySelectorAll('.DocSearch-Hit');
            if (hits.length === 0) return;

            // Fix 3 – Duplicate <ul id="docsearch-list"> and broken aria-controls.
            //
            // DocSearch renders one <ul role="listbox"> per result section but
            // assigns the same id="docsearch-list" to all of them. Duplicate IDs
            // break aria-controls and make getElementById unreliable.
            // DocSearch also writes the correct IDs (docsearch-hitsN-list) in
            // aria-controls on the input but never applies them to the <ul> elements.
            //
            // We assign unique IDs to each <ul> using the listbox index, and
            // pre-assign the matching section ID to the preceding .DocSearch-Hit-source
            // element using the same index. This guarantees that section IDs are
            // always unique and consistent with the listbox they label, preventing
            // the counter-based collision that caused docsearch-section-0 to be
            // assigned to both the first and last sections.
            const listboxes = modal.querySelectorAll('ul[role="listbox"]');
            const listboxIds = [];

            listboxes.forEach(function (ul, index) {
                // Assign unique listbox ID
                const listboxId = 'docsearch-hits' + index + '-list';
                ul.setAttribute('id', listboxId);
                listboxIds.push(listboxId);

                const sourceEl = ul.previousElementSibling;
                if (sourceEl && sourceEl.classList.contains('DocSearch-Hit-source')) {
                    // Fix 4 – Pre-assign section ID derived from the listbox index.
                    // Using the same index for both the listbox and its section header
                    // ensures a 1-to-1 mapping and eliminates any risk of ID collision.
                    const sectionId = 'docsearch-section-' + index;
                    sourceEl.setAttribute('id', sectionId);

                    // Fix 5 – Handle numeric section headers injected by DocSearch.
                    //
                    // When results span multiple sources, DocSearch renders a bare
                    // number as the first section header. This number is the total
                    // document count for that Algolia source collection, unrelated
                    // to the current search query result count. It is meaningless
                    // to all users and harmful for screen reader users (it would be
                    // announced as the group label).
                    //
                    // We hide it both visually (via the existing visually-hidden
                    // utility class) and from AT (via aria-hidden), and give the
                    // listbox a generic accessible label instead.
                    // The actual result count is already announced by the live
                    // region via announce().
                    const sourceText = sourceEl.textContent.trim();
                    const isNumericHeader = /^\d+$/.test(sourceText);

                    if (isNumericHeader) {
                        sourceEl.classList.add('visually-hidden');
                        sourceEl.setAttribute('aria-hidden', 'true');
                        ul.removeAttribute('aria-labelledby');
                        ul.setAttribute('aria-label', t.resultsList);
                    } else {
                        // Fix 6 – Label each listbox with its own section header.
                        // Previously all listboxes shared aria-labelledby="docsearch-label"
                        // (the magnifier icon label), which was not descriptive per section.
                        sourceEl.classList.remove('visually-hidden');
                        sourceEl.removeAttribute('aria-hidden');
                        ul.setAttribute('aria-labelledby', sectionId);
                        // Remove aria-label: per the ARIA spec aria-labelledby takes
                        // precedence, making aria-label redundant and potentially
                        // confusing for assistive technology audits.
                        ul.removeAttribute('aria-label');
                    }
                } else {
                    // Fallback when no section header precedes the listbox
                    ul.removeAttribute('aria-labelledby');
                    ul.setAttribute('aria-label', t.resultsList);
                }
            });

            // Rebuild aria-controls on the input to reference all listbox IDs
            if (input && listboxIds.length > 0) {
                input.setAttribute('aria-controls', listboxIds.join(' '));
            }

            // Fix 7 – Globally unique title IDs and correct aria-labelledby on hits.
            //
            // The original script reset titleIdCounter to 0 on every mutation,
            // producing duplicate IDs (e.g. two elements with id="docsearch-title-0")
            // when DocSearch re-rendered. We use each hit's global index instead
            // to guarantee uniqueness across all sections.
            // Section IDs are retrieved from the values assigned in the loop above,
            // so no separate sectionIdCounter is needed.
            //
            // When the section header is hidden from AT (numeric header), we label
            // the hit with its title only to avoid announcing a meaningless number.
            hits.forEach(function (hit, globalIndex) {
                const listbox = hit.parentElement;
                if (!listbox) return;

                const sourceEl = listbox.previousElementSibling;
                if (!sourceEl || !sourceEl.classList.contains('DocSearch-Hit-source')) return;

                // Retrieve the section ID assigned in the listbox loop above
                const sourceId = sourceEl.getAttribute('id');
                if (!sourceId) return;

                const titleEl = hit.querySelector('.DocSearch-Hit-title');
                if (!titleEl) return;

                // Always reassign using the global index to guarantee uniqueness
                // across sections after each re-render
                const titleId = 'docsearch-title-' + globalIndex;
                titleEl.setAttribute('id', titleId);

                // If the section header is hidden from AT (numeric header), label
                // the hit with its title only; otherwise include the section name
                // so screen readers announce: section name first, then result title.
                const isHiddenSection = sourceEl.getAttribute('aria-hidden') === 'true';
                if (isHiddenSection) {
                    hit.setAttribute('aria-labelledby', titleId);
                } else {
                    hit.setAttribute('aria-labelledby', sourceId + ' ' + titleId);
                }
            });

            announce(t.resultsCount(hits.length));
        });

        resultsObserver.observe(modal, { childList: true, subtree: true });
    });

    bodyObserver.observe(document.body, { childList: true });
})();

/* Highlight searched term in result page */
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    // Retrieve the searched term from localStorage
    const term = localStorage.getItem("searchTerm");
    if (term) {
      // Highlight the term in the page content
      highlightTermInPage(term);
      // Remove the term from storage after highlighting
      localStorage.removeItem("searchTerm");
    }
  });

  // Function to highlight all occurrences of the term in the page
  function highlightTermInPage(term) {
    if (!term) return; // Exit if no term provided

    function walk(node) {
      if (node.nodeType === 3) {
        const regex = new RegExp(`(${escapeRegExp(term)})`, "gi");
        if (regex.test(node.nodeValue)) {
          const span = document.createElement("span");
          span.innerHTML = node.nodeValue.replace(regex, "<mark>$1</mark>");
          node.parentNode.replaceChild(span, node);
        }
      }
      else if (
        node.nodeType === 1 &&
        node.tagName !== "SCRIPT" &&
        node.tagName !== "STYLE"
      ) {
        Array.from(node.childNodes).forEach(walk);
      }
    }

    walk(document.body);
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
})();

/* Filter article */
(function () {

    const tagToFilter = (new URL(window.location)).searchParams.get('tag')

    searchArticleButton = document.getElementById("search_article");
    if (searchArticleButton !== null) {

        this.updateTitle = function () {
            // Declare variables
            var input, filter, ol, li, titleArticle, i, descriptionArticle, compteurArticle;
            input = document.getElementById("search-article-text").value;
            filter = input.toUpperCase();
            ol = document.getElementById("list_article");
            li = ol.children;

            // Loop through all list items, and hide those who don't match the search query
            compteurArticle = 0;
            for (i = 0; i < li.length; i++) {
                if (typeof li[i].attributes.hidden == "undefined") {

                    titleArticle = li[i].getElementsByTagName("h2")[0].innerText;
                    descriptionArticle = li[i].getElementsByTagName("p")[0].innerText;
                    if (titleArticle.toUpperCase().indexOf(filter) > -1 || descriptionArticle.toUpperCase().indexOf(filter) > -1) {
                        compteurArticle++;
                        li[i].style.display = "";
                    } else {
                        li[i].style.display = "none";
                    }
                }
            }
            document.getElementById("filtersbar_counter").innerText = compteurArticle;

            if (tagToFilter !== null) {
                var tagText = document.getElementById('filtersbar').querySelector(`[data-tag="${tagToFilter}"]`).innerText;
            }
            const locales = {
                en: {
                    all: ' article' + (compteurArticle > 1 ? 's' : '') + (tagToFilter ? ' - theme ' + tagText + '' : ''),
                    h1: ' article' + (compteurArticle > 1 ? 's' : '') + (tagToFilter ? ' - theme ' + tagText + '' : '') + '' + (input ? ' - search "' + input + '"' : ''),
                    title: compteurArticle + ' article' + (compteurArticle > 1 ? 's' : '') + (tagToFilter ? ' for the theme ' + tagText + '' : '') + '' + (input ? ' with the search "' + input + '"' : '') + ' - Orange digital accessibility guidelines',
                },
                fr: {
                    all: ' article' + (compteurArticle > 1 ? 's' : '') + (tagToFilter ? ' - thématique ' + tagText + '' : ''),
                    h1: ' article' + (compteurArticle > 1 ? 's' : '') + (tagToFilter ? ' - thématique ' + tagText + '' : '') + '' + (input ? ' - recherche "' + input + '"' : ''),
                    title: compteurArticle + ' article' + (compteurArticle > 1 ? 's' : '') + (tagToFilter ? ' pour la thématique ' + tagText + '' : '') + '' + (input ? ' avec la recherche "' + input + '"' : '') + ' - Recommandations accessibilité numérique Orange'
                }
            }

            document.title = locales[Application.lang].title;

            if (filter === "") {
                document.getElementById("search_title").innerText = locales[Application.lang].all;
            } else {
                document.getElementById("search_title").innerText = locales[Application.lang].h1;
            }
        };
        updateTitle();

        searchArticleButton.onclick = function (e) {
            updateTitle();
        }

        var input = document.getElementById("search-article-text");

        // Execute a function when the user presses a key on the keyboard
        input.addEventListener("keypress", function (event) {
            // If the user presses the "Enter" key on the keyboard
            if (event.key === "Enter") {
                // Cancel the default action, if needed
                event.preventDefault();
                // Trigger the button element with a click
                document.getElementById("search_article").click();
            }
        });
    }
})();

/* Back to top link */
(function () {
    const handler = document.getElementById('back-to-top')
    const threshold = 300

    if (!handler || typeof window.requestAnimationFrame === 'undefined') {
        return
    }

    function hideHandler() {
        handler.style.right = '-99999px'
        handler.style.opacity = '0'
    }

    function showHandler() {
        handler.style.right = null
        handler.style.opacity = '1'
    }

    function onScroll() {
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
function initPriorityNav() {
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


function highlightCodeBlocks() {
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
            'objectivec': 'Objective-C',
            'swift': 'Swift',
            'swiftui': 'SwiftUI',
            'xml': 'XML'
        }

        codeBlocks.forEach(function (codeBlock) {
            const language = codeBlock.result.language
            const displayLanguage = displayLanguageList[language] || language
            const languageWrapper = document.createElement('p')
            languageWrapper.classList.add('text-bg-primary', 'd-inline-block', 'p-2', 'mb-0', 'font-weight-bold')
            languageWrapper.textContent = displayLanguage

            codeBlock.parentNode.insertBefore(languageWrapper, codeBlock)
        })
    }
}

function tabPanelFocus(tabTitleID, tabDescriptionID) {
    elementTarget = document.getElementById(tabTitleID)
    new boosted.Tab(elementTarget).show();
    elementTarget.focus();
    document.getElementById(tabDescriptionID).scrollIntoView({behavior: 'smooth', block: 'start'})
}

window.addEventListener('keydown', function(e) {
    // If pressed key '/' AND we're not in a textarea
    if (e.key === '/' && !["INPUT", "TEXTAREA"].includes(e.target.tagName)) {
        // We stop propagation immediately
        e.stopImmediatePropagation();
        // We prevent browsers default behavious 
        e.preventDefault(); 
    }
}, { capture: true }); // 

window.addEventListener('DOMContentLoaded', function () {
    //initPriorityNav()
    automaticTabPan();
    manageEventTabPan();

    if (Application.vendors.highlightJS === true) {
        highlightCodeBlocks()
    }
}, {once: true})

