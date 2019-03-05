/*!
* This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
* Copyright (C) 2016  Orange SA
* See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file).**/
$(document).ready(function() {
	$(function () {
	
        var searchString = "", timer;

        // Xpath polyfill
        wgxpath.install();

        // Init
        $("[type=checkbox]").prop("checked", false);
        
        // On focus
        $("[role=listbox]").on("focus", function () {
           // If no selected element, select the first by default
           if (!$(this).find("[aria-selected=true]").length) {               
                $(this).find("[role=option]:first").attr("aria-selected", "true").focus().addClass("active");
           } else {
               $(this).find("[aria-selected=true]").focus().addClass("active");
           }
        });
        
        // On keydown
        $("[role=listbox]").on("keydown", function (e) {            
            var currentItem = $(this).find("[aria-selected=true]");
                                              
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
                    currentItem.attr("aria-selected", "false");
                    $(this).find("[role=option]:first").attr("aria-selected", "true").focus().addClass("active");
                    e.preventDefault();
                    break;                                                            
                case 35: // end
                    currentItem.attr("aria-selected", "false");
                    $(this).find("[role=option]:last").attr("aria-selected", "true").focus().addClass("active");
                    e.preventDefault();
                    break;                     
                case 38:  // Up arrow
                    if (currentItem.prev().length) {
                        currentItem.attr("aria-selected", "false");                    
                        currentItem.prev().attr("aria-selected", "true").focus().addClass("active");
                    }                    
                    e.preventDefault();
                    break;
                case 40: // Down arrow
                    if (currentItem.next().length) {
                        currentItem.attr("aria-selected", "false");
                        currentItem.next().attr("aria-selected", "true").focus().addClass("active");
                    }
                    e.preventDefault();
                    break;
                case 32: // Space                                                                                                              
                    if (currentItem.attr("aria-checked") === "true") {
                        currentItem.attr("aria-checked", "false");
                        currentItem.find("input[type=checkbox]").prop("checked", false);
                    } else {                      
                        currentItem.attr("aria-checked", "true");
                        currentItem.find("input[type=checkbox]").prop("checked", true);
                    }
                    e.preventDefault();
                break; 
                case 65: // Ctrl + A
                    if (e.ctrlKey) {
                        $("[role=option] input[type=checkbox]").prop("checked", "true");                        
                        $("[role=option]").attr("aria-checked", "true");

                        // message to speak by screenreader
                        speak("tout sélectionner");
                        
                        e.preventDefault();
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
                            currentItem.attr("aria-selected", "false");
                            $(matchingElement).parent().attr("aria-selected", "true").focus().addClass("active");
                        }                        
                    }, 500);           

                    e.preventDefault();         
            }
        });
        
       // On click
       $("[role=option]").on("mousedown", function (e) {                    
           $(this).parent().find("[aria-selected=true]").attr("aria-selected", "false");
           $(this).attr("aria-selected", "true").focus();
           e.preventDefault();
       });
       
       $("label").on("mousedown", function (e) {           
           e.stopPropagation();
       });
       
       // checkbox click
       $("[type=checkbox]").on("click", function (e) {
           if ($(this).prop("checked")) {
               $(this).parent().attr("aria-checked", "true");
           } else {
               $(this).parent().attr("aria-checked", "false");
           }

           $("[role=listbox] [aria-selected=true]").attr("aria-selected", "false");
           $(this).parent().attr("aria-selected", "true").focus();

           e.stopPropagation();
       });
       
       $("[type=checkbox]").on("focus", function (e) {                         
            $(this).parent().parent().find("[aria-selected=true]").focus();
       });

       // On focus option
       $("[role=option]").on("focus", function (e) {
           $(this).parent().attr("tabindex", "-1");
       });
       
       $("[role=option]").on("blur", function (e) {
           $(this).removeClass("active");
           $(this).parent().attr("tabindex", "0");
       });
	})
});

// speak function for screenreader
function speak(message) {
    var id = "sr-" + Date.now();
    var span = $("<span />").attr({"id": id, "aria-live":"polite", "className": "sr-only"});
    $("body").append(span);
    window.setTimeout(function() {
        $("#" + id).text(message);
    }, 100);

    window.setTimeout(function() {
        $("#" + id).remove();
    }, 1000);

}