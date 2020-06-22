$('#docs-navbar').navbar({sticky: true, hideSupra: true});
$('.o-nav-local').prioritynav('Autres pages');


/**
 * Global vars
 */
var dataVallydette;
var dataWCAG;
var	currentPage = 0;
var statutClass = "badge-light";
var arrayFilterNameAndValue = [];	
var arrayFilterActivated = [];
var currentCriteriaListName;

var htmlContextualMenuContent = document.getElementById('contextualMenu');
var htmlFilterContent = document.getElementById('filter');


	
/**
 * Vallydette object
 */
function initVallydetteApp (criteriaListName) {
	currentCriteriaListName = criteriaListName;
	createObjectAndRunVallydette();
}
function createObjectAndRunVallydette() {

	dataVallydette = {
	"checklist": {
		"name": "Audit WCAG 2.1",
		"page": [{
				"IDPage": "pageID-0",
				"name": "Nom de la page",
				"items": []
			}
		]

	}
}

	var jsonCriteria;
	
	switch(currentCriteriaListName) {
	  case 'RGAA':
		jsonCriteria = 'json/criteres-rgaa4.json';
		break;
	  case 'expert':
		jsonCriteria = 'json/criteres-checklist-expert.json';
		break;
	  case 'incontournables':
		jsonCriteria = 'json/criteres-incontournables.json';
		break;
	  case 'concepteur':
		jsonCriteria = 'json/criteres-checklist-concepteur.json';
		break;
	  case 'wcagEase':
		jsonCriteria = 'json/criteres-wcag-ease.json';
		break;
	} 

	var criteriaRequest = new XMLHttpRequest();
	
	criteriaRequest.open("GET", jsonCriteria, true);
	criteriaRequest.onreadystatechange = function () {
	  if(criteriaRequest.readyState === 4 && criteriaRequest.status === 200) {
		criteriaVallydette = JSON.parse(criteriaRequest.responseText);
	  
		if (currentCriteriaListName==="RGAA") {
			//return reqListener(responseFirst, responseSecond, referentiel);
		} else {
			return importCriteriaToVallydetteObj(criteriaVallydette);
		}
	  } 
	};
	criteriaRequest.send();
}

function importCriteriaToVallydetteObj (criteriaVallydette) {
    dataVallydette.checklist.name = "Grille Audit WCAG 2.1 d’Orange";
    dataVallydette.checklist.referentiel = currentCriteriaListName;
    dataVallydette.checklist.page[0].items = dataVallydette.checklist.page[0].items.concat(criteriaVallydette.items);
	
	runVallydetteApp();
}

function importRGAA(dataVallydette, dataRGAA) {
    dataVallydette.checklist.name = "Audit RGAA 4";
    dataVallydette.checklist.referentiel = "RGAA";

    dataRGAA.topics.forEach(function (topics) {
        topics.criteria.forEach(function (criteria) {
            for (let test of Object.keys(criteria.criterium.tests)) {
                var testContent = criteria.criterium.tests[test];

                let vallydetteTest = {};

                //propriétés obligatoires
                vallydetteTest.ID = "testID-" + topics.number + "-" + criteria.criterium.number + "-" + test;
                vallydetteTest.commentaire = "";
                vallydetteTest.resultatTest = "";


                vallydetteTest.themes = topics.topic;
                vallydetteTest.criterium = criteria.criterium.title;

                if (Array.isArray(criteria.criterium.tests[test])) {
                    vallydetteTest.title = criteria.criterium.tests[test][0];
                    vallydetteTest.verifier = [];

                    for (let verify in criteria.criterium.tests[test]) {

                        if (verify != 0) {
                            vallydetteTest.verifier.push(criteria.criterium.tests[test][verify]);
                        }
                    }
                } else {
                    vallydetteTest.title = criteria.criterium.tests[test];
                }

                vallydetteTest.technicalNote = [];
                for (let note in criteria.criterium.technicalNote) {
                    vallydetteTest.technicalNote.push(criteria.criterium.technicalNote[note]);
                }

                vallydetteTest.wcag = [];
                for (let rules in criteria.criterium.references[0].wcag) {
                    vallydetteTest.wcag.push(criteria.criterium.references[0].wcag[rules]);
                }

                dataVallydette.checklist.page[0].items.push(vallydetteTest);
            }
        });
    });

    runVallydetteApp();
}

function runVallydetteApp() {
   	
	currentPage = 0;
	
	textContent = {
        title1: "Procédures",
		title2: "À vérifier",
		title3: "Résultats",
		title4: "Justification",
		statut1: "conforme",
		statut2: "non-conforme",
		statut3: "non-applicable",
		statut4: "non-testé"
     };

	arrayFilterNameAndValue = [["conforme", "ok"], ["non-conforme", "ko"], ["non-applicable", "na"], ["non-testé", "nt"]];
	
	var HeadingChecklistName = document.getElementById("checklistName");
	HeadingChecklistName.innerText = dataVallydette.checklist.name;
	
	initComputation();
    initPagination(dataVallydette.checklist);
	initFilters();
    runTestListMarkup(dataVallydette.checklist.page[currentPage].items);
	eventHandler();
    updateCounter(false, dataVallydette.checklist.page[currentPage].items.length);
	utils.setPageTitle ( dataVallydette.checklist.page[currentPage].name);
}

function eventHandler() {

	var btnImport = document.getElementById('import');
	btnImport.onclick = function () {
		var files = document.getElementById('selectFiles').files;
		var fr = new FileReader();

		fr.onload = function (e) {
			dataVallydette = JSON.parse(e.target.result);
			runVallydetteApp();
		}

		fr.readAsText(files.item(0));
	};
	
	var btnChecklist = document.getElementById("btnChecklistName");
	btnChecklist.addEventListener('click', function () {
		setValue(btnChecklist.dataset.element, btnChecklist.dataset.property)
	}, false);

	btnActionPageEventHandler ();
	
}

function btnActionPageEventHandler () {
	
	var currentBtnPageName = document.getElementById('btnPageName');
	var currentBtnDelPage = document.getElementById('btnDelPage');
	
	currentBtnPageName.addEventListener('click', function () {
		setValue(currentBtnPageName.dataset.element, currentBtnPageName.dataset.property, currentBtnPageName.dataset.secondaryElement)
	}, false);

	
	currentBtnDelPage.addEventListener('click', function () {
		setDeletePage(currentBtnPageName.dataset.element)
	}, false);
	
}

runTestListMarkup = function (currentRefTests) {

	let elrefTests = document.getElementById('mainContent');
	let htmlrefTests = '';
	let headingTheme = '';
	let headingCriterium = '';
	let nextIndex = 1;

	if (currentCriteriaListName === 'wcagEase') {
		setPageName(dataVallydette.checklist.page[currentPage].name);
		
		for (let i in currentRefTests) {
			var currentTest = currentRefTests[i].ID;
			if (headingTheme != currentRefTests[i].themes) {
				if (headingTheme !== '') {
					htmlrefTests += '</div>';
				}

				headingTheme = currentRefTests[i].themes;
				let formattedHeadingTheme = utils.formatHeading(headingTheme);
				htmlrefTests += '<h2 class="sticky-top d-flex bg-white pt-4 pb-3 border-bottom" id="test-' + formattedHeadingTheme + '">' + currentRefTests[i].themes + '<button class="btn btn-secondary btn-icon ml-auto" type="button" data-toggle="collapse" data-target="#collapse-' + formattedHeadingTheme + '" aria-expanded="true" aria-controls="collapse-' + formattedHeadingTheme + '" aria-label="Plier la thématique"><span class="icon-arrow-down"></span></button></h2>';
				htmlrefTests += '<div class="collapse show px-2" id="collapse-' + formattedHeadingTheme + '">';
			}

			htmlrefTests += '<article class="card mb-3" id="' + currentTest + '"><div class="card-header border-light"><h3 class="card-title h5 d-flex align-items-center mb-0" id="heading' + i + '"><span class="w-75">' + currentRefTests[i].title + '</span><span id="resultID-' + currentTest + '" class="ml-auto badge ' + getStatutClass(currentRefTests[i].resultatTest) + '">' + setStatutClass(currentRefTests[i].resultatTest) + '</span></h3></div>';
			// @todo à remplacer par un for sur arrayFilterNameAndValue

			htmlrefTests += '<div class="card-body py-2 d-flex align-items-center justify-content-between"><ul class="list-inline m-0">';
			htmlrefTests += '<li class="custom-control custom-radio custom-control-inline mb-0"><input class="custom-control-input" type="radio" id="conforme' + i + '" name="test' + i + '" value="ok" ' + ((currentRefTests[i].resultatTest === arrayFilterNameAndValue[0][1]) ? "checked" : "") + '/><label for="conforme' + i + '" class="custom-control-label">Conforme</label></li>';
			htmlrefTests += '<li class="custom-control custom-radio custom-control-inline mb-0"><input class="custom-control-input" type="radio" id="non-conforme' + i + '" name="test' + i + '" id="radio' + i + '" value="ko" ' + ((currentRefTests[i].resultatTest === arrayFilterNameAndValue[1][1]) ? "checked" : "") + '/><label for="non-conforme' + i + '" class="custom-control-label">Non conforme</label></li>';
			htmlrefTests += '<li class="custom-control custom-radio custom-control-inline mb-0"><input class="custom-control-input" type="radio" id="na' + i + '" name="test' + i + '" value="na" ' + ((currentRefTests[i].resultatTest === arrayFilterNameAndValue[2][1]) ? "checked" : "") + '/><label for="na' + i + '" class="custom-control-label">N/A</label></li>';
			htmlrefTests += '<li class="custom-control custom-radio custom-control-inline mb-0"><input class="custom-control-input" type="radio" id="nt' + i + '" name="test' + i + '" value="nt" ' + (((currentRefTests[i].resultatTest === arrayFilterNameAndValue[3][1]) || (currentRefTests[i].resultatTest === '')) ? "checked" : "") + '/><label for="nt' + i + '" class="custom-control-label">Non testé</label></li>';
			htmlrefTests += '</ul>';

			htmlrefTests += '<button type="button" id="commentBtn' + currentTest + '" class="btn btn-link" aria-labelledby="commentBtn' + currentTest + ' title-' + currentTest + '" data-toggle="modal" data-target="#modal' + currentTest + '">' + getCommentState(currentTest) + '</button>';

			
			htmlrefTests += '<button class="btn btn-secondary btn-icon" type="button" data-toggle="collapse" data-target="#collapse-' + currentTest + '" aria-expanded="false" aria-controls="collapse-' + currentTest + '"><span class="icon-arrow-down" aria-hidden="true"></span><span class="sr-only">Informations supplémentaires</span></button></div>';
			htmlrefTests += '<div class="collapse ' + ((currentRefTests[i].verifier || currentRefTests[i].exception) ? 'border-top' : '' ) + ' border-light pt-3 mx-3" id="collapse-' + currentTest + '">';

			if (currentRefTests[i].verifier) {
				htmlrefTests += '<h4 class="h5">' + textContent.title2 + '</h4>';
				htmlrefTests += currentRefTests[i].verifier;
				htmlrefTests += currentRefTests[i].complement;
			}

			if (currentRefTests[i].exception) {
				htmlrefTests += '<h4 class="h5">Exceptions</h4>';
				htmlrefTests += '<p>' + currentRefTests[i].exception + '</p>';
			}
			

			htmlrefTests += '<div class="py-2 ' + ((currentRefTests[i].verifier || currentRefTests[i].exception) ? 'border-top' : '' ) + 'border-light"><p class="text-muted mb-0"><abbr title="Web Content Accessibility Guidelines" aria-label="Web Content Accessibility Guidelines" lang="en">WCAG</abbr>&nbsp;:';
			for (let j in currentRefTests[i].wcag) {
				htmlrefTests += currentRefTests[i].wcag[j];
				j != ((currentRefTests[i].wcag).length - 1) ? htmlrefTests += ',  ' : '';
			}
			htmlrefTests += '</p></div></div>';

			htmlrefTests += '</article>';
		}
	} else if (currentCriteriaListName === 'RGAA') {
		//test configuration rendu MARKED
		// Get reference
		const renderer = new marked.Renderer();
		marked.setOptions({
			renderer: renderer
		});

		// Override function link(string href, string title, string text)
		renderer.link = function (href, title, text) {
			return text;
		};
		renderer.paragraph = function (text) {
			return text;
		};
		// fin test marked

		for (let i in currentRefTests) {
			if (headingTheme != currentRefTests[i].themes) {
				headingTheme = currentRefTests[i].themes;
				htmlrefTests += '<h2 id="test-' + utils.formatHeading(currentRefTests[i].themes) + '">' + currentRefTests[i].themes + '</h2>';
			}

			if (headingCriterium != currentRefTests[i].criterium) {
				headingCriterium = currentRefTests[i].criterium;

				htmlrefTests += '<article class="" id="' + currentRefTests[i].ID + '"><div class="card-header" id="heading' + i + '"><h3 class="card-title"><a class="" role="button" data-toggle="collapse" href="#collapse' + i + '" aria-expanded="false" aria-controls="collapse' + i + '"><span class="accordion-title">' + currentRefTests[i].title + '</span><span id="resultID-' + currentRefTests[i].ID + '" class="badge badge-pill ' + getStatutClass(currentRefTests[i].resultatTest) + ' float-lg-right">' + setStatutClass(currentRefTests[i].resultatTest) + '</span></a></h3>';
				// @todo à remplacer par un for sur arrayFilterNameAndValue
				//initialisation si aucun tests n'est checké
				if (currentRefTests[i].resultatTest === "") {
					currentRefTests[i].resultatTest = "nt";
					dataVallydette.checklist.items[i].resultatTest = "nt";
				}

				htmlrefTests += '<div class="testForm"><label for="conforme' + i + '">Conforme</label><input type="radio" id="conforme' + i + '" name="test' + i + '" value="ok" ' + ((currentRefTests[i].resultatTest === arrayFilterNameAndValue[0][1]) ? "checked" : "") + '/> <label for="non-conforme' + i + '">Non conforme</label><input type="radio" id="non-conforme' + i + '" name="test' + i + '" id="radio' + i + '" value="ko" ' + ((currentRefTests[i].resultatTest === arrayFilterNameAndValue[1][1]) ? "checked" : "") + '/>  <label for="na' + i + '">N/A</label><input type="radio" id="na' + i + '" name="test' + i + '" value="na" ' + ((currentRefTests[i].resultatTest === arrayFilterNameAndValue[2][1]) ? "checked" : "") + '/>  <label for="nt' + i + '">Non testé</label><input type="radio" id="nt' + i + '" name="test' + i + '" value="nt" ' + ((currentRefTests[i].resultatTest === arrayFilterNameAndValue[3][1]) ? "checked" : "") + '/>';
				htmlrefTests += '<button type="button" id="commentBtn' + i + '" class="btn btn-secondary float-lg-right" data-toggle="modal" data-target="#modal' + i + '">' + getCommentState(i) + '</button></div></div>';
				htmlrefTests += '<div id="collapse' + i + '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading' + i + '">';
				htmlrefTests += '<div class="card-block"><div class="row">';
				htmlrefTests += '<div class="col-lg-6"><h4>' + textContent.title1 + '</h4><ol>';
				for (let j in currentRefTests[i].tests) {
					htmlrefTests += '<li>' + currentRefTests[i].tests[j] + '</li> ';
				}
				htmlrefTests += '</ol></div>';
				htmlrefTests += '<div class="col-lg-6"><h4>' + textContent.title2 + '</h4><ol>';
				for (let j in currentRefTests[i].verifier) {
					htmlrefTests += '<li>' + currentRefTests[i].verifier[j] + '</li> ';
				}
				htmlrefTests += '</ol></div>';
				htmlrefTests += '</div>';
				htmlrefTests += '<div class="row">';
				htmlrefTests += '<div class="col-lg-12"><h4>' + ((currentRefTests[i].profils[0] === 'Concepteur') ? textContent.title4 : textContent.title3) + '</h4><ol>';
				for (let j in currentRefTests[i].resultat) {
					htmlrefTests += '<li>' + currentRefTests[i].resultat[j] + '</li> ';
				}
				htmlrefTests += '</ol></div>';
				htmlrefTests += '</div>';
				if (currentRefTests[i].exception) {
					htmlrefTests += '<div class="row"><div class="col-lg-12" ><h4>Exceptions</h4>';
					htmlrefTests += '<p>' + currentRefTests[i].exception + '</p> ';

					htmlrefTests += '<div class="card-header"><h3><a class="collapsed" role="button" data-toggle="collapse" href="#collapse' + i + '" aria-expanded="false" aria-controls="collapse' + i + '">' + marked(currentRefTests[i].criterium) + '</a></h3></div>';
					htmlrefTests += '<div id="collapse' + i + '" class="collapse">';
				}

				htmlrefTests += '<article class="mb-1" id="' + currentRefTests[i].ID + '"><div class="card-header" id="heading' + i + '"><span class="accordion-title">' + marked(currentRefTests[i].title) + '</span><span id="resultID-' + currentRefTests[i].ID + '" class="badge badge-pill ' + getStatutClass(currentRefTests[i].resultatTest) + ' float-lg-right">' + setStatutClass(currentRefTests[i].resultatTest) + '</span>';
				//à remplacer par un for sur arrayFilterNameAndValue

				htmlrefTests += '<div class="testForm"><label for="conforme' + i + '">Conforme</label><input type="radio" id="conforme' + i + '" name="test' + i + '" value="ok" ' + ((currentRefTests[i].resultatTest === arrayFilterNameAndValue[0][1]) ? "checked" : "") + '/> <label for="non-conforme' + i + '">Non conforme</label><input type="radio" id="non-conforme' + i + '" name="test' + i + '" id="radio' + i + '" value="ko" ' + ((currentRefTests[i].resultatTest === arrayFilterNameAndValue[1][1]) ? "checked" : "") + '/>  <label for="na' + i + '">N/A</label><input type="radio" id="na' + i + '" name="test' + i + '" value="na" ' + ((currentRefTests[i].resultatTest === arrayFilterNameAndValue[2][1]) ? "checked" : "") + '/>  <label for="nt' + i + '">Non testé</label><input type="radio" id="nt' + i + '" name="test' + i + '" value="nt" ' + (((currentRefTests[i].resultatTest === arrayFilterNameAndValue[3][1]) || (currentRefTests[i].resultatTest === '')) ? "checked" : "") + '/>';

				htmlrefTests += '<button type="button" id="commentBtn' + i + '" class="btn btn-secondary float-lg-right" data-toggle="modal" data-target="#modal' + i + '">' + getCommentState(i) + '</button></div>';
				htmlrefTests += '</div></article>';

				if ((currentRefTests[nextIndex] != undefined) && (headingCriterium != currentRefTests[nextIndex].criterium)) {
					htmlrefTests += '</div>';
				}

				nextIndex = nextIndex + 1;
			}
		}
	} else {
		//on boucle dans le tableau passé en paramètre de la fonction
		for (let i in currentRefTests) {
			if (headingTheme != currentRefTests[i].themes) {
				headingTheme = currentRefTests[i].themes;
				htmlrefTests += '<h2 id="test-' + utils.formatHeading(currentRefTests[i].themes) + '">' + currentRefTests[i].themes + '</h2>';
			}
			htmlrefTests += '<article class="" id="' + currentRefTests[i].ID + '"><div class="card-header" id="heading' + i + '"><h3 class="card-title"><a class="" role="button" data-toggle="collapse" href="#collapse' + i + '" aria-expanded="false" aria-controls="collapse' + i + '"><span class="accordion-title">' + currentRefTests[i].title + '</span><span id="resultID-' + currentRefTests[i].ID + '" class="badge badge-pill ' + getStatutClass(currentRefTests[i].resultatTest) + ' float-lg-right">' + setStatutClass(currentRefTests[i].resultatTest) + '</span></a></h3>';
			// @todo à remplacer par un for sur arrayFilterNameAndValue

			htmlrefTests += '<div class="testForm"><label for="conforme' + i + '">Conforme</label><input type="radio" id="conforme' + i + '" name="test' + i + '" value="ok" ' + ((currentRefTests[i].resultatTest === arrayFilterNameAndValue[0][1]) ? "checked" : "") + '/> <label for="non-conforme' + i + '">Non conforme</label><input type="radio" id="non-conforme' + i + '" name="test' + i + '" id="radio' + i + '" value="ko" ' + ((currentRefTests[i].resultatTest === arrayFilterNameAndValue[1][1]) ? "checked" : "") + '/>  <label for="na' + i + '">N/A</label><input type="radio" id="na' + i + '" name="test' + i + '" value="na" ' + ((currentRefTests[i].resultatTest === arrayFilterNameAndValue[2][1]) ? "checked" : "") + '/>  <label for="nt' + i + '">Non testé</label><input type="radio" id="nt' + i + '" name="test' + i + '" value="nt" ' + (((currentRefTests[i].resultatTest === arrayFilterNameAndValue[3][1]) || (currentRefTests[i].resultatTest === '')) ? "checked" : "") + '/>';
			htmlrefTests += '<button type="button" id="commentBtn' + i + '" class="btn btn-secondary float-lg-right" data-toggle="modal" data-target="#modal' + i + '">' + getCommentState(i) + '</button></div></div>';
			htmlrefTests += '<div id="collapse' + i + '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading' + i + '">';
			htmlrefTests += '<div class="card-block"><div class="row">';
			htmlrefTests += '<div class="col-lg-6"><h4>' + textContent.title1 + '</h4><ol>';
			for (let j in currentRefTests[i].tests) {
				htmlrefTests += '<li>' + currentRefTests[i].tests[j] + '</li> ';
			}
			htmlrefTests += '</ol></div>';
			htmlrefTests += '<div class="col-lg-6"><h4>' + textContent.title2 + '</h4><ol>';
			for (let j in currentRefTests[i].verifier) {
				htmlrefTests += '<li>' + currentRefTests[i].verifier[j] + '</li> ';
			}
			htmlrefTests += '</ol></div>';
			htmlrefTests += '</div>';
			htmlrefTests += '<div class="row">';
			htmlrefTests += '<div class="col-lg-12"><h4>' + ((currentRefTests[i].profils[0] === 'Concepteur') ? textContent.title4 : textContent.title3) + '</h4><ol>';
			for (let j in currentRefTests[i].resultat) {
				htmlrefTests += '<li>' + currentRefTests[i].resultat[j] + '</li> ';
			}
			htmlrefTests += '</ol></div>';
			htmlrefTests += '</div>';
			if (currentRefTests[i].exception) {
				htmlrefTests += '<div class="row"><div class="col-lg-12" ><h4>Exceptions</h4>';
				htmlrefTests += '<p>' + currentRefTests[i].exception + '</p> ';
				htmlrefTests += '</div>';
				htmlrefTests += '</div>';
			}
			htmlrefTests += '</div><div class="card-footer text-muted"><b>Profils : </b>';
			for (let j in currentRefTests[i].profils) {
				htmlrefTests += currentRefTests[i].profils[j];
				j != ((currentRefTests[i].profils).length - 1) ? htmlrefTests += ',  ' : '';
			}
			htmlrefTests += '<br />' + ((currentRefTests[i].type).length > 0 ? '<b>Outils : </b>' : '');
			for (let j in currentRefTests[i].type) {
				htmlrefTests += '<i class="fa fa-tag" aria-hidden="true"></i> ' + currentRefTests[i].type[j] + ' ';
			}
			htmlrefTests += '</div>';
			htmlrefTests += '</div></article>';
		}
	}

	// Affichage de l'ensemble des lignes en HTML
	currentRefTests.length === 0 ? elrefTests.innerHTML = '<div class="alert alert-warning">Aucun résultat ne correspond à votre sélection</div>' : elrefTests.innerHTML = htmlrefTests;

	// Event Handler
	for (let i in currentRefTests) {
		//radio
		var radios = document.getElementsByName("test" + i);
		var nodeArray = [];
		for (var j = 0; j < radios.length; ++j) {
			radios[j].addEventListener('click', function () {
				setStates(this, currentRefTests[i].ID)
			}, false);
		}


		var comment = document.getElementById("commentBtn" + currentRefTests[i].ID);
		comment.addEventListener('click', function () {
			setComment(currentRefTests[i].ID, currentRefTests[i].title)
		}, false);
	}
	

}



/**
 * Computation
 */
 
 
function initComputation() {

	var matriceRequest = new XMLHttpRequest();
	var matriceWcag;
    method = "GET",
	matriceVallydette = 'json/matrice-wcag-ease.json';

	matriceRequest.open(method, matriceVallydette, true);
	matriceRequest.onreadystatechange = function () {
	  if(matriceRequest.readyState === 4 && matriceRequest.status === 200) {
			dataWCAG = JSON.parse(matriceRequest.responseText);

            var btnShowResult = document.getElementById("btnShowResult");
            btnShowResult.addEventListener('click', function () {
                runComputation();
				utils.setPageTitle("Résultat d'audit");
				utils.resetActive(document.getElementById("pageManager"));
				utils.putTheFocus(document.getElementById("pageName"));
            }, false);
	  }
	};
	matriceRequest.send();
	
}

function runComputation(referentielWCAG) {

    pagesResults = [];
	dataWCAG.items.forEach(initProperties);
	
    for (let i in dataVallydette.checklist.page) {
        pagesResults[i] = [];
        pagesResults[i].items = [];
        pagesResults[i].name = dataVallydette.checklist.page[i].name;
		pagesResults[i].url = dataVallydette.checklist.page[i].url;
		

        for (let k in dataWCAG.items) {
            pagesResults[i].items[k] = {};
            pagesResults[i].items[k].wcag = dataWCAG.items[k].wcag;
			pagesResults[i].items[k].level = dataWCAG.items[k].level;
            pagesResults[i].items[k].resultat = "nt";
            pagesResults[i].items[k].complete = true;
			

            for (let l in dataWCAG.items[k].tests) {
                for (let j in dataVallydette.checklist.page[i].items) {
					
                    if (dataWCAG.items[k].tests[l] === dataVallydette.checklist.page[i].items[j].IDorigin) {
						
                        if (dataVallydette.checklist.page[i].items[j].resultatTest === "nt") {
                            pagesResults[i].items[k].complete = false;
                        }

						if (dataVallydette.checklist.page[i].items[j].resultatTest === "ko") {
							dataWCAG.items[k].resultat = false;
							if (dataVallydette.checklist.page[i].items[j].commentaire!=="") { 
                               dataWCAG.items[k].comment.push(dataVallydette.checklist.page[i].items[j].commentaire);
							}
                         }
						
                        if (pagesResults[i].items[k].resultat) {
                            if (dataVallydette.checklist.page[i].items[j].resultatTest === "ok") {
                                pagesResults[i].items[k].resultat = true;	
								break;	
								
                            } else if (dataVallydette.checklist.page[i].items[j].resultatTest === "ko") {
                                pagesResults[i].items[k].resultat = false;
								break;	
								
								
                            } else if ((dataVallydette.checklist.page[i].items[j].resultatTest === "na") && (pagesResults[i].items[k].resultat === "nt")) {
                                pagesResults[i].items[k].resultat = "na";
								break;	
                            }
                        }
						
						
                    }
                }

                if (pagesResults[i].items[k].complete === false) {
                    // pagesResults[i].items[k].resultat = "nt";
                }
            }
        }
    }

    return runFinalComputation(pagesResults);
}

function runFinalComputation(pagesResultsArray) {
    
    nbNTResultsArray = utils.getNbNotTested();

    var nbNT = nbNTResultsArray.total;

    var finalTotal = 0;
    var finalResult = 0;
    var nbPage = 0;

	for (let i in pagesResultsArray) {
        var nbTrue = 0;
        var nbFalse = 0;
        var nbNA = 0;
        var nbTotal = 0;
		var nbTrueA = 0;
		var nbFalseA = 0;
		var nbNaA = 0;
		var nbTrueAA = 0;
		var nbFalseAA = 0;
		var nbNaAA = 0;
		var nbTotalA = 0;
		var nbTotalAA = 0;

		for (let j in pagesResultsArray[i].items) {
			if (pagesResultsArray[i].items[j].resultat === true) {
				nbTrue++;
				nbTotal++;

				pagesResultsArray[i].items[j].level === 'A' ? nbTrueA++ : nbTrueAA++;
				pagesResultsArray[i].items[j].level === 'A' ? nbTotalA++ : nbTotalAA++;
			} else if (pagesResultsArray[i].items[j].resultat === false) {
				nbFalse++;
				nbTotal++;

				pagesResultsArray[i].items[j].level === 'A' ? nbFalseA++ : nbFalseAA++;
				pagesResultsArray[i].items[j].level === 'A' ? nbTotalA++ : nbTotalAA++;
			} else if (pagesResultsArray[i].items[j].resultat === 'na') {
				nbNA++;

				pagesResultsArray[i].items[j].level === 'A' ? nbNaA++ :nbNaAA++;
				pagesResultsArray[i].items[j].level === 'A' ? nbTotalA++ : nbTotalAA++;
			} else if (pagesResultsArray[i].items[j].resultat === 'nt') {
				pagesResultsArray[i].complete = false;
			}
		}

		//pour le cas où tous les tests d'une page sont non-applicables
		if (nbTotal===0 && nbNA>0) {
			pagesResultsArray[i].result = "NA";
		} else {
			pagesResultsArray[i].result = (nbTrue / nbTotal) * 100;
		}

		pagesResultsArray[i].conformeA = nbTrueA;
		pagesResultsArray[i].conformeAA = nbTrueAA;
		pagesResultsArray[i].nonconformeA = nbFalseA;
		pagesResultsArray[i].nonconformeAA = nbFalseAA;
		pagesResultsArray[i].naA = nbNaA;
		pagesResultsArray[i].naAA = nbNaAA;
		pagesResultsArray[i].totalconforme = nbTrueA + nbTrueAA;
		pagesResultsArray[i].totalnonconforme = nbFalseA + nbFalseAA;
	}

    for (let i in pagesResultsArray) {
        if (pagesResultsArray[i].result != "NA") {
            finalTotal = finalTotal + pagesResultsArray[i].result;
            nbPage = nbPage + 1;
        }
    }

    finalResult = Math.round((finalTotal / nbPage));

   
    let htmlMainContent = document.getElementById('mainContent');
	let computationContent = '';

	setPageName("Résultat de l'audit");
	removeContextualMenu();
	removeFilterSection();
	
    if (nbNT >= 1) {
        computationContent += '<h2 class="pt-4 pb-3">Conformité globale : <span class="text-primary">audit en cours</span></h2>';
		
    } else if (nbNT === 0 && !isNaN(finalResult)) {
        computationContent += '<h2 class="pt-4 pb-3">Conformité globale : <span class="text-primary">' + finalResult + '%</span></h2>';
	}	
	
		computationContent += '<ul class="nav nav-tabs" role="tablist">';
		computationContent += '	<li class="nav-item" role="presentation"><a class="nav-link active" href="#resultatPage" data-toggle="tab" id="tabResultatPage" role="tab" tabindex="0" aria-selected="true" aria-controls="resultatPage">Résultats par page</a></li>';
		computationContent += '	<li class="nav-item" role="presentation"><a class="nav-link" href="#syntheseNiveau" data-toggle="tab" id="tabSyntheseNiveau" role="tab" tabindex="-1" aria-selected="false" aria-controls="syntheseNiveau">Synthèse par niveau</a></li>';	
		computationContent += '	<li class="nav-item" role="presentation"><a class="nav-link" href="#nonConformites" data-toggle="tab" id="tabNonConformites" role="tab" tabindex="-1" aria-selected="false" aria-controls="nonConformites">Liste des non-conformités</a></li>';
		computationContent += '</ul>';
		
		computationContent += '<div class="tab-content border-0">';
		computationContent += '  <div class="tab-pane active" id="resultatPage" role="tabpanel" tabindex="0" aria-hidden="false" aria-labelledby="tabResultatPage">';
		
		
		for (let i in pagesResultsArray) {
			computationContent += '<h3>' + pagesResultsArray[i].name + ' : </h3>';
			
			computationContent += '<ul>';
			computationContent += '<li><strong>résultat :</strong> ';
			computationContent += (!isNaN(pagesResultsArray[i].result.toFixed(2))) ? pagesResultsArray[i].result.toFixed(2) + ' % ' : '';
			computationContent += (pagesResultsArray[i].complete === false) ?  '(en cours / ' + nbNTResultsArray['page' + i] + ' non-testé(s))' : '';
			computationContent += '</li>';
			computationContent += (pagesResultsArray[i].url!== undefined && pagesResultsArray[i].url!== '') ? '<li><strong> url : </strong>' + pagesResultsArray[i].url + '</li>': '';
			computationContent += '</ul>';
		}
		
		
		computationContent += '  </div>';
		computationContent += '  <div class="tab-pane" id="syntheseNiveau" role="tabpanel" tabindex="-1" aria-hidden="true" aria-labelledby="tab779525">';
		computationContent += '<table class="table table-striped"><caption class="sr-only">Synthèse par niveau</caption>';
		computationContent += '<thead><tr>';
		computationContent += '<th scope="row">Critères</th>';
		computationContent += '<th scope="col" colspan="2" class="text-center">Conformes</th>';
		computationContent += '<th scope="col" colspan="2" class="text-center">Non-conformes</th>';
		computationContent += '<th scope="col" colspan="2" class="text-center">Non-applicables</th>';
		computationContent += '<th rowspan="2" class="text-center bg-light">Taux de conformité </th>';
		computationContent += '</tr><tr>';
		computationContent += '<th scope="col">Niveau</th>';
		computationContent += '<th scope="col" class="text-center">A</th>';
		computationContent += '<th scope="col" class="text-center">AA</th>';
		computationContent += '<th scope="col" class="text-center">A</th>';
		computationContent += '<th scope="col" class="text-center">AA</th>';
		computationContent += '<th scope="col" class="text-center">A</th>';
		computationContent += '<th scope="col" class="text-center">AA</th>';
		computationContent += '</tr></thead>';
		computationContent += '<tbody>';
	
		
		for (let i in pagesResultsArray) {
			
			computationContent += '<tr>';
			computationContent += '<th scope="row" class="font-weight-bold">' + pagesResultsArray[i].name + '</th>';
			computationContent += '<td class="text-center">' + pagesResultsArray[i].conformeA+ '</td>';
			computationContent += '<td class="text-center">' + pagesResultsArray[i].conformeAA+ '</td>';
			computationContent += '<td class="text-center">' + pagesResultsArray[i].nonconformeA+ '</td>';
			computationContent += '<td class="text-center">' + pagesResultsArray[i].nonconformeAA+ '</td>';
			computationContent += '<td class="text-center">' + pagesResultsArray[i].naA+ '</td>';
			computationContent += '<td class="text-center">' + pagesResultsArray[i].naAA+ '</td>';
			computationContent += '<td class="text-center bg-light">';
			computationContent += (!isNaN(pagesResultsArray[i].result.toFixed(2))) ? pagesResultsArray[i].result.toFixed(2) + ' % ' : '';
			computationContent += (pagesResultsArray[i].complete === false) ?  '(en cours)' : '';	
			computationContent += '</td>';
			computationContent += '</tr>';
			
		}
		computationContent += '</tbody>';
		computationContent += '</table>';
		computationContent += ' </div>';
		
		computationContent += '<div class="tab-pane" id="nonConformites" role="tabpanel" tabindex="-1" aria-hidden="true" aria-labelledby="tab779525">';
		
			const listNonConformity = dataWCAG.items.filter(dataWcagResult => dataWcagResult.resultat === false);
			
			if (listNonConformity.length > 0) {
				
				for (let i in listNonConformity) {
				
					computationContent += '<ul>';
					computationContent += '<li><strong>Critère ' + listNonConformity[i].wcag + ', ' + listNonConformity[i].name  + ', niveau ' + listNonConformity[i].level + '</strong>';
				
					if (listNonConformity[i].comment.length > 0) {

							computationContent += '<ul>';
							for (let j in listNonConformity[i].comment) {
								computationContent += '<li>' + listNonConformity[i].comment[j] + '</li>';	
							}
							computationContent += '</ul>';	
					} 
					
					computationContent += '</li>';
					computationContent += '</ul>';
		
				}
				
			} else {
				
				computationContent += '<p>Absence de non-conformité</p>';
				
			}
			
			
		
		computationContent += '</div>';

    htmlMainContent.innerHTML = computationContent;
}


/**
 * Multipage manager
 */

initPagination = function (pages) {
	var getPages = pages.page;

	var pageElement = document.getElementById("pageManager");
	pageElement.innerHTML = "<div class='container'><ul class='nav'></ul></div>";

	let AddPage = document.createElement("li");
	AddPage.classList.add("nav-item");
	var btnAddPage = document.createElement("button");
	btnAddPage.innerHTML = "Ajouter une page&nbsp;<span class='icon-add-more' aria-hidden='true'></span>";
	btnAddPage.setAttribute('id', "btnAddPage");
	btnAddPage.classList.add("btn", "btn-link", "nav-link", "border-0");

	AddPage.appendChild(btnAddPage);
	pageElement.querySelector(".nav").appendChild(AddPage);

	btnAddPage.addEventListener('click', function () {
		addPage();
	}, false);

	initContextualMenu(0, "pageID-0");
	
	for (let i in getPages) {
		let newPage = document.createElement("li");
		newPage.classList.add("nav-item");

		let newBtnPage = document.createElement("button");

		newBtnPage.innerHTML = getPages[i].name;
		newBtnPage.setAttribute('id', getPages[i].IDPage);
		newBtnPage.classList.add("btn", "btn-link", "nav-link", "border-0");
		if (i === 0) {
			utils.setActive(newBtnPage);
		}
		newPage.appendChild(newBtnPage);
		pageElement.querySelector(".nav").appendChild(newPage);

		let thisNewBtn = document.getElementById(getPages[i].IDPage);
		thisNewBtn.addEventListener('click', function () {
			showPage(thisNewBtn.id)
		}, false);

		let btnDelPage = document.getElementById("btnDelPage");
		getPages.length > 1 ? btnDelPage.disabled = false : btnDelPage.disabled = true;
	}
}

addPage = function () {
	var arr2 = JSON.parse(JSON.stringify(dataVallydette.checklist.page[currentPage]));
	dataVallydette.checklist.page.push(arr2);

	indexPage = dataVallydette.checklist.page.length - 1;

	var newIdPage = new Uint32Array(1);
	window.crypto.getRandomValues(newIdPage);

	newIdPage = "pageID-" + newIdPage;

	var btnFirstPage = document.getElementById(dataVallydette.checklist.page[0].IDPage);
	btnFirstPage.disabled = false;

	// @todo a supprimer
	dataVallydette.checklist.page[indexPage].IDPage = newIdPage;
	dataVallydette.checklist.page[indexPage].name = "Nom de la page";
	dataVallydette.checklist.page[indexPage].url = "";
	dataVallydette.checklist.page[indexPage].items.forEach(initNewPage);

	jsonStr = JSON.stringify(dataVallydette);

	//display pagination
	let newPage = document.createElement("li");
	newPage.classList.add("nav-item");
	var pageElement = document.getElementById("pageManager");
	var newBtnPage = document.createElement("button");

	newBtnPage.innerHTML = "Nom de la page";
	newBtnPage.setAttribute('id', newIdPage);
	newBtnPage.classList.add("btn", "btn-link", "nav-link", "border-0");
	newPage.appendChild(newBtnPage);
	pageElement.querySelector(".nav").appendChild(newPage);

	var thisNewBtn = document.getElementById(newIdPage);
	var currentIdPage = thisNewBtn.getAttribute('id');
	thisNewBtn.addEventListener('click', function () {
		showPage(currentIdPage)
	}, false);

	//enabled delete button
	var currentBtnDelPage = document.getElementById('btnDelPage');
	currentBtnDelPage.disabled = false;
	
	showPage(currentIdPage);
}

initNewPage = function (item) {
	item.ID = item.ID + '-p' + indexPage;
	item.resultatTest = 'nt';
	item.commentaire = '';
}

initProperties = function (item) {
	item.resultat = 'nt';
	item.comment = [];
}

initContextualMenu = function (currentPageIndex, currentPageID) {
	var htmlMenu = '';
	htmlMenu += '<button class="btn btn-secondary btn-icon" id="btnPageName" aria-label="Modifier le nom de la page" title="Modifier le nom de la page" data-element="pageName" data-secondary-element="' + currentPageID + '" data-property="checklist.page.' + currentPageIndex + '.name" data-toggle="modal" data-target="#modalEdit"><span class="icon-Pencil" aria-hidden="true"></span></button>';
	htmlMenu += '<button id="btnDelPage" class="btn btn-secondary btn-icon ml-2" aria-label="Supprimer la page" title="Supprimer la page" data-element="pageName" data-property="checklist.page.' + currentPageIndex + '" data-toggle="modal" data-target="#modalDelete" data-pagination="' + currentPageID + '"><span class="icon-trash" aria-hidden="true"></span></button>';
	htmlMenu += '<hr class="border-light  w-100">';
	htmlContextualMenuContent.innerHTML = htmlMenu;
	
	btnActionPageEventHandler ();
}

removeContextualMenu = function () {
	htmlContextualMenuContent.innerHTML = "";
}

showPage = function (id) {
	var index = dataVallydette.checklist.page.findIndex(function (o) {
		return o.IDPage === id;
	})

	currentPage = index;

	onPageLoaded();

	if (!document.getElementById('btnPageName')) {
		
		initContextualMenu(currentPage, id);
		
	} else {
		
		var currentBtnPageName = document.getElementById('btnPageName'); 
		currentBtnPageName.dataset.property = "checklist.page." + currentPage + ".name";
		currentBtnPageName.dataset.secondaryElement = id;

		var currentBtnDelPage = document.getElementById('btnDelPage');
		currentBtnDelPage.dataset.property = "checklist.page." + currentPage;
		currentBtnDelPage.dataset.pagination = id;
		
	}
	
	utils.setPageTitle(dataVallydette.checklist.page[currentPage].name);
	
	utils.resetActive(document.getElementById("pageManager"));

	utils.setActive(document.getElementById(dataVallydette.checklist.page[currentPage].IDPage));
	
	utils.putTheFocus(document.getElementById("pageName"));
	
}

setDeletePage = function (targetElement) {

	let htmlModal = '';
	htmlModal = '<div id="modalDelete" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="">';
	htmlModal += '<div class="modal-dialog modal-dialog-scrollable" role="document">';
	htmlModal += '<div class="modal-content">';
	htmlModal += '<div class="modal-header">';
	htmlModal += '<h5>Supprimer</h5>';
	htmlModal += '<button type="button" class="close" data-dismiss="modal" aria-label="Fermer"></button>';
	htmlModal += '</div>';
	htmlModal += '<div class="modal-body">';
	htmlModal += 'Supprimer la page ' + getPropertyValue(targetElement) + ' ?';
	htmlModal += '</div>';
	htmlModal += '<div class="modal-footer">';
	htmlModal += '<button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>';
	htmlModal += '<button type="button" id="deteleSaveBtn" data-dismiss="modal" class="btn btn-primary">Valider</button>';
	htmlModal += '</div></div></div></div>';

	// Parent element
	let elModal = document.getElementById('modal');
	elModal.innerHTML = htmlModal;

	// Event handler
	var deteleSaveBtn = document.getElementById("deteleSaveBtn");
	deteleSaveBtn.addEventListener('click', function () {
		deletePage(currentPage, targetElement)
	});
}

deletePage = function (currentPage, targetElement) {

	dataVallydette.checklist.page.splice(currentPage, 1);

	var currentBtnDelPage = document.getElementById('btnDelPage');
	dataVallydette.checklist.page.length === 1 ? currentBtnDelPage.disabled = true : "";

	var paginationBtnId = currentBtnDelPage.dataset.pagination;
	var paginationBtn = document.getElementById(paginationBtnId);
	paginationBtn.remove();

	currentPage != 0 ? currentPage = currentPage - 1 : "";

	newPageId = dataVallydette.checklist.page[currentPage].IDPage;
	
	showPage(newPageId);

	jsonUpdate();

}


function setPageName(value) {
	
	var currentPageName = document.getElementById('pageName');
	currentPageName.innerHTML = value;
	
}

getIfFilter = function (name) {
	const filters = document.querySelectorAll('[name="' + name + '"]');
	let found = false;
	let foundItem;
	filters.forEach(function (filterItem) {
		if (filterItem.checked) {
			found = true;
			foundItem = filterItem;
		}
	});

	return [found, foundItem];
}


/**
 * Tests status manager
 */
    

getStatutClass = function (lastResult) {
	if (lastResult === arrayFilterNameAndValue[0][1]) {
		statutClass = "badge-success";
	} else if (lastResult === arrayFilterNameAndValue[1][1]) {
		statutClass = "badge-danger";
	} else if (lastResult === arrayFilterNameAndValue[2][1]) {
		statutClass = "badge-info";
	} else {
		statutClass = "badge-light";
	}
	return statutClass;
}

setStatutClass = function (lastResult) {
	if (lastResult === arrayFilterNameAndValue[0][1]) {
		statutText = textContent.statut1;
	} else if (lastResult === arrayFilterNameAndValue[1][1]) {
		statutText = textContent.statut2;
	} else if (lastResult === arrayFilterNameAndValue[2][1]) {
		statutText = textContent.statut3;
	} else {
		statutText = textContent.statut4;
	}
	return statutText;
}

setStates = function (ele, targetId) {
	for (let i in dataVallydette.checklist.page[currentPage].items) {
		if (dataVallydette.checklist.page[currentPage].items[i].ID === targetId) {
			lastResult = getStatutClass(dataVallydette.checklist.page[currentPage].items[i].resultatTest);
			dataVallydette.checklist.page[currentPage].items[i].resultatTest = ele.value;
		}
	}

	//mise à jour de l'état du test
	testResult = document.getElementById("resultID-" + targetId + "");
	testResult.classList.remove(lastResult);


	if (ele.value === arrayFilterNameAndValue[0][1]) {
		testResult.innerText = textContent.statut1;
		statutClass = "badge-success";
	} else if (ele.value === arrayFilterNameAndValue[1][1]) {
		testResult.innerText = textContent.statut2;
		statutClass = "badge-danger";
	} else if (ele.value === arrayFilterNameAndValue[2][1]) {
		testResult.innerText = textContent.statut3;
		statutClass = "badge-info";
	} else {
		testResult.innerText = textContent.statut4;
		statutClass = "badge-light";
	}

	testResult.classList.add(statutClass);

	jsonUpdate();
}

/**
 * Edition manager
 */
setValue = function (targetElement, targetProperty, targetSecondaryElement) {

	arrayPropertyValue = [];

	let htmlModal = '';
	htmlModal = '<div id="modalEdit" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modalChecklistTitle">';
	htmlModal += '<div class="modal-dialog modal-dialog-scrollable" role="document">';
	htmlModal += '<div class="modal-content">';
	htmlModal += '<div class="modal-header">';
	htmlModal += '<h5 class="modal-title" id="modalChecklistTitle">Modifier : ' + getPropertyValue(targetProperty) + '</h5>';
	htmlModal += '<button type="button" class="close" data-dismiss="modal" aria-label="Fermer"></button>';
	htmlModal += '</div>';
		
	htmlModal += '<form id="editForm"><div class="modal-body">';
	htmlModal += '<div id="modal-alert"></div>';
	htmlModal += '<div class="form-group">';
	htmlModal += '<label class="is-required" for="nameValue">Nom <span class="sr-only"> (required)</span></label>';
	htmlModal += '<input type="text" class="form-control" id="nameValue" aria-labelledby="modalChecklistTitle" value="' + getPropertyValue(targetProperty) + '" required >';
	htmlModal += '</div>';
	if (targetElement === "pageName") {
		htmlModal += '<div class="form-group">';
		htmlModal += '<label  for="urlValue">URL</label>';
		htmlModal += '<input type="text" class="form-control" id="urlValue" placeholder="URL" value="' + getPropertyValue("checklist.page." + currentPage + ".url") + '">';
		htmlModal += '</div>';
	}
	htmlModal += '</div>';
	htmlModal += '<div class="modal-footer">';
	htmlModal += '<button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>';
	htmlModal += '<button type="submit" id="saveValueBtn" class="btn btn-primary">Enregistrer</button>';
	htmlModal += '</div></form></div></div></div>';
			
	// Parent element
	let elModal = document.getElementById('modal');
	elModal.innerHTML = htmlModal;

	
    var currentEditForm = document.getElementById('editForm');
 
	currentEditForm.addEventListener('submit', function () {
		event.preventDefault();
		
		var propertyName = document.getElementById("nameValue");
		arrayPropertyValue[0] = propertyName.value;
		
		if (targetElement === "pageName") {
			var propertyUrl = document.getElementById("urlValue");
			arrayPropertyValue[1] = propertyUrl.value;	
		}
		
		updateProperty(arrayPropertyValue, targetElement, targetProperty, targetSecondaryElement);
	});

}

getPropertyValue = function (propertyPath) {
	obj = dataVallydette;
	propertyPath = propertyPath.split('.');

	for (i = 0; i < propertyPath.length - 1; i++) {
		obj = obj[propertyPath[i]];
	}
	
	if(obj[propertyPath[i]])  {
		return obj[propertyPath[i]];
	} else {
		obj[propertyPath[i]] = "";
		return obj[propertyPath[i]];
	}
	
}

setPropertyValue = function (propertyValue, propertyPath) {
	obj = dataVallydette;
	propertyPath = propertyPath.split('.');

	for (i = 0; i < propertyPath.length - 1; i++) {
		obj = obj[propertyPath[i]];	
	}
	
	obj[propertyPath[i]] = propertyValue;
	
}

updateProperty = function(arrayPropertyValue, targetElement, targetProperty, targetSecondaryElement) {

	setPropertyValue(arrayPropertyValue[0], targetProperty);
	if (arrayPropertyValue[1]) {setPropertyValue(arrayPropertyValue[1], "checklist.page." + currentPage + ".url");}
	
	var currentTargetElement = document.getElementById(targetElement);
	currentTargetElement.innerText = arrayPropertyValue[0];

	if (targetSecondaryElement) {
		var currentTargetSecondaryElement = document.getElementById(targetSecondaryElement);
		currentTargetSecondaryElement.innerText = arrayPropertyValue[0];
	}
	
	var feedbackHtml;
	feedbackHtml = '<div class="alert alert-success alert-sm" role="alert">';
	feedbackHtml += '<span class="alert-icon"><span class="sr-only">Success</span></span>';
	feedbackHtml += '<p>Les données ont été enregistré avec succes.</p>';
	feedbackHtml += '</div>';
	
	var feedbackMessage = document.getElementById('modal-alert');
	feedbackMessage.innerHTML = feedbackHtml;
	
	utils.setPageTitle(dataVallydette.checklist.page[currentPage].name);
	
	jsonUpdate();
}


jsonUpdate = function () {
	let DefaultName = document.getElementById("checklistName");
	DefaultName = utils.slugify(DefaultName.innerText);

	let dataStr = JSON.stringify(dataVallydette);

	let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

	var todayDate = new Date();
	var date = todayDate.getFullYear() + '-' + (todayDate.getMonth() + 1) + '-' + todayDate.getDate();

	var todayHour = new Date();
	var time = todayHour.getHours() + ":" + todayHour.getMinutes() + ":" + todayHour.getSeconds();

	let exportFileDefaultName = DefaultName + '-' + date + '-' + time + '.json';

	linkElement = document.getElementById("export");
	linkElement.classList.remove("disabled");
	linkElement.removeAttribute('disabled');
	linkElement.setAttribute('aria-disabled', false);
	linkElement.setAttribute('href', dataUri);
	linkElement.setAttribute('download', exportFileDefaultName);
	
}


/**
 * Comment manager
 */
setComment = function (targetId, title) {
	let titleModal = title;

	let htmlModal = '';
	htmlModal = '<div id="modal' + targetId + '" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal' + targetId + 'Title">';
	htmlModal += '<div class="modal-dialog modal-dialog-scrollable" role="document">';
	htmlModal += '<div class="modal-content">';
	htmlModal += '<div class="modal-header">';
	htmlModal += '<h5 class="modal-title" id="modal' + targetId + 'Title">Commentaire pour : ' + titleModal + '</h5>';
	htmlModal += '<button type="button" class="close" data-dismiss="modal" aria-label="Fermer"></button>';
	htmlModal += '</div>';
	htmlModal += '<div class="modal-body">';
	htmlModal += '<textarea class="form-control" id="comment' + targetId + '" aria-labelledby="modal' + targetId + 'Title" autofocus>' + getComment(targetId) + '</textarea>';
	htmlModal += '</div>';
	htmlModal += '<div class="modal-footer">';
	htmlModal += '<button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>';
	htmlModal += '<button type="button" id="commentSaveBtn" data-dismiss="modal" class="btn btn-primary">Enregistrer</button>';
	htmlModal += '</div></div></div></div>';

	// Parent element
	let elModal = document.getElementById('modal');
	elModal.innerHTML = htmlModal;

	// Event handler
	var commentSave = document.getElementById("commentSaveBtn");
	var comment = document.getElementById('comment' + targetId);
	commentSave.addEventListener('click', function () {
		addComment(targetId, comment.value)
	});
	
	utils.putTheFocus(document.getElementById('comment' + targetId));

	
	
}

addComment = function (targetId, newComment) {
	for (let i in dataVallydette.checklist.page[currentPage].items) {
		if (dataVallydette.checklist.page[currentPage].items[i].ID === targetId) {
			dataVallydette.checklist.page[currentPage].items[i].commentaire = newComment;
		}
	}

	var currentBtnComment = document.getElementById("commentBtn" + targetId);
	currentBtnComment.innerHTML = getCommentState(targetId);

	//on met à jour l'export
	jsonUpdate();
}

getComment = function (targetId) {
	var currentComment;

	for (let i in dataVallydette.checklist.page[currentPage].items) {
		if (dataVallydette.checklist.page[currentPage].items[i].ID === targetId) {
			currentComment = dataVallydette.checklist.page[currentPage].items[i].commentaire;
		}
	}

	return (currentComment != "" ? currentComment : "");
}

getCommentState = function (targetId) {
	var currentComment;

	for (let i in dataVallydette.checklist.page[currentPage].items) {
		if (dataVallydette.checklist.page[currentPage].items[i].ID === targetId) {
			currentComment = dataVallydette.checklist.page[currentPage].items[i].commentaire;
		}
	}

	return (currentComment === "" ? "<span class='icon-Comments' aria-hidden='true'></span>&nbsp;Ajouter un commentaire" : "<span class='icon-Comments text-primary' aria-hidden='true'></span>&nbsp;Modifier le commentaire");
}

UpdateTypes = function (allTypes, updatedTypes) {
	let elrefTypes = [];

	for (let i in updatedTypes) {
		for (let j in updatedTypes[i].type) {
			elrefTypes.push(updatedTypes[i].type[j]);
		}
	}

	let uniqueUpdatedTypes = elrefTypes.filter(function (value, index, self) {
		return self.indexOf(value) === index;
	});

	for (let i in allTypes) {
		var elem = document.getElementById('type' + i);
		elem.disabled = true;
		var elemLabel = document.getElementById('labelType' + i);
		elemLabel.classList.add("disabled");

	}

	for (let i in allTypes) {
		for (let j in uniqueUpdatedTypes) {
			if (allTypes[i] === uniqueUpdatedTypes[j]) {
				var elem = document.getElementById('type' + i);
				elem.disabled = false;
				var elemLabel = document.getElementById('labelType' + i);
				elemLabel.classList.remove("disabled");
			}
		}
	}
};

updateCounter = function (activeFilter, nbTests) {
	let elFeedback = document.getElementById('feedback');
	let htmlFeedback = '';
	if (activeFilter) {
		htmlFeedback = '<p><span><b>' + nbTests + '</b> tests dans filtres en cours</span></p>';
		elFeedback.innerHTML = htmlFeedback;
	} else {
		htmlFeedback = '<p><b>' + nbTests + '</b> tests en cours</p>';
		elFeedback.innerHTML = htmlFeedback;
	}
};

initFilters = function () {
    
   if (htmlFilterContent.innerHTML.trim() !== '') {

	   return;
	   
   } else {
	   
	   let htmlFilterHeading = document.createElement('h2');
		htmlFilterHeading.textContent = "Filtres";
		htmlFilterContent.appendChild(htmlFilterHeading);
   
		let htmlFilterFeedback = document.createElement('div');
		htmlFilterFeedback.setAttribute("id", "feedback"); 
		htmlFilterContent.appendChild(htmlFilterFeedback);
	
		let htmlFilterList = document.createElement('ul');
		htmlFilterList.classList.add("list-unstyled");
		
		for (let i in arrayFilterNameAndValue) {
			var isChecked = "";
			arrayFilterActivated.forEach(element => {element === arrayFilterNameAndValue[i][1] ? isChecked = "checked" : ''});
			htmlTypes = '<label class="custom-control custom-switch pb-1" id="labelType' + i + '"><input type="checkbox" class="custom-control-input" id="type' + i + '" value="' + arrayFilterNameAndValue[i][1] + '" '+ isChecked+ '><span class="custom-control-label">' + arrayFilterNameAndValue[i][0] + '</span></label>';
			
			var listItem = document.createElement("li");
			listItem.innerHTML = htmlTypes;
			htmlFilterList.appendChild(listItem);
			htmlFilterContent.appendChild(htmlFilterList);

			var inputItem = document.getElementById("type" + i);
			inputItem.addEventListener('click', function () {
				updateArrayFilter(this)
			}, false);

		}
   }
   
}

removeFilterSection = function () {
	htmlFilterContent.innerHTML = "";
}
		

onPageLoaded = function () {
	initFilters();
	if(arrayFilterActivated && arrayFilterActivated.length > 0){
		runFilter();
	} else {
		runTestListMarkup(dataVallydette.checklist.page[currentPage].items);
		updateCounter(false, dataVallydette.checklist.page[currentPage].items.length);
	}
}


runFilter = function() {
	const filteredTest = dataVallydette.checklist.page[currentPage].items.filter(o => arrayFilterActivated.includes(o.resultatTest));
	runTestListMarkup(filteredTest);
	updateCounter(true, filteredTest.length);
}


updateArrayFilter = function (elInput) {
	
	if (elInput && elInput.checked) {
		
		arrayFilterActivated.push(elInput.value);
		
	} else {
		
		arrayFilterActivated = arrayFilterActivated.filter(function(filterValue) {
			return filterValue !== elInput.value;
		});
		
	}

	onPageLoaded();
	
}
 

const utils = {
  delDoublon: function () {
	 for (var i = 0; i < arrCond.length; i++) {
        //for (let condition of arrCond) {
        let condition = arrCond[i];
        if (condition.name === inputId) {
            let arrCondIndex = arrCond.indexOf(condition);
            arrCond.splice(arrCondIndex, 1);
        }
    }
    return arrCond;
  },
  reqError: function (err) {
	let elrefTests = document.getElementById('mainContent');
    elrefTests.innerHTML = '<div class="alert alert-warning">Erreur chargement ressource JSON</div>';
  },
  formatHeading: function (str) {
    return str.toLowerCase()
		.replace(/é|è|ê/g, "e")
		.replace(/ /g, "-");
  },
  slugify: function (str) {
    return str.toString().toLowerCase()
        .replace(/(\w)\'/g, '$1')       
        .replace(/[^a-z0-9_\-]+/g, '-')
        .replace(/\-\-+/g, '-') 
        .replace(/^-+/, '')
        .replace(/-+$/, '');
	},
  getNbNotTested: function () {
	
	nbNTArray = {};
    var nbNTtests = 0;
    var nbNTtestsPage = 0;

    for (let k in dataVallydette.checklist.page) {
        for (let l in dataVallydette.checklist.page[k].items) {
            if (dataVallydette.checklist.page[k].items[l].resultatTest == "nt") {
                nbNTtests++;
                nbNTtestsPage++;
            }
        }

        nbNTArray["page" + k] = nbNTtestsPage;
        nbNTtestsPage = 0;
    }

    nbNTArray.total = nbNTtests;

    return nbNTArray;
	},
  putTheFocus: function (e) {
	e.setAttribute("tabindex", "-1");
	e.focus();
    },
  resetActive: function (e) {
	var btnActive = e.querySelector(".active");
		if (btnActive != undefined) {
			btnActive.classList.remove("active");
			btnActive.removeAttribute("aria-current");
		}
	},
  setActive: function (e) {
	e.classList.add("active");
	e.setAttribute("aria-current", "true");
  },
  setPageTitle: function (e) {
	document.title = e + " — Grille Audit Wcag 2.1 d’Orange — La va11ydette";
  }
	
}  

initVallydetteApp('wcagEase');
