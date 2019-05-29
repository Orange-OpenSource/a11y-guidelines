$(document).ready(function () {

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
	doXHR('json/tests-web.json', function(errFirst, responseFirst) {
	  if (errFirst) {
		reqError(); 
	  }
		return doXHR('json/tests-concepteur.json', function(errSecond, responseSecond) {
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
		
		for (var i = 0; i < a.length; i++) {
			
			var testA = a[i].title;
			
		
			for (var j = 0; j < b.length; j++) {
			
				var testB = b[j].title;
				
				if (testA==testB){
					a.splice(i++, 0,  b[j]);
					b.splice(j, 1);
					
				} 

			}	

		}
		for (var i = 0; i < a.length; i++) {
			
			var testC = a[i].themes;
			
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
	let refTests = compareReorder(data, data2);
	
	let app = new function() {
	  // Récupération des données
	  this.refTests = refTests;
	  
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
	  
	  this.FetchAll = function(refTests) {
	  
		  // Selection de l'élément
		  let elrefTests = document.getElementById('refTests');
		  let htmlrefTests = '';
		  let headingTheme = '';

		  //on boucle dans le tableau passé en paramètre de la fonction
		  for (let i in refTests) {
			if(headingTheme!=refTests[i].themes){
				headingTheme=refTests[i].themes;
				htmlrefTests +='<h2 id="test-'+formatHeading(refTests[i].themes)+'">'+refTests[i].themes+'</h2>';
			}
			htmlrefTests += '<article class=""><div class="card-header" id="heading'+i+'"><h3 class="card-title"><a class="" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse'+i+'" aria-expanded="false" aria-controls="collapse'+i+'">' + refTests[i].title + '<span class="badge badge-pill badge-light pull-xs-right">'+((refTests[i].profils[0] == 'Concepteur') ? "Conception" : "Développement")+'</span></a></h3>';
			
			htmlrefTests += '</div><div id="collapse'+i+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading'+i+'">';
			htmlrefTests += '<div class="card-block"><div class="row">';
			htmlrefTests += '<div class="col-lg-6"><h4>Procédures</h4><ol>';
			for (let j in refTests[i].tests) {
				htmlrefTests += '<li>' + refTests[i].tests[j] + '</li> ';
			}
			htmlrefTests += '</ol></div>';
			htmlrefTests += '<div class="col-lg-6"><h4>A vérifier</h4><ol>';
			for (let j in refTests[i].verifier) {
				htmlrefTests += '<li>' +  refTests[i].verifier[j] + '</li> ';
			}
			htmlrefTests += '</ol></div>';
			htmlrefTests += '</div>';
			htmlrefTests += '<div class="row">';
			htmlrefTests += '<div class="col-lg-12"><h4>Résultats</h4><ol>';
			for (let j in refTests[i].resultat) {
				htmlrefTests += '<li>' + refTests[i].resultat[j] + '</li> ';
			}
			htmlrefTests += '</ol></div>';
			htmlrefTests += '</div>';
			if (refTests[i].exception) {
				htmlrefTests += '<div class="row"><div class="col-lg-12" ><h4>Exceptions</h4>';
				htmlrefTests += '<p>' + refTests[i].exception + '</p> ';
				htmlrefTests += '</div>';
				htmlrefTests += '</div>';
			}		
			htmlrefTests += '</div><div class="card-footer text-muted"><b>Profils : </b>' + refTests[i].profils + ' ';
			htmlrefTests += '<br /> <b>Outils : </b>';
			for (let j in refTests[i].type) {
			  htmlrefTests += '<i class="fa fa-tag" aria-hidden="true"></i> ' + refTests[i].type[j] + ' ';
			}
			htmlrefTests += '</div>';
			htmlrefTests += '</div></article>';
		  }

			  // Affichage de l'ensemble des lignes en HTML
			  refTests.length===0 ?  elrefTests.innerHTML = '<div class="alert alert-warning">Aucun résultat ne correspond à votre sélection</div>' : elrefTests.innerHTML = htmlrefTests;

		};
		
		
		// Retourne la liste des checkboxes
		this.DisplayFilters = function() {
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

			  for (let i in uniqueTypes) {
				htmlTypes += '<li><input type="checkbox" id="type' + i + '" name="types" value="' + uniqueTypes[i] + '"> <label for="type' + i + '" id="labelType' + i + '">' + uniqueTypes[i] + '</label></li>';
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

		/*
		//init array conditions avec valeur Expert Accessibilité	
		arrProfil.push("Expert Accessibilité");
		
		conditions.unshift(function(item) { 
			return item.profils.indexOf(arrProfil[0]) !== -1;								
		});	
		
		//on nomme la fonction, pour les boutons radio on utilise this.name
		Object.defineProperty(conditions[0], 'name', {value: this.name, writable: false});
		*/

			for (var i = 0; i < checkboxes.length; i++) {
				
				let input = checkboxes[i];

				input.addEventListener('click', function() {

					if ((this.checked && this.name==="profil")){
							arrProfil = [];
							arrProfil.push(input.value);		
					}
							
					if (this.name==="types"){

						if (input.checked){
							arrType.push(this.value);
							
						} else  {
								//on supprime tous les critères non cochés
								let removeItem = arrType.filter(function(e) {
									e !== this.value;
								});
								arrType = removeItem;
						
								//on supprime également la condition dans le tableau des conditions
								delDoublon(conditions, this.id);	
						}
					}

					let indice = arrType.length + arrProfil.length;
						
						
					if (indice > 0) {	

						if (indice == 1) {
							
							//on réinitialise les conditions
							//conditions = [];

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

							}
							if ((this.checked && this.name==="types")){
								conditions.unshift(function(item) {
									return item.type.indexOf(arrType[0]) !== -1;
								});
								//on nomme la fonction, pour les checkboxes on utilise this.id
								Object.defineProperty(conditions[0], 'name', {value: this.id, writable: false});	
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

							}
							if ((this.checked && this.name==="types")){
								
								//on récupere la dernière valeur ajoutée
								let i = arrType.length - 1;
								let valeurFiltre = arrType[i];
							
								conditions.unshift(function(item) {
									return item.type.indexOf(valeurFiltre) !== -1;
								});
								
								//on nomme la fonction, pour les checkboxes on utilise this.id
								Object.defineProperty(conditions[0], 'name', {value: this.id, writable: false});

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
						app.UpdateTypes(uniqueTypes, filteredTest);
							
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


}

});

