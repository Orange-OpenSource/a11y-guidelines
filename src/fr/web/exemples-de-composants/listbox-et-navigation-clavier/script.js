var searchString = "", timer;
 
// Xpath polyfill
wgxpath.install();

// Init
const listbox = document.querySelector("[role=listbox]");

document.querySelectorAll("[type=checkbox]").forEach(function(c){
	c.checked = false;
});

// On focus
listbox.onfocus = function() {
   // If no selected element, select the first by default
   if (!this.querySelectorAll("[aria-selected=true]").length) {        
		var firstOption = this.querySelector("[role=option]:first-child");
		firstOption.setAttribute("aria-selected", "true");
		firstOption.focus();
   } else {  
	   var selectedOption = this.querySelector("[aria-selected=true]")
	   selectedOption.focus();
	   selectedOption.classList.add("active");
   }
};

// On keydown
listbox.onkeydown = function(e) {          
	var currentItem = this.querySelector("[aria-selected=true]"); 
									  
	switch (e.keyCode) {
		case 9: // TAB
		case 33: // Page Up
		case 34: // Page down
			// Don't prevent default for this keys
			break;
		case 121: // shift + F10
			if (e.shiftKey) {
				alert("Affichage du menu contextuel");
				e.preventDefault();
			}
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
		case 32: // Space    
			if (currentItem.getAttribute("aria-checked") === "true") {
				currentItem.setAttribute("aria-checked", "false");
				currentItem.querySelector("input[type=checkbox]").checked = false;
			} else {
				currentItem.setAttribute("aria-checked", "true");
				currentItem.querySelector("input[type=checkbox]").checked = true;
			}
			e.preventDefault();
		break; 
		case 65: // Ctrl + A
			if (e.ctrlKey) {
				e.preventDefault();
				this.querySelectorAll("[role=option] input[type=checkbox]").forEach(function(i){
					i.checked = true;
				});
				this.querySelectorAll("[role=option]").forEach(function(o){
					o.setAttribute("aria-checked", "true");
				});

				// message to faire-parler-le-lecteur-d-ecran by screenreader
				speak("tout sélectionner");
				
				break;
			}               
		default: // Search item start with                                                                                        
			clearTimeout(timer);
			searchString += e.key;
			var self = this;
			timer = setTimeout(function(){                                                
				var xpath = "li/span[starts-with(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), '" + searchString + "')]";                                                
				var matchingElement = document.evaluate(xpath, self, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;                        
				searchString = "";
				if (matchingElement) {                            
					currentItem.setAttribute("aria-selected", "false");
					matchingElement.parentElement.setAttribute("aria-selected", "true");
					matchingElement.parentElement.focus();
					matchingElement.parentElement.classList.add("active");
				}                        
			}, 500);           

			e.preventDefault();         
	}
};

// On click
listbox.querySelectorAll("[role=option]").forEach(function(o){
	
	o.onmousedown = function() {
		var ariaSelected = this.parentElement.querySelector("[aria-selected=true]");
		if (ariaSelected) {
			ariaSelected.setAttribute("aria-selected", "false");
		}
		
		this.setAttribute("aria-selected", "true");
		this.focus();
	}
	
	// On focus option
	o.onfocus = function() {
		this.parentElement.setAttribute("tabindex", "-1");
	}
	
	o.onblur = function() {
		this.classList.remove("active");
		this.parentElement.setAttribute("tabindex", "0");
	}
	
});	 


listbox.querySelectorAll("label").forEach(function(l){
	
	l.onmousedown = function(e) {
		  e.stopPropagation();
	}
	
});

// checkbox click
listbox.querySelectorAll("[type=checkbox]").forEach(function(c){
	
	c.onclick = function(e) {
		if (this.checked) {
			this.parentElement.setAttribute("aria-checked", "true");
		} else {
			this.parentElement.setAttribute("aria-checked", "false");
		}
		
		var ariaSelected = listbox.querySelectorAll("[aria-selected=true]");
		if (ariaSelected) {
			ariaSelected.forEach(function(a){
				a.setAttribute("aria-selected", "false");
			});
		}
		
		this.parentElement.setAttribute("aria-selected", "true");
		this.parentElement.focus();
		
		 e.stopPropagation();
	}
	
	c.onfocus = function(e) {
		this.parentElement.parentElement.querySelector("[aria-selected=true]").focus();
	}
	
});



// faire-parler-le-lecteur-d-ecran function for screenreader
function speak(message) {
    var id = "sr-" + Date.now();
	var span = document.createElement("span");
	Object.assign(span, {"id": id, "aria-live": "polite", "className": "sr-only"});
    document.body.appendChild(span);
    window.setTimeout(function() {
		document.getElementById(id).innerText = message;
    }, 100);

    window.setTimeout(function() {
       document.getElementById(id).remove();
    }, 1000);

}
