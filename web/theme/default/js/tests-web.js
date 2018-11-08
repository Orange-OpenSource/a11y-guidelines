$(document).ready(function () {

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
	
fetch('json/tests-web.json').then(response => {
  return response.json();
}).then(data => {

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
		htmlrefTests += '</div><div class="card-footer text-muted"><b>Profils : </b>' + data[i].profils + ' ';
		htmlrefTests += '<br /> <b>Outils : </b>';
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

			  let uniqueTypes = types.filter( (value, index, self) => self.indexOf(value) === index );
			  let htmlTypes = '';

			  let uniqueProfils = profils.filter( (value, index, self) => self.indexOf(value) === index );
			  let htmlProfils = '';
			  
			  for (let i in uniqueTypes) {
				htmlTypes += '<li><input type="checkbox" id="type' + i + '" name="types" value="' + uniqueTypes[i] + '"> <label for="type' + i + '">' + uniqueTypes[i] + '</label></li>';
			  }

			  for (let i in uniqueProfils) {
				htmlProfils += '<li><input type="radio" id="profil' + i + '" name="profil" value="' + uniqueProfils[i] + '" '+((uniqueProfils[i] == 'Expert Accessibilité') ? " checked" : " ")+'> <label for="profil' + i + '">' + uniqueProfils[i] + '</label></li>';
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


		  for (let input of checkboxes) {
				 
			input.addEventListener('click', function() {

				if ((input.checked && input.name==="profil")){
						arrProfil = [];
						arrProfil.push(input.value);		
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

				let indice = arrType.length + arrProfil.length;
					
				if (indice > 0) {	

					if (indice == 1) {
						
						//on réinitialise les conditions
						//conditions = [];

						//on ajoute le premier critère
						if ((arrProfil.length===1)){
						
							//on supprime les doublons, nécessaire pour les boutons radio
							delDoublon(conditions, input.name);
						
							conditions.unshift(function(item) { 
								//return item.profils === arrProfil[0];
								return item.profils.indexOf(arrProfil[0]) !== -1;								
							});	
							//on nomme la fonction, pour les boutons radio on utilise input.name
							Object.defineProperty(conditions[0], 'name', {value: input.name, writable: false});	

						}
						if ((input.checked && input.name==="types")){
							conditions.unshift(function(item) {
								return item.type.indexOf(arrType[0]) !== -1;
							});
							//on nomme la fonction, pour les checkboxes on utilise input.id
							Object.defineProperty(conditions[0], 'name', {value: input.id, writable: false});	
						}
									
					} else {	
						
						//on ajoute le nouveau critère
						if ((input.checked && input.name==="profil")){

							//on supprime les doublons, nécessaire pour les boutons radio
							delDoublon(conditions, input.name);
					
							conditions.unshift(function(item) {
								return item.profils.indexOf(arrProfil[0]) !== -1;	
							});
							
							//on nomme la fonction, pour les boutons radio on utilise input.name
							Object.defineProperty(conditions[0], 'name', {value: input.name, writable: false});	

						}
						if ((input.checked && input.name==="types")){
							
							//on récupere la dernière valeur ajoutée
							let i = arrType.length - 1;
							let valeurFiltre = arrType[i];
						
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
  
}).catch(err => {
  // Do something for an error here
   let elrefTests = document.getElementById('refTests');
   elrefTests.innerHTML = '<div class="alert alert-warning">Erreur chargement ressource JSON</div>';
});
	

});

