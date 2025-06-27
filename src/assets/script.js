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
    }, {once: true})

    window.addEventListener('tac.open_panel', function () {
        const servicesContainer = document.getElementById('tarteaucitronServices_api')

        servicesContainer.querySelectorAll('button').forEach(function (button) {
            if (button.classList.contains('tarteaucitronAllow')) {
                button.classList.add('btn', 'btn-primary', 'btn-inverse', 'ms-2')
            } else {
                button.classList.add('btn', 'btn-info', 'ms-2')
            }
        })
    }, {once: true})
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
  setTimeout(() => {
    let svgLoupe = document.getElementsByClassName("DocSearch-Search-Icon")[0];
    svgLoupe.setAttribute("aria-hidden", true);
    svgLoupe.setAttribute("focusable", false);
  }, "1000");
})();

/* Highlight searche term in result page */
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

window.addEventListener('DOMContentLoaded', function () {
    //initPriorityNav()
    automaticTabPan();
    manageEventTabPan();

    if (Application.vendors.highlightJS === true) {
        highlightCodeBlocks()
    }
}, {once: true})

