
document.getElementById("serial-number").onchange = function (e){
      e.target.setAttribute('aria-invalid',"false");
      document.getElementById("serial-number-error").textContent="";
      document.getElementById("serial-number-error").setAttribute('style',"display:none;");
        validateRegex(e.target,document.getElementById("serial-number-error"),"numero de serie",/TS-\d{4}/)
  }

function validateMyForm(event){
      
    let numeroSerie = document.getElementById("serial-number");
    let numeroSerieError = document.getElementById("serial-number-error");
    let adresse = document.getElementById("addresse");
    let adresseError = document.getElementById("addresse-error");
    let telephone = document.getElementById("telephone");
    let telephoneError = document.getElementById("telephone-error");

    let validTelephone=validateInput(telephone,telephoneError,"phone");
    let validAdresse=validateInput(adresse,adresseError,"address");
    let validSerie=validateInput(numeroSerie,numeroSerieError,"serial number");

    if( !validSerie || !validAdresse || ! validTelephone ){
          return false;
    }
    return true;
}

function validateInput(element,elementError,label){

    element.setAttribute('aria-invalid',"false");
    elementError.textContent="";
    elementError.setAttribute('style',"display:none;");

    if( "" == element.value){
          elementError.textContent="The "+label+" field is mandatory.";
          elementError.removeAttribute('style');
          element.setAttribute('aria-invalid',"true");
          element.focus();
          return false;
    }
    else if( "serial-number" == element.id){
      if ( !validateRegex(element,elementError,label,/TS-\d{4}/)){
            element.focus();
            return false;  
      }   
    }

    return true;
}

function validateRegex(element,elementError,label,regex){
      if(null == element.value.match(regex)){
            elementError.textContent="The format of the "+label+" field is not valid.";
            elementError.removeAttribute('style');
            element.setAttribute('aria-invalid',"true");
            return false;
      }
      return true;
}
