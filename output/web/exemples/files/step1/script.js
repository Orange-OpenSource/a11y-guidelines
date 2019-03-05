/*!
* This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
* Copyright (C) 2016  Orange SA
* See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file).**/
$(document).ready(function() {
	$(function () {
        $("#mode-mosaique" ).prop( "checked", true );
        
         $('input[type=radio][name=mode]').change(function() {             
            if (this.value === "liste") {
                $("body").addClass("display-list");
            } else {
                $("body").removeClass("display-list");
            }
         });
                  
	    var list = document.querySelector(".list");
        list.addEventListener("focus", function () {
           activeElement = list.querySelector(".active") || list.querySelector("ease-file");
           $(activeElement).addClass("active").attr("tabindex", "0").focus();
           $(".list").attr("tabindex", "-1");            
        });
                
        $(".list").on("keydown", function (e) {            
            var newIndex = currentIndex = $("ease-file").index($(".list .active"))+1;                          
            var lastIndex = $("ease-file").length;
            var maxElementsByRow = Math.floor($(".list").innerWidth() / $("ease-file").first().innerWidth());
                                             
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
                        $(this).find("ease-file").attr("aria-selected", "false");
                    }
                    if ($(this).find("ease-file.active").attr("aria-selected") === "false") {
                        $(this).find("ease-file.active").attr("aria-selected", "true");
                    } else {
                        $(this).find("ease-file.active").attr("aria-selected", "false");
                    }                                            
                    break;
                case 13: //enter
                    alert("Ouverture du fichier...");
                case 65: // A
                    if (e.ctrlKey) {
                        $(".list ease-file").attr("aria-selected", "true");
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
                    $(this).find("ease-file:nth-child(" + i + ")").attr("aria-selected", "true");                                           
                   }                   
                   $(this).find("ease-file.active").removeClass("active").attr("tabindex","-1");
                   $(this).find("ease-file:nth-child(" + newIndex + ")").addClass("active").attr("tabindex","0");
                   $(this).find("ease-file:nth-child(" + newIndex + ")").attr("aria-selected", "true");
                } else if (e.ctrlKey) {
                    $(this).find("ease-file.active").removeClass("active").attr("tabindex","-1");
                    $(this).find("ease-file:nth-child(" + newIndex + ")").addClass("active").attr("tabindex","0");                                 
                } else {                    
                    $(this).find("ease-file.active").removeClass("active").attr("tabindex","-1");
                    $(this).find("ease-file:nth-child(" + newIndex + ")").addClass("active").attr("tabindex","0");                    
                } 
                                
            }  
            $("ease-file.active").focus();                          
        });
        
        $("ease-file").on("dblclick", function (e) {
            alert("Ouverture du fichier...");
        });
        
        $("ease-file").on("click", function (e) {
            var newIndex = currentIndex = $("ease-file").index($(".list .active"))+1;
            $("ease-file").removeClass("active").attr("tabindex","-1");
            $(this).addClass("active").attr("tabindex","0");
            newIndex = $("ease-file").index($(".list .active"))+1;
            
            if (e.ctrlKey) {
                if ($(this).attr("aria-selected") === "true") {
                    $(this).attr("aria-selected", "false");
                } else {
                    $(this).attr("aria-selected", "true");
                }  
            } else if (e.shiftKey) {
                for (var i=currentIndex; i!=newIndex; i=i+((currentIndex < newIndex)?1:-1)) {                       
                    $(".list").find("ease-file:nth-child(" + i + ")").attr("aria-selected", "true");                                           
                }                
                $(this).attr("aria-selected", "true");
            } else {                
                $("ease-file").attr("aria-selected", "false");                
            }
            
            $("ease-file.active").focus();
        })
    });
});

