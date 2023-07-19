document.addEventListener("DOMContentLoaded",function(){function a(a,b){const c=b||h;if(!i.hasOwnProperty(c))throw new Error(`translate(): Translation's locale \`${c}\` does not exist`);if(!i[c].hasOwnProperty(a))throw new Error(`translate(): Translation's key \`${a}\` does not exist for locale \`${c}\``);return i[c][a]}//requette XMLHttpRequest
function b(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){if(this.readyState===XMLHttpRequest.DONE)return 200===this.status?b(null,this.responseText):b({errCode:this.status,errMsg:this.statusText})},c.open("GET",a,!0),c.send(null)}//appel des Json
function c(){let a=document.getElementById("refTests");a.innerHTML="<div class=\"alert alert-warning\">Erreur chargement ressource JSON</div>"}//on concatene les 2 jsons en les réorganisant par tests
function d(c,a){// si les titres sont identiques, on regroupe par titre
for(var b=0;b<c.length;b++){let f=c[b].title;for(var d,e=0;e<a.length;e++)d=a[e].title,f==d&&(c.splice(b++,0,a[e]),a.splice(e,1))}//sinon on regroupe les tests par themes
for(var b=0;b<c.length;b++){let d=c[b].themes;for(var f,e=0;e<a.length;e++)f=a[e].themes,d==f&&(c.splice(b,0,a[e]),a.splice(e,1))}return c}function e(a){return a=a.toLowerCase(),a=a.replace(/é|è|ê/g,"e"),a=a.replace(/ /g,"-"),a}//supprimer les doublons dans les filtres
function f(a,b){for(var c=0;c<a.length;c++){//for (let condition of arrCond) {
let d=a[c];if(d.name==b){let b=a.indexOf(d);a.splice(b,1)}}return a}function g(b,c){var g=JSON.parse(b),h=JSON.parse(c),j=[],k=d(g,h);let l=new function(){// Récupération des données
//this.refTests = refTests;
// Retourne la liste des checkboxes
// Retourne les tests filtrés
this.UpdateTypes=function(a,b){let c=[];for(let d in b)for(let a in b[d].type)c.push(b[d].type[a]);let d=c.filter(function(a,b,c){return c.indexOf(a)===b});for(let c in a){var e=document.getElementById("type"+c);e.disabled=!0;var f=document.getElementById("labelType"+c);f.classList.add("disabled")}for(let c in a)for(let b in d)if(a[c]==d[b]){var e=document.getElementById("type"+c);e.disabled=!1;var f=document.getElementById("labelType"+c);f.classList.remove("disabled")}},this.UpdateFeedback=function(a,b){let c=document.getElementById("reinit"),d=1<b?"tests":"test";//         let elFeedback = document.getElementById('feedback');
if(a){c.disabled=!1;/* 
          htmlFeedback = '<button type="button" class="btn btn-secondary btn-sm mt-2 mb-3" id="reinitLink">' + translate('reinitFilters') + '';
          elFeedback.innerHTML = htmlFeedback;
 */let a=document.getElementById("reinitLink");a.addEventListener("click",function(){l.FetchAll(k),l.FilterByType(),l.UpdateFeedback(!1,k.length)})}else c.disabled=!0},this.FetchAll=function(b){// Selection de l'élément
let c=document.getElementById("refTests"),d="",f="";for(let g in b){if("FAKE"!=b[g].themes){//Ne pas présenter le premier élément du fichier .json qui n'est là que pour trier alphabétiquement les thèmes.
if(f!=b[g].themes){let a="0"===g?"":" class=\"pt-5\"";f=b[g].themes,d+="<h2 id=\"test-"+e(b[g].themes)+"\""+a+" >"+b[g].themes+"</h2>"}d+="<a href=\""+b[g].raccourcis+"\" style=\"text-decoration: none;\">",d+="<p id=\"heading"+g+"\">"+b[g].title+"     ",b[g].resultat[0]&&(d+="<span class=\"badge rounded-pill bg-light mr-2 align-self-center\">",d+=b[g].resultat[0]+"</span>"),d+="</p></a>"}// Affichage de l'ensemble des lignes en HTML
c.innerHTML=0===b.length?"<div class=\"alert alert-warning\">"+a("noResults")+"</div>":d}},this.DisplayFilters=function(){let b=document.getElementById("filter-footer"),c="";//Id défini dans le fichier 'filters.njk'
c+="<button id=\"reinit\" class=\"btn btn-secondary\" disabled>"+a("reinitFilters")+"</button>",b.innerHTML=c;let d=document.getElementById("reinit");d.addEventListener("click",function(){l.FetchAll(k),l.FilterByType(),l.UpdateFeedback(!1,k.length)});// Selection de l'élément
let e=document.getElementById("types"),f=[],g=document.getElementById("profils"),h=[];// Chaque ligne (test)
for(let a in k){// Chaque "type" dans chaque ligne (test)
for(let b in k[a].type)f.push(k[a].type[b]);// Chaque "profil" dans chaque ligne (test)
for(let b in k[a].profils)h.push(k[a].profils[b])}//let uniqueTypes = types.filter( (value, index, self) => self.indexOf(value) === index );
j=f.filter(function(a,b,c){return c.indexOf(a)===b}),j.sort(function(c,a){return c.toLowerCase().localeCompare(a.toLowerCase())});let m="";for(let b in m+="<li><input type=\"radio\" id=\"typeAll\" name=\"types\" value=\"typeAll\" checked> <label for=\"typeAll\">"+a("allTools")+"</label>",j)m+="<li><input type=\"radio\" id=\"type"+b+"\" name=\"types\" value=\""+j[b]+"\"> <label for=\"type"+b+"\" id=\"labelType"+b+"\">"+j[b]+"</label></li>";//let uniqueProfils = profils.filter( (value, index, self) => self.indexOf(value) === index );
let n=h.filter(function(a,b,c){return c.indexOf(a)===b}),o="";for(let a in n)o+="<li><input type=\"radio\" id=\"profil"+a+"\" name=\"profil\" value=\""+n[a]+"\"> <label for=\"profil"+a+"\">"+n[a]+"</label></li>";e.innerHTML=m,g.innerHTML=o},this.FilterByType=function(){this.DisplayFilters();let a=document.querySelectorAll("input"),b=[],c=[],e=[],g=!1;for(var h=0;h<a.length;h++){let d=a[h];d.addEventListener("click",function(){this.checked&&"profil"===this.name&&(c=[],c.push(d.value)),this.checked&&"typeAll"===this.id?b=[]:this.checked&&"types"===this.name&&(b=[],b.push(d.value));let a=b.length+c.length;0<a?(1==a?(1===c.length&&(f(e,this.name),e.unshift(function(a){//return item.profils === arrProfil[0];
return-1!==a.profils.indexOf(c[0])}),Object.defineProperty(e[0],"name",{value:this.name,writable:!1}),g=!0),1===b.length&&(f(e,this.name),e.unshift(function(a){return-1!==a.type.indexOf(b[0])}),Object.defineProperty(e[0],"name",{value:this.name,writable:!1}),g=!1)):(this.checked&&"profil"===this.name&&(f(e,this.name),e.unshift(function(a){return-1!==a.profils.indexOf(c[0])}),Object.defineProperty(e[0],"name",{value:this.name,writable:!1}),g=!0),this.checked&&"types"===this.name&&"allType"!=this.id&&(f(e,this.name),e.unshift(function(a){return-1!==a.type.indexOf(b[0])}),Object.defineProperty(e[0],"name",{value:this.name,writable:!1}),g=!1)),filteredTest=k.filter(function(a){return e.every(function(b){return b(a)})}),l.FetchAll(filteredTest),g&&l.UpdateTypes(j,filteredTest),l.UpdateFeedback(!0,filteredTest.length)):l.FetchAll(k)})}}};// Affichage de tous les tests
// Filtrage
l.FetchAll(k),l.FilterByType(),l.UpdateFeedback(!1,k.length)}const h=document.documentElement.getAttribute("lang");if(!h)throw new Error("A lang attribute must be set on the <html> tag !");const i={en:{process:"Process",check:"To check",conception:"Design",development:"Development",results:"Results",justification:"Justification",profiles:"Profiles",tools:"Tools",allTools:"All",exceptions:"Exceptions",ongoingTests:"ongoing tests",noResults:"No results match your selection",withCurrentFilters:"with current filters",reinitFilters:"Reinit <span class=\"sr-only\">&nbsp;filters</span>",themes:"Themes",elements:"Elements"},fr:{process:"Proc\xE9dures",check:"A v\xE9rifier",conception:"Conception",development:"D\xE9veloppement",results:"R\xE9sultats",justification:"Justification",profiles:"Profils",tools:"Outils",allTools:"Tous les outils",exceptions:"Exceptions",ongoingTests:"tests en cours",noResults:"Aucun r\xE9sultat ne correspond \xE0 votre s\xE9lection",withCurrentFilters:"dans les filtres en cours",reinitFilters:"R\xE9initialiser <span class=\"sr-only\">&nbsp;les filtres</span>",themes:"Th\xE8mes",elements:"\xC9l\xE9ments"}};b("../../../../../assets/json/"+h+"/ios/wwdc/ios-wwdc-listnota11y.json",function(a,d){return a&&c(),b("../../../../../assets/json/"+h+"/ios/wwdc/ios-wwdc-listnota11yempty.json",function(a,b){return a&&c(),g(d,b)})})});