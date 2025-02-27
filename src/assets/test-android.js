document.addEventListener("DOMContentLoaded", function(event) {
  const lang = document.documentElement.getAttribute('lang')

  if (!lang) {
    throw new Error('A lang attribute must be set on the <html> tag !')
  }

  const locales = {
    'en': {
      process : "Process",
      check : "To check",
      conception: 'Design',
      development: 'Development',
      results : "Results",
      justification : "Justification",
      profiles: 'Profiles',
      tools: 'Tools',
      allTools: 'All tools',
      // allProfils: 'All profiles',
      exceptions: 'Exceptions',
      ongoingTests: 'ongoing tests',
      noResults: 'No results match your selection',
      withCurrentFilters: 'with current filters',
      reinitFilters: 'Reinit <span class="visually-hidden">&nbsp;filters</span>'
    },
    'fr': {
      process : "Procédures",
      check : "À vérifier",
      conception: 'Conception',
      development: 'Développement',
      results : "Résultats",
      justification : "Justification",
      profiles: 'Profils&nbsp;',
      tools: 'Outils&nbsp;',
      allTools: 'Tous les outils',
      // allProfils: 'Tous les profils',
      exceptions: 'Exceptions',
      ongoingTests: 'tests en cours',
      noResults: 'Aucun résultat ne correspond à votre sélection',
      withCurrentFilters: 'dans les filtres en cours',
      reinitFilters: 'Réinitialiser <span class="visually-hidden">&nbsp;les filtres</span>'
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
  

  doXHR('/assets/json/checklist/tests-android-'+lang+'.json', function(errFirst, responseFirst) {  
    if (errFirst) {
      reqError();
    }
    return doXHR('/assets/json/checklist/tests-concepteur-mobile-'+lang+'.json', function(errSecond, responseSecond) {
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

  // function encode(str){

  // str=str.replace(/[\x26\x0A\<>'"^]/gi, function(r){return"&#"+r.charCodeAt(0)+";"});
  // str=str.replace(/\&#60;code\&#62;([\s\S]*?)\&#60;\/code\&#62;/g, '<code>$1</code>');

  // return str;
  // }


  function formatHeading(str){
    str = str.toLowerCase();
    str = str.replace(/é|è|ê/g,"e");
    str = str.replace(/ /g,"-");

    return str;
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

      this.FetchAll = function(currentRefTests) {

        // Selection de l'élément
        let elrefTests = document.getElementById('refTests');
        let htmlrefTests = '';
        let headingTheme = '';

        //on boucle dans le tableau passé en paramètre de la fonction
        for (let i in currentRefTests) {
          if(headingTheme!=currentRefTests[i].themes){
            let htmlrefTestsClass = i === '0' ? '' : ' class="pt-5"'
            headingTheme=currentRefTests[i].themes;
            htmlrefTests +='<h2 id="test-'+formatHeading(currentRefTests[i].themes)+'"'+htmlrefTestsClass+'>'+currentRefTests[i].themes+'</h2>';
          }
          htmlrefTests += '<article class="accordion-item"><div class="accordion-header" id="heading'+i+'"><h3 class="card-title mb-0"><button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse'+i+'" aria-expanded="false" aria-controls="collapse'+i+'"><span class="accordion-title h6 mb-0 me-2 flex-grow-1">' + currentRefTests[i].title + '</span></a></h3>';

          htmlrefTests += '</div><div id="collapse'+i+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading'+i+'">';
          htmlrefTests += '<div class="card-block"><div class="row">';
          htmlrefTests += '<div class="col-lg-12"><h4>' + translate('process') + '</h4>';

          if(currentRefTests[i].type.length==0){
            currentRefTests[i].type.push("")
          }
          for (let k in currentRefTests[i].type){
            if(currentRefTests[i].type[k]!=""){
              htmlrefTests += '<h5 class="fs-6 ms-2">' + translate('tools') + ': '+currentRefTests[i].type[k]+'</h5>';
            }
            htmlrefTests += '<ol>';

            if(Array.isArray(currentRefTests[i].tests[0])){
              for (let j in currentRefTests[i].tests[k]) {
                htmlrefTests += '<li>' + currentRefTests[i].tests[k][j] + '</li> ';
              }
            }
            else{
              for (let j in currentRefTests[i].tests) {
                htmlrefTests += '<li>' + currentRefTests[i].tests[j] + '</li> ';
              }
            }

              htmlrefTests += '</ol>';
          }

          htmlrefTests += '</ol></div></div>';
          htmlrefTests += '<div class="row">';
          htmlrefTests += '<div class="col-lg-12"><h4>' + translate('check') + '</h4><ol>';
          for (let j in currentRefTests[i].verifier) {
            htmlrefTests += '<li>' +  currentRefTests[i].verifier[j] + '</li> ';
          }
          htmlrefTests += '</ol></div></div>';
          htmlrefTests += '<div class="row">';
          htmlrefTests += '<div class="col-lg-12"><h4>'+((currentRefTests[i].profils[0] == 'Concepteur') ? translate('justification') : translate('results'))+'</h4><ol>';
          for (let j in currentRefTests[i].resultat) {
            htmlrefTests += '<li>' + currentRefTests[i].resultat[j] + '</li> ';
          }
          htmlrefTests += '</ol></div>';
          htmlrefTests += '</div>';
          if (currentRefTests[i].exception) {
            htmlrefTests += '<div class="row"><div class="col-lg-12" ><h4>' + translate('exceptions') + '</h4>';
            htmlrefTests += '<p>' + currentRefTests[i].exception + '</p> ';
            htmlrefTests += '</div>';
            htmlrefTests += '</div>';
          }
          htmlrefTests += '</p>';
          htmlrefTests += '</div>';
          htmlrefTests += '</div></article>';
        }

        // Affichage de l'ensemble des lignes en HTML
        currentRefTests.length===0 ?  elrefTests.innerHTML = '<div class="alert alert-warning">' + translate('noResults') + '</div>' : elrefTests.innerHTML = htmlrefTests;

      };

     }

    // Affichage de tous les tests
    app.FetchAll(refTests);

  }

});

