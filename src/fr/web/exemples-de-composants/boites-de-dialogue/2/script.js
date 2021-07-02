
  const openButton = document.getElementById('openButton');
  const dialog = document.getElementById('dialog');
  const options = document.querySelectorAll('[role=option]');
  const dialogFocusableContent = dialog.querySelectorAll('button');
  const dialogStart = dialog.querySelectorAll('button')[0];
  const dialogStop = dialogFocusableContent[dialogFocusableContent.length - 1];

  function showDialog() {
    dialog.style.display = "block";

    // If no selected element, select the first by default
    if (!dialog.querySelectorAll("[aria-selected=true]").length) {	
      var firstOption = dialog.querySelector("[role=option]");
	 firstOption.setAttribute("aria-selected", "true");
	 firstOption.focus();
    } else {
     dialog.querySelector("[aria-selected=true]").focus();
    }
  }

  function hideDialog () {
    openButton.focus();
    dialog.style.display = "none";
  }


  // --- Exemple final ---
  // Ouverture de l'exemple final
  openButton.onclick = function(){
    document.querySelector('[role=dialog], .dialog').style.dysplay = "none";
    showDialog();
  };

  // Boutons de fermeture des dialog
   document.querySelectorAll('[role=dialog] button').forEach(function(b){
	   
		b.onclick = function(){
			hideDialog();
		}
	   
   })

  dialog.onkeydown = function(e){
	  
	if (e.keyCode === 27) {
      hideDialog();
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
  
  dialog.querySelector("[role=listbox]").onkeydown = function(e){          
      var currentItem = this.querySelector("[aria-selected=true]"); 
      switch (e.keyCode) {
          case 38:  // Up arrow
              if (currentItem.previousElementSibling) {
                  currentItem.setAttribute("aria-selected", "false"); 
				  var previousItem = currentItem.previousElementSibling;
                  previousItem.setAttribute("aria-selected", "true");
				  previousItem.focus();				  
              }                    
              e.preventDefault();
              break;
          case 40: // Down arrow          
              if (currentItem.nextElementSibling) {
                  currentItem.setAttribute("aria-selected", "false");
				  var nextItem = currentItem.nextElementSibling;
                  nextItem.setAttribute("aria-selected", "true");
				  nextItem.focus();
              }
              e.preventDefault();
              break;
          case 13: // Enter
              hideDialog();
              e.preventDefault();
              break;
          case 36: // home                    
              currentItem.setAttribute("aria-selected", "false");                    
              var firstItem = this.querySelectorAll("[role=option]")[0];
			  firstItem.setAttribute("aria-selected", "true");
			  firstItem.focus();
              e.preventDefault();
              break;
          case 35: // end
              currentItem.setAttribute("aria-selected", "false");
			  var allItems = this.querySelectorAll("[role=option]");
			  var lastItem = allItems[allItems.length - 1];
              lastItem.setAttribute("aria-selected", "true");
			  lastItem.focus();
              e.preventDefault();
              break;                   
      }
  };
  
  options.forEach(function(o){
	  
	  // double click
	  o.ondblclick = function() {hideDialog()};

	  // Mouse down
	  o.onmousedown = function (e) {
		 var parentElement = this.parentElement.querySelector("[aria-selected=true]");
		 parentElement.setAttribute("aria-selected", "false");
		 this.setAttribute("aria-selected", "true");
		 this.focus();
		 e.preventDefault();
	  };
	  
	  // On focus option
	  o.onfocus = function (e) {
		  this.parentElement.setAttribute("tabindex", "-1");
	  };

	  o.onblur = function(e) {
		  this.parentElement.setAttribute("tabindex", "0");
	  };
	  
  });
