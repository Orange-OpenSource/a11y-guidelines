document.addEventListener("DOMContentLoaded", function(event) {

    (function () {
        document.getElementById("mode-mosaique").checked=true;

        document.getElementsByName("mode").forEach(element=>{
           element.onchange = function(e){
               if( e.target.value === "liste"){
                    document.body.classList.add("display-list");
               }
               else{
                document.body.classList.remove("display-list");
               }
            }
        });
                  
	    var list = document.querySelector(".list");
        var easefile = document.querySelectorAll("ease-file");
        list.addEventListener("focus", function () {
           activeElement = list.querySelector(".active") || list.querySelector("ease-file");
           activeElement.classList.add("active");
           activeElement.setAttribute("tabindex","0");
           activeElement.focus();
           this.setAttribute("tabindex","-1");       
        });
                
        Array.prototype.forEach.call(document.querySelectorAll('.list'), function(element) {                
            element.addEventListener('keydown', function (e) {
                
                var newIndex = currentIndex = (getIndex(easefile) + 1) ;                              
                var lastIndex = easefile.length;
                var maxElementsByRow = Math.floor(list.offsetWidth /easefile[0].offsetWidth);
                                                
                switch(e.keyCode) {
                    case 16:
                    case 17:
                        return;
                    case 37: //left                    
                        newIndex = currentIndex-1;                    
                        break;
                    case 39: //right                    
                        newIndex = currentIndex+1;                                        
                        break;
                    case 40: //down
                        newIndex = currentIndex + maxElementsByRow;
                        break;
                    case 38: //up
                        newIndex = currentIndex - maxElementsByRow;
                        break;                    
                    case 32: //space
                        if (!e.ctrlKey) {
                            setAttributeEase(easefile,false);
                        }
                        if (e.target.getAttribute("aria-selected") === "false") {
                            e.target.setAttribute("aria-selected","true")
                        } else {
                            e.target.setAttribute("aria-selected","false")
                        }        
                        e.preventDefault();                                  
                        break;
                    case 13: //enter
                        alert("Ouverture du fichier...");
                    case 65: // A
                        if (e.ctrlKey) {
                            setAttributeEase(easefile,true);
                            e.preventDefault();
                        }
                }
                
                if (newIndex < 1) {
                    newIndex = 1;
                }
                
                if (newIndex > lastIndex) {
                    newIndex = lastIndex;
                }                        
                if (newIndex != currentIndex) {                            
                    if (e.shiftKey) {                                                
                    for (var i=currentIndex; i!=newIndex; i=i+((currentIndex < newIndex)?1:-1)) {                       
                        easefile[i-1].setAttribute("aria-selected","true")                        
                    }                   
                    element.setAttribute("aria-selected","true")
                    easefile[currentIndex-1].classList.remove("active");
                    easefile[currentIndex-1].setAttribute("tabindex","-1");
                    easefile[newIndex-1].classList.add("active");
                    easefile[newIndex-1].setAttribute("tabindex","0");
                    easefile[newIndex-1].setAttribute("aria-selected", "true");
                    e.preventDefault();
                    } else if (e.ctrlKey) {
                        easefile[currentIndex-1].classList.remove("active");
                        easefile[currentIndex-1].setAttribute("tabindex","-1");
                        easefile[newIndex-1].classList.add("active");
                        easefile[newIndex-1].setAttribute("tabindex","0");                                
                    } else {                    
                        easefile[currentIndex-1].classList.remove("active");
                        easefile[currentIndex-1].setAttribute("tabindex","-1");
                        easefile[newIndex-1].classList.add("active");
                        easefile[newIndex-1].setAttribute("tabindex","0");                    
                    } 
                                    
                }  
                easefile[newIndex-1].focus();                         
            });
        });
        
        easefile.forEach(element=>{
            element.ondblclick = function (e){
                alert("Ouverture du fichier...");
            }

            element.onclick = function (e){
                var newIndex = currentIndex = (getIndex(easefile) );
                easefile[currentIndex].classList.remove("active")
                easefile[currentIndex].setAttribute("tabindex","-1")
                element.classList.add("active")
                element.setAttribute("tabindex","0")
                newIndex = (getIndex(easefile));
                
                if (e.ctrlKey) {
                    if (element.getAttribute("aria-selected") === "false") {
                        element.setAttribute("aria-selected","true")
                    } else {
                        element.setAttribute("aria-selected","false")
                    }  
                } else if (e.shiftKey) {
                    for (var i=currentIndex; i!=newIndex; i=i+((currentIndex < newIndex)?1:-1)) {        
                        easefile[i].setAttribute("aria-selected", "true");                                          
                    }                
                    element.setAttribute("aria-selected","true");
                } else {                
                    setAttributeEase(easefile,false);                
                }
                
                easefile[newIndex].focus();
            }
        })


        function getIndex(list) {    
            var found = 0;
            list.forEach(function (element,index) {
                if(element.classList.contains("active")){
                    found = index;
                    return;
                }
            });
            return found;
        }

        function setAttributeEase(list , value){
            list.forEach( element =>{
                element.setAttribute("aria-selected",value)
            })
        }
    })();
});

