/*!
* This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
* Copyright (C) 2016  Orange SA
* See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file).**/
$(document).ready(function() {
	$(function () {
	
        // On focus
        $("[role=listbox]").on("focus", function () {
           // If no selected element, select the first by default
           if (!$(this).find("[aria-selected=true]").length) {               
                $(this).find("[role=option]:first").attr("aria-selected", "true").focus();
           } else {
               $(this).find("[aria-selected=true]").focus();
           }
        });
        
        // On keydown
        $("[role=listbox]").on("keydown", function (e) {            
            var currentItem = $(this).find("[aria-selected=true]");          
            switch (e.keyCode) {
                case 38:  // Up arrow
                    if (currentItem.prev().length) {
                        currentItem.attr("aria-selected", "false");                    
                        currentItem.prev().attr("aria-selected", "true").focus();
                    }                    
                    e.preventDefault();
                    break;
                case 40: // Down arrow
                    if (currentItem.next().length) {
                        currentItem.attr("aria-selected", "false");
                        currentItem.next().attr("aria-selected", "true").focus();
                    }
                    e.preventDefault();
                    break;
            }
        });
        
       // On click
       $("[role=option]").on("mousedown", function (e) {
           $(this).parent().find("[aria-selected=true]").attr("aria-selected", "false");
           $(this).attr("aria-selected", "true");
           e.preventDefault();
       });
       
       // On focus option
       $("#listbox-ok [role=option]").on("focus", function (e) {
           $(this).parent().attr("tabindex", "-1");
       });
       
       $("#listbox-ok [role=option]").on("blur", function (e) {
           $(this).parent().attr("tabindex", "0");
       });
	})
});
