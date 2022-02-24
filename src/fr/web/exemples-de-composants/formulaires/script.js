
  document.getElementById("numero-serie").onchange = function (e){
      e.target.setAttribute('aria-invalid',"false");
      document.getElementById("numero-serie-error").textContent="";
      document.getElementById("numero-serie-error").setAttribute('style',"display:none;");
        validateRegex(e.target,document.getElementById("numero-serie-error"),"numero de serie",/TS-\d{4}/)
  }
  
  function validateMyForm(event){
      let numeroSerie = document.getElementById("numero-serie");
      let numeroSerieError = document.getElementById("numero-serie-error");
      let adresse = document.getElementById("adresse");
      let adresseError = document.getElementById("adresse-error");
      let telephone = document.getElementById("telephone");
      let telephoneError = document.getElementById("telephone-error");

      let validTelephone=validateInput(telephone,telephoneError,"telephone");
      let validAdresse=validateInput(adresse,adresseError,"adresse");
      let validSerie=validateInput(numeroSerie,numeroSerieError,"numero de serie");

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
            elementError.textContent="Le champ "+ label +" est obligatoire.";
            elementError.removeAttribute('style');
            element.setAttribute('aria-invalid',"true");
            element.focus();
            return false;
      }
      else if( "numero-serie" == element.id){
            if ( !validateRegex(element,elementError,label,/TS-\d{4}/)){
                  element.focus();
                  return false;  
            }   
      }

      return true;
}

function validateRegex(element,elementError,label,regex){
      if(null == element.value.match(regex)){
            elementError.textContent="Le format du champ "+label+", n'est pas valide.";
            elementError.removeAttribute('style');
            element.setAttribute('aria-invalid',"true");
            return false;
      }
      return true;
}
