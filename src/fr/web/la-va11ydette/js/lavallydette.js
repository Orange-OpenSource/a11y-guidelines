$('#docs-navbar').navbar({sticky: true, hideSupra: true});
$('.o-nav-local').prioritynav('Autres pages');

/**
 * Global vars
 * @param {object} dataVallydette - Global main object, that contains all tests and result of the selected checklist.
 * @param {object} langVallydette - language object.
 * @param {object} checklistVallydette - checklists parameters (ex : url list param).
 * @param {object} dataVallydette - statement object.
 * @param {string} globalLang - current selected language.
 * @param {string} globalTemplate - actually 2 template are available, wcag for conformity audit et audit for test audit.
 * @param {number} globalVersion - Contains the last checklist version
 * @param {object} dataWCAG - Object related to matrice-wcag-ease.json, that contains the link between WCAG rules and conformity checklist tests.
 * @param {number} currentPage - Current page index, updated each time user move to another page.
 * @param {string} statutClass - Default class used by the html element displaying a test result.
 * @param {array} arrayFilterNameAndValue - Initialization of filter labels and values.
 * @param {array} arrayFilterActivated - Array that contains all the activated filters from the frontend component menu.
 * @param {string} currentCriteriaListName - Selected checklist json file name.
 * @param {object} htmlContextualMenuContent - Contextual page menu (edit page name, delete a page).
 * @param {object} htmlFilterContent - Test filter menu.
 * @param {object} htmlMainContent - Main content.
 */
var dataVallydette;
var langVallydette;
var checklistVallydette;
var dataVallydette;
   
/**
 * @todo add comment
 */
var issuesVallydette;

var globalLang;
var globalTemplate;
var globalVersion;

var dataWCAG;

var	currentPage = 0;
var statutClass = "badge-light";

var arrayFilterNameAndValue = [];
var arrayFilterActivated = [];

/**
 * @todo add comment
 */
var arrayProfileActivated = [];
var arrayTypeActivated = [];

var currentCriteriaListName;

var htmlContextualMenuContent = document.getElementById('contextualMenu');
var htmlFilterContent = document.getElementById('filter');
var htmlMainContent = document.getElementById('mainContent');

	
/**
 * Vallydette object
 */
 
/**
 * Update global var currentCriteriaListName with the selected checklist json file name.
 * Init the localization.
 * Run the dataVallydette object completion
 * @param {string} criteriaListName - Selected checklist json file name.
 * @param {string} lang - Language can be defined in function params.
 */
function initVallydetteApp (criteriaListName, lang) {
	
	initGlobalLang(lang);
	
	var langRequest = new XMLHttpRequest();
	langRequest.open("GET", "json/lang/"+globalLang+".json", true);
	langRequest.onreadystatechange = function () {
	  if(langRequest.readyState === 4 && langRequest.status === 200) {
		langVallydette = JSON.parse(langRequest.responseText);
		localizeHTML();
		initGlobalCriteriaListName(criteriaListName);
	
	  } 
	};
	langRequest.send();
	

	
}

function initGlobalCriteriaListName(criteriaListName) {
	
	const paramString = window.location.search;
	const urlParams = new URLSearchParams(paramString);

	if (urlParams.has('list')) {
		currentCriteriaListName = urlParams.get('list');
	} else if (criteriaListName) {
		currentCriteriaListName = criteriaListName;
	} else {
		currentCriteriaListName = 'wcag-web';
	}
	
	var checklistRequest = new XMLHttpRequest();
		checklistRequest.open("GET", "json/config-checklist.json", true);
		checklistRequest.onreadystatechange = function () {
			
		  if(checklistRequest.readyState === 4 && checklistRequest.status === 200) {
			checklistVallydette = JSON.parse(checklistRequest.responseText);
			createObjectAndRunVallydette();
		  } 
		};
		
		checklistRequest.send();
		
	var issuesRequest = new XMLHttpRequest();
	issuesRequest.open("GET", "json/issues-"+globalLang+".json", true);
	issuesRequest.onreadystatechange = function () {
	  if(issuesRequest.readyState === 4 && issuesRequest.status === 200) {
		issuesVallydette = JSON.parse(issuesRequest.responseText);
	  } 
	};
	issuesRequest.send();		
		
	
	initLangMenu();
	
}										 


/**
 * Init the dataVallydette object and download the selected checklist json file
 */
function createObjectAndRunVallydette() {
		
		
		if (checklistVallydette[currentCriteriaListName]) {
			initGlobalTemplate(checklistVallydette[currentCriteriaListName].template);
			globalVersion = checklistVallydette[currentCriteriaListName].version;
		} else {
			utils.reqError();
		}
		
		dataVallydette = {
		"checklist": {
			"name": "",
			"referentiel": currentCriteriaListName,
			"version": globalVersion,
			"template": globalTemplate,
			"page": [{
					"IDPage": "pageID-0",
					"name": langVallydette.pageName,
					"items": []
					}]
			}
		}


		var jsonCriteria;
		jsonCriteria = 'json/' + checklistVallydette[currentCriteriaListName].filename + '-' + globalLang + '.json';

		//init about link href attribute from configuration input
		document.getElementById("link-about").setAttribute('href', checklistVallydette[currentCriteriaListName]["about-" + globalLang]);

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
		  } else if (criteriaRequest.status === 404) {
				utils.reqError();
			
			}
		};
		
		criteriaRequest.send();

}

/**
 *  update the dataVallydette object with the selected checklist object (ie the wcag ease object)
 */
function importCriteriaToVallydetteObj (criteriaVallydette) {
 
	if (checklistVallydette[currentCriteriaListName].template === 'audit'){
		criteriaVallydette.items.forEach(function (criteria, key) {
			 criteria.ID = "testWebID-"+key;
			 criteria.IDorigin = "testWebID-"+key;
			 criteria.resultatTest = "nt";
			 criteria.issues = [];
			 
		 })
	}

	dataVallydette.checklist.name = criteriaVallydette.name;
	dataVallydette.checklist.page[0].groups = {};
    dataVallydette.checklist.page[0].items = dataVallydette.checklist.page[0].items.concat(criteriaVallydette.items);

	dataVallydette.checklist.page[0].items.forEach(function (test) {

		if(test.group) {
			if(dataVallydette.checklist.page[0].groups[test.group]){
				dataVallydette.checklist.page[0].groups[test.group].idTests.push(test.IDorigin);
			} else {
				dataVallydette.checklist.page[0].groups[test.group] = {};
				dataVallydette.checklist.page[0].groups[test.group].idTests = [];
				dataVallydette.checklist.page[0].groups[test.group].checked = true;
				dataVallydette.checklist.page[0].groups[test.group].idTests.push(test.IDorigin);
			}
			
		}
		
		
	}); 

	
	dataVallydette.checklist.lang = globalLang;
	dataVallydette.checklist.version = globalVersion;
	dataVallydette.checklist.template = globalTemplate;
	
	utils.setPageTitle();
	
	eventHandler();
	
	runVallydetteApp();
}

/**
 *  update the dataVallydette object with the selected checklist object.
	Run some specific processing to fit the rgaa object to the vallydette object.
 */
function importRGAA(dataRGAA) {
    dataVallydette.checklist.name = "Audit RGAA 4";
    dataVallydette.checklist.referentiel = "RGAA";

    dataRGAA.topics.forEach(function (topics) {
        topics.criteria.forEach(function (criteria) {
            for (let test of Object.keys(criteria.criterium.tests)) {
                var testContent = criteria.criterium.tests[test];

                let vallydetteTest = {};


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


function initGlobalTemplate (templateValue) {
	
	if(templateValue) {
		globalTemplate = templateValue;
	} else {
		globalTemplate = "wcag";
	}
	
}

/**
 *  Once the vallydette object is ready, the vallydette app can be run :
	Initialization of some string var and run multiple init functions.
 */
function runVallydetteApp() {
  
	currentPage = 0;
	
	/** @todo to be replaced by a localization object */
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

	
	arrayFilterNameAndValue = [[langVallydette.template.status1, "ok"], [langVallydette.template.status2, "ko"], [langVallydette.template.status3, "na"], [langVallydette.template.status4, "nt"]];
	
	if (globalTemplate==="audit") {
		arrayProfileNameAndValue = uniqueEntry(dataVallydette.checklist.page[0].items,"profils");
		arrayTypeNameAndValue = uniqueEntry(dataVallydette.checklist.page[0].items, "type");
	}

	
	var HeadingChecklistName = document.getElementById("checklistName");
	HeadingChecklistName.innerText = dataVallydette.checklist.name;
	
	initComputation();
    initPagination(dataVallydette.checklist);
	initFilters();
  
	
    updateCounter(false, dataVallydette.checklist.page[currentPage].items.length);
	utils.setPageTitle ( dataVallydette.checklist.page[currentPage].name);
}


/**
 *  Initialization of events for import button, and checklist name edition button.
 */
function eventHandler() {

	var btnImport = document.getElementById('import');
	
	btnImport.onclick = function () {
		var files = document.getElementById('selectFiles').files;
		var fr = new FileReader();

		fr.onload = function (e) {
			dataVallydette = JSON.parse(e.target.result);
			initGlobalLang(dataVallydette.checklist.lang, true);
			initGlobalTemplate(dataVallydette.checklist.template);
			checkTheVersion(dataVallydette.checklist.version);
			utils.putTheFocus(document.getElementById("checklistName"));
			runLangRequest();
		}

		fr.readAsText(files.item(0));
	};
	
	var inputSelectFile = document.getElementById("selectFiles");
	inputSelectFile.addEventListener('change', function () {
		document.getElementById("selectFilesLabel").innerText = inputSelectFile.files[0].name;
	}, false);
	
	
	var btnChecklist = document.getElementById("btnChecklistName");
	btnChecklist.addEventListener('click', function () {
		setValue(btnChecklist.dataset.element, btnChecklist.dataset.property);
	}, false);
	
	var btnLocalStorage = document.getElementById("btnLocalStorage");
	btnLocalStorage.addEventListener('click', function () {
		runLocalStorage();
	}, false);

	if (localStorage.getItem("lavallydette")===null) {
		btnLocalStorage.disabled=true;
		btnLocalStorage.classList.add("disabled");
	}
 
	btnActionPageEventHandler();
	
}


/**
 *  LocalStorage
 */

/**
 *  Opening the localStorage dialog modal, and running the localStorage get function if acceptance
 */
function runLocalStorage() {
	
	let htmlModal = '';
	htmlModal = '<div id="modalLocalStorage" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modalLocalStorageTitle">';
	htmlModal += '<div class="modal-dialog modal-dialog-scrollable" role="document">';
	htmlModal += '<div class="modal-content">';
	htmlModal += '<div class="modal-header">';
	htmlModal += '<h5 class="modal-title" id="modalLocalStorageTitle">' + langVallydette.recoverTitle + '</h5>';
	htmlModal += '<button type="button" class="close" data-dismiss="modal" aria-label="' + langVallydette.close + '"></button>';
	htmlModal += '</div>';
	htmlModal += '<div class="modal-body">';
	htmlModal += langVallydette.recoverMessage;
	htmlModal += '</div>';
	htmlModal += '<div class="modal-footer">';
	htmlModal += '<button type="button" class="btn btn-secondary" data-dismiss="modal">' + langVallydette.cancel + '</button>';
	htmlModal += '<button type="button" id="localStorageSaveBtn" data-dismiss="modal" class="btn btn-primary">' + langVallydette.recoverAction + '</button>';
	htmlModal += '</div></div></div></div>';


	let elModal = document.getElementById('modal');
	elModal.innerHTML = htmlModal;

	var localStorageSaveBtn = document.getElementById("localStorageSaveBtn");
	localStorageSaveBtn.addEventListener('click', function () {
		getLocalStorage();
	});
}

/**
 *  Get the localstorage object
 */
function getLocalStorage() {
	
	let objLocalStorage = localStorage.getItem("lavallydette");
	dataVallydette = JSON.parse(objLocalStorage);
	
	btnLocalStorage.disabled=true;
	btnLocalStorage.classList.add("disabled");
	
	initGlobalLang(dataVallydette.checklist.lang, true);
	initGlobalTemplate(dataVallydette.checklist.template);
	
	checkTheVersion(dataVallydette.checklist.version);	

	runLangRequest();						
}


/**
 *  Initialization of events for page name edit button and page delete button.
	This function is running each time the user move to a new page 
 */
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


/**
 *  Run the HTML marker for the tests list.
  * @param {object} currentRefTests - Dynamic version of the vallydette object. Which means that it can be dynamically updated by the filters options.
 */
runTestListMarkup = function (currentRefTests) {

	let elrefTests = document.getElementById('mainContent');
	let htmlrefTests = '';
	let headingTheme = '';
	let headingCriterium = '';
	let nextIndex = 1;


	/** 'wcag' value correspond to the conformity checklist */
	if (globalTemplate === 'wcag') {

		setPageName(dataVallydette.checklist.page[currentPage].name);
		
		utils.removeElement(document.getElementById('btnExcelExport'));
		
		/** Modify column number */ 
		utils.columnDisplay(3);
	
		
		/** pass through the tests object to display each of them */
		for (let i in currentRefTests) {
			var currentTest = currentRefTests[i].ID;
			if (headingTheme != currentRefTests[i].themes) {
				if (headingTheme !== '') {
					htmlrefTests += '</div>';
				}

				headingTheme = currentRefTests[i].themes;
				let formattedHeadingTheme = utils.formatHeading(headingTheme);
				htmlrefTests += '<h2 class="sticky-top d-flex bg-white pt-4 pb-3 border-bottom" id="test-' + formattedHeadingTheme + '">' + currentRefTests[i].themes + '<button class="btn btn-secondary btn-icon ml-auto" type="button" data-toggle="collapse" data-target="#collapse-' + formattedHeadingTheme + '" aria-expanded="true" aria-controls="collapse-' + formattedHeadingTheme + '" aria-label="' + langVallydette.expanded + '"><span class="icon-arrow-down"></span></button></h2>';
				htmlrefTests += '<div class="collapse show px-2" id="collapse-' + formattedHeadingTheme + '">';
			}

			htmlrefTests += '<article class="card mb-3" id="' + currentTest + '"><div class="card-header border-light"><h3 class="card-title h5 d-flex align-items-center mb-0" id="heading' + currentTest + '"><span class="w-75">' + currentRefTests[i].title + '</span><span id="resultID-' + currentTest + '" class="ml-auto badge ' + getStatutClass(currentRefTests[i].resultatTest) + '">' + setStatutText(currentRefTests[i].resultatTest) + '</span></h3></div>';
			
			htmlrefTests += '<div class="card-body py-2 d-flex align-items-center justify-content-between"><ul class="list-inline m-0">';
			htmlrefTests += '<li class="custom-control custom-radio custom-control-inline mb-0"><input class="custom-control-input" type="radio" id="conforme-' + currentTest + '" name="test-' + currentTest + '" value="ok" ' + ((currentRefTests[i].resultatTest === arrayFilterNameAndValue[0][1]) ? "checked" : "") + '/><label for="conforme-' + currentTest + '" class="custom-control-label">' + langVallydette.template.status1 + '</label></li>';
			htmlrefTests += '<li class="custom-control custom-radio custom-control-inline mb-0"><input class="custom-control-input" type="radio" id="non-conforme-' + currentTest + '" name="test-' + currentTest + '" value="ko" ' + ((currentRefTests[i].resultatTest === arrayFilterNameAndValue[1][1]) ? "checked" : "") + '/><label for="non-conforme-' + currentTest + '" class="custom-control-label">' + langVallydette.template.status2 + '</label></li>';
			htmlrefTests += '<li class="custom-control custom-radio custom-control-inline mb-0"><input class="custom-control-input" type="radio" id="na-' + currentTest + '" name="test-' + currentTest + '" value="na" ' + ((currentRefTests[i].resultatTest === arrayFilterNameAndValue[2][1]) ? "checked" : "") + '/><label for="na-' + currentTest + '" class="custom-control-label">' + langVallydette.status5 + '</label></li>';
			htmlrefTests += '<li class="custom-control custom-radio custom-control-inline mb-0"><input class="custom-control-input" type="radio" id="nt-' + currentTest + '" name="test-' + currentTest + '" value="nt" ' + (((currentRefTests[i].resultatTest === arrayFilterNameAndValue[3][1]) || (currentRefTests[i].resultatTest === '')) ? "checked" : "") + '/><label for="nt-' + currentTest + '" class="custom-control-label">' + langVallydette.template.status4 + '</label></li>';
			htmlrefTests += '</ul>';

			htmlrefTests += '<button type="button" id="commentBtn' + currentTest + '" class="btn btn-link d-print-none" aria-labelledby="commentBtn' + currentTest + ' title-' + currentTest + '" data-toggle="modal" data-target="#modal' + currentTest + '">' + getCommentState(currentTest) + '</button>';

			htmlrefTests += '<button class="btn btn-secondary btn-icon d-print-none" type="button" data-toggle="collapse" data-target="#collapse-' + currentTest + '" aria-expanded="false" aria-controls="collapse-' + currentTest + '"><span class="icon-arrow-down" aria-hidden="true"></span><span class="sr-only">' + langVallydette.informations + '</span></button></div>';
			htmlrefTests += '<div class="collapse ' + ((currentRefTests[i].verifier || currentRefTests[i].exception) ? 'border-top' : '' ) + ' border-light pt-3 mx-3 d-print-block" id="collapse-' + currentTest + '">';

			if (currentRefTests[i].verifier) {
				htmlrefTests += '<h4 class="h5">' + langVallydette.toCheckHeading + '</h4>';
				htmlrefTests += currentRefTests[i].verifier;
			}
			
			if (currentRefTests[i].complement) {
				htmlrefTests += currentRefTests[i].complement;
			}

			if (currentRefTests[i].exception) {
				htmlrefTests += '<h4 class="h5">' + langVallydette.exceptionHeading + '</h4>';
				htmlrefTests += '<p>' + currentRefTests[i].exception + '</p>';
			}
			
			htmlrefTests += '<div class="py-2 ' + ((currentRefTests[i].verifier || currentRefTests[i].exception) ? 'border-top' : '' ) + 'border-light"><p class="text-muted mb-0"><abbr title="Web Content Accessibility Guidelines" aria-label="Web Content Accessibility Guidelines" lang="en">WCAG</abbr>&nbsp;:&nbsp;';
			for (let j in currentRefTests[i].wcag) {
				htmlrefTests += currentRefTests[i].wcag[j];
				j != ((currentRefTests[i].wcag).length - 1) ? htmlrefTests += ',  ' : '';
			}
			htmlrefTests += ' / Identifiant : ' + currentTest;
			htmlrefTests += '</p></div></div>';

			htmlrefTests += '</article>';
		}
	 /** 'audit' value correspond to the conformity checklist */
	} else if (globalTemplate === 'audit') {
		
		setPageName(dataVallydette.checklist.page[currentPage].name);
		utils.removeElement(document.getElementById('btnShowStatement'));
		
		if (document.getElementById('btnExcelExport') === null) {
		
			var btnExcelExport = utils.addElement('button', 'btnExcelExport', langVallydette.title.btnExcelExport, 'icon-Excel', true, ["btn", "btn-secondary", "btn-icon", "ml-2", "d-print-none"]);
		
			document.getElementById("auditInfoManager").appendChild(btnExcelExport);
			btnExcelExport.addEventListener('click', function () {
				excelExport();
			});
			
		}

		
		/** pass through the tests object to display each of them */
		for (let i in currentRefTests) {
			var currentTest = currentRefTests[i].ID;
			if (headingTheme != currentRefTests[i].themes) {
				if (headingTheme !== '') {
					htmlrefTests += '</div>';
				}

				headingTheme = currentRefTests[i].themes;
				let formattedHeadingTheme = utils.formatHeading(headingTheme);
				htmlrefTests += '<h2 class="sticky-top d-flex bg-white pt-4 pb-3 border-bottom" id="test-' + formattedHeadingTheme + '">' + currentRefTests[i].themes + '<button class="btn btn-secondary btn-icon ml-auto" type="button" data-toggle="collapse" data-target="#collapse-' + formattedHeadingTheme + '" aria-expanded="true" aria-controls="collapse-' + formattedHeadingTheme + '" aria-label="' + langVallydette.expanded + '"><span class="icon-arrow-down"></span></button></h2>';
				htmlrefTests += '<div class="collapse show px-2" id="collapse-' + formattedHeadingTheme + '">';
			}

			htmlrefTests += '<article class="card mb-3" id="' + currentTest + '"><div class="card-header border-light"><h3 class="card-title h5 d-flex align-items-center mb-0" id="heading' + currentTest + '" style="scroll-margin-top: 10.35em;"><span class="w-75">' + currentRefTests[i].title + ' <a class="header-anchor"  href="#heading' + currentTest + '" aria-label="' + langVallydette.anchorLink + '">#</a></span>'
			
			hasGoodPractice = false;
			if ((currentRefTests[i].wcag === undefined || currentRefTests[i].wcag[0] === "")) {
				hasGoodPractice = true;
				htmlrefTests += '<span class="ml-auto mr-1 badge badge-warning">'+langVallydette.goodPractice+'</span>';
			}
			
			if (currentRefTests[i].wcag) {
				hasAAA = false;
				currentRefTests[i].wcag.forEach(function (currentWcag) {
					
					if(getAAA(currentWcag)) {
						hasAAA = true;
						htmlrefTests += '<span class="ml-auto mr-1 badge badge-warning">AAA</span>';
					}
					
				});
			}
			
			htmlrefTests += '<span id="resultID-' + currentTest + '" class="' + ((!hasAAA && !hasGoodPractice) ? 'ml-auto ' : '') + 'badge ' + getStatutClass(currentRefTests[i].resultatTest) + '">' + setStatutText(currentRefTests[i].resultatTest) + '</span></h3></div>';
			
			htmlrefTests += '<div class="card-body py-2 d-flex align-items-center justify-content-between"><ul class="list-inline m-0">';
			htmlrefTests += '<li class="custom-control custom-radio custom-control-inline mb-0"><input class="custom-control-input" type="radio" id="conforme-' + currentTest + '" name="test-' + currentTest + '" value="ok" ' + ((currentRefTests[i].resultatTest === arrayFilterNameAndValue[0][1]) ? "checked" : "") + '/><label for="conforme-' + currentTest + '" class="custom-control-label">' + langVallydette.template.status1 + '</label></li>';
			htmlrefTests += '<li class="custom-control custom-radio custom-control-inline mb-0"><input class="custom-control-input" type="radio" id="non-conforme-' + currentTest + '" name="test-' + currentTest + '" value="ko" ' + ((currentRefTests[i].resultatTest === arrayFilterNameAndValue[1][1]) ? "checked" : "") + '/><label for="non-conforme-' + currentTest + '" class="custom-control-label">' + langVallydette.template.status2 + '</label></li>';
			htmlrefTests += '<li class="custom-control custom-radio custom-control-inline mb-0"><input class="custom-control-input" type="radio" id="na-' + currentTest + '" name="test-' + currentTest + '" value="na" ' + ((currentRefTests[i].resultatTest === arrayFilterNameAndValue[2][1]) ? "checked" : "") + '/><label for="na-' + currentTest + '" class="custom-control-label">' + langVallydette.status5 + '</label></li>';
			htmlrefTests += '<li class="custom-control custom-radio custom-control-inline mb-0"><input class="custom-control-input" type="radio" id="nt-' + currentTest + '" name="test-' + currentTest + '" value="nt" ' + (((currentRefTests[i].resultatTest === arrayFilterNameAndValue[3][1]) || (currentRefTests[i].resultatTest === '')) ? "checked" : "") + '/><label for="nt-' + currentTest + '" class="custom-control-label">' + langVallydette.template.status4 + '</label></li>';
			htmlrefTests += '</ul>';
			
			htmlrefTests += '<div class="btn-group" role="group" aria-label="' + langVallydette.issueManagement + '">';
			htmlrefTests += '<ul class="list-inline m-0">';
			htmlrefTests += '<li class="list-inline-item" aria-hidden="true">' + langVallydette.issues + '</li>';
			htmlrefTests += '<li class="list-inline-item"><button type="button" id="issueDisplayBtn' + currentTest + '" class="btn btn-secondary btn-icon mr-1 d-print-none" title="' + langVallydette.editIssue + '" data-toggle="modal" data-target="#modal' + currentTest + '" ' + ((currentRefTests[i].issues.length === 0) ? "disabled" : "") + '><span class="icon icon-Pencil" aria-hidden="true"></span><span class="sr-only">' + langVallydette.editIssue + '</span></button></li>';
			htmlrefTests += '<li class="list-inline-item"><button type="button" id="issueBtn' + currentTest + '" class="btn btn-secondary btn-icon d-print-none" title="' + langVallydette.addIssue + '" data-toggle="modal" data-target="#modalAddIssue"><span class="icon icon-Add" aria-hidden="true"></span></span><span class="sr-only">' + langVallydette.addIssue + '</span></button></li>';
			htmlrefTests += '</ul>';
			htmlrefTests += '</div>';
				
			htmlrefTests += '<button class="btn btn-secondary btn-icon d-print-none" type="button" data-toggle="collapse" data-target="#collapse-' + currentTest + '" aria-expanded="false" aria-controls="collapse-' + currentTest + '"><span class="icon-arrow-down" aria-hidden="true"></span><span class="sr-only">' + langVallydette.informations + '</span></button></div>';
			htmlrefTests += '<div class="collapse ' + ((currentRefTests[i].verifier || currentRefTests[i].exception) ? 'border-top' : '' ) + ' border-light pt-3 mx-3 d-print-block" id="collapse-' + currentTest + '">';

			if (currentRefTests[i].tests) {
				htmlrefTests += '<h4 class="h5">' + langVallydette.processHeading + '</h4>';
				htmlrefTests += utils.listOrParagraph(currentRefTests[i].tests);
			}
			
			if (currentRefTests[i].verifier) {
				htmlrefTests += '<h4 class="h5">' + langVallydette.toCheckHeading + '</h4>';
				htmlrefTests += utils.listOrParagraph(currentRefTests[i].verifier);
			}
			
			if (currentRefTests[i].resultat) {
				htmlrefTests += '<h4 class="h5">' + langVallydette.resultHeading + '</h4>';
				htmlrefTests += utils.listOrParagraph(currentRefTests[i].resultat);
			}
			
			if (currentRefTests[i].exception) {
				htmlrefTests += '<h4 class="h5">' + langVallydette.exceptionHeading + '</h4>';
				htmlrefTests += '<p>' + currentRefTests[i].exception + '</p>';
			}
			
			if (currentRefTests[i].raccourcis) {
				htmlrefTests += '<h4 class="h5">' + langVallydette.informations + '</h4>';
				htmlrefTests += '<p>' + currentRefTests[i].raccourcis+ '</p>';
			}

			htmlrefTests += '<div class="py-2 ' + ((currentRefTests[i].verifier || currentRefTests[i].exception) ? 'border-top' : '' ) + 'border-light"><p class="text-muted mb-0"><abbr title="Web Content Accessibility Guidelines" aria-label="Web Content Accessibility Guidelines" lang="en">WCAG</abbr>&nbsp;:&nbsp;';
			for (let j in currentRefTests[i].wcag) {
				htmlrefTests += currentRefTests[i].wcag[j];
				j != ((currentRefTests[i].wcag).length - 1) ? htmlrefTests += ',  ' : '';
			}
			htmlrefTests += ' / Identifiant : ' + currentTest;
			htmlrefTests += '</p></div></div>';

			htmlrefTests += '</article>';
			

		}
	
	/** 'rgaa' value correspond to the RGGA4 checklist */
	} else if (currentCriteriaListName === 'RGAA') {
		/** marked library is used to render md from RGAA json */
		const renderer = new marked.Renderer();
		marked.setOptions({
			renderer: renderer
		});

		/** Override function link(string href, string title, string text) */
		renderer.link = function (href, title, text) {
			return text;
		};
		renderer.paragraph = function (text) {
			return text;
		};
		/** end of marked configuration */

		/** pass through the tests object to display each of them */
		for (let i in currentRefTests) {
			if (headingTheme != currentRefTests[i].themes) {
				headingTheme = currentRefTests[i].themes;
				htmlrefTests += '<h2 id="test-' + utils.formatHeading(currentRefTests[i].themes) + '">' + currentRefTests[i].themes + '</h2>';
			}

			if (headingCriterium != currentRefTests[i].criterium) {
				headingCriterium = currentRefTests[i].criterium;

				htmlrefTests += '<article class="" id="' + currentRefTests[i].ID + '"><div class="card-header" id="heading' + i + '"><h3 class="card-title"><a class="" role="button" data-toggle="collapse" href="#collapse' + i + '" aria-expanded="false" aria-controls="collapse' + i + '"><span class="accordion-title">' + currentRefTests[i].title + '</span><span id="resultID-' + currentRefTests[i].ID + '" class="badge badge-pill ' + getStatutClass(currentRefTests[i].resultatTest) + ' float-lg-right">' + setStatutText(currentRefTests[i].resultatTest) + '</span></a></h3>';
			
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

				htmlrefTests += '<article class="mb-1" id="' + currentRefTests[i].ID + '"><div class="card-header" id="heading' + i + '"><span class="accordion-title">' + marked(currentRefTests[i].title) + '</span><span id="resultID-' + currentRefTests[i].ID + '" class="badge badge-pill ' + getStatutClass(currentRefTests[i].resultatTest) + ' float-lg-right">' + setStatutText(currentRefTests[i].resultatTest) + '</span>';

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
		/** 
			*	default template, was used with the vallydette first version.
			*	@todo Need to be uptaded or removed.
		*/
		for (let i in currentRefTests) {
			if (headingTheme != currentRefTests[i].themes) {
				headingTheme = currentRefTests[i].themes;
				htmlrefTests += '<h2 id="test-' + utils.formatHeading(currentRefTests[i].themes) + '">' + currentRefTests[i].themes + '</h2>';
			}
			htmlrefTests += '<article class="" id="' + currentRefTests[i].ID + '"><div class="card-header" id="heading' + i + '"><h3 class="card-title"><a class="" role="button" data-toggle="collapse" href="#collapse' + i + '" aria-expanded="false" aria-controls="collapse' + i + '"><span class="accordion-title">' + currentRefTests[i].title + '</span><span id="resultID-' + currentRefTests[i].ID + '" class="badge badge-pill ' + getStatutClass(currentRefTests[i].resultatTest) + ' float-lg-right">' + setStatutText(currentRefTests[i].resultatTest) + '</span></a></h3>';

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

	currentRefTests.length === 0 ? elrefTests.innerHTML = '<div class="alert alert-warning">' + langVallydette.warningNoResult + '</div>' : elrefTests.innerHTML = htmlrefTests;

	 
	/** event handler */
	for (let i in currentRefTests) {
	
		var radios = document.getElementsByName("test-" + currentRefTests[i].ID);
		var nodeArray = [];
		for (var j = 0; j < radios.length; ++j) {
			radios[j].addEventListener('click', function () {
				setStatusAndResults(this, currentRefTests[i].ID);
			}, false);
		}

		var comment = document.getElementById("commentBtn" + currentRefTests[i].ID);
		if (comment) {
			comment.addEventListener('click', function () {
				setComment(currentRefTests[i].ID, currentRefTests[i].title)
			}, false);
		}
		
		var issue = document.getElementById("issueBtn" + currentRefTests[i].ID);
		if (issue) {
			issue.addEventListener('click', function () {
				setIssue(currentRefTests[i].ID, currentRefTests[i].title, currentRefTests[i].IDorigin)
			}, false);
		}
		
		var issueDisplayBtn = document.getElementById("issueDisplayBtn" + currentRefTests[i].ID);
		if (issueDisplayBtn) {
			issueDisplayBtn.addEventListener('click', function () {
				displayIssue(currentRefTests[i].ID, currentRefTests[i].title)
			}, false);
		}
		
	}

	applyDisabledGroups();
}

/**
 * Localisation
 */

/**
 * Update global var globalLang width the selected languages.
 * Language ca be defined by a function parameter, or by a get parameter.
 * @param {string} lang - Language can be defined in function params.
 */
function initGlobalLang(lang, fromImport) {
	
	const paramString = window.location.search;
	const urlParams = new URLSearchParams(paramString);

	if (fromImport) {
		if (lang) {
			globalLang = lang;
		} else {
			globalLang = 'fr';
		}
	} else {
		if (urlParams.has('lang')) {
		globalLang = urlParams.get('lang');
		} else if (lang) {
			globalLang = lang;
		} else {
			globalLang = 'fr';
		}
	}
	
	document.documentElement.setAttribute('lang', globalLang);
	
	var selectFilesLang = document.getElementById("selectFiles");
	selectFilesLang.setAttribute('lang', globalLang);
	
	initLangMenu()

}

function initLangMenu() {
	if (globalLang === "fr") {
		var linkFr = document.getElementById("link-fr");
		linkFr.setAttribute('aria-current', true);
		linkFr.setAttribute('href', './?lang=fr&list=' + currentCriteriaListName);
		linkFr.classList.add("active");
		
		var linkEn = document.getElementById("link-en");
		linkEn.removeAttribute('aria-current');
		linkEn.setAttribute('href', './?lang=en&list=' + currentCriteriaListName);
		linkEn.classList.remove("active");
		
	} else {
		var linkEn = document.getElementById("link-en");
		linkEn.setAttribute('aria-current', true);
		linkEn.setAttribute('href', './?lang=en&list=' + currentCriteriaListName);
		linkEn.classList.add("active");
		
		var linkFr = document.getElementById("link-fr");
		linkFr.removeAttribute('aria-current');
		linkFr.setAttribute('href', './?lang=fr&list=' + currentCriteriaListName);
		linkFr.classList.remove("active");
	}
}

/**
 *  Useful for import and localstorage. Will load the interface localisation json depending on new object loaded, and run the vallydette app.
 */
function runLangRequest () {
	
	var langRequest = new XMLHttpRequest();
				langRequest.open("GET", "json/lang/"+globalLang+".json", true);
				langRequest.onreadystatechange = function () {
				  if(langRequest.readyState === 4 && langRequest.status === 200) {
					langVallydette = JSON.parse(langRequest.responseText);
					localizeHTML();
					runVallydetteApp();
			  } 
			};
			langRequest.send();
	
}


/**
 * Run the HTML elements localisations depending on file loaded by runLangRequest function.
 */
function localizeHTML() {
	Object.keys(langVallydette.template).forEach(function (key) {
		eleToLocalize = document.getElementById(key);
		if (eleToLocalize !== null) {
			eleToLocalize.innerHTML = langVallydette.template[key];
		}
		if (key === "selectFilesLabel") {
			eleToLocalize.setAttribute('data-browse', langVallydette.dataBrowse);
		}
	});
	
	Object.keys(langVallydette.title).forEach(function (key) {
		eleToLocalize = document.getElementById(key);
		if(eleToLocalize){
			eleToLocalize.setAttribute('title', langVallydette.title[key]);
			eleToLocalize.setAttribute('aria-label', langVallydette.title[key]);
		}
	});
	
	Object.keys(langVallydette.ariaLabelOnly).forEach(function (key) {
		eleToLocalize = document.getElementById(key);
		eleToLocalize.setAttribute('aria-label', langVallydette.ariaLabelOnly[key]);
	});

}


/**
 * Groups manager
 * Actually 'groups' are : captcha, form, multimedia, mobile
 * Each group own multiple tests.
 * If a group is disabled by the user, then all of his tests are passed to N/A.
 */
 
 
 /**
 * Initialization of group markup.
 */
function initGroups() {
	
	if (Object.keys(dataVallydette.checklist.page[currentPage].groups).length !== 0) {
		htmlgroups = '';
		htmlgroups = '<h6>' + langVallydette.groupHeading + '</h6>';
		htmlgroups += '<ul class="list-inline m-0">';
		for (var themeItem in dataVallydette.checklist.page[currentPage].groups)  {
			htmlgroups += '<li class="custom-control custom-checkbox custom-control-inline mb-0"><input type="checkbox"  class="custom-control-input"  id="' + themeItem + '" value="' + themeItem + '" name="' + themeItem + '" ' + (dataVallydette.checklist.page[currentPage].groups[themeItem].checked ? "checked" : "") + '/><label for="' + themeItem + '" class="custom-control-label">' + themeItem + '</label></li>';
		};
		htmlgroups += '</ul>';
		
		htlmgroupsMarker = document.getElementById("themeManager");
		htlmgroupsMarker.innerHTML = htmlgroups;
   	}
}

 /**
	* Get the groups checkboxes value from a page edition form, to determine if a group has been updated or not.
	* If true, then applyGroups is launched.
 */
function getGroups() {
	
	themeIsUpdated = false;
	
	for (var themeItem in dataVallydette.checklist.page[currentPage].groups) {
		
		if (document.getElementById(themeItem).checked !== dataVallydette.checklist.page[currentPage].groups[themeItem].checked) {
			themeIsUpdated = true;
			dataVallydette.checklist.page[currentPage].groups[themeItem].checked = document.getElementById(themeItem).checked;
		
		}
	}
	
	if (themeIsUpdated) {
		applyGroups();
	}
	
}

 /**
	* Update the tests value from current groups selection
 */
function applyGroups() {
	
	var radioToUpdate;
	var testValue;
	
	for (var themeItem in dataVallydette.checklist.page[currentPage].groups) {
		
		dataVallydette.checklist.page[currentPage].groups[themeItem].idTests.map(function(themeIdTest) {
			
			dataVallydette.checklist.page[currentPage].items.map(function(itemTest, index) {
	
				if (themeIdTest === itemTest.IDorigin) {
						
					const radioButtons = document.getElementsByName("test-"+itemTest.ID);
					
					if (dataVallydette.checklist.page[currentPage].items[index].resultatTest === "nt" || dataVallydette.checklist.page[currentPage].items[index].resultatTest === "na") {
					
						if (dataVallydette.checklist.page[currentPage].groups[themeItem].checked) {
			
							testValue = "nt";
							
							radioButtons.forEach(function(button) {
								button.disabled=false;
								button.classList.remove("disabled");
							});
						
						} else {
						
							testValue = "na";
		
							radioButtons.forEach(function(button) {
								button.disabled=true;
								button.classList.add("disabled");
							});
													
						}
							
						 /** testing if not null in case of an activated filter */
						radioToUpdate = document.getElementById(testValue+"-"+itemTest.ID);
					
					
						if (radioToUpdate!==null) {
							radioToUpdate.checked = true;
							setStatusAndResults(radioToUpdate, itemTest.ID);
						} else {
							dataVallydette.checklist.page[currentPage].items[index].resultatTest = testValue;
						}
					
					}
					
				
				
					
				
				}
			
			}); 	
			
		}); 
		
	}	
	
}


 /**
	* If a theme is unchecked then we applied a disabled style to the entire tests on the frontend component
 */
function applyDisabledGroups() {
		
	for (var themeItem in dataVallydette.checklist.page[currentPage].groups) {
		
		if (!dataVallydette.checklist.page[currentPage].groups[themeItem].checked) {
	
			dataVallydette.checklist.page[currentPage].groups[themeItem].idTests.map(function(themeIdTest) {
			
				dataVallydette.checklist.page[currentPage].items.map(function(itemTest, index) {
					
					if (themeIdTest === itemTest.IDorigin) {
						
						const radioButtons = document.getElementsByName("test-"+itemTest.ID);
						
						if (!dataVallydette.checklist.page[currentPage].groups[themeItem].checked) {

							radioButtons.forEach(function(button) {
								button.disabled=true;
								button.classList.add("disabled");
							});
													
						}
						
						return true;
				
					}
					
					return false;
					
				});
			
			});
									
		}
		
	}
	
}

/**
 * Compares the current checklist version to the last version
 * @param {number} currentChecklistVersion
*/
function checkTheVersion(currentChecklistVersion) {
	
	if (dataVallydette.checklist.referentiel && checklistVallydette[dataVallydette.checklist.referentiel]) {
				
		if (checklistVallydette[dataVallydette.checklist.referentiel].version) {
			
			globalVersion = checklistVallydette[dataVallydette.checklist.referentiel].version;
			
		} else {
			globalVersion = checklistVallydette["wcag-web"].version;
		}			
		
	} else {
		globalVersion = checklistVallydette["wcag-web"].version;
	}
	
	if ((currentChecklistVersion !== globalVersion) || (!currentChecklistVersion)) {
		var versionHTML = '';
		
		versionHTML += '<div id="alertVersion" class="container d-flex align-items-center alert alert-info alert-dismissible fade show" role="alert">';
		versionHTML += ' <span class="alert-icon"><span class="sr-only">Information</span></span>';
		versionHTML += ' <p>' + langVallydette.versionAlert1 + ' <strong>' + globalVersion + '</strong>. ' + langVallydette.versionAlert2 + ' <strong>' + currentChecklistVersion +'</strong></p>';
		versionHTML += ' <button id="closeVersion" type="button" class="close" data-dismiss="alert">';
		versionHTML +=	'  <span class="sr-only">' + langVallydette.closeAlert + '</span>';
		versionHTML +=  '</button>';
		versionHTML +='</div>';
		
		var mainHTML = document.getElementById("main");
		mainHTML.insertAdjacentHTML("afterBegin", versionHTML);
		
		var btnCloseVersion = document.getElementById("closeVersion");
		btnCloseVersion.addEventListener('click', function(){ dismissVersionMsg = true;}, false);
	}
	
}

/**
 * Computation manager
 * Conformity computation functions
*/

/**
 * Computation initialization. The dataWcag object is downloaded.
*/
function initComputation() {

	var matriceRequest = new XMLHttpRequest();
	var matriceWcag;
    method = "GET",
	matriceVallydette = 'json/wcag-' + globalLang+ '.json';

	matriceRequest.open(method, matriceVallydette, true);
	matriceRequest.onreadystatechange = function () {
	  if(matriceRequest.readyState === 4 && matriceRequest.status === 200) {
			dataWCAG = JSON.parse(matriceRequest.responseText);
			
			dataWCAG.items.forEach(initRulesAndTests);

            var btnShowResult = document.getElementById("btnShowResult");
            btnShowResult.addEventListener('click', function () {
                runComputation();
				utils.setPageTitle(langVallydette.auditResult);
				utils.resetActive(document.getElementById("pageManager"));
				utils.putTheFocus(document.getElementById("pageName"));
            }, false);
		
	    runTestListMarkup(dataVallydette.checklist.page[currentPage].items);

	  }
	};
	matriceRequest.send();
	
}

/**
 * Updates each wcag with necessary tests from the checklist
 * @param {object} rules - object that contains all the wcags
*/
function initRulesAndTests (rules) {
	
	 for (let i in dataVallydette.checklist.page[0].items) {
		 for (let j in dataVallydette.checklist.page[0].items[i].wcag) {
			
			var testWCAG = dataVallydette.checklist.page[0].items[i].wcag[j].split(" ");
			if (testWCAG[0] === rules.wcag) {
				
				rules.tests.push(dataVallydette.checklist.page[0].items[i].IDorigin);
				rules.resultat = "nt";
			}
			
		}
	
	}
	
}

/**
 * Pass through both dataVallydette et dataWCAG to build the pageResults array, which contains the wcag results for each pages.
 * @param {boolean} obj - if true, function returns only the full pagesResults object (with test title) whitout running the final computation
 * @return {array} pagesResults - Contains all wcag results by pages.
*/
function runComputation(obj) {

	/**
	* @param {array} pagesResults - Contains all wcag results by pages.
	*/
    pagesResults = [];
	
	/**
	* Initilization of the dataWCAG results, to be sure that the results are correctly re-computed each time the audit results are displayed.
	*/
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
			   
				if (dataWCAG.items[k].tests.length > 0) {
					pagesResults[i].items[k].resultat = "nt";
				} else {
					pagesResults[i].items[k].resultat = "na";
				}
				
				pagesResults[i].items[k].complete = true;
				pagesResults[i].items[k].test = [];
				pagesResults[i].items[k].name = dataWCAG.items[k].name;
				
				/**
				* Pass through each test of a wcag.
				*/
				for (let l in dataWCAG.items[k].tests) {
					/**
					* Gets each test value, and updates the current wcag rules, basing on computation rules.
					*/

					for (let j in dataVallydette.checklist.page[i].items) {
						
						if (dataWCAG.items[k].tests[l] === dataVallydette.checklist.page[i].items[j].IDorigin) {
							
							testObj = {};
							testObj.title = dataVallydette.checklist.page[i].items[j].title;
							testObj.result = dataVallydette.checklist.page[i].items[j].resultatTest;
							pagesResults[i].items[k].test.push(testObj);
							
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
									if (dataWCAG.items[k].resultat !== false) {
										dataWCAG.items[k].resultat = true;
									}
									
									break;	
									
								} else if (dataVallydette.checklist.page[i].items[j].resultatTest === "ko") {
									pagesResults[i].items[k].resultat = false;
									break;	
									
									
								} else if ((dataVallydette.checklist.page[i].items[j].resultatTest === "na") && (pagesResults[i].items[k].resultat === "nt")) {
									pagesResults[i].items[k].resultat = "na";
									
									if (dataWCAG.items[k].resultat !== false || dataWCAG.items[k].resultat !== true ) {
										dataWCAG.items[k].resultat = "na";
									}
									
									break;	
								}

							}	
						}
					}

					//if (pagesResults[i].items[k].complete === false) {
						// pagesResults[i].items[k].resultat = "nt";
					//}
				}
			
        }
    }
	
	pagesResults = pagesResultsComputation(pagesResults);
	dataWCAGComputation();
	
	if (obj) {
		return pagesResults;
	} else {		
		return runFinalComputation(pagesResults);
	}

}


function pagesResultsComputation(pagesResultsArray) {
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


		/**
		 * 	Deletes the AAA wcag rules. Computation is made only on A and AA level rules.
		*/
		var indexItem = 0;
		for (let j in pagesResultsArray[i].items) {
			if (pagesResultsArray[i].items[indexItem].level === 'AAA') {
				pagesResultsArray[i].items.splice(indexItem,1);
			} else {
				indexItem = indexItem+1;
			}
		}

		/**
		 * 	Gets the number of true, false, non-applicable and non-tested by wcag level and by pages.
		 *  If one result is non-tested, then the property 'complete' is passed false, and the final result is not displayed (only the number of non-tested items).
		*/
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

		/**
		 * 	If all the tests of a page are non-applicables (hypothetical but tested)
		*/  
		if (nbTotal===0 && nbNA>0) {
			pagesResultsArray[i].result = "NA";
		} else {
			pagesResultsArray[i].result = Math.round((nbTrue / nbTotal) * 100);
		}


		/** Adds the result to the pages result array. */  
		pagesResultsArray[i].conformeA = nbTrueA;
		pagesResultsArray[i].conformeAA = nbTrueAA;
		pagesResultsArray[i].nonconformeA = nbFalseA;
		pagesResultsArray[i].nonconformeAA = nbFalseAA;
		pagesResultsArray[i].naA = nbNaA;
		pagesResultsArray[i].naAA = nbNaAA;
		pagesResultsArray[i].totalconforme = nbTrueA + nbTrueAA;
		pagesResultsArray[i].totalnonconforme = nbFalseA + nbFalseAA;
	}

	/** Final global pages result computation. */  
    for (let i in pagesResultsArray) {
        if (pagesResultsArray[i].result != "NA") {
            finalTotal = finalTotal + pagesResultsArray[i].result;
            nbPage = nbPage + 1;
        }
    }
	
	/** Final conformity rate. */ 
    finalResult = Math.round((finalTotal / nbPage));
	dataWCAG.globalPagesResult = finalResult;
	
	return pagesResultsArray;
}


/**
	*  Gets the number of true, false, non-applicable and non-tested by wcag level only.
	*  If one result is non-tested, then the property 'complete' is passed false, and the final result is not displayed (only the number of non-tested items).
*/
function dataWCAGComputation() {
	

	dataWCAG.complete = true;

	/**
	 * 	Deletes the AAA wcag rules. Computation is made only on A and AA level rules.
	*/
	
		for (let i in dataWCAG.items) {
			if (dataWCAG.items[i].resultat === 'AAA' && dataWCAG.items[i].resultat === 'nt') {
				dataWCAG.complete = false;
			}
		}
		
		/** Adds the results to the WCAG object. */  
		dataWCAG.conformeA = dataWCAG.items.filter(item => item.level ==="A" && item.resultat === true).length;
		dataWCAG.conformeAA = dataWCAG.items.filter(item => item.level ==="AA" && item.resultat === true).length;
		dataWCAG.nonconformeA = dataWCAG.items.filter(item => item.level ==="A" && item.resultat === false).length;
		dataWCAG.nonconformeAA = dataWCAG.items.filter(item => item.level ==="AA" && item.resultat === false).length;
		dataWCAG.naA = dataWCAG.items.filter(item => item.level ==="A" && item.resultat === "na").length;
		dataWCAG.naAA = dataWCAG.items.filter(item => item.level ==="AA" && item.resultat === "na").length;
		dataWCAG.totalconforme = dataWCAG.conformeA + dataWCAG.conformeAA;
		dataWCAG.totalnonconforme = dataWCAG.nonconformeA + dataWCAG.nonconformeAA;

		dataWCAG.totalA = dataWCAG.items.filter(function(item){return item.level==="A"}).length;
		dataWCAG.totalAA = dataWCAG.items.filter(function(item){return item.level==="AA"}).length;
	
		dataWCAG.nbTotalWcag = dataWCAG.items.filter(item => item.resultat === true || item.resultat === false).length;
		dataWCAG.nbTrueWcag = dataWCAG.items.filter(item => item.resultat === true).length;
		dataWCAG.nbFalseWcag = dataWCAG.items.filter(item => item.resultat === false).length;
		dataWCAG.nbNaWcag = dataWCAG.items.filter(item => item.resultat === "na").length;

		/**
		* 	If all the wcag are non-applicables (hypothetical but tested)
		*/ 
		if (dataWCAG.nbTotalWcag===0 && dataWCAG.nbNaWcag>0) {
			dataWCAG.result = "NA";
		} else {
			dataWCAG.result = Math.round((dataWCAG.nbTrueWcag / dataWCAG.nbTotalWcag) * 100);
			dataWCAG.resultA = Math.round((dataWCAG.conformeA / (dataWCAG.conformeA+dataWCAG.nonconformeA)) * 100);
			dataWCAG.resultAA = Math.round((dataWCAG.conformeAA / (dataWCAG.conformeAA+dataWCAG.nonconformeAA)) * 100);
		}
	
}

function getAAA(currentWcag) {
	
	let level = false;
	
	if (currentWcag) {
		dataWCAG.items.forEach(function(current){
			
			if (current.wcag === currentWcag) {
				
				if (current.level === 'AAA') {
					level = true;
				} 
			} 
		
		});
		
	}
	return level;
	
}

/**
 * 	Computes the conformity rate by pages and the final audit conformity rate (average rate).
 *	Computes the wcag summary table (conformity, non-conformity and non-applicable tests by wcag levels).
 *	Builds the non-conformity list
 *	Builds the audit result markup.
 *  @param {array} pagesResultsArray - Contains all wcag results by pages.
*/
function runFinalComputation(pagesResultsArray) {
  
	/**
	 * 	Gets the number of non-tested items.
	 @param {number} nbNT - number of non-tested items.
	*/  
    nbNTResultsArray = getNbNotTested();

    var nbNT = nbNTResultsArray.total;

    /**Build the audit conformity markup. */ 
    
	let computationContent = '';

	setPageName(langVallydette.auditResult);
	removeContextualMenu();
	removeFilterSection();
	
	/** Modify column number */ 
	utils.columnDisplay(2);
	
	 computationContent += '<h2 class="pt-4 pb-3">' + langVallydette.auditTxt14 + '</h2>';
	 
    if (nbNT >= 1) {
        computationContent += '<p class="h3">' + langVallydette.auditTxt1 + ' : <span class="text-primary">' + langVallydette.auditTxt2 + '</span></p>';
		computationContent += '<p class="h3 pb-3">' + langVallydette.auditTxt13 + ' : <span class="text-primary">' + langVallydette.auditTxt2 + '</span></p>';
    } else if (nbNT === 0 && !isNaN(dataWCAG.globalPagesResult)) {
        computationContent += '<p class="h3">' + langVallydette.auditTxt1 + ' : <span class="text-primary">' + dataWCAG.globalPagesResult + '%</span></p>';
		computationContent += '<p class="h3 pb-3">' + langVallydette.auditTxt13 + ' : <span class="text-primary">' + Math.round(dataWCAG.result) + '%</span></p>';
	}	
	
		computationContent += '<ul class="nav nav-tabs" role="tablist">';
		computationContent += '	<li class="nav-item" role="presentation"><a class="nav-link active" href="#resultatPage" data-toggle="tab" id="tabResultatPage" role="tab" tabindex="0" aria-selected="true" aria-controls="resultatPage">' + langVallydette.auditTxt3 + '</a></li>';
		computationContent += '	<li class="nav-item" role="presentation"><a class="nav-link" href="#synthesePages" data-toggle="tab" id="tabsynthesePages" role="tab" tabindex="-1" aria-selected="false" aria-controls="synthesePages">' + langVallydette.auditTxt4 + '</a></li>';	
		computationContent += '	<li class="nav-item" role="presentation"><a class="nav-link" href="#syntheseNiveaux" data-toggle="tab" id="tabsyntheseNiveaux" role="tab" tabindex="-1" aria-selected="false" aria-controls="syntheseNiveaux">' + langVallydette.auditTxt15 + '</a></li>';	
		computationContent += '	<li class="nav-item" role="presentation"><a class="nav-link" href="#nonConformites" data-toggle="tab" id="tabNonConformites" role="tab" tabindex="-1" aria-selected="false" aria-controls="nonConformites">' + langVallydette.auditTxt5 + '</a></li>';
		computationContent += '</ul>';
		
		computationContent += '<div class="tab-content border-0">';
		computationContent += '  <div class="tab-pane active" id="resultatPage" role="tabpanel" tabindex="0" aria-hidden="false" aria-labelledby="tabResultatPage">';
		
		
		for (let i in pagesResultsArray) {
			computationContent += '<h3>' + pagesResultsArray[i].name + ' : </h3>';
			
			computationContent += '<ul>';
			computationContent += '<li><strong>' + langVallydette.auditTxt12 + '</strong> ';
			computationContent += (!isNaN(pagesResultsArray[i].result) && pagesResultsArray[i].result!=="NA") ? pagesResultsArray[i].result + ' % ' : '';
			computationContent += (pagesResultsArray[i].complete === false) ?  '(' + langVallydette.auditTxt6 + ' / ' + nbNTResultsArray['page' + i] + ' ' + langVallydette.auditTxt7 +')' : '';
			computationContent += '</li>';
			computationContent += (pagesResultsArray[i].url!== undefined && pagesResultsArray[i].url!== '') ? '<li><strong> url : </strong>' + pagesResultsArray[i].url + '</li>': '';
			computationContent += '</ul>';
		}
		
		computationContent += '  </div>';
		
		computationContent += '  <div class="tab-pane" id="synthesePages" role="tabpanel" tabindex="-1" aria-hidden="true" aria-labelledby="tabsynthesePages">';
		computationContent += '<table class="table table-striped"><caption class="sr-only">' + langVallydette.auditTxt4 + '</caption>';
		computationContent += '<thead><tr>';
		computationContent += '<th scope="row">' + langVallydette.auditTxt4 + '</th>';
		computationContent += '<th scope="col" colspan="2" class="text-center">' + langVallydette.template.status1 + '</th>';
		computationContent += '<th scope="col" colspan="2" class="text-center">' + langVallydette.template.status2 + '</th>';
		computationContent += '<th scope="col" colspan="2" class="text-center">' + langVallydette.template.status3 + '</th>';
		computationContent += '<th rowspan="2" class="text-center bg-light">' + langVallydette.result + '</th>';
		computationContent += '</tr><tr>';
		computationContent += '<th scope="col">' + langVallydette.auditTxt10 + '</th>';
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
			computationContent += (!isNaN(pagesResultsArray[i].result) && pagesResultsArray[i].result!=="NA") ? pagesResultsArray[i].result + ' % ' : '';
			computationContent += (pagesResultsArray[i].complete === false) ?  '(' + langVallydette.auditTxt6 + ')' : '';	
			computationContent += '</td>';
			computationContent += '</tr>';
			
		}
		computationContent += '</tbody>';
		computationContent += '</table>';
		computationContent += ' </div>';
		
		computationContent += '<div class="tab-pane" id="syntheseNiveaux" role="tabpanel" tabindex="-1" aria-hidden="true" aria-labelledby="tabsyntheseNiveaux">';
		computationContent += '<table class="table table-striped"><caption class="sr-only">' + langVallydette.auditTxt10 + '</caption>';
		computationContent += '<thead><tr>';
		computationContent += '<th scope="row">' + langVallydette.auditTxt10 + '</th>';
		computationContent += '<th scope="col" class="text-center">A</th>';
		computationContent += '<th scope="col" class="text-center">AA</th>';
		computationContent += '<th scope="col" class="text-center">Total</th>';
		computationContent += '</tr></thead>';
		computationContent += '<tbody>';
		
		computationContent += '<tr>';
		computationContent += '<th scope="row" class="font-weight-bold">Nombre de critères</th>';
		computationContent += '<td class="text-center">' + dataWCAG.totalA + '</td>';
		computationContent += '<td class="text-center">' + dataWCAG.totalAA + '</td>';
		computationContent += '<td class="text-center">' + (dataWCAG.totalA+dataWCAG.totalAA) + '</td>';
		computationContent += '</tr>';
		
		computationContent += '<tr>';
		computationContent += '<th scope="row" class="font-weight-bold">' + langVallydette.template.status1 + '</th>';
		computationContent += '<td class="text-center">' + dataWCAG.conformeA + '</td>';
		computationContent += '<td class="text-center">' + dataWCAG.conformeAA + '</td>';
		computationContent += '<td class="text-center">' + dataWCAG.totalconforme + '</td>';
		computationContent += '</tr>';
		
		computationContent += '<tr>';
		computationContent += '<th scope="row" class="font-weight-bold">' + langVallydette.template.status2 + '</th>';
		computationContent += '<td class="text-center">' + dataWCAG.nonconformeA + '</td>';
		computationContent += '<td class="text-center">' + dataWCAG.nonconformeAA + '</td>';
		computationContent += '<td class="text-center">' + dataWCAG.totalnonconforme + '</td>';
		computationContent += '</tr>';
		
		computationContent += '<tr>';
		computationContent += '<th scope="row" class="font-weight-bold">' + langVallydette.template.status3 + '</th>';
		computationContent += '<td class="text-center">' + dataWCAG.naA + '</td>';
		computationContent += '<td class="text-center">' + dataWCAG.naAA + '</td>';
		computationContent += '<td class="text-center">' + (dataWCAG.naA+dataWCAG.naAA) + '</td>';
		computationContent += '</tr>';
		
		computationContent += '<tr>';
		computationContent += '<th scope="row" class="font-weight-bold bg-light">' + langVallydette.auditTxt16 + '</th>';
		computationContent += '<td class="text-center bg-light">';
		computationContent += (!isNaN(dataWCAG.resultA) && dataWCAG.result!=="NA") ? dataWCAG.resultA + ' % ' : '';
		computationContent += (dataWCAG.complete === false) ?  '(' + langVallydette.auditTxt6 + ')' : '';	
		computationContent += '</td>';
		computationContent += '<td class="text-center bg-light">';
		computationContent += (!isNaN(dataWCAG.resultAA) && dataWCAG.result!=="NA") ? dataWCAG.resultAA + ' % ' : '';
		computationContent += (dataWCAG.complete === false) ?  '(' + langVallydette.auditTxt6 + ')' : '';	
		computationContent += '</td>';
		computationContent += '<td class="text-center bg-light">';
		computationContent += (!isNaN(dataWCAG.result) && dataWCAG.result!=="NA") ? dataWCAG.result + ' % ' : '';
		computationContent += (dataWCAG.complete === false) ?  '(' + langVallydette.auditTxt6 + ')' : '';	
		computationContent += '</td>';
		computationContent += '</tr>';
		
		computationContent += '</tbody>';
		computationContent += '</table>';
		computationContent += ' </div>';
		
		computationContent += '<div class="tab-pane" id="nonConformites" role="tabpanel" tabindex="-1" aria-hidden="true" aria-labelledby="tabNonConformites">';
		
			/** 
				*	Display the non-conformity list.
				*	@param {object} listNonConformity - object of the falses wcag rules.
			*/ 	
			const listNonConformity = dataWCAG.items.filter(dataWcagResult => dataWcagResult.resultat === false);
			
			if (listNonConformity.length > 0) {
				
				for (let i in listNonConformity) {
				
					computationContent += '<ul>';
					computationContent += '<li><strong>' + langVallydette.auditTxt9 + ' ' + listNonConformity[i].wcag + ', ' + listNonConformity[i].name  + ', niveau ' + listNonConformity[i].level + '</strong>';
				
					/** Remove undefined values */
					listNonConformity[i].comment = listNonConformity[i].comment.filter(x => x);
					
					if (listNonConformity[i].comment.length > 0) {
					
							computationContent += '<ul>';
							for (let j in listNonConformity[i].comment) {
								computationContent += '<li>' + utils.htmlEntities(listNonConformity[i].comment[j]) + '</li>';	
							}
							computationContent += '</ul>';	
					} 
					
					computationContent += '</li>';
					computationContent += '</ul>';
		
				}
				
			} else {
				
				computationContent += '<p>' + langVallydette.auditTxt11 + '</p>';
				
			}
			
			
		
		computationContent += '</div>';

    htmlMainContent.innerHTML = computationContent;
}

/**
 * Get the number of non-tested items per pages.
 * @return {object} nbNTArray - number of non-tested items per pages.
*/
function getNbNotTested() {
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
}

/**
 * Multipage manager
*/

/**
 * Initialization of the pagination menu.
 @param {object} pages - pages from dataVallydette
*/

initPagination = function (pages) {
	var allPages = pages.page;

	var pageElement = document.getElementById("pageManager");
	pageElement.innerHTML = "<div class='container'><ul class='nav'></ul></div>";

	let AddPage = document.createElement("li");
	AddPage.classList.add("nav-item");
	var btnAddPage = document.createElement("button");
	btnAddPage.innerHTML = langVallydette.addPage + "&nbsp;<span class='icon-add-more' aria-hidden='true'></span>";
	btnAddPage.setAttribute('id', "btnAddPage");
	btnAddPage.classList.add("btn", "btn-link", "nav-link", "border-0");

	AddPage.appendChild(btnAddPage);
	pageElement.querySelector(".nav").appendChild(AddPage);

	btnAddPage.addEventListener('click', function () {
		addPage();
	}, false);

	initContextualMenu(0, "pageID-0");
	
	for (let i in allPages) {
		let newPage = document.createElement("li");
		newPage.classList.add("nav-item");

		let newBtnPage = document.createElement("button");

		newBtnPage.innerHTML = allPages[i].name;
		newBtnPage.setAttribute('id', allPages[i].IDPage);
		newBtnPage.classList.add("btn", "btn-link", "nav-link", "border-0");
		if (i === 0) {
			utils.setActive(newBtnPage);
		}
		newPage.appendChild(newBtnPage);
		pageElement.querySelector(".nav").appendChild(newPage);

		let thisNewBtn = document.getElementById(allPages[i].IDPage);
		thisNewBtn.addEventListener('click', function () {
			showPage(thisNewBtn.id)
		}, false);

		let btnDelPage = document.getElementById("btnDelPage");
		allPages.length > 1 ? btnDelPage.disabled = false : btnDelPage.disabled = true;
	}
}

/**  Adds a new page to the dataVallydette object and updates the page menu. */
addPage = function () {
	
	/**  Duplicate the page object and push it to the dataVallydette as a new page. */
	var arr2 = JSON.parse(JSON.stringify(dataVallydette.checklist.page[currentPage]));
	dataVallydette.checklist.page.push(arr2);

	indexPage = dataVallydette.checklist.page.length - 1;
	
	var newIdPage = new Uint32Array(1);
	window.crypto.getRandomValues(newIdPage);
	newIdPage = "pageID-" + newIdPage;

	var btnFirstPage = document.getElementById(dataVallydette.checklist.page[0].IDPage);
	btnFirstPage.disabled = false;

	dataVallydette.checklist.page[indexPage].IDPage = newIdPage;
	dataVallydette.checklist.page[indexPage].name = langVallydette.pageName;
	dataVallydette.checklist.page[indexPage].url = "";
	dataVallydette.checklist.page[indexPage].items.forEach(initNewPage);

	initNewThemes(indexPage);
	
	jsonStr = JSON.stringify(dataVallydette);

	/**  Display the updated pagination */
	let newPage = document.createElement("li");
	newPage.classList.add("nav-item");
	var pageElement = document.getElementById("pageManager");
	var newBtnPage = document.createElement("button");

	newBtnPage.innerHTML = langVallydette.pageName;
	newBtnPage.setAttribute('id', newIdPage);
	newBtnPage.classList.add("btn", "btn-link", "nav-link", "border-0");
	newPage.appendChild(newBtnPage);
	pageElement.querySelector(".nav").appendChild(newPage);

	var thisNewBtn = document.getElementById(newIdPage);
	var currentIdPage = thisNewBtn.getAttribute('id');
	thisNewBtn.addEventListener('click', function () {
		showPage(currentIdPage)
	}, false);

	/**  Enabled delete button */
	var currentBtnDelPage = document.getElementById('btnDelPage');
	currentBtnDelPage.disabled = false;
	
	showPage(currentIdPage);
}

/**  Initialization of some properties */
initNewPage = function (item) {
	item.ID = item.ID + '-p' + indexPage;
	item.resultatTest = 'nt';
	item.commentaire = '';
	if(item.issues) {
		item.issues.splice(0, item.issues.length);
	}
	
	/**  Initialization of the groups */
	if(dataVallydette.checklist.page[indexPage].groups[item.group]){
		dataVallydette.checklist.page[indexPage].groups[item.group].idTests.push(item.IDorigin);
		dataVallydette.checklist.page[indexPage].groups[item.group].checked = true;
	} 
			
	
}

/**  Initialization of themes */
initNewThemes = function () {
	for (var themeItem in dataVallydette.checklist.page[indexPage].themes)  {
		dataVallydette.checklist.page[indexPage].themes[themeItem].checked = true;
	};
}

/**  
*	Initialization dataWCAG properties, needed for computation.
*	@param {object} item - dataWCAG items (rules) 
*/
initProperties = function (item) {
	item.resultat = 'nt';
	item.comment = [];
}

/**  
*	Initialization of page contextual menu, each time the user move to a new page.
*	@param {number} currentPageIndex - page index into dataVallydette. 
*	@param {number} currentPageID - page ID into dataVallydette. 
*/
initContextualMenu = function (currentPageIndex, currentPageID) {
	var htmlMenu = '';
	htmlMenu += '<button class="btn btn-secondary btn-icon" id="btnPageName" aria-label="' + langVallydette.editPageName + '" title="' + langVallydette.editPageName + '" data-element="pageName" data-secondary-element="' + currentPageID + '" data-property="checklist.page.' + currentPageIndex + '.name" data-toggle="modal" data-target="#modalEdit"><span class="icon-Pencil" aria-hidden="true"></span></button>';
	htmlMenu += '<button id="btnDelPage" class="btn btn-secondary btn-icon ml-2" aria-label="' + langVallydette.deletePageName + '" title="' + langVallydette.deletePageName + '" data-element="pageName" data-property="checklist.page.' + currentPageIndex + '" data-toggle="modal" data-target="#modalDelete" data-pagination="' + currentPageID + '"><span class="icon-trash" aria-hidden="true"></span></button>';
	htmlMenu += '<hr class="border-light  w-100">';
	htmlContextualMenuContent.innerHTML = htmlMenu;
	
	btnActionPageEventHandler ();
}


/** Remove the page contextual menu (needed for audit results page). */
removeContextualMenu = function () {
	htmlContextualMenuContent.innerHTML = "";
}

/** 
*	Shows a new page when using the pagination menu.
*	@param {number} id - ID of the page into the dataVallydette.
*/
showPage = function (id) {
	/** Gets the index from the ID. */
	var index = dataVallydette.checklist.page.findIndex(function (o) {
		return o.IDPage === id;
	})

	
	/** Update the global var currentPage with the index */
	currentPage = index;

	/** Load the page content */
	loadChecklistObject();

	/** Init the page contextual menu */
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

/** 
*	Displays the delete popin confirmation
*	@param {string} targetElement - html id element that contains the current page name.
*/
setDeletePage = function (targetElement) {

	let htmlModal = '';
	htmlModal = '<div id="modalDelete" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="">';
	htmlModal += '<div class="modal-dialog modal-dialog-scrollable" role="document">';
	htmlModal += '<div class="modal-content">';
	htmlModal += '<div class="modal-header">';
	htmlModal += '<h5>' + langVallydette.delete + '</h5>';
	htmlModal += '<button type="button" class="close" data-dismiss="modal" aria-label="' + langVallydette.close + '"></button>';
	htmlModal += '</div>';
	htmlModal += '<div class="modal-body">';
	htmlModal += langVallydette.deletePageName + getPropertyValue(targetElement) + ' ?';
	htmlModal += '</div>';
	htmlModal += '<div class="modal-footer">';
	htmlModal += '<button type="button" class="btn btn-secondary" data-dismiss="modal">' + langVallydette.cancel + '</button>';
	htmlModal += '<button type="button" id="deteleSaveBtn" data-dismiss="modal" class="btn btn-primary">' + langVallydette.validate + '</button>';
	htmlModal += '</div></div></div></div>';

	/**  html modal container */
	let elModal = document.getElementById('modal');
	elModal.innerHTML = htmlModal;

	/**  popin event handler */
	var deteleSaveBtn = document.getElementById("deteleSaveBtn");
	deteleSaveBtn.addEventListener('click', function () {
		deletePage(currentPage, targetElement)
	});
}

/** 
*	Deletes the current page, and item from the pagination menu
*	@param {number} currentPage - global var that contains the current page index.
*	@param {string} targetElement - html id element that contains the current page name.
*/
deletePage = function (currentPage, targetElement) {

	/** Removes page from dataVallydette. */
	dataVallydette.checklist.page.splice(currentPage, 1);

	/** If there is only one page left, then delete button is disabled. */
	var currentBtnDelPage = document.getElementById('btnDelPage');
	dataVallydette.checklist.page.length === 1 ? currentBtnDelPage.disabled = true : "";

	/** Removes page button from pagination menu. */
	var paginationBtnId = currentBtnDelPage.dataset.pagination;
	var paginationBtn = document.getElementById(paginationBtnId);
	paginationBtn.remove();

	/** Updates global var currentPage to load the previous page from pagination menu. */
	currentPage != 0 ? currentPage = currentPage - 1 : "";

	/** Shows the previous page from pagination menu */
	newPageId = dataVallydette.checklist.page[currentPage].IDPage;
	showPage(newPageId);

	/** Updates the json export */
	jsonUpdate();

}

/** 
*	Sets the current page name (main heading).
*	@param {string} value - page name.
*/
function setPageName(value) {
	
	var currentPageName = document.getElementById('pageName');
	currentPageName.innerHTML = value;
	
}

/** @todo to be removed, obsolete function */
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
 * Updates both tests results into the object and components states on the frontend side
*/
    
/**
 * Gets the badge class from the badge element
 * @param {string} lastResult - current result of a test.
 * @return {string} statutClass - returns a badge class.
*/
getStatutClass = function (lastResult) {
	if (lastResult === arrayFilterNameAndValue[0][1] || lastResult === true) {
		statutClass = "badge-success";
	} else if (lastResult === arrayFilterNameAndValue[1][1] || lastResult === false) {
		statutClass = "badge-danger";
	} else if (lastResult === arrayFilterNameAndValue[2][1]) {
		statutClass = "badge-info";
	} else {
		statutClass = "badge-light";
	}
	return statutClass;
}

/**
 * Sets the badge innerText
 * @param {string} lastResult - current result of a test.
 * @return {string} statutText - returns the badge innerText.
*/
setStatutText = function (lastResult) {
	if (lastResult === arrayFilterNameAndValue[0][1] || lastResult === true) {
		statutText = langVallydette.template.status1;
	} else if (lastResult === arrayFilterNameAndValue[1][1] || lastResult === false) {
		statutText = langVallydette.template.status2;
	} else if (lastResult === arrayFilterNameAndValue[2][1]) {
		statutText = langVallydette.template.status3;
	} else {
		statutText = langVallydette.template.status4;
	}
	return statutText;
}


/**
 * Sets the test result into the vallydette object.
 * Updates the badge status
 * @param {object} ele - radio button checked from a test.
 * @return {string} targetId - test ID that has been checked.
*/
setStatusAndResults = function (ele, targetId) {
	
	/** Updates the test result into the object	*/
	for (let i in dataVallydette.checklist.page[currentPage].items) {
		if (dataVallydette.checklist.page[currentPage].items[i].ID === targetId) {
			lastResult = getStatutClass(dataVallydette.checklist.page[currentPage].items[i].resultatTest);
			dataVallydette.checklist.page[currentPage].items[i].resultatTest = ele.value;
		}
	}

	/** Updates the status result into the badge element */
	testResult = document.getElementById("resultID-" + targetId + "");
	testResult.classList.remove(lastResult);
	statutClass = getStatutClass(ele.value);
	testResult.innerText = setStatutText(ele.value);
	testResult.classList.add(statutClass);

	jsonUpdate();
}

/**
 * Edition manager
 * Used to update audit and pages properties
 */
 
/**
 * Initialization of the popin markup used to update audit or pages properties.
 * @param {string} targetElement - Element to edit (audit or page).
 * @param {string} targetProperty - Object property to edit.
 * @param {string} targetSecondaryElement - Secondary element to edit (useful for pages).
*/
setValue = function (targetElement, targetProperty, targetSecondaryElement) {

	arrayPropertyValue = [];

	let htmlModal = '';
	htmlModal = '<div id="modalEdit" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modalChecklistTitle">';
	htmlModal += '<div class="modal-dialog modal-dialog-scrollable" role="document">';
	htmlModal += '<div class="modal-content">';
	htmlModal += '<div class="modal-header">';
	htmlModal += '<h5 class="modal-title" id="modalChecklistTitle">' + langVallydette.edit + ' : ' + getPropertyValue(targetProperty) + '</h5>';
	htmlModal += '<button type="button" class="close" data-dismiss="modal" aria-label="' + langVallydette.close + '"></button>';
	htmlModal += '</div>';
		
	htmlModal += '<form id="editForm"><div class="modal-body">';
	htmlModal += '<div id="modal-alert"></div>';
	htmlModal += '<div class="form-group">';
	htmlModal += '<label class="is-required" for="nameValue">' + langVallydette.name + ' <span class="sr-only"> (' + langVallydette.required + ')</span></label>';
	htmlModal += '<input type="text" class="form-control" id="nameValue" aria-labelledby="modalChecklistTitle" value="' + getPropertyValue(targetProperty) + '" required >';
	htmlModal += '</div>';
	
	/** If it's a page properties edition, when add the URL input */
	if (targetElement === "pageName") {
		htmlModal += '<div class="form-group">';
		htmlModal += '<label  for="urlValue">URL</label>';
		htmlModal += '<input type="text" class="form-control" id="urlValue" placeholder="URL" value="' + getPropertyValue("checklist.page." + currentPage + ".url") + '">';
		htmlModal += '</div>';
		htmlModal += '<div id="themeManager" class="form-group">';
		htmlModal += '</div>';
	}
	htmlModal += '</div>';
	htmlModal += '<div class="modal-footer">';
	htmlModal += '<button type="button" class="btn btn-secondary" data-dismiss="modal">' + langVallydette.close + '</button>';
	htmlModal += '<button type="submit" id="saveValueBtn" class="btn btn-primary">' + langVallydette.save + '</button>';
	htmlModal += '</div></form></div></div></div>';
			
	let elModal = document.getElementById('modal');
	elModal.innerHTML = htmlModal;

	/** If it's a page properties edition, when add the groups */
	if ((targetElement === "pageName")) {
		initGroups();
	}

    var currentEditForm = document.getElementById('editForm');
 
	currentEditForm.addEventListener('submit', function () {
		event.preventDefault();
		
		var propertyName = document.getElementById("nameValue");
		arrayPropertyValue[0] = propertyName.value;
		
		if (targetElement === "pageName") {
			var propertyUrl = document.getElementById("urlValue");
			arrayPropertyValue[1] = propertyUrl.value;
			
			getGroups();
			
		}
		
		updateProperty(arrayPropertyValue, targetElement, targetProperty, targetSecondaryElement);
		
	});
	
	/** set the focus into the first popin field
		* @todo jquery code from boosted 4.5.
		* So it should be necessary to replace this code as soon as the vallydette will be updated to v5.
	*/
	var name = document.getElementById('nameValue');
	$('.modal').on('shown.bs.modal', function (event) {
		name.focus()
	});

}

/**
 * Get the property value from vallydette object
 * @param {string} propertyPath - Object property to edit.
*/
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


/**
 * Set the property value into vallydette object.
 * @param {string} propertyValue - new property value.
 * @param {string} propertyPath - Object property to edit.
*/
setPropertyValue = function (propertyValue, propertyPath) {
	obj = dataVallydette;
	propertyPath = propertyPath.split('.');

	for (i = 0; i < propertyPath.length - 1; i++) {
		obj = obj[propertyPath[i]];	
	}
	
	obj[propertyPath[i]] = propertyValue;
	
}

/**
 * Run the set up of properties value, and display a feedback.
 * @param {array} arrayPropertyValue - Array of properties to update.
 * @param {string} targetElement - Element to edit (audit or page).
 * @param {string} targetProperty - Object property to edit.
 * @param {string} targetSecondaryElement - Secondary element to edit (useful for pages).
*/
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
	feedbackHtml += '<span class="alert-icon"><span class="sr-only">' + langVallydette.success + '</span></span>';
	feedbackHtml += '<p>' + langVallydette.successFeedback + '</p>';
	feedbackHtml += '</div>';
	
	var feedbackMessage = document.getElementById('modal-alert');
	feedbackMessage.innerHTML = feedbackHtml;
	
	utils.setPageTitle(dataVallydette.checklist.page[currentPage].name);
	
	jsonUpdate();
}

/**
 * Comment manager
 */

/**
 * Comment popin initialization.
 * @param {string} targetId - current test ID.
 * @param {string} title - current test title.
*/
setComment = function (targetId, title) {
	let titleModal = title;

	let htmlModal = '';
	htmlModal = '<div id="modal' + targetId + '" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal' + targetId + 'Title">';
	htmlModal += '<div class="modal-dialog modal-dialog-scrollable" role="document">';
	htmlModal += '<div class="modal-content">';
	htmlModal += '<div class="modal-header">';
	htmlModal += '<h5 class="modal-title" id="modal' + targetId + 'Title">' + langVallydette.commentTxt1 + ' : ' + titleModal + '</h5>';
	htmlModal += '<button type="button" class="close" data-dismiss="modal" aria-label="' + langVallydette.close + '"></button>';
	htmlModal += '</div>';
	htmlModal += '<div class="modal-body">';
	htmlModal += '<textarea class="form-control" id="comment' + targetId +'" aria-labelledby="modal' + targetId + 'Title">' + getComment(targetId) + '</textarea>';
	htmlModal += '</div>';
	htmlModal += '<div class="modal-footer">';
	htmlModal += '<button type="button" class="btn btn-secondary" data-dismiss="modal">' + langVallydette.cancel + '</button>';
	htmlModal += '<button type="button" id="commentSaveBtn" data-dismiss="modal" class="btn btn-primary">' + langVallydette.save + '</button>';
	htmlModal += '</div></div></div></div>';

	let elModal = document.getElementById('modal');
	elModal.innerHTML = htmlModal;

	var commentSave = document.getElementById("commentSaveBtn");
	commentSave.addEventListener('click', function () {
		addComment(targetId, comment.value)
	});
	
	var comment = document.getElementById('comment' + targetId);

	$('.modal').on('shown.bs.modal', function (event) {
		comment.focus()
	});
	
}

/**
 * Add the comment to the vallydette object.
 * @param {string} targetId - current test ID.
 * @param {string} newComment.
*/
addComment = function (targetId, newComment) {
	for (let i in dataVallydette.checklist.page[currentPage].items) {
		if (dataVallydette.checklist.page[currentPage].items[i].ID === targetId) {
			dataVallydette.checklist.page[currentPage].items[i].commentaire = newComment;
		}
	}

	var currentBtnComment = document.getElementById("commentBtn" + targetId);
	currentBtnComment.innerHTML = getCommentState(targetId);

	jsonUpdate();
}

/**
 * Get the comment from the vallydette object.
 * @param {string} targetId - current test ID.
 * @return {string} currentComment - current comment value
*/
getComment = function (targetId) {
	var currentComment;

	for (let i in dataVallydette.checklist.page[currentPage].items) {
		if (dataVallydette.checklist.page[currentPage].items[i].ID === targetId && dataVallydette.checklist.page[currentPage].items[i].commentaire !== undefined ) {
			currentComment = dataVallydette.checklist.page[currentPage].items[i].commentaire;
		}
	}

	return (currentComment !== undefined  ? currentComment : "");
}

/**
 * Return a markup depending on commant value
 * @param {string} targetId - current test ID.
 * @return {string} - markup depending on comment value
*/
getCommentState = function (targetId) {
	
	var currentComment = getComment(targetId);

	return (currentComment === undefined || currentComment === "" ? "<span class='icon-Comments' aria-hidden='true'></span>&nbsp;" + langVallydette.addComment + "" : "<span class='icon-Comments text-primary' aria-hidden='true'></span>&nbsp;" + langVallydette.editComment + "");
}

/**
 * Issue manager
 */

/**
 * Issue popin initialization.
 * @param {string} targetId - current test ID.
 * @param {string} title - current test title.
*/
setIssue = function (targetId, title, targetIdOrigin) {
	let titleModal = title;

	let htmlModal = '';
	htmlModal = '<div id="modalAddIssue" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal' + targetId + 'Title">';
	htmlModal += '<div class="modal-dialog " role="document">';
	htmlModal += '<div class="modal-content">';
	htmlModal += '<div class="modal-header">';
	htmlModal += '<h5 class="modal-title" id="modal' + targetId + 'Title">' + langVallydette.issueTxt1 + titleModal + '</h5>';
	htmlModal += '<button type="button" class="close" data-dismiss="modal" aria-label="' + langVallydette.close + '"></button>';
	htmlModal += '</div>';
	htmlModal += '<form id="editForm">';
	htmlModal += '<div class="modal-body">';
	htmlModal += (issuesVallydette[targetIdOrigin]) ? getPredefinedIssues(targetIdOrigin) : "";
	htmlModal += '<div class="form-group">';
	htmlModal += '<label class="is-required" for="issueNameValue">' + langVallydette.summary + ' <span class="sr-only"> (' + langVallydette.required + ')</span></label>';
	htmlModal += '<input type="text" class="form-control" id="issueNameValue" value="" required>';
	htmlModal += '<label class="is-required mt-2" for="issueDetailValue">' + langVallydette.description + ' <span class="sr-only"> (' + langVallydette.required + ')</span></label>';
	htmlModal += '<textarea class="form-control" id="issueDetailValue" required></textarea>';
	htmlModal += '<label for="issueSolutionValue" class="mt-2">' + langVallydette.solution + ' <span class="sr-only"> (' + langVallydette.required + ')</span></label>';
	htmlModal += '<textarea class="form-control" id="issueSolutionValue"></textarea>';
	htmlModal += '<label for="issueTechnicalSolutionValue" class="mt-2">' + langVallydette.technical_solution + ' <span class="sr-only"> (' + langVallydette.required + ')</span></label>';
	htmlModal += '<textarea class="form-control" id="issueTechnicalSolutionValue"></textarea>';
	htmlModal += '</div>';
	htmlModal += '</div>';

	htmlModal += '<div class="modal-footer">';
	htmlModal += '<button type="button" class="btn btn-secondary" data-dismiss="modal">' + langVallydette.cancel + '</button>';
	htmlModal += '<button type="submit" id="saveIssueBtnBtn" class="btn btn-primary">' + langVallydette.save + '</button>';
	htmlModal += '</div>';
	htmlModal += '</form>';
	htmlModal += '</div></div></div>';

	
	let elModal = document.getElementById('modal');
	elModal.innerHTML = htmlModal;

	let currentEditForm = document.getElementById('editForm');
 
	currentEditForm.addEventListener('submit', function () {
		event.preventDefault();
		
		addIssue(targetId, issueNameValue.value, issueDetailValue.value, issueSolutionValue.value, issueTechnicalSolutionValue.value);
		
		$('#modalAddIssue').modal('hide');
	});
	
	
	if (document.getElementById('btnValidatePredefined')) {
		
			document.getElementById('btnValidatePredefined').addEventListener('click', function () {
			event.preventDefault();
			
			issueNameValue.value = issuesVallydette[targetIdOrigin][issuePredefined.value].title;
			issueDetailValue.value = issuesVallydette[targetIdOrigin][issuePredefined.value].detail;
			issueSolutionValue.value = issuesVallydette[targetIdOrigin][issuePredefined.value].solution;
			issueTechnicalSolutionValue.value = issuesVallydette[targetIdOrigin][issuePredefined.value].technicalSolution;
			
			issueNameValue.focus();
		
		});
		
	}
	
	var issueNameValueInput = document.getElementById('issueNameValue');
	
	$('.modal').on('shown.bs.modal', function (event) {
		issueNameValueInput.focus()
	});

}

/**
 * Add the issue to the vallydette object.
 * @param {string} targetId - current test ID.
 * @param {string} issueTitle.
 * @param {string} issueDetail.
*/
addIssue = function (targetId, issueTitle, issueDetail, issueSolution, issueTechnicalSolution) {
	for (let i in dataVallydette.checklist.page[currentPage].items) {
		if (dataVallydette.checklist.page[currentPage].items[i].ID === targetId) {
			
			newIssue = {};
			newIssue['issueTitle'] = issueTitle;
			newIssue['issueDetail'] = issueDetail;
			newIssue['issueSolution'] = issueSolution;
			newIssue['issueTechnicalSolution'] = issueTechnicalSolution;
			
			dataVallydette.checklist.page[currentPage].items[i].issues.push(newIssue);
			
			document.getElementById("issueDisplayBtn"+ targetId).removeAttribute("disabled");
			
		}
	}

	jsonUpdate();
}

getPredefinedIssues = function(targetId) {
	
	let htmlPredefinedIssues = '';
	

	htmlPredefinedIssues += '<div class="form-group row">';
	htmlPredefinedIssues += '<div class="col-sm-10">';
	
	htmlPredefinedIssues += '<select class="custom-select" id="issuePredefined" aria-label="' + langVallydette.selectIssue + ' ">';
	htmlPredefinedIssues += '<option selected>' + langVallydette.selectIssue + '</option>';
	issuesVallydette[targetId].forEach(function (issue, index) {htmlPredefinedIssues +='<option value="' + index + '">' + issue.title + '</option>'});
	htmlPredefinedIssues += '</select>';
	htmlPredefinedIssues += '</div>';
	htmlPredefinedIssues += '<button id="btnValidatePredefined" class="btn btn-secondary">' + langVallydette.validate + '</button>';
	htmlPredefinedIssues += '</div>';
		
	return htmlPredefinedIssues;
	
}

getIssue = function (targetId, issueProperty, issueIndex) {
	let currentIssue;

	for (let i in dataVallydette.checklist.page[currentPage].items) {
		if (dataVallydette.checklist.page[currentPage].items[i].ID === targetId) {
			currentIssue = dataVallydette.checklist.page[currentPage].items[i].issues[issueIndex];
		}
	}

	return currentIssue[issueProperty];
}

editIssue = function (targetId, issueIndex) {
	
	let htmlEditIssue = '';
	
	htmlEditIssue += '<form id="editIssueForm">';
	htmlEditIssue += '<label class="is-required" for="issueNameValue-' + issueIndex + '"> ' + langVallydette.summary + ' <span class="sr-only"> (' + langVallydette.required + ')</span></label>';
	htmlEditIssue += '<input type="text" class="form-control" id="issueNameValue-' + issueIndex + '" value="' + getIssue(targetId, 'issueTitle', issueIndex) + '" required >';
	htmlEditIssue += '<label class="is-required mt-2" for="issueDetailValue-' + issueIndex + '">' + langVallydette.description + ' <span class="sr-only"> (' + langVallydette.required + ')</span></label>';
	htmlEditIssue += '<textarea class="form-control" id="issueDetailValue-' + issueIndex + '">' + getIssue(targetId, 'issueDetail', issueIndex) + '</textarea>';
	htmlEditIssue += '<label for="issueSolutionValue-' + issueIndex + '" class="mt-2">' + langVallydette.solution + '</label>';
	htmlEditIssue += '<textarea class="form-control" id="issueSolutionValue-' + issueIndex + '">' + getIssue(targetId, 'issueSolution', issueIndex) + '</textarea>';
	htmlEditIssue += '<label for="issueTechnicalSolutionValue-' + issueIndex + '" class="mt-2">' + langVallydette.technical_solution + '</label>';
	htmlEditIssue += '<textarea class="form-control" id="issueTechnicalSolutionValue-' + issueIndex + '">' + getIssue(targetId, 'issueTechnicalSolution', issueIndex) + '</textarea>';
	htmlEditIssue += '<button type="button" id="cancelIssueBtn-'+ targetId +'-'+ issueIndex +'" class="btn btn-secondary btn-sm mt-1 mr-1 mb-1">' + langVallydette.cancel + '</button>';
	htmlEditIssue += '<button type="submit" id="saveIssueBtn-'+ targetId +'-'+ issueIndex +'" class="btn btn-primary btn-sm mt-1 mb-1">' + langVallydette.save + '</button>';
	htmlEditIssue += '<hr class="border-light">';
	htmlEditIssue += '</form>';
	
	let elIssueCard = document.getElementById('issue-body-'+ targetId +'-'+ issueIndex);
	elIssueCard.innerHTML = htmlEditIssue;
	
	let elTitle = document.getElementById('issueNameValue-' + issueIndex);
	elTitle.focus();

	let issueForm = document.getElementById('editIssueForm');
	issueForm.addEventListener('submit', function () {
		event.preventDefault();
		
		saveIssue(targetId, issueIndex, this);
		
	});
	
	document.getElementById('editIssueBtn-' + targetId + '-'+ issueIndex).style.display = "none";
	document.getElementById('deleteIssueBtn-' + targetId + '-'+ issueIndex).style.display = "none";
	
	document.getElementById('cancelIssueBtn-' + targetId + '-' + issueIndex).addEventListener('click', function () {
		cancelIssue(targetId, issueIndex, getIssue(targetId, 'issueTitle', issueIndex), getIssue(targetId, 'issueDetail', issueIndex));	
	});
	
}

saveIssue = function (targetId, issueIndex, issueEditForm) {

	for (let i in dataVallydette.checklist.page[currentPage].items) {
		if (dataVallydette.checklist.page[currentPage].items[i].ID === targetId) {

			dataVallydette.checklist.page[currentPage].items[i].issues[issueIndex]['issueTitle'] = issueEditForm.elements["issueNameValue-" + issueIndex].value;
			dataVallydette.checklist.page[currentPage].items[i].issues[issueIndex]['issueDetail'] = issueEditForm.elements["issueDetailValue-" + issueIndex].value;
			dataVallydette.checklist.page[currentPage].items[i].issues[issueIndex]['issueSolution'] = issueEditForm.elements["issueSolutionValue-" + issueIndex].value;
			dataVallydette.checklist.page[currentPage].items[i].issues[issueIndex]['issueTechnicalSolution'] = issueEditForm.elements["issueTechnicalSolutionValue-" + issueIndex].value;
			
		}
	}

	cancelIssue(targetId, issueIndex, issueEditForm.elements["issueNameValue-" + issueIndex].value, issueEditForm.elements["issueDetailValue-" + issueIndex].value);
	
	jsonUpdate();	
	
}

cancelIssue = function (targetId, issueIndex, issueTitle, issueDetail) {

	let htmlEditIssue = '';
	htmlEditIssue += issueDetail;
	
	let elIssueCard = document.getElementById('issue-body-' + targetId + '-' + issueIndex);
	elIssueCard.innerHTML = htmlEditIssue;
	
	let elIssueCardHeader = document.getElementById('btnIssue' + targetId + '-' + issueIndex);
	elIssueCardHeader.innerHTML = issueTitle;
	
	document.getElementById('editIssueBtn-' + targetId + '-' + issueIndex).style.display = "inline-flex";
	document.getElementById('deleteIssueBtn-' + targetId + '-' + issueIndex).style.display = "inline-flex";

	document.getElementById('editIssueBtn-' + targetId + '-' + issueIndex).focus();
	
}

deleteConfirmationIssue = function (targetId, issueIndex) {
	
	let htmlIssueFeedback = '<div id="deleteIssueBtn-'+ targetId +'-'+ issueIndex +'-feedback">';
	htmlIssueFeedback += '<span id="deleteIssueMessage-'+ targetId +'-'+ issueIndex +'">' + langVallydette.issueTxt3 + '</span>';
	htmlIssueFeedback += '<button type="button" id="btnDeleteIssueNo-'+ targetId +'-'+ issueIndex +'" aria-labelledby="deleteIssueMessage-'+ targetId +'-'+ issueIndex +' btnDeleteIssueNo-'+ targetId +'-'+ issueIndex +'" class="btn btn-secondary btn-sm" onClick="deleteIssue(\''+ targetId +'\','+ issueIndex +', false)">' + langVallydette.no + '</button>';
	htmlIssueFeedback += '<button type="button" id="btnDeleteIssueYes-'+ targetId +'-'+ issueIndex +'" class="btn btn-secondary btn-sm"  aria-labelledby="deleteIssueMessage-'+ targetId +'-'+ issueIndex +' btnDeleteIssueYes-'+ targetId +'-'+ issueIndex +'"  onClick="deleteIssue(\''+ targetId +'\','+ issueIndex +', true)">' + langVallydette.yes + '</button>';
	htmlIssueFeedback += '</div>';
	
	let elButton = document.getElementById("deleteIssueBtn-"+ targetId +"-"+ issueIndex);
	elButton.insertAdjacentHTML("afterend", htmlIssueFeedback); 
	
	document.getElementById("btnDeleteIssueNo-"+ targetId +"-"+ issueIndex).focus();
	
}

/**
 * Delete an issue from the vallydette object.
 * @param {string} targetId - current test ID.
 * @return {string} issueIndex - index of the issue to remove
*/
deleteIssue = function (targetId, issueIndex, issueValidation) {

	if (issueValidation) {
		
		for (let i in dataVallydette.checklist.page[currentPage].items) {
			if (dataVallydette.checklist.page[currentPage].items[i].ID === targetId) {
				dataVallydette.checklist.page[currentPage].items[i].issues.splice(issueIndex, 1);
				if (dataVallydette.checklist.page[currentPage].items[i].issues.length === 0) {
					document.getElementById("issueDisplayBtntestWebID-"+ i).setAttribute("disabled", true);
				}
			}
		}
	
		utils.removeElement(document.getElementById("cardIssue"+targetId+"-"+ issueIndex));
		utils.putTheFocus(document.getElementById("modal" + targetId + "Title"));
		
	} else {
		
		utils.removeElement(document.getElementById("deleteIssueBtn-"+ targetId +"-"+ issueIndex +"-feedback"));
		document.getElementById("deleteIssueBtn-"+ targetId +"-"+ issueIndex).focus();

	}

}


/**
 * Issue popin initialization.
 * @param {string} targetId - current test ID.
 * @param {string} title - current test title.
*/
displayIssue = function (targetId, title) {
	let titleModal = title;

	let htmlModal = '';
	htmlModal = '<div id="modal' + targetId + '" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal' + targetId + 'Title">';
	htmlModal += '<div class="modal-dialog modal-dialog-scrollable" role="document">';
	htmlModal += '<div class="modal-content">';
	htmlModal += '<div class="modal-header">';
	htmlModal += '<h5 class="modal-title" id="modal' + targetId + 'Title">' + langVallydette.issueTxt2 + titleModal + '</h5>';
	htmlModal += '<button type="button" class="close" data-dismiss="modal" aria-label="' + langVallydette.close + '"></button>';
	htmlModal += '</div>';
	htmlModal += '<div class="">';
	htmlModal += '<div id="issueList" class="accordion">';
	
	for (let i in dataVallydette.checklist.page[currentPage].items) {
		
		if (dataVallydette.checklist.page[currentPage].items[i].ID === targetId && dataVallydette.checklist.page[currentPage].items[i].issues.length > 0 ) {
			for (let j in dataVallydette.checklist.page[currentPage].items[i].issues) {
				
				htmlModal += '<div class="card" id="cardIssue'+targetId+'-'+ j +'">';
				
				htmlModal += ' <div class="card-header" id="issue'+targetId+'-'+ j +'">';
				htmlModal += ' <h5 class="mb-0">';
				htmlModal += '  <a id="btnIssue'+targetId+'-'+ j +'" data-toggle="collapse" href="#collapse'+targetId+'-'+j+'" aria-expanded="false" aria-controls="collapse'+targetId+'-'+ j +'" role="button" class="collapsed">';
				htmlModal += '#' + j + ' ' + dataVallydette.checklist.page[currentPage].items[i].issues[j].issueTitle;
				htmlModal += ' </a>';
				htmlModal += '</h5>';
				htmlModal += ' </div>';

				htmlModal += ' <div id="collapse'+ targetId +'-'+ j +'" data-parent="#issueList" class="collapse" aria-labelledby="issue'+targetId+'-'+ j +'" >';

				htmlModal += ' <div class="card-body">';
				htmlModal += '   <div id="issue-body-'+ targetId +'-'+ j +'">';
				htmlModal +=  		dataVallydette.checklist.page[currentPage].items[i].issues[j].issueDetail;
			
				htmlModal += '  </div>';
				htmlModal += ' <button id="editIssueBtn-'+ targetId +'-'+ j +'" class="btn btn-secondary btn-sm" onClick="editIssue(\''+ targetId +'\','+ j +')">' + langVallydette.edit + '</button>';
				htmlModal += ' <button id="deleteIssueBtn-'+ targetId +'-'+ j +'" class="btn btn-secondary btn-sm" onClick="deleteConfirmationIssue(\''+ targetId +'\','+ j +')">' + langVallydette.delete + '</button>';
				
				htmlModal += '  </div>';
				htmlModal += ' </div>';
				
				htmlModal += ' </div>';
			}
		}
	}
	
	htmlModal += '</div>';
	htmlModal += '</div>';
	htmlModal += '<div class="modal-footer">';
	htmlModal += '<button type="button" class="btn btn-primary" data-dismiss="modal">' + langVallydette.close + '</button>';
	htmlModal += '</div></div></div></div>';

	/**  html modal container */
	let elModal = document.getElementById('modal');
	elModal.innerHTML = htmlModal;
	
}


/**
 * Filter manager
 */

/**
 * Filter initialization, filters HTML elements are build here from the global var arrayFilterNameAndValue.
 */
initFilters = function () {
    
		htmlFilterContent.innerHTML = '';
	   
		let htmlFilterHeading = document.createElement('h2');
		htmlFilterHeading.textContent = langVallydette.template.filters;
		htmlFilterContent.appendChild(htmlFilterHeading);
   
		let htmlFilterFeedback = document.createElement('div');
		htmlFilterFeedback.setAttribute("id", "feedback"); 
		htmlFilterContent.appendChild(htmlFilterFeedback);
	
		let htmlFilterList = document.createElement('ul');
		htmlFilterList.classList.add("list-unstyled");
		
		for (let i in arrayFilterNameAndValue) {
			var isChecked = "";
			arrayFilterActivated.forEach(element => {element === arrayFilterNameAndValue[i][1] ? isChecked = "checked" : ''});
			htmlTypes = '<label class="custom-control custom-switch pb-1" id="labelType' + i + '"><input type="checkbox" class="custom-control-input" id="result' + i + '" value="' + arrayFilterNameAndValue[i][1] + '" '+ isChecked+ '><span class="custom-control-label" id="status' + i+1 + '">' + arrayFilterNameAndValue[i][0] + '</span></label>';
			
			var listItem = document.createElement("li");
			listItem.innerHTML = htmlTypes;
			htmlFilterList.appendChild(listItem);
			htmlFilterContent.appendChild(htmlFilterList);

			/** Filters event handler. */
			var inputItem = document.getElementById("result" + i);
			inputItem.addEventListener('click', function () {
				updateArrayFilter(this)
			}, false);

		}
		
		if (globalTemplate==="audit") {
			PropertyFilterMarkup("arrayProfileActivated", "arrayProfileNameAndValue", "profile");
			PropertyFilterMarkup("arrayTypeActivated", "arrayTypeNameAndValue", "type");
		}

		
		let htmlWcagDisplay = '<hr class="border-light">';
		htmlWcagDisplay += '<label class="custom-control custom-switch pb-1 d-print-none" id="labelWcagDisplay"><input type="checkbox" class="custom-control-input" id="typeWcagDisplay" value=""><span class="custom-control-label" id="displayWcag">' + langVallydette.wcagView + '</span></label>';
		let wcagDisplayItem = document.createElement("div");
		wcagDisplayItem.innerHTML = htmlWcagDisplay;
		htmlFilterContent.appendChild(wcagDisplayItem);
		
		var typeWcagDisplayInput = document.getElementById("typeWcagDisplay");
		typeWcagDisplayInput.addEventListener('click', function () {
				wcagDisplayMode(this)
			}, false);
}

function PropertyFilterMarkup(arrayActivatedFilter, arrayNameAndValue, inputName) {
	
	if (window[arrayNameAndValue]) {
		
		let htmlPropertyList = document.createElement('ul');
		htmlPropertyList.classList.add("list-unstyled");
		
		let separator = document.createElement("hr");
		separator.classList.add("border-light");
		htmlFilterContent.appendChild(separator);
		
			for (let i in window[arrayNameAndValue]) {
				var isChecked = "";
				
				window[arrayActivatedFilter].forEach(element => {element === window[arrayNameAndValue][i] ? isChecked = "checked" : ''});
				htmlProperty = '<label class="custom-control custom-radio pb-1" id="label' + inputName + i + '"><input type="radio" name="' + inputName + '" class="custom-control-input" id="' + inputName + i + '" value="' + window[arrayNameAndValue][i] + '" '+ isChecked+ '><span class="custom-control-label">' + window[arrayNameAndValue][i] + '</span></label>';
				
				var listPropertyItem = document.createElement("li");
				listPropertyItem.innerHTML = htmlProperty;
				htmlPropertyList.appendChild(listPropertyItem);
				htmlFilterContent.appendChild(htmlPropertyList);

				
				var inputItem = document.getElementById(inputName + i);
				
				inputItem.addEventListener('click', function () {
					updateRadioFilterArray(this, arrayActivatedFilter)
				}, false);

			}
		
		listPropertyItem = document.createElement("li");
		let buttonReset = document.createElement("button");
		buttonReset.classList.add("btn", "btn-secondary", "btn-sm");
		buttonReset.innerHTML = langVallydette.reset;
		buttonReset.addEventListener('click', function () {
			updateRadioFilterArray(false, arrayActivatedFilter)
		}, false);
		listPropertyItem.appendChild(buttonReset);
		htmlPropertyList.appendChild(listPropertyItem);
		htmlFilterContent.appendChild(htmlPropertyList);
		
	}
}

function wcagDisplayMode(wcagDisplayModeInput) {
	
	if (wcagDisplayModeInput.checked) {
		
		 let wcagDisplayObj = runComputation(true);

			let wcagDisplayContent = '';
			
			wcagDisplayContent += '<h2 class="sticky-top d-flex bg-white pt-4 pb-2">' + langVallydette.wcagView + '</h2>';
			
			for (let i in wcagDisplayObj[currentPage].items) {
				
				if ((globalTemplate==="wcag" && wcagDisplayObj[currentPage].items[i].level!="AAA") || globalTemplate!="wcag") {
					wcagDisplayContent += '<h3 class="sticky-top d-flex bg-white pt-4 pb-3 border-bottom">'+ wcagDisplayObj[currentPage].items[i].wcag + ' ' + wcagDisplayObj[currentPage].items[i].name +' ' + wcagDisplayObj[currentPage].items[i].level + '</h3>';

					wcagDisplayContent += '<table class="table table-striped"><caption class="sr-only">' + langVallydette.wcagView + '</caption>';
					wcagDisplayContent += '<thead><tr>';
					wcagDisplayContent += '<th scope="col">Tests</th>';
					wcagDisplayContent += '<th scope="col">' + langVallydette.resultHeading + '</th>';
					wcagDisplayContent += '</tr></thead>';
					wcagDisplayContent += '<tbody>';
					for (let j in wcagDisplayObj[currentPage].items[i].test) {
						wcagDisplayContent += '<tr>';
						wcagDisplayContent += '<td class="w-100">'+ wcagDisplayObj[currentPage].items[i].test[j].title +'</td>';
						wcagDisplayContent += '<td><span class="ml-auto badge ' + getStatutClass(wcagDisplayObj[currentPage].items[i].test[j].result) + '">' + setStatutText(wcagDisplayObj[currentPage].items[i].test[j].result) + '</span></td>';
						wcagDisplayContent += '</tr>';
					}
					wcagDisplayContent += '<tr class="bg-light2">';
					wcagDisplayContent += '<th class="font-weight-bold" scope="row">' + langVallydette.result + '</th>';
					wcagDisplayContent += '<td><span class="ml-auto badge ' + getStatutClass(wcagDisplayObj[currentPage].items[i].resultat) + '">' + setStatutText(wcagDisplayObj[currentPage].items[i].resultat) + '</span></td>';
					wcagDisplayContent += '</tr>';
					wcagDisplayContent += '</tbody></table>';
				}
				
			}
			
			htmlMainContent.innerHTML = wcagDisplayContent;
			

	} else {
		showPage(dataVallydette.checklist.page[currentPage].IDPage);
	}
	
}

/**
 * Update the filter counter each an new filter is applied or disabled.
 * @param {boolean} activeFilter - if at least one filter is activated => true, if not => false.
 * @param {number} nbTests - total number of test depending on filters.
 */
updateCounter = function (activeFilter, nbTests) {
	let elFeedback = document.getElementById('feedback');
	let htmlFeedback = '';
	if (activeFilter) {
		htmlFeedback = '<p><span><b>' + nbTests + '</b> ' + langVallydette.filterFeedback2 + '</span></p>';
		elFeedback.innerHTML = htmlFeedback;
	} else {
		htmlFeedback = '<p><b>' + nbTests + '</b> ' + langVallydette.filterFeedback1 + '</p>';
		elFeedback.innerHTML = htmlFeedback;
	}
};

/**
 * Run when a filter switch button is activated. Update the array of enabled filters. 
 * @param {object} elInput - switch button. 
 */
updateArrayFilter = function (elInput) {
	
	if (elInput && elInput.checked) {
		
		arrayFilterActivated.push(elInput.value);
		
	} else {
		
		arrayFilterActivated = arrayFilterActivated.filter(function(filterValue) {
			return filterValue !== elInput.value;
		});
		
	}

	loadChecklistObject();
	
}

/**
 * Run when a filter radio button is activated. Update the array of enabled filters. 
 * @param {object} elInput - radio button. 
 */
updateRadioFilterArray = function (elInput, arrayToUpdate) {
	
	window[arrayToUpdate].splice(0, window[arrayToUpdate].length);
	
	if (elInput && elInput.checked) {
		
		window[arrayToUpdate].push(elInput.value);
		
	} 

	loadChecklistObject();
	
}

/**
 * Get the unique entry from an object property, in order to build a filter array
 * @param {object} objectToParse
 * @param {string} property - property from vallydette object. 
 */
function uniqueEntry(objectToParse, property) {
	uniqueEntryArray = [];
	objectToParse.forEach(function(item){
			item[property].forEach(function(entry){
				uniqueEntryArray.push(entry);
			});
		})
		
		return [...new Set(uniqueEntryArray)];
}


/**
 * Apply the filters to the vallydette object, and run display function (runTestListMarkup) with the new filtered object
 */	
runFilter = function() {
	
	function filtrerParID(prop, arrayFilters) {
		
		return function(obj) {
			var isOK;	
			obj[prop].forEach(function(current) {
				
				if(window[arrayFilters].includes(current)) {				
					isOK = true;	
				} 
					
			})
		
			return isOK;
		
		}
	}
	
	filteredTest = dataVallydette.checklist.page[currentPage].items;
	
	if(arrayFilterActivated && arrayFilterActivated.length > 0){
		
		filteredTest = filteredTest.filter(o => arrayFilterActivated.includes(o.resultatTest));

	} 
	
	if(arrayProfileActivated && arrayProfileActivated.length > 0){
		
		filteredTest = filteredTest.filter(filtrerParID("profils", "arrayProfileActivated"));
		
	} 
	
	if(arrayTypeActivated && arrayTypeActivated.length > 0){
		
		filteredTest = filteredTest.filter(filtrerParID("type", "arrayTypeActivated"));
	
	} 
	
	
	runTestListMarkup(filteredTest);
	updateCounter(true, filteredTest.length);
}


/**
 * Some pages (actually the audit result page) no need of the filter menu.
 */
removeFilterSection = function () {
	htmlFilterContent.innerHTML = "";
}
	
/**
 * Run when the checklist display must be updated (when a filter is applied for example)
 */		
loadChecklistObject = function () {
	initFilters();
	//initComputation();
	if((arrayFilterActivated && arrayFilterActivated.length > 0) || (arrayProfileActivated && arrayProfileActivated.length > 0) || (arrayTypeActivated && arrayTypeActivated.length > 0)){
		runFilter();
	} else {
		runTestListMarkup(dataVallydette.checklist.page[currentPage].items);
		updateCounter(false, dataVallydette.checklist.page[currentPage].items.length);
	}
}

/**
 * Run each time an updated is made to the vallydette object, in order to update the export informations.
 */
jsonUpdate = function () {

	let exportFileName = utils.fileName('json');
	
	let dataStr = JSON.stringify(dataVallydette);
	let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

	linkElement = document.getElementById("export");
	linkElement.classList.remove("disabled");
	linkElement.removeAttribute('disabled');
	linkElement.setAttribute('aria-disabled', false);
	linkElement.setAttribute('href', dataUri);
	linkElement.setAttribute('download', exportFileName);
	
	
	window.localStorage.setItem('lavallydette', dataStr);
	
	btnLocalStorage.disabled=true;
	btnLocalStorage.classList.add("disabled");
}

/**
 * Run the excel export
 */
excelExport = function () {

var excel = $JExcel.new();   
var formatHeader = excel.addStyle ( {border: "none,none,none,thin #333333",font: "Calibri 11 #000000 B", fill: "#FFCC00"});
var formatHeaderProject = excel.addStyle ( {border: "none,none,none,thin #333333",font: "Calibri 11 #000000 B", fill: "#C5D9F1"});
var formatRow = excel.addStyle ( {border: "none,none,none,thin #333333",font: "Calibri 11 #000000"}); 
var pageHeaders = ['Nom', 'URL'];
var dataHeaders = ['ID', 'Test', 'Titre', 'Détail', 'Solution', 'Solution Technique', 'Suivi Validation', 'Etat / remarque équipe projet'];

excel.set( {sheet:0,value:"Informations"} );
excel.set(0,0,0,"Audit",formatHeader);
excel.set(0,0,1,dataVallydette.checklist.name);
excel.set(0,0,2,"");


for (var j=0;j<pageHeaders.length;j++){    
		
			excel.set(0,j,3,pageHeaders[j], formatHeader);    
			            
}	

let rowPages = 4;

for (let i in dataVallydette.checklist.page) {

	excel.set(0,0,rowPages, dataVallydette.checklist.page[i].name);
	if (dataVallydette.checklist.page[i].url) {
		excel.set(0,1,rowPages, dataVallydette.checklist.page[i].url);
	}

	rowPages++;
}

let setIndex = 1;

for (let i in dataVallydette.checklist.page) {
	
		
		excel.addSheet(dataVallydette.checklist.page[i].name);
		
		   
		for (var j=0;j<dataHeaders.length;j++){    
		
			if(j===7){
				excel.set(setIndex,j,0,dataHeaders[j], formatHeaderProject); 
			} else {
				excel.set(setIndex,j,0,dataHeaders[j], formatHeader);	
			}

			excel.set(setIndex,j,undefined, "auto"); 
		}	 
		
		let rowIssues = 0;
		
		for (let j in dataVallydette.checklist.page[i].items) {
			
			
			if (dataVallydette.checklist.page[i].items[j].issues.length > 0) {
					
				dataVallydette.checklist.page[i].items[j].issues.forEach(function (issue, key) {
					
					//@ ajout url tests
					rowIssues++;
					excel.set(setIndex,0,rowIssues,  'issue-' + i + '-' + rowIssues);
					excel.set(setIndex,1,rowIssues, dataVallydette.checklist.page[i].items[j].title);
					excel.set(setIndex,2,rowIssues, issue.issueTitle);
					excel.set(setIndex,3,rowIssues, issue.issueDetail);
					excel.set(setIndex,4,rowIssues, issue.issueSolution);
					excel.set(setIndex,5,rowIssues, issue.issueTechnicalSolution);
		
				})
					
			}
			
		}
		
		setIndex++;
		
	} 

	let exportFileName = utils.fileName("xlsx");
    excel.generate(exportFileName);
	
}




 /**
 * Some utilities funtions.
 */
const utils = {
  reqError: function (err) {
	let elrefTests = document.getElementById('mainContent');
    elrefTests.innerHTML = '<div id="alertMsg" class="alert alert-danger mt-2"> <span class="alert-icon"><span class="sr-only">Warning</span></span>' + langVallydette.errorJson + '</div>';
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
	document.title = e + " — " + dataVallydette.checklist.name + " — " + langVallydette.va11ydette;
  },
  listOrParagraph: function (e) {
	let htmlMarker;
	if (e.length > 1) {
		htmlMarker = "<ol>";
		e.forEach(function(content){
			htmlMarker += "<li>"+content+"</li>";
		})
		htmlMarker += "</ol>";
	} else {
		htmlMarker = "<p>"+e+"</p>";
	}
	return htmlMarker;
  },
  removeElement: function (e) { 
	if(e){
		e.parentNode.removeChild(e); 
	}
       
  },
 fileName: function (ext) { 
	if(ext){
		let defaultName = document.getElementById("checklistName");
		defaultName = utils.slugify(defaultName.innerText);

		let todayDate = new Date();
		let date = todayDate.getFullYear() + '-' + (todayDate.getMonth() + 1) + '-' + todayDate.getDate();

		let todayHour = new Date();
		let time = todayHour.getHours() + "-" + todayHour.getMinutes() + "-" + todayHour.getSeconds();

		let exportFileDefaultName = defaultName + '-' + date + '-' + time + '.' + ext;
		
		return exportFileDefaultName;
	}
 },
 addElement: function (type,  id, innerText, icon, iconOnly, arrayClass) { 
	var e = document.createElement(type);
	
	if (icon) {
		e.innerHTML = "<span class='" + icon + "' aria-hidden='true'></span>";
	}
	
	if (!iconOnly) {
		e.innerHTML += innerText;
	} else {
		e.setAttribute('aria-label', innerText);
	}
	
	e.setAttribute('id', id);
	e.setAttribute('title', innerText);

	arrayClass.forEach(c => e.classList.add(c));
	
	return e;
	
  },
  columnDisplay: function (number) {
	
	let display;
	let remove;
	let add;
	
	if (number === 2) {
		  
		display = 'none';
		remove = 'col-md-8';
		add = 'col-md-10';
		
	} else if (number === 3) {
		  
		display = 'block';
		remove = 'col-md-10';
		add = 'col-md-8';
		
	} else {
		
		return
		
	}
	 
	 
	document.getElementById('filter').style.display = display;
	document.getElementById('currentPageContent').classList.remove(remove);
	document.getElementById('currentPageContent').classList.add(add);
  },
  htmlEntities: function (str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
	
}  

initVallydetteApp('wcag-android', 'fr');
