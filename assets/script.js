(function(){document.documentElement.classList.replace("no-js","js");let a=document.getElementsByClassName("RGAAWCAG");if(null!==a)for(let b of a)b.children[0].classList.add("table")})(),function(){// Utility function to apply Bootstrap classes to buttons
function a(a,b=!1){const c=b?"btn-sm":null;a.classList.contains("tarteaucitronAllow")?a.classList.add("btn","btn-success","ms-2",...(c?[c]:[])):a.classList.contains("tarteaucitronDeny")?a.classList.add("btn","btn-danger","ms-2",...(c?[c]:[])):a.classList.add("btn","btn-secondary","ms-2",...(c?[c]:[]))}// Event: main banner available
// Event: services panel opened
window.addEventListener("tac.root_available",function(){const b=document.getElementById("tarteaucitronAlertBig");// Apply dark theme to the alert banner
b.setAttribute("data-bs-theme","dark"),document.querySelectorAll("#tarteaucitronRoot button").forEach(function(b){b.classList.contains("catToggleBtn")||"tarteaucitronClosePanel"===b.id||"tarteaucitronBack"===b.id||a(b,!0)})},{once:!0}),window.addEventListener("tac.open_panel",function(){const b=document.getElementById("tarteaucitronServices_api"),c=document.getElementById("tarteaucitronMainLineOffset");// Apply dark theme to the main line offset
// Apply Boosted classes to buttons
// Build a complete aria-label on .tarteaucitronStatusInfo
c.setAttribute("data-bs-theme","dark"),b.querySelectorAll("button").forEach(function(b){a(b)}),b.querySelectorAll(".tarteaucitronStatusInfo").forEach(function(a){// Helper function to build and apply the aria-label
function b(){const b=a.closest(".tarteaucitronName").querySelector(".tarteaucitronH3")?.textContent.trim(),c=a.querySelector(".tacCurrentStatus")?.textContent.trim();if(b&&c){a.setAttribute("aria-label",`${b} ${c}`)}}// Build the aria-label on first open
a.setAttribute("role","status"),b();// Watch for status changes and rebuild the aria-label accordingly
const c=new MutationObserver(b);c.observe(a.querySelector(".tacCurrentStatus"),{childList:!0,characterData:!0,subtree:!0})})},{once:!0})}();/* Tab language IOS */function automaticTabPan(){var a={objectivec:{name:"Objective C",class:"item-oc",active:"active show",selected:"aria-selected=\"true\"",classTab:"objc"},swift:{name:"Swift",class:"item-s",active:"",selected:"aria-selected=\"false\"",classTab:"swift"},swiftui:{name:"Swift UI",class:"item-sui",active:"",selected:"aria-selected=\"false\"",classTab:"swiftui"}};document.querySelectorAll(".code-tab-pane").forEach(function(b,c){//console.log(item)
listLanguage=[],b.querySelectorAll("code").forEach(function(b){let c={...a[b.classList[0]],...{html:b.outerHTML}};listLanguage.push(c)}),b.innerHTML=generateTabPan(listLanguage,c)})}function generateTabPan(a,b){return html="<ul class=\"nav nav-tabs languageinfo\" role=\"tablist\">",a.forEach((a,c)=>{uniqueIDTab="tabID-0"+b.toString()+c.toString(),uniqueIDPan="tabID-1"+b.toString()+c.toString(),html+="<li class=\"nav-item "+a.class+"\" role=\"presentation\">",html+="<button class=\"nav-link "+a.active+"\" id=\""+uniqueIDTab+"\" data-bs-toggle=\"tab\" data-bs-target=\"#"+uniqueIDPan+"\" type=\"button\" role=\"tab\" aria-controls=\""+uniqueIDPan+"\" "+a.selected+">"+a.name+"</button>",html+="</li>"}),html+="</ul>",html+="<div class=\"tab-content languageinfotab\">",a.forEach((a,c)=>{uniqueIDTab="tabID-0"+b.toString()+c.toString(),uniqueIDPan="tabID-1"+b.toString()+c.toString(),html+=" <div class=\"tab-pane fade "+a.classTab+" "+a.active+"\" id=\""+uniqueIDPan+"\" role=\"tabpanel\" aria-labelledby=\""+uniqueIDTab+"\">",html+="<pre>",html+=a.html,html+="</pre>",html+=" </div>"}),html+="</div>",html}function manageEventTabPan(){function a(){document.querySelectorAll(".languageinfo li button").forEach(function(a){a.classList.remove("active"),a.setAttribute("aria-selected",!1)}),document.querySelectorAll(".languageinfotab div").forEach(function(a){a.classList.remove("show"),a.classList.remove("active"),a.setAttribute("aria-hidden",!0)})}function b(a,b){document.querySelectorAll("."+a+" button").forEach(function(a){a.classList.add("active"),a.setAttribute("aria-selected",!0)}),document.querySelectorAll("."+b).forEach(function(a){a.classList.add("show"),a.classList.add("active"),a.setAttribute("aria-hidden",!1)})}document.querySelectorAll(".item-oc button").forEach(function(c){c.addEventListener("click",function(){a(),b("item-oc","objc")})}),document.querySelectorAll(".item-s button").forEach(function(c){c.addEventListener("click",function(){a(),b("item-s","swift")})}),document.querySelectorAll(".item-sui button").forEach(function(c){c.addEventListener("click",function(){a(),b("item-sui","swiftui")})})}/* Filter bar */(function(){function a(a){const d=b.querySelector(`[data-tag="${a}"]`);d.classList.add("active"),d.setAttribute("aria-current","true"),c=d.innerText,"all"!==a&&d.focus()}const b=document.getElementById("filtersbar");let c="";if(!b)return;const d=new URL(window.location).searchParams.get("tag");if(null===d||"all"===d)return void a("all");a(d);const e=document.querySelectorAll("[data-tags]");let f=0;e.forEach(function(a){a.dataset.tags.includes(d)||(a.setAttribute("hidden",""),f++)});const g={en:"Articles for the theme "+c+" - Orange digital accessibility guidelines",fr:"Articles pour la th\xE9matique "+c+" - Recommandations accessibilit\xE9 num\xE9rique Orange"};document.getElementById("filtersbar_counter").innerHTML=`${e.length-f+""}`;let h=`${e.length-f+""}`+" "+g[Application.lang];document.title=h})(),function(){const a=new MutationObserver(function(a,c){const d=document.querySelector(".DocSearch-Search-Icon"),e=document.querySelector(".DocSearch-Control-Key-Icon"),f=document.querySelector(".DocSearch-Button-Keys");d&&e&&f&&(d.setAttribute("aria-hidden","true"),d.setAttribute("focusable","false"),e.setAttribute("aria-hidden","true"),e.setAttribute("focusable","false"),f.setAttribute("aria-hidden","true"),c.disconnect(),clearTimeout(b))}),b=setTimeout(function(){a.disconnect()},1e4);// Stop observing after 10 seconds as a safety measure
// Start observing the DOM for changes
a.observe(document.body,{childList:!0,subtree:!0})}(),function(){// Announce a message to screen readers.
// Resetting textContent before the timeout forces NVDA to detect the change
// even when the new message is identical to the previous one.
function a(a){e.textContent="",setTimeout(function(){e.textContent=a},50)}/*
     * Outer observer – watches <body> for direct child changes.
     * DocSearch appends its modal as a direct child of <body> when the user
     * opens the search dialog, so childList: true (without subtree) is enough
     * and avoids unnecessary overhead.
     */const b=Application.lang,c={fr:{inputLabel:"Rechercher sur le site",noResults:"Aucun r\xE9sultat",resultsCount:function(a){return a+" r\xE9sultat"+(1<a?"s":"")+" trouv\xE9"+(1<a?"s":"")},resultsList:"R\xE9sultats de recherche"},en:{inputLabel:"Search in entire website",noResults:"No results",resultsCount:function(a){return a+" result"+(1===a?"":"s")+" found"},resultsList:"Search results"}},d=c[b]||c.en,e=document.createElement("div");// Live region for screen reader announcements
e.setAttribute("role","status"),e.setAttribute("aria-live","polite"),e.setAttribute("aria-atomic","true"),e.className="visually-hidden",document.body.appendChild(e);let f=!1;const g=new MutationObserver(function(){const b=document.querySelector(".DocSearch-Modal");// Focus restoration on modal close.
// DocSearch does not return focus to the trigger button when the modal
// is closed, causing Tab navigation to restart from the top of the page.
// We detect the modal disappearing and restore focus to .DocSearch-Button.
if(!b&&f){f=!1;const a=document.querySelector(".DocSearch-Button");return void(a&&a.focus())}if(!b)return;f=!0;const c=b.querySelector("input.DocSearch-Input");// Fix 1 – aria-label and aria-labelledby conflict.
// DocSearch sets both aria-labelledby (pointing to the magnifier label)
// and aria-label on the input. Per the ARIA spec, aria-labelledby takes
// precedence over aria-label, making aria-label ineffective.
// We remove aria-labelledby and rely solely on aria-label so that our
// locale-aware label is actually read by screen readers.
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
if(c&&(c.removeAttribute("aria-labelledby"),c.getAttribute("aria-label")!==d.inputLabel&&c.setAttribute("aria-label",d.inputLabel)),c&&!c.dataset.a11yPatched){c.dataset.a11yPatched="true",c.setAttribute("tabindex","0");let a=!1;// Capture-phase keydown handler on the modal intercepts arrow keys
// BEFORE DocSearch's own handler can process them.
b.addEventListener("keydown",function(d){if(d.target===c)if("ArrowDown"!==d.key&&"ArrowUp"!==d.key)a=!1,c.removeAttribute("aria-activedescendant");else if(!a){a=!0,d.stopPropagation(),d.preventDefault();// Announce the already-highlighted first item by pointing
// aria-activedescendant to its ID.
// Prefer [aria-selected="true"]; fall back to the first hit item.
const e=b.querySelector("[aria-selected=\"true\"]");if(e&&e.id)c.setAttribute("aria-activedescendant",e.id);else{const a=b.querySelector(".DocSearch-Hit[id]");a&&c.setAttribute("aria-activedescendant",a.id)}}// Subsequent arrows: let DocSearch handle normally
},!0),c.addEventListener("input",function(){a=!1,c.removeAttribute("aria-activedescendant")});// Strip aria-activedescendant whenever DocSearch re-applies it
// after a re-render that occurs during typing (not during navigation).
const d=new MutationObserver(function(b){a||b.forEach(function(a){"aria-activedescendant"===a.attributeName&&c.removeAttribute("aria-activedescendant")})});d.observe(c,{attributes:!0,attributeFilter:["aria-activedescendant"]})}/*
         * Inner observer – watches the modal's entire subtree for DOM changes.
         * Every keystroke causes DocSearch to re-render the result list, so we
         * react to those mutations to:
         *   1. Announce "no results" or the result count to screen readers.
         *   2. Fix duplicate IDs and broken ARIA relationships left by DocSearch.
         */const e=new MutationObserver(function(){const e=b.querySelector(".DocSearch-NoResults");if(e)return void a(d.noResults);const f=b.querySelectorAll(".DocSearch-Hit");if(0===f.length)return;// Fix 3 – Duplicate <ul id="docsearch-list"> and broken aria-controls.
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
const g=b.querySelectorAll("ul[role=\"listbox\"]"),h=[];g.forEach(function(a,b){// Assign unique listbox ID
const c="docsearch-hits"+b+"-list";a.setAttribute("id",c),h.push(c);const e=a.previousElementSibling;if(e&&e.classList.contains("DocSearch-Hit-source")){// Fix 4 – Pre-assign section ID derived from the listbox index.
// Using the same index for both the listbox and its section header
// ensures a 1-to-1 mapping and eliminates any risk of ID collision.
const c="docsearch-section-"+b;e.setAttribute("id",c);// Fix 5 – Handle numeric section headers injected by DocSearch.
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
const f=e.textContent.trim(),g=/^\d+$/.test(f);g?(e.classList.add("visually-hidden"),e.setAttribute("aria-hidden","true"),a.removeAttribute("aria-labelledby"),a.setAttribute("aria-label",d.resultsList)):(e.classList.remove("visually-hidden"),e.removeAttribute("aria-hidden"),a.setAttribute("aria-labelledby",c),a.removeAttribute("aria-label"))}else// Fallback when no section header precedes the listbox
a.removeAttribute("aria-labelledby"),a.setAttribute("aria-label",d.resultsList)}),c&&0<h.length&&c.setAttribute("aria-controls",h.join(" ")),f.forEach(function(a,b){const c=a.parentElement;if(c){const d=c.previousElementSibling;if(d&&d.classList.contains("DocSearch-Hit-source")){// Retrieve the section ID assigned in the listbox loop above
const c=d.getAttribute("id");if(c){const e=a.querySelector(".DocSearch-Hit-title");if(e){// Always reassign using the global index to guarantee uniqueness
// across sections after each re-render
const f="docsearch-title-"+b;e.setAttribute("id",f);// If the section header is hidden from AT (numeric header), label
// the hit with its title only; otherwise include the section name
// so screen readers announce: section name first, then result title.
const g="true"===d.getAttribute("aria-hidden");g?a.setAttribute("aria-labelledby",f):a.setAttribute("aria-labelledby",c+" "+f)}}}}}),a(d.resultsCount(f.length))});e.observe(b,{childList:!0,subtree:!0})});g.observe(document.body,{childList:!0})}(),function(){// Function to highlight all occurrences of the term in the page
function a(a){// Exit if no term provided
function c(d){if(3===d.nodeType){const c=new RegExp(`(${b(a)})`,"gi");if(c.test(d.nodeValue)){const a=document.createElement("span");a.innerHTML=d.nodeValue.replace(c,"<mark>$1</mark>"),d.parentNode.replaceChild(a,d)}}else 1===d.nodeType&&"SCRIPT"!==d.tagName&&"STYLE"!==d.tagName&&Array.from(d.childNodes).forEach(c)}a&&c(document.body)}function b(a){return a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}document.addEventListener("DOMContentLoaded",()=>{// Retrieve the searched term from localStorage
const b=localStorage.getItem("searchTerm");b&&(a(b),localStorage.removeItem("searchTerm"))})}(),function(){const a=new URL(window.location).searchParams.get("tag");if(searchArticleButton=document.getElementById("search_article"),null!==searchArticleButton){this.updateTitle=function(){// Declare variables
var b,c,d,e,f,g,h,j;for(b=document.getElementById("search-article-text").value,c=b.toUpperCase(),d=document.getElementById("list_article"),e=d.children,j=0,g=0;g<e.length;g++)"undefined"==typeof e[g].attributes.hidden&&(f=e[g].getElementsByTagName("h2")[0].innerText,h=e[g].getElementsByTagName("p")[0].innerText,-1<f.toUpperCase().indexOf(c)||-1<h.toUpperCase().indexOf(c)?(j++,e[g].style.display=""):e[g].style.display="none");if(document.getElementById("filtersbar_counter").innerText=j,null!==a)var k=document.getElementById("filtersbar").querySelector(`[data-tag="${a}"]`).innerText;const l={en:{all:" article"+(1<j?"s":"")+(a?" - theme "+k+"":""),h1:" article"+(1<j?"s":"")+(a?" - theme "+k+"":"")+""+(b?" - search \""+b+"\"":""),title:j+" article"+(1<j?"s":"")+(a?" for the theme "+k+"":"")+""+(b?" with the search \""+b+"\"":"")+" - Orange digital accessibility guidelines"},fr:{all:" article"+(1<j?"s":"")+(a?" - th\xE9matique "+k+"":""),h1:" article"+(1<j?"s":"")+(a?" - th\xE9matique "+k+"":"")+""+(b?" - recherche \""+b+"\"":""),title:j+" article"+(1<j?"s":"")+(a?" pour la th\xE9matique "+k+"":"")+""+(b?" avec la recherche \""+b+"\"":"")+" - Recommandations accessibilit\xE9 num\xE9rique Orange"}};document.title=l[Application.lang].title,document.getElementById("search_title").innerText=""===c?l[Application.lang].all:l[Application.lang].h1},updateTitle(),searchArticleButton.onclick=function(){updateTitle()};var b=document.getElementById("search-article-text");// Execute a function when the user presses a key on the keyboard
b.addEventListener("keypress",function(a){"Enter"===a.key&&(a.preventDefault(),document.getElementById("search_article").click())})}}(),function(){function a(){d.style.right="-99999px",d.style.opacity="0"}function b(){d.style.right=null,d.style.opacity="1"}function c(){window.pageYOffset>=e?b():a()}const d=document.getElementById("back-to-top"),e=300;d&&"undefined"!=typeof window.requestAnimationFrame&&(a(),window.addEventListener("scroll",function(){window.requestAnimationFrame(c)}))}();/* Priority nav*/function initPriorityNav(){const a=jQuery("#secondary-navigation");if(a){const b={en:"More",fr:"Plus"};if(!b.hasOwnProperty(Application.lang))throw new Error(`[initPriorityNav()] : lang '${Application.lang}' is not managed by the method's translations`);a.prioritynav(b[Application.lang])}}function highlightCodeBlocks(){if(hljs.initHighlighting(),!0===Application.vendors.highlightTitle){const a=document.querySelectorAll(".hljs");if(!a.length)return;const b={css:"CSS",html:"HTML",java:"Java",javascript:"JavaScript",json:"JSON",kotlin:"Kotlin",objectivec:"Objective-C",swift:"Swift",swiftui:"SwiftUI",xml:"XML"};a.forEach(function(a){const c=a.result.language,d=b[c]||c,e=document.createElement("p");e.classList.add("text-bg-primary","d-inline-block","p-2","mb-0","font-weight-bold"),e.textContent=d,a.parentNode.insertBefore(e,a)})}}function tabPanelFocus(a,b){elementTarget=document.getElementById(a),new boosted.Tab(elementTarget).show(),elementTarget.focus(),document.getElementById(b).scrollIntoView({behavior:"smooth",block:"start"})}// 
window.addEventListener("keydown",function(a){"/"!==a.key||["INPUT","TEXTAREA"].includes(a.target.tagName)||(a.stopImmediatePropagation(),a.preventDefault())},{capture:!0}),window.addEventListener("DOMContentLoaded",function(){//initPriorityNav()
automaticTabPan(),manageEventTabPan(),!0===Application.vendors.highlightJS&&highlightCodeBlocks()},{once:!0});