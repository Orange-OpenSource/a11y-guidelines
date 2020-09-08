$(document).ready(function() {
      jQuery.extend(jQuery.validator.messages, {
            required: "Please fill in the field : {0}."
      });
      
	jQuery("#form").validate({
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
            submitHandler: function () { alert("Thanks !");}
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
                  return jQuery.validator.format("The format of the {0} field is not valid.", $(input).attr("data-displayname"));
            }
      );
      	 
     $.validator.messages.required = function (param, input) {           
            return 'The ' + $(input).attr("data-displayname") + ' field is mandatory.';
     }
     
});
