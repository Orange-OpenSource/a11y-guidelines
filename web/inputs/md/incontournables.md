# Liste des critères WCAG par thème

<script>$(document).ready(function () {
    setBreadcrumb([{"label":"Critères WCAG par thème"}]);
    addSubMenu([
        {
            "label":"Concepteurs", "url":"", "expanded":false, "itemsQuery":"#incontournables-concepteurs h2", "className": "menuitem-conception",
            "onExpand": function () {
                $("#incontournables-concepteurs-tab").tab("show");
            }
        },
        {
            "label":"Développeurs", "url":"", "expanded":false, "itemsQuery":"#incontournables-developpeurs h2", "className": "menuitem-development",
            "onExpand": function () {
                $("#incontournables-developpeurs-tab").tab("show");
            }
        }
    ]);
    $("#incontournables-concepteurs-tab").on("click", function() {
        expandCollapse($("#left-navigation .menuitem-conception"));
    })
    $("#incontournables-developpeurs-tab").on("click", function() {
        expandCollapse($("#left-navigation .menuitem-development"));
    })
    if (window.location.hash == "#dev") {
        $("#incontournables-developpeurs-tab").trigger("click");
    }
});</script>

<script type="text/javascript" src="test.json"></script>
<script>$(document).ready(function () {
function encode(str){

		str=str.replace(/[\x26\x0A\<>'"^]/gi, function(r){return"&#"+r.charCodeAt(0)+";"});
		str=str.replace(/\&#60;code\&#62;([\s\S]*?)\&#60;\/code\&#62;/g, '<code>$1</code>'); 

		return str;
	}
	
function delDoublon(arrCond, inputId){
		for (let condition of arrCond) {
			if (condition.name == inputId) {
				let arrCondIndex = arrCond.indexOf(condition);
				arrCond.splice(arrCondIndex , 1);	
			}
		}
	
		return arrCond;
	}

	
	let refTests = data;

	let app = new function() {
	  // Récupération des données
	  this.refTests = refTests;

	  this.FetchAll = function(data) {
	  
	  // Selection de l'élément
	  let elrefTests = document.getElementById('refTests');
	  let htmlrefTests = '';
	  let headingTheme = '';
	
	  //on boucle dans le tableau passé en paramètre de la fonction
	  for (let i in data) {
		if(headingTheme!=data[i].themes){
			headingTheme=data[i].themes;
			htmlrefTests +='<h2>'+data[i].themes+'</h2>';
		}
		htmlrefTests += '<article class=""><div class="card-header" id="heading'+i+'"><h3 class="card-title"><a class="" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse'+i+'" aria-expanded="false" aria-controls="collapse'+i+'">' + data[i].title + '</a></h3>';
		
		htmlrefTests += '</div><div id="collapse'+i+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading'+i+'">';
		htmlrefTests += '<div class="card-block"><div class="row">';
		htmlrefTests += '<div class="col-lg-6"><h4>Procédures</h4><ol>';
		for (let j in data[i].tests) {
			dataEncode = encode(data[i].tests[j]);
			htmlrefTests += '<li>' + dataEncode + '</li> ';
		}
		htmlrefTests += '</ol></div>';
		htmlrefTests += '<div class="col-lg-6"><h4>A vérifier</h4><ol>';
		for (let j in data[i].verifier) {
			dataEncode= encode(data[i].verifier[j]);
			htmlrefTests += '<li>' +  dataEncode + '</li> ';
		}
		htmlrefTests += '</ol></div>';
		htmlrefTests += '</div>';
		htmlrefTests += '<div class="row">';
		htmlrefTests += '<div class="col-lg-12"><h4>Résultats</h4><ol>';
		for (let j in data[i].resultat) {
			dataEncode = encode(data[i].resultat[j]);
			htmlrefTests += '<li>' + dataEncode + '</li> ';
		}
		htmlrefTests += '</ol></div>';
		htmlrefTests += '</div>';
		if (data[i].exception) {
			htmlrefTests += '<div class="row"><div class="col-lg-12" ><h4>Exceptions</h4>';
			htmlrefTests += '<p>' + data[i].exception + '</p> ';
			htmlrefTests += '</div>';
			htmlrefTests += '</div>';
		}		
		htmlrefTests += '</div><div class="card-footer text-muted"> ' + data[i].niveau + ' ';
		for (let j in data[i].type) {
		  htmlrefTests += '<i class="fa fa-tag" aria-hidden="true"></i> ' + data[i].type[j] + ' ';
		}
		htmlrefTests += '</div>';
		htmlrefTests += '</div></article>';
	  }

		  // Affichage de l'ensemble des lignes en HTML
		  elrefTests.innerHTML = htmlrefTests;

		};
		
		
		// Retourne la liste des checkboxes
		this.DisplayFilters = function() {
			  // Selection de l'élément
			  let elTypes = document.getElementById('types');
			  let types   = [];

			  // Selection de l'élément
			  let elNiveaux = document.getElementById('niveaux');
			  let niveaux   = [];
			   
			  // Chaque ligne (test)
			  for (let i in refTests) {

				// Chaque "type" dans chaque ligne (test)
				for (let j in refTests[i].type) {
				  types.push(refTests[i].type[j]);
				}
				
				// Chaque "niveau" dans chaque ligne (test)
				  niveaux.push(refTests[i].niveau);
				
			  }

			  let uniqueTypes = types.filter( (value, index, self) => self.indexOf(value) === index );
			  let htmlTypes = '';

			  let uniqueNiveaux = niveaux.filter( (value, index, self) => self.indexOf(value) === index );
			  let htmlNiveaux = '';
			  
			  for (let i in uniqueTypes) {
				htmlTypes += '<li><input type="checkbox" id="type' + i + '" name="types" value="' + uniqueTypes[i] + '"> <label for="type' + i + '">' + uniqueTypes[i] + '</label></li>';
			  }

			  for (let i in uniqueNiveaux) {
				htmlNiveaux += '<li><input type="radio" id="' + uniqueNiveaux[i] + '" name="niveau" value="' + uniqueNiveaux[i] + '"> <label for="' + uniqueNiveaux[i] + '">' + uniqueNiveaux[i] + '</label></li>';
			  }

			  elTypes.innerHTML = htmlTypes;
			  elNiveaux.innerHTML = htmlNiveaux;
		};
		
		
		
		// Retourne les tests filtrés
		this.FilterByType = function() {
		
		  // Affiche les checkboxes et boutons radios
		  this.DisplayFilters();

		  let checkboxes = document.querySelectorAll('input');
		  let arrType    = [];	
		  let arrNiveau  = [];
		  let conditions = [];
		let self       = this;


		  for (let input of checkboxes) {
				 
			input.addEventListener('click', function() {

				if ((input.checked && input.name==="niveau")){
						arrNiveau = [];
						arrNiveau.push(input.value);		
				}
						
				if (input.name==="types"){

					if (input.checked){
						arrType.push(input.value);
					} else  {
							//on supprime tous les critères non cochés
							let removeItem = arrType.filter( (e) => e !== input.value );
							arrType = removeItem;
					
							//on supprime également la condition dans le tableau des conditions
							delDoublon(conditions, input.id);	
					}
				}

				let indice = arrType.length + arrNiveau.length;
					
				if (indice > 0) {	

					if (indice == 1) {
						
						//on réinitialise les conditions
						conditions = [];

						//on ajoute le premier critère
						if ((arrNiveau.length===1)){
							conditions.unshift(niveau = function(item) { 
								return item.niveau === arrNiveau[0]; 	
							});	
							//on nomme la fonction, pour les boutons radio on utilise input.name
							Object.defineProperty(conditions[0], 'name', {value: input.name, writable: false});	

						}
						if ((arrType.length===1 && input.checked && input.name==="types")){
							conditions.unshift(function(item) {
								return item.type.indexOf(arrType[0]) !== -1;
							});
							//on nomme la fonction, pour les checkboxes on utilise input.id
							Object.defineProperty(conditions[0], 'name', {value: input.id, writable: false});	
						}
									
					} else {	
						
						//on ajoute le nouveau critère
						if ((input.checked && input.name==="niveau")){

							//on supprime les doublons, nécessaire pour les boutons radio
							delDoublon(conditions, input.name);
					
							conditions.unshift(function(item) {
								return item.niveau === arrNiveau[0]; 
							});
							
							//on nomme la fonction, pour les boutons radio on utilise input.name
							Object.defineProperty(conditions[0], 'name', {value: input.name, writable: false});	

						}
						if ((input.checked && input.name==="types")){
							
							//on récupere la dernière valeur ajoutée
							let i = arrType.length - 1;
							valeurFiltre = arrType[i];
							
							conditions.unshift(function(item) {
								return item.type.indexOf(valeurFiltre) !== -1;
							});
							
							//on nomme la fonction, pour les checkboxes on utilise input.id
							Object.defineProperty(conditions[0], 'name', {value: input.id, writable: false});

						}		
					}
				

					//on applique tous les filtres stockés dans conditions
					 filteredTest = self.refTests.filter(function(d) {
						return conditions.every(function(c) {
							return c(d);
						});
					});		

					//on met à jour la page				
					app.FetchAll(filteredTest);
						
			 } else {
				//aucun critère de sélectionné, on réinitialise la page
				app.FetchAll(refTests);
			 }

			});

      }

    };

}
		
// Affichage de tous les tests
app.FetchAll(refTests);
// Filtrage
app.FilterByType();
});
</script>

<span data-menuitem="incontournables"></span>

Ce socle de critères destiné aux sites et applications web Orange permet d’éviter les principales erreurs d’accessibilité. Il s’agit d’un sous-ensemble des exigences d’accessibilité.   
La mise en œuvre de ce socle ne permet pas d’obtenir à coup sûr un site accessible, mais pose les fondations qui permettent de s’engager dans une démarche de mise en accessibilité progressive.

Le respect de la charte Orange appelée la Brand (<span lang="en">Design for digital platforms Guideline</span>), disponible sur [le site de la marque Orange](http://design.orange.com/) est un prérequis à l’utilisation de ce socle.
Certains points déjà présents dans la charte Orange (utilisation des couleurs, alignement du texte…) n’ont pas été repris dans cette liste de critères.

Deux versions sont disponibles&nbsp;
- **La version concepteurs** n’aborde pas le code, elle s’adresse aux concepteurs de produits, designers, responsables de projet, etc.
- **La version développeurs** aborde le code et s’adresse aux développeurs, aux responsables techniques, aux équipes de validation, qualification, etc.

<ul class="nav nav-tabs" role="tablist">
<li class="nav-item">
<a class="nav-link active" id="incontournables-concepteurs-tab" data-toggle="tab" href="#incontournables-concepteurs" role="tab" aria-controls="incontournables-concepteurs" aria-selected="true">Concepteurs</a>
</li>
<li class="nav-item">
<a class="nav-link" id="incontournables-developpeurs-tab" data-toggle="tab" href="#incontournables-developpeurs" role="tab" aria-controls="incontournables-developpeurs" aria-selected="false">Développeurs</a>
</li>
<li class="nav-item">
<a class="nav-link" id="incontournables-testeurs-tab" data-toggle="tab" href="#incontournables-testeurs" role="tab" aria-controls="incontournables-testeurs" aria-selected="false">Testeurs</a>
</li>
</ul><div class="tab-content"><div class="tab-pane show active" id="incontournables-concepteurs" role="tabpanel" aria-labelledby="incontournables-concepteurs-tab">

## Contenu textuel

S'assurer que les contenus textuels soient structurés avec la sémantique appropriée

- [Donner un titre aux pages](inc-con-titre-pages.html)
- [Donner des titres aux rubriques](inc-con-titre-rubriques.html)

## Contenu non-textuel

S'assurer, qu'une alternative aux contenus non-textuels soit proposée à l'utilisateur

- [Définir des équivalents textuels](inc-con-equivalent-textuel.html)
- [Rendre accessible les pistes audio ou vidéo](inc-con-audio-video.html)
- [Éviter les captcha](inc-con-captcha.html)

## Couleurs et contrastes

S'assurer que les couleurs utilisés ne posent pas de problème à l'utilisateur

- [Assurer un contraste suffisant entre texte et fond](inc-con-contrastes.html)
- [Ne pas utiliser la couleur ou l’information sensorielle comme seule source d’information](inc-con-information-sensorielle.html)

## Navigation générale

S'assurer que l'utilisateur navigue facilement dans une page et plus globalement dans un site

- [Libellé des liens et des boutons](inc-con-libelles.html)
- [Éviter les boites de dialogues et l’ouverture de nouvelles fenêtres](inc-con-nouvelles-fenetres.html)
- [Fournir des liens d’évitement](inc-con-liens-evitement.html)
- [Permettre le contrôle des animations](inc-con-controle-animations.html)
- [Situer explicitement la page dans le site et fournir plusieurs moyens d'y accéder](inc-con-acces-multiples.html)

## Navigation clavier

S'assurer que l'utilisateur puisse naviguer uniquement à l'aide du clavier

- [Permettre la navigation au clavier](inc-con-navigation-clavier.html)
- [Assurer la visibilité du focus](inc-con-visibilite-focus.html)

## Mise en page

S'assurer que la mise en page soit adaptée à l'utilisateur.

- [Agrandissement de texte et adaptation à la taille d'affichage](inc-con-adaptatif.html)
- [Permettre d'aérer le texte](inc-con-aerer-texte.html)
- [Identifier et conserver la cohérence des regroupements et des différentes régions de la page](inc-con-coherence-navigation.html)
- [Définir des zones sensibles de taille suffisante](inc-con-zones-sensibles.html)

## Formulaires

S'assurer que l'utilisateur puisse efficacement compléter les formulaires

- [Rendre utilisables les formulaires](inc-con-formulaires.html)

## Tactile et interactions

S'assurer que l'utilisateur garde le contrôle sur les interactions, en particulier tactiles

- [Proposer une alternative aux gestuelles complexes](inc-con-alternative-gestures.html)
- [Donner accès au contenu quelle que soit l'orientation de l'écran](inc-con-orientation-ecran.html)

</div>
<div class="tab-pane" id="incontournables-developpeurs" role="tabpanel" aria-labelledby="incontournables-developpeurs-tab">
<h2 id="dev-contenu-textuel">Contenu textuel</h2>

S'assurer que les contenus textuels soient structurés avec la sémantique appropriée
<ul>
    <li>[Donner un titre aux pages](inc-dev-titre-pages.html)</li>
    <li>[Donner des titres aux rubriques](inc-dev-titre-rubriques.html)</li>
    <li>[Respecter la sémantique HTML](inc-dev-semantique-html.html)</li>
    <li>[Indiquer la langue principale et les changements de langue](inc-dev-changement-langue.html)</li>
    <li>[Structurer les tableaux de données](inc-dev-tableaux.html)</li>
</ul>

<h2 id="dev-contenu-non-textuel">Contenu non-textuel</h2>

S'assurer, qu'une alternative aux contenus non-textuels soit proposée à l'utilisateur
<ul>
    <li>[Fournir un équivalent textuel pour les images et les cadres](inc-dev-equivalent-textuel.html)</li>
    <li>[Rendre accessible les pistes audio ou vidéo](inc-dev-audio-video.html)</li>
    <li>[Éviter les captcha](inc-dev-crit-captcha.html)</li>
</ul>

<h2 id="dev-couleurs-et-contrastes">Couleurs et contrastes</h2>

S'assurer que les couleurs utilisés ne posent pas de problème à l'utilisateur
<ul>
    <li>[Assurer un contraste suffisant entre texte et fond](inc-dev-contrastes.html)</li>
    <li>[Ne pas utiliser la couleur ou l’information sensorielle comme seule source d’information](inc-dev-information-sensorielle.html)</li>
</ul>

<h2 id="dev-navigation-generale">Navigation générale</h2>

S'assurer que l'utilisateur navigue facilement dans une page et plus globalement dans un site
<ul>
    <li>[Rendre les intitulés des liens et des boutons compréhensibles hors contexte](inc-dev-intitules-hors-contexte.html)</li>
    <li>[Prévenir l’utilisateur de l’ouverture d’une nouvelle fenêtre](inc-dev-nouvelle-fenetre.html)</li>
    <li>[Fournir des liens d’évitement](inc-dev-liens-evitement.html)</li>
    <li>[S’assurer que l’utilisateur garde le contrôle lors des interactions](inc-dev-controle-interactions.html)</li>
    <li>[Fournir des accès multiples et une localisation](inc-dev-acces-multiples.html)</li>
    <li>[Permettre de connaître le résultat d'une interaction utilisateur à l'aide de messages contextuels](inc-dev-message-contextuel.html)</li>
    <li>[Permettre le contrôle des animations](inc-dev-controle-animations.html)</li>
</ul>

<h2 id="dev-navigation-clavier">Navigation clavier</h2>

S'assurer que l'utilisateur puisse naviguer uniquement à l'aide du clavier
<ul>
    <li>[Permettre d’utiliser les principales fonctionnalités de l’application au clavier](inc-dev-utilisation-clavier.html)</li>
    <li>[Rendre le parcours du focus séquentiel et logique sans piège clavier](inc-dev-parcours-focus.html)</li>
    <li>[Rendre visible le focus en toute circonstance](inc-dev-visibilite-focus.html)</li>
</ul>

<h2 id="dev-mise-en-page">Mise en page</h2>

S'assurer que la mise en page soit adaptée à l'utilisateur.
<ul>
    <li>[Utiliser des tailles relatives et faire du web adaptatif](inc-dev-adaptatif.html)</li>
    <li>[Permettre d'aérer le texte](inc-dev-aerer-texte.html)</li>
    <li>[Identifier et conserver la cohérence des regroupements et des différentes régions de la page](inc-dev-coherence-navigation.html)</li>
    <li>[Définir des zones sensibles de taille suffisante](inc-dev-taille-zones.html)</li>
</ul>

<h2 id="dev-formulaires">Formulaires</h2>

S'assurer que l'utilisateur puisse efficacement compléter les formulaires
<ul>
    <li>[Associer une étiquette pertinente à chaque champ de formulaire](inc-dev-etiquette-formulaires.html)</li>
    <li>[Détecter, identifier les erreurs et suggérer des corrections](inc-dev-identifier-erreurs.html)</li>
</ul>

<h2 id="dev-tactile-et-interactions">Tactile et interactions</h2>

S'assurer que l'utilisateur garde le contrôle sur les interactions, en particulier tactiles
<ul>
    <li>[Autoriser l'utilisation du zoom](inc-dev-autoriser-zoom.html)</li>
    <li>[Permettre d'annuler le déclenchement des interactions gestuelles](inc-dev-annuler-gestuelle.html)</li>
    <li>[Proposer une alternative aux gestuelles complexes](inc-dev-alternative-gestures.html)</li>
    <li>[Donner accès au contenu quelle que soit l'orientation de l'écran](inc-dev-orientation-ecran.html)</li>
</ul>

<h2 id="dev-aides-techniques">Aides techniques</h2>

Permettre à l’utilisateur de lecteur d’écran d’accéder aux principales fonctionnalités de l’application, mais aussi s’assurer pour tous les utilisateurs de l’utilisabilité de l’application
<ul>
    <li>[S’assurer que les principales fonctionnalités sont utilisables avec les lecteurs d’écran](inc-dev-lecteur-ecran.html)</li>
</ul>

</div>
<div class="tab-pane show active" id="incontournables-testeurs" role="tabpanel" aria-labelledby="incontournables-testeurs-tab">
<div class="row">
<section id="refTests" class="col-md-8 panel-group accordion" id="accordion" role="tablist" aria-multiselectable="true">
<h2 id="test-contenu-textuel">Contenu textuel</h2>
<article class="">
<div class="card-header" role="tab" id="headingOne">
	<h3 id="donner-un-titre-aux-pages"><a class="" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Donner un titre aux pages</a></h3>
</div>
	<div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
	<div class="card-block">
				<div class="row">
						<div class="col-lg-6">
							<h4>Procédures</h4>
							<ol>
								<li>Lancer l'inspecteur de code du navigateur</li>
								<li>Examiner le titre de page <code>&lt;title&gt;[title]&lt;/title&gt;</code></li>
							</ol>
						</div>
						<div class="col-lg-6">
							<h4>A vérifier</h4>
							<ol>
								<li>Vérifier que le titre de page est renseigné</li>
								<li>Vérifier que le titre de page est unique, celui-ci doit permettre à l'utilisateur de comprendre le contexte de la page</li>
							</ol>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-12">
							<h4>Résultats</h4>
							<ol>
								<li>Chaque page possède un titre unique et descriptif</li>
							</ol>
						</div>
					</div>
					<div class="card-footer text-muted"> AA <i class="fa fa-tag" aria-hidden="true"></i>Test manuel - inspecteur de code</div> 
				</div>
	</div>
</article>
<article class="">
<div class="card-header" role="tab" id="headingOne">
	<h3 id="donner-un-titre-aux-rubriques"><a class="" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Donner des titres aux rubriques</a></h3>
</div>
	<div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
	<div class="card-block">
				<div class="row">
						<div class="col-lg-6">
							<h4>Procédures</h4>
							<ol>
								<li>Lancer l'inspecteur de code du navigateur</li>
								<li>Examiner le titre de page <code>&lt;title&gt;[title]&lt;/title&gt;</code></li>
							</ol>
						</div>
						<div class="col-lg-6">
							<h4>A vérifier</h4>
							<ol>
								<li>Vérifier que le titre de page est renseigné</li>
								<li>Vérifier que le titre de page est unique, celui-ci doit permettre à l'utilisateur de comprendre le contexte de la page</li>
							</ol>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-12">
							<h4>Résultats</h4>
							<ol>
								<li>Chaque page possède un titre unique et descriptif</li>
							</ol>
						</div>
					</div>
					<div class="card-footer text-muted"> AA <i class="fa fa-tag" aria-hidden="true"></i>Test manuel - inspecteur de code</div> 
				</div>
	</div>
</article>
</section>
<aside class="col-md-4">
<h2>Filtres</h2>
<ul id="types" class="list-unstyled"></ul>
<ul id="niveaux" class="list-unstyled"></ul>
</aside>
</div>
</div>
</div>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->