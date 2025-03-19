document.addEventListener("DOMContentLoaded",function(){function a(a,b){const c=b||h;if(!i.hasOwnProperty(c))throw new Error(`translate(): Translation's locale \`${c}\` does not exist`);if(!i[c].hasOwnProperty(a))throw new Error(`translate(): Translation's key \`${a}\` does not exist for locale \`${c}\``);return i[c][a]}//requette XMLHttpRequest
function b(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){if(this.readyState===XMLHttpRequest.DONE)return 200===this.status?b(null,this.responseText):b({errCode:this.status,errMsg:this.statusText})},c.open("GET",a,!0),c.send(null)}//appel des Json
function c(){let a=document.getElementById("refTests");a.innerHTML="<div class=\"alert alert-warning\">Erreur chargement ressource JSON</div>"}//on concatene les 2 jsons en les réorganisant par tests
function d(c,a){// si les titres sont identiques, on regroupe par titre
for(var b=0;b<c.length;b++){let f=c[b].title;for(var d,e=0;e<a.length;e++)d=a[e].title,f==d&&(c.splice(b++,0,a[e]),a.splice(e,1))}//sinon on regroupe les tests par themes
for(var b=0;b<c.length;b++){let d=c[b].themes;for(var f,e=0;e<a.length;e++)f=a[e].themes,d==f&&(c.splice(b,0,a[e]),a.splice(e,1))}return c}// function encode(str){
// str=str.replace(/[\x26\x0A\<>'"^]/gi, function(r){return"&#"+r.charCodeAt(0)+";"});
// str=str.replace(/\&#60;code\&#62;([\s\S]*?)\&#60;\/code\&#62;/g, '<code>$1</code>');
// return str;
// }
function e(a){return a=a.toLowerCase(),a=a.replace(/é|è|ê/g,"e"),a=a.replace(/ /g,"-"),a}//supprimer les doublons dans les filtres
function f(a,b){for(var c=0;c<a.length;c++){//for (let condition of arrCond) {
let d=a[c];if(d.name==b){let b=a.indexOf(d);a.splice(b,1)}}return a}function g(b,c){var g=JSON.parse(b),h=JSON.parse(c),j=[],k=d(g,h);// Get the right menu
const l=document.getElementById("toc");let m=l.querySelector("ul");const i=m.cloneNode(!0);let n=new function(){// Récupération des données
//this.refTests = refTests;
// Retourne la liste des checkboxes
// Retourne les tests filtrés
this.UpdateTypes=function(a,b){let c=[];for(let d in b)for(let a in b[d].type)c.push(b[d].type[a]);let d=c.filter(function(a,b,c){return c.indexOf(a)===b});for(let c in a){var e=document.getElementById("type"+c);e.disabled=!0;var f=document.getElementById("labelType"+c);f.classList.add("disabled")}for(let c in a)for(let b in d)if(a[c]==d[b]){var e=document.getElementById("type"+c);e.disabled=!1;var f=document.getElementById("labelType"+c);f.classList.remove("disabled")}},this.UpdateFeedback=function(b,c,d){let e=document.getElementById("reinit"),f=document.getElementById("feedback"),g="",h=1<c?"tests":"test";if(b){e.classList.remove("hidden"),g="<p class=\"mb-0\"><b>"+c+"</b> "+h+" "+a("withCurrentFilters")+"</p><button type=\"button\" class=\"btn btn-secondary btn-sm mt-2 mb-3\" id=\"reinitLink\">"+a("reinitFilters")+"</button>",f.innerHTML=g;let b=document.getElementById("reinitLink");b.addEventListener("click",function(){n.FetchAll(k),n.FilterByType(),n.UpdateFeedback(!1,k.length,!0)})}else e.classList.add("hidden"),g="<p><b>"+c+"</b> "+a("ongoingTests")+"</p>",f.innerHTML=g,d&&document.getElementById("profilAll").focus()},this.FetchAll=function(b){// Selection de l'élément
let c=document.getElementById("refTests"),d=[],f="",g="";//on boucle dans le tableau passé en paramètre de la fonction
for(let c in b){if(g!=b[c].themes){let a="0"===c?"":" class=\"pt-5\"";g=b[c].themes,d.push(g),f+="<h2 id=\"test-"+e(b[c].themes)+"\""+a+">"+b[c].themes+"</h2>"}for(let d in f+="<article class=\"accordion-item\"><div class=\"accordion-header\" id=\"heading"+c+"\"><h3 class=\"card-title mb-0\"><button class=\"accordion-button collapsed\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapse"+c+"\" aria-expanded=\"false\" aria-controls=\"collapse"+c+"\"><span class=\"accordion-title h6 mb-0 me-2 flex-grow-1\">"+b[c].title+"</span><span class=\"badge text-bg-light me-2 align-self-center\">"+("Concepteur"==b[c].profils[0]||"Designer"==b[c].profils[0]?a("conception"):a("development"))+"</span></a></h3>",f+="</div><div id=\"collapse"+c+"\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading"+c+"\">",f+="<div class=\"card-block\"><div class=\"row\">",f+="<div class=\"col-lg-12\"><h4>"+a("process")+"</h4>",0==b[c].type.length&&b[c].type.push(""),b[c].type){if(""!=b[c].type[d]&&(f+="<h5 class=\"fs-6 ms-2\">"+a("tools")+": "+b[c].type[d]+"</h5>"),f+="<ol>",Array.isArray(b[c].tests[0]))for(let a in b[c].tests[d])f+="<li>"+b[c].tests[d][a]+"</li> ";else for(let a in b[c].tests)f+="<li>"+b[c].tests[a]+"</li> ";f+="</ol>"}for(let d in f+="</ol></div></div>",f+="<div class=\"row\">",f+="<div class=\"col-lg-12\"><h4>"+a("check")+"</h4><ol>",b[c].verifier)f+="<li>"+b[c].verifier[d]+"</li> ";for(let d in f+="</ol></div></div>",f+="<div class=\"row\">",f+="<div class=\"col-lg-12\"><h4>"+("Concepteur"==b[c].profils[0]?a("justification"):a("results"))+"</h4><ol>",b[c].resultat)f+="<li>"+b[c].resultat[d]+"</li> ";for(let d in f+="</ol></div>",f+="</div>",b[c].exception&&(f+="<div class=\"row\"><div class=\"col-lg-12\" ><h4>"+a("exceptions")+"</h4>",f+="<p>"+b[c].exception+"</p> ",f+="</div>",f+="</div>"),f+="</div><div class=\"card-footer text-muted\"><p><b>"+a("profiles")+": </b>",b[c].profils)f+=b[c].profils[d],d==b[c].profils.length-1?"":f+=",  ";f+="</p>",f+="</div>",f+="</div></article>"}// remove unused shortcuts
const h=i.cloneNode(!0);// Affichage de l'ensemble des lignes en HTML
l.replaceChild(h,l.querySelector("ul")),m=l.querySelector("ul"),m.querySelectorAll("li").forEach(a=>{d.includes(a.textContent.trim())||a.remove()}),c.innerHTML=0===b.length?"<div class=\"alert alert-warning\">"+a("noResults")+"</div>":f},this.DisplayFilters=function(){// Manage the link to filters in the avoidance links
const b=document.getElementById("avoidanceLinks"),c=document.getElementById("filtersTitle"),d=document.createElement("li");b&&!c&&(d.innerHTML=`<a id="filtersTitle" href="#filter" class="nav-link">`+a("filtersTitle")+`</a>`,d.classList.add("nav-item"),b.appendChild(d)),window.addEventListener("beforeunload",function(){b.removeChild(d)});let e=document.getElementById("filter-footer"),f="";f+="<button id=\"reinit\" class=\"btn btn-outline-secondary hidden\">"+a("reinitFilters")+"</button>",e.innerHTML=f;let g=document.getElementById("reinit");g.addEventListener("click",function(){n.FetchAll(k),n.FilterByType(),n.UpdateFeedback(!1,k.length,!0)});// Selection de l'élément
let h=document.getElementById("types"),l=[],m=document.getElementById("profils"),o=[];// Selection de l'élément
// Chaque ligne (test)
for(let a in k){// Chaque "type" dans chaque ligne (test)
for(let b in k[a].type)Array.isArray(k[a].type[b])?l.push(k[a].type[b][0]):l.push(k[a].type[b]);// Chaque "profil" dans chaque ligne (test)
for(let b in k[a].profils)o.push(k[a].profils[b])}//let uniqueTypes = types.filter( (value, index, self) => self.indexOf(value) === index );
j=l.filter(function(a,b,c){if(""!=a)return c.indexOf(a)===b}),j.sort(function(c,a){return c.toLowerCase().localeCompare(a.toLowerCase())});let p="";for(let b in p+="<li><input type=\"radio\" id=\"typeAll\" name=\"types\" value=\"typeAll\" checked> <label for=\"typeAll\">"+a("allTools")+"</label>",j)p+="<li><input type=\"radio\" id=\"type"+b+"\" name=\"types\" value=\""+j[b]+"\"> <label for=\"type"+b+"\" id=\"labelType"+b+"\">"+j[b]+"</label></li>";//let uniqueProfils = profils.filter( (value, index, self) => self.indexOf(value) === index );
let q=o.filter(function(a,b,c){return c.indexOf(a)===b}),r="";for(let b in r+="<li><input type=\"radio\" id=\"profilAll\" name=\"profil\" value=\"profilAll\" checked> <label for=\"profilAll\">"+a("allProfils")+"</label>",q)r+="<li><input type=\"radio\" id=\"profil"+b+"\" name=\"profil\" value=\""+q[b]+"\"> <label for=\"profil"+b+"\">"+q[b]+"</label></li>";h.innerHTML=p,m.innerHTML=r},this.FilterByType=function(){this.DisplayFilters();let a=document.querySelectorAll("input"),b=[],c=[],e=[],g=!1;for(var h=0;h<a.length;h++){let d=a[h];d.addEventListener("click",function(){this.checked&&"profilAll"===this.id?c=[]:this.checked&&"profil"===this.name&&(c=[],c.push(d.value)),this.checked&&"typeAll"===this.id?b=[]:this.checked&&"types"===this.name&&(b=[],b.push(d.value));let a=b.length+c.length;0<a?(1==a?(1===c.length&&(f(e,this.name),e.unshift(function(a){//return item.profils === arrProfil[0];
return-1!==a.profils.indexOf(c[0])}),Object.defineProperty(e[0],"name",{value:this.name,writable:!1}),g=!0),1===b.length&&(f(e,this.name),e.unshift(function(a){return-1!==a.type.toString().indexOf(b[0])}),Object.defineProperty(e[0],"name",{value:this.name,writable:!1}),g=!1)):(this.checked&&"profil"===this.name&&"profilAll"!=this.id&&(f(e,this.name),e.unshift(function(a){return-1!==a.profils.indexOf(c[0])}),Object.defineProperty(e[0],"name",{value:this.name,writable:!1}),g=!0),this.checked&&"types"===this.name&&"allType"!=this.id&&(f(e,this.name),e.unshift(function(a){return-1!==a.type.indexOf(b[0])}),Object.defineProperty(e[0],"name",{value:this.name,writable:!1}),g=!1)),filteredTest=k.filter(function(a){return e.every(function(b){return b(a)})}),n.FetchAll(filteredTest),g&&n.UpdateTypes(j,filteredTest),n.UpdateFeedback(!0,filteredTest.length)):(n.FetchAll(k),n.FilterByType(),n.UpdateFeedback(!0,k.length))})}}};// Affichage de tous les tests
// Filtrage
n.FetchAll(k),n.FilterByType(),n.UpdateFeedback(!1,k.length)}const h=document.documentElement.getAttribute("lang");if(!h)throw new Error("A lang attribute must be set on the <html> tag !");const i={en:{process:"Process",check:"To check",conception:"Design",development:"Development",results:"Results",justification:"Justification",profiles:"Profiles",tools:"Tools",allTools:"All tools",allProfils:"All profiles",exceptions:"Exceptions",ongoingTests:"ongoing tests",noResults:"No results match your selection",withCurrentFilters:"with current filters",reinitFilters:"Reinit <span class=\"visually-hidden\">&nbsp;filters</span>",filtersTitle:"Go to filters"},fr:{process:"Proc\xE9dure",check:"\xC0 v\xE9rifier",conception:"Conception",development:"D\xE9veloppement",results:"R\xE9sultats",justification:"Justification",profiles:"Profils&nbsp;",tools:"Outils&nbsp;",allTools:"Tous les outils",allProfils:"Tous les profils",exceptions:"Exceptions",ongoingTests:"tests en cours",noResults:"Aucun r\xE9sultat ne correspond \xE0 votre s\xE9lection",withCurrentFilters:"dans les filtres en cours",reinitFilters:"R\xE9initialiser <span class=\"visually-hidden\">&nbsp;les filtres</span>",filtersTitle:"Aller aux filtres"}};b("/assets/json/checklist/tests-web-"+h+".json",function(a,d){return a&&c(),b("/assets/json/checklist/tests-concepteur-"+h+".json",function(a,b){return a&&c(),g(d,b)})})});