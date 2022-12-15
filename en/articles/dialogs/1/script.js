
  // --- Exemple final ---
  // Ouverture de l'exemple final
 
  const allDialogs = document.querySelectorAll('[role=dialog], .dialog');
  const finalDialog =  document.getElementById('final-dialog');
  const finalFocusableContent = finalDialog.querySelectorAll('button');
  const dialogStart = finalDialog.querySelectorAll('button')[0];
  const dialogStop = finalFocusableContent[finalFocusableContent.length - 1];

  document.getElementById('final-openButton').onclick = function(){
	 
	 allDialogs.forEach(function(d) {
		d.style.display = 'none';
	 });
	 
	finalDialog.style.display = 'block';
	
	// Sauvegarde le focus pour le repositionner à la fermeture
	finalDialog.setAttribute('data-focusBack', 'final-openButton');
	
	// Place le focus sur l'élément par défaut
	finalDialog.querySelector('.defaultFocus').focus();
	
  };
  
  finalDialog.onkeydown = function(e){
	if (e.keyCode == 27) {
		var focusBackElement = finalDialog.getAttribute('data-focusBack');
		document.getElementById(focusBackElement).focus();
		this.style.display = 'none';
    } 
	
	if (e.key === 'Tab' || e.keyCode === 9) {
		
		if ( e.shiftKey ) {
		  if (document.activeElement === dialogStart) {
			e.preventDefault();
			dialogStop.focus();
			
		  }
		} else /* tab */ {
		  if (document.activeElement === dialogStop) {
			e.preventDefault();
			dialogStart.focus();
			
		  }
		}
	}
  };
  
 // Ouverture de l'exemple final 2
 document.getElementById('final-openButton2').onclick = function(){
	 
	  allDialogs.forEach(function(d) {
		d.style.display = 'none';
	 });
	 
	finalDialog.style.display = 'block';
	
	// Sauvegarde le focus pour le repositionner à la fermeture
	finalDialog.setAttribute('data-focusBack', 'final-openButton2');
	
	// Place le focus sur l'élément par défaut
	finalDialog.querySelector('.defaultFocus').focus();
  };
  
 // Boutons de fermeture des dialog
 finalDialog.querySelectorAll('button').forEach(function(b) {
	b.onclick = function(){
		var focusBackElement = finalDialog.getAttribute('data-focusBack');
		document.getElementById(focusBackElement).focus();
		finalDialog.style.display = 'none'; 
	}	
 });
   
 // --- Exemple step 1 ---
 var step1Dialog = document.getElementById('step1-dialog');

  // Overture de l'exemple step 1
  document.getElementById('step1-openButton').onclick = function(){  
     allDialogs.forEach(function(d) {
		d.style.display = 'none';
	 });
	step1Dialog.style.display = 'block';
  };

  // Boutons de fermeture
  step1Dialog.onclick = function(){  
   step1Dialog.style.display = 'none';
  }
 
  // --- Exemple step 2 ---
  const step2Dialog = document.getElementById('step2-dialog');
  const step2FocusableContent = step2Dialog.querySelectorAll('button');
  const step2dialogStart = step2Dialog.querySelectorAll('button')[0];
  const step2dialogStop = step2FocusableContent[finalFocusableContent.length - 1];
  
  // Overture de l'exemple step 2
  document.getElementById('step2-openButton').onclick = function(){  

     allDialogs.forEach(function(d) {
		d.style.display = 'none';
	 });
	 
    step2Dialog.style.display = 'block';

    // Sauvegarde le focus pour le repositionner à la fermeture
    step2Dialog.setAttribute('data-focusBack', 'step2-openButton');

    // Place le focus sur l'élément par défaut
	step2Dialog.querySelector('.defaultFocus').focus();
    
  };

  // Boutons de fermeture
  step2Dialog.querySelectorAll('button').onclick = function(){
   var focusBackElement = step2Dialog.getAttribute('data-focusBack');
	document.getElementById(focusBackElement).focus();
   step2Dialog.style.display = 'none';
  }
 
  // Gestion de la touche échap
    step2Dialog.onkeydown = function(e){
	  if (e.keyCode == 27) {
		var focusBackElement =  step2Dialog.getAttribute('data-focusBack');
		document.getElementById(focusBackElement).focus();
		this.style.display = 'none';
    }  
	
	if (e.key === 'Tab' || e.keyCode === 9) {
		
		if ( e.shiftKey ) {
		  if (document.activeElement === step2dialogStart) {
			e.preventDefault();
			step2Dialog.querySelector("button:last-child").focus();
			
		  }
		} else /* tab */ {
		  if (document.activeElement === step2dialogStop) {
			e.preventDefault();
			step2Dialog.querySelector("button:first-child").focus();
			
		  }
		}
	}
  };
  