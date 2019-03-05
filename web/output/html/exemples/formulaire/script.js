/*!
* This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
* Copyright (C) 2016  Orange SA
* See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file).**/
$(document).ready(function() {
      jQuery.extend(jQuery.validator.messages, {
            required: "Veuillez renseigner le champ : {0}."
      });
      
	jQuery("#formulaire").validate({
            errorContainer: "#globalErrorMessage",            

            rules: {                  
                  "serie":{
                        "required": true,
                        "regex": /TS-\d{4}/
                  },
                  "adresse": {
                        "required": true
                  },
                  "telephone": {
                        "required": true
                  }
            },
            submitHandler: function () { alert("Merci !");}
      });

      jQuery.validator.addMethod(
            "regex",
            function(value, element, regexp) {
                  if (regexp.constructor != RegExp) {
                        regexp = new RegExp(regexp);
                  } else if (regexp.global) {
                        regexp.lastIndex = 0;
                  }
                  return this.optional(element) || regexp.test(value);
            },
            function (regex, input) {                  
                  return jQuery.validator.format("Le format du champ {0}, n'est pas valide.", $(input).attr("data-displayname"));
            }
      );
      	 
     $.validator.messages.required = function (param, input) {           
            return 'Le champ ' + $(input).attr("data-displayname") + ' est obligatoire.';
     }
     
});
