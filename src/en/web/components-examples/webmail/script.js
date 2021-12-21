document.addEventListener("DOMContentLoaded", function(event) {

	(function () {
	
        // Init
        document.querySelectorAll("input[type=checkbox]").forEach(checkbox =>{
            checkbox.checked=false;
        })
        
        
        document.getElementById("exempleCheckbox").addEventListener("focus", function () {
           // If no selected element, select the first by default
           if (this.querySelector("[aria-selected=true]") === null) {    
               let elementfirstchild = this.querySelector("[role=option]");
               elementfirstchild.setAttribute("aria-selected", "true");
               elementfirstchild.focus();
               elementfirstchild.classList.add("active");
           } else {
            let ariaSelectedElement = this.querySelector("[aria-selected=true]");
            ariaSelectedElement.classList.add("active");
            ariaSelectedElement.focus();
           }
        });

        // On keydown

        document.getElementById("exempleCheckbox").addEventListener("keydown", function (e) {
            let currentItem = this.querySelector("[aria-selected=true]");
            switch(e.keyCode){
                case 38: // up arrow
                    if(currentItem.previousElementSibling !== null){
                        currentItem.setAttribute("aria-selected","false");
                        currentItem.previousElementSibling.setAttribute("aria-selected", "true");
                        currentItem.previousElementSibling.focus();
                        currentItem.previousElementSibling.classList.add('active');
                    }
                    e.preventDefault();
                    break;
                case 40: // Down arrow
                    if(currentItem.nextElementSibling !== null){
                        currentItem.setAttribute("aria-selected","false");
                        currentItem.nextElementSibling.setAttribute("aria-selected","true");
                        currentItem.nextElementSibling.focus();
                        currentItem.nextElementSibling.classList.add('active');
                    }
                    e.preventDefault();
                    break;
                case 32: // Space                                                                                                             
                    if (currentItem.getAttribute("aria-checked") === "true") {
                        currentItem.setAttribute("aria-checked", "false");
                        currentItem.querySelector("input[type=checkbox]").checked = false;
                    } else {                      
                        currentItem.setAttribute("aria-checked", "true");
                        currentItem.firstElementChild.setAttribute("aria-checked", "true");
                        currentItem.querySelector("input[type=checkbox]").checked = true;;
                    }
                    e.preventDefault();
                    break;
            }

        });
        
       // On click
       document.querySelectorAll("[role=option]").forEach(option =>{
            option.addEventListener("mousedown",function(e){
                this.parentElement.querySelector("[aria-selected=true]").setAttribute("aria-selected", "false")
                this.setAttribute("aria-selected", "true");
                this.focus();
                e.preventDefault();
            })
        })

        document.querySelectorAll("label").forEach(label =>{
            label.addEventListener("mousedown",function(e){
                e.stopPropagation();
            })
        })
       
       // checkbox click
       document.querySelectorAll("[type=checkbox]").forEach(checkbox =>{
        checkbox.addEventListener("click",function(e){
                if(this.checked){
                    this.parentElement.parentElement.setAttribute("aria-checked", "true");
                }
                else{
                    this.parentElement.parentElement.setAttribute("aria-checked", "false");
                }
                e.stopPropagation();
            })
        })


       // On focus option
        document.querySelectorAll("[role=option]").forEach(option =>{
            option.addEventListener("focus",function(e){
            
                this.parentElement.setAttribute("tabindex", "-1")
            })
        })

        document.querySelectorAll("[role=option]").forEach(option =>{
            option.addEventListener("blur",function(e){
                this.classList.remove("active");
                this.parentElement.setAttribute("tabindex", "0")
            })
        })
      
	})();
});
