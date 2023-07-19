document.addEventListener("DOMContentLoaded", function(event) {
  const lang = document.documentElement.getAttribute('lang')

  if (!lang) {
    throw new Error('A lang attribute must be set on the <html> tag !')
  }

  const locales = {
    'en': {
      process: "Process",
      check: "To check",
      conception: 'Design',
      development: 'Development',
      results: "Results",
      justification : "Justification",
      profiles: 'Profiles',
      tools: 'Tools',
      allTools: 'All',
      exceptions: 'Exceptions',
      ongoingTests: 'ongoing tests',
      noResults: 'No results match your selection',
      withCurrentFilters: 'with current filters',
      reinitFilters: 'Reinit <span class="sr-only">&nbsp;filters</span>',
      themes: 'Themes',
      elements: 'Elements'
    },
    'fr': {
      process: "Procédures",
      check: "A vérifier",
      conception: 'Conception',
      development: 'Développement',
      results: "Résultats",
      justification: "Justification",
      profiles: 'Profils',
      tools: 'Outils',
      allTools: 'Tous les outils',
      exceptions: 'Exceptions',
      ongoingTests: 'tests en cours',
      noResults: 'Aucun résultat ne correspond à votre sélection',
      withCurrentFilters: 'dans les filtres en cours',
      reinitFilters: 'Réinitialiser <span class="sr-only">&nbsp;les filtres</span>',
      themes: 'Thèmes',
      elements: 'Éléments'
    }
  }

  function translate(key, to) {
    const locale = to || lang

    if (!locales.hasOwnProperty(locale)) {
      throw new Error(`translate(): Translation's locale \`${locale}\` does not exist`)
    }

    if (!locales[locale].hasOwnProperty(key)) {
      throw new Error(`translate(): Translation's key \`${key}\` does not exist for locale \`${locale}\``)
    }

    return locales[locale][key]
  }

  //requette XMLHttpRequest
  function doXHR(url, callback) {
    var oReq = new XMLHttpRequest();

    oReq.onreadystatechange = function(event) {
      if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
          return callback(null, this.responseText);
        } else {
          return callback({errCode: this.status, errMsg: this.statusText});
        }
      }
    };
    oReq.open('GET', url, true);
    oReq.send(null);
  }

  //appel des Json


  doXHR('../../../../../assets/json/'+lang+'/ios/wwdc/ios-wwdc-listnota11y.json', function(errFirst, responseFirst) {  
    if (errFirst) {
      reqError();
    }
    return doXHR('../../../../../assets/json/'+lang+'/ios/wwdc/ios-wwdc-listnota11yempty.json', function(errSecond, responseSecond) {
      if (errSecond) {
        reqError();
      }
      return reqListener(responseFirst, responseSecond);
    });

  });


  function reqError(err) {
    let elrefTests = document.getElementById('refTests');
    elrefTests.innerHTML = '<div class="alert alert-warning">Erreur chargement ressource JSON</div>';
  }

  //on concatene les 2 jsons en les réorganisant par tests
  function compareReorder(a, b) {
    // si les titres sont identiques, on regroupe par titre
    for (var i = 0; i < a.length; i++) {
      let testA = a[i].title;

      for (var j = 0; j < b.length; j++) {
        var testB = b[j].title;

        if (testA==testB){
          a.splice(i++, 0,  b[j]);
          b.splice(j, 1);
        }
      }
    }

    //sinon on regroupe les tests par themes
    for (var i = 0; i < a.length; i++) {
      let testC = a[i].themes;

      for (var j = 0; j < b.length; j++) {
        var testD = b[j].themes;

        if (testC==testD){
          a.splice(i, 0,  b[j]);
          b.splice(j, 1);
        }
      }
    }
    return a;
  }


  function formatHeading(str){
  
    str = str.toLowerCase();
    str = str.replace(/é|è|ê/g,"e");
    str = str.replace(/ /g,"-");

    return str;
  }

  //supprimer les doublons dans les filtres
  function delDoublon(arrCond, inputId){
    for (var i = 0; i < arrCond.length; i++) {
      //for (let condition of arrCond) {
      let condition = arrCond[i];
      if (condition.name == inputId) {
        let arrCondIndex = arrCond.indexOf(condition);
        arrCond.splice(arrCondIndex , 1);
      }
    }
    return arrCond;
  }


  function reqListener(responseFirst, responseSecond) {

    var data = JSON.parse(responseFirst);
    var data2 = JSON.parse(responseSecond);
    var uniqueTypes = [];
    var refTests = compareReorder(data, data2);

    let app = new function() {
      // Récupération des données
      //this.refTests = refTests;

      this.UpdateTypes = function(allTypes, updatedTypes) {
        let elrefTypes = [];

        for (let i in updatedTypes) {
          for (let j in updatedTypes[i].type) {
            elrefTypes.push(updatedTypes[i].type[j]);
          }
        }
        let uniqueUpdatedTypes =  elrefTypes.filter(function(value, index, self) {
          return self.indexOf(value) === index;
        });

        for (let i in allTypes) {
          var elem = document.getElementById('type'+i);
          elem.disabled = true;
          var elemLabel = document.getElementById('labelType'+i);
          elemLabel.classList.add("disabled");

        }
        for (let i in allTypes) {
          for (let j in uniqueUpdatedTypes) {
            if (allTypes[i]==uniqueUpdatedTypes[j]) {
              var elem = document.getElementById('type'+i);
              elem.disabled = false;
              var elemLabel = document.getElementById('labelType'+i);
              elemLabel.classList.remove("disabled");
            }
          }
        }

      };

      this.UpdateFeedback = function(activeFilter, nbTests) {
        let elBtnReinit = document.getElementById('reinit');
//         let elFeedback = document.getElementById('feedback');
        let htmlFeedback = '';
        let test = nbTests > 1 ? 'tests' : 'test'

        if (activeFilter) {
          elBtnReinit.disabled = false;
/* 
          htmlFeedback = '<button type="button" class="btn btn-secondary btn-sm mt-2 mb-3" id="reinitLink">' + translate('reinitFilters') + '';
          elFeedback.innerHTML = htmlFeedback;
 */

          let elreinitLink = document.getElementById('reinitLink');
          elreinitLink.addEventListener('click', function() {
            app.FetchAll(refTests);
            app.FilterByType();
            app.UpdateFeedback(false, refTests.length);
          });

        } else {
          elBtnReinit.disabled = true;
/* 
          htmlFeedback = '<p><b>'+nbTests+'</b> ' + translate('ongoingTests') + '</p>';
          elFeedback.innerHTML = htmlFeedback;
 */

        }

      };

      this.FetchAll = function(currentRefTests) {

        // Selection de l'élément
        let elrefTests = document.getElementById('refTests');
        let htmlrefTests = '';
        let headingTheme = '';

        for (let i in currentRefTests) {
        		if(currentRefTests[i].themes != "FAKE"){//Ne pas présenter le premier élément du fichier .json qui n'est là que pour trier alphabétiquement les thèmes.
          		if(headingTheme!=currentRefTests[i].themes){
          		
            			let htmlrefTestsClass = i === '0' ? '' : ' class="pt-5"'
            			headingTheme=currentRefTests[i].themes;
            
           			htmlrefTests +='<h2 id="test-'+formatHeading(currentRefTests[i].themes)+'"'+htmlrefTestsClass+' >'+currentRefTests[i].themes+'</h2>';
          		}
 				htmlrefTests += '<a href="' + currentRefTests[i].raccourcis + '" style="text-decoration: none;">';
 				htmlrefTests += '<p id="heading'+i+'">' + currentRefTests[i].title + '     ';
 		
 				//Ajout du badge si l'élément impacté existe
 				if(currentRefTests[i].resultat[0]) {
 					htmlrefTests +='<span class="badge rounded-pill bg-light mr-2 align-self-center">';
 					htmlrefTests += currentRefTests[i].resultat[0] +'</span>';
 				}
 				htmlrefTests += '</p></a>';
        		}
        		// Affichage de l'ensemble des lignes en HTML
        		currentRefTests.length===0 ?  elrefTests.innerHTML = '<div class="alert alert-warning">' + translate('noResults') + '</div>' : elrefTests.innerHTML = htmlrefTests;
		}
      };

      // Retourne la liste des checkboxes
      this.DisplayFilters = function() {
        let elFilterFooter = document.getElementById('filter-footer');//Id défini dans le fichier 'filters.njk'
        let htmlFilterFooter = '';
        htmlFilterFooter += '<button id="reinit" class="btn btn-secondary" disabled>' + translate('reinitFilters') + '</button>';
        elFilterFooter.innerHTML = htmlFilterFooter;
        let elBtnReinit = document.getElementById('reinit');

        elBtnReinit.addEventListener('click', function() {
          app.FetchAll(refTests);
          app.FilterByType();
          app.UpdateFeedback(false, refTests.length);
        });

        // Selection de l'élément
        let elTypes = document.getElementById('types');
        let types   = [];

        // Selection de l'élément
        let elProfils = document.getElementById('profils');
        let profils   = [];

        // Chaque ligne (test)
        for (let i in refTests) {

          // Chaque "type" dans chaque ligne (test)
          for (let j in refTests[i].type) {
            types.push(refTests[i].type[j]);
          }

          // Chaque "profil" dans chaque ligne (test)
          for (let j in refTests[i].profils) {
            profils.push(refTests[i].profils[j]);
          }

        }


        //let uniqueTypes = types.filter( (value, index, self) => self.indexOf(value) === index );
        uniqueTypes = types.filter(function(value, index, self) {
          return self.indexOf(value) === index;
        });

        //on tri par ordre alphabétique
        uniqueTypes.sort(function (a, b) {
          return a.toLowerCase().localeCompare(b.toLowerCase());
        });

        let htmlTypes = '';

        htmlTypes += '<li><input type="radio" id="typeAll" name="types" value="typeAll" checked> <label for="typeAll">' + translate('allTools') +'</label>';

        for (let i in uniqueTypes) {
          htmlTypes += '<li><input type="radio" id="type' + i + '" name="types" value="' + uniqueTypes[i] + '"> <label for="type' + i + '" id="labelType' + i + '">' + uniqueTypes[i] + '</label></li>';
        }

        //let uniqueProfils = profils.filter( (value, index, self) => self.indexOf(value) === index );
        let uniqueProfils = profils.filter(function(value, index, self) {
          return self.indexOf(value) === index;
        });

        let htmlProfils = '';


        for (let i in uniqueProfils) {
          htmlProfils += '<li><input type="radio" id="profil' + i + '" name="profil" value="' + uniqueProfils[i] + '"> <label for="profil' + i + '">' + uniqueProfils[i] + '</label></li>';
        }

        elTypes.innerHTML = htmlTypes;
        elProfils.innerHTML = htmlProfils;

      };

      // Retourne les tests filtrés
      this.FilterByType = function() {

        // Affiche les checkboxes et boutons radios
        this.DisplayFilters();

        let checkboxes = document.querySelectorAll('input');
        let arrType    = [];
        let arrProfil  = [];
        let conditions = [];
        let self       = this;
        let runUpdateType = false;

        for (var i = 0; i < checkboxes.length; i++) {

          let input = checkboxes[i];

          input.addEventListener('click', function() {

            if ((this.checked && this.name==="profil")){
              arrProfil = [];
              arrProfil.push(input.value);
            }

            if (this.checked && this.id==="typeAll" ){
              arrType = [];

            } else if (this.checked && this.name==="types"){
              arrType = [];
              arrType.push(input.value);
            }

            let indice = arrType.length + arrProfil.length;


            if (indice > 0) {

              if (indice == 1) {

                //on ajoute le premier critère
                if ((arrProfil.length===1)){

                  //on supprime les doublons, nécessaire pour les boutons radio
                  delDoublon(conditions, this.name);

                  conditions.unshift(function(item) {
                    //return item.profils === arrProfil[0];
                    return item.profils.indexOf(arrProfil[0]) !== -1;
                  });
                  //on nomme la fonction, pour les boutons radio on utilise this.name
                  Object.defineProperty(conditions[0], 'name', {value: this.name, writable: false});

                  runUpdateType = true;

                }
                if ((arrType.length===1)){

                  //on supprime les doublons, nécessaire pour les boutons radio
                  delDoublon(conditions, this.name);


                  conditions.unshift(function(item) {
                    return item.type.indexOf(arrType[0]) !== -1;
                  });
                  //on nomme la fonction, pour les checkboxes on utilise this.id
                  Object.defineProperty(conditions[0], 'name', {value: this.name, writable: false});

                  runUpdateType = false;
                }

              } else {

                //on ajoute le nouveau critère
                if ((this.checked && this.name==="profil")){

                  //on supprime les doublons, nécessaire pour les boutons radio
                  delDoublon(conditions, this.name);

                  conditions.unshift(function(item) {
                    return item.profils.indexOf(arrProfil[0]) !== -1;
                  });

                  //on nomme la fonction, pour les boutons radio on utilise this.name
                  Object.defineProperty(conditions[0], 'name', {value: this.name, writable: false});
                  runUpdateType = true;
                }
                
                if ((this.checked && this.name==="types" && this.id!="allType")){

                  //on supprime les doublons, nécessaire pour les boutons radio
                  delDoublon(conditions, this.name);

                  conditions.unshift(function(item) {
                    return item.type.indexOf(arrType[0]) !== -1;
                  });

                  Object.defineProperty(conditions[0], 'name', {value: this.name, writable: false});

                  runUpdateType = false;
                }
              }

              //on applique tous les filtres stockés dans conditions
              filteredTest = refTests.filter(function(d) {
                return conditions.every(function(c) {
                  return c(d);
                });
              });

              //on met à jour la page
              app.FetchAll(filteredTest);

              if (runUpdateType) {
                app.UpdateTypes(uniqueTypes, filteredTest);
              }

              app.UpdateFeedback(true,filteredTest.length);

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
    app.UpdateFeedback(false, refTests.length);


  }

});

