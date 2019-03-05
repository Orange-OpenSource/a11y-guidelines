/*!
* This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
* Copyright (C) 2016  Orange SA
* See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file).**/
/* Google Analaytic */

// App config insert here at build (from /config files)
app = {
    'config': {
        'googletagmanagerId': 'GTM-XXXX',
        'phase': 'dev'
    }
};


dataLayer = [{
    'site_name': 'accessibility-guidelines',                
    'phase': app.config.phase  // dev, qa, prod
}];

$(document).ready(function() {
	$(function () {
        $('<a>',{
            'id': 'back-button',
            'text': 'Retour',
            'aria-label': 'Retour à la liste des exemples',            
            'href': '../../exemples.html',
            'class': "btn btn-info"
        }).prependTo('body');
    });
    
  /* Cookie banner */    
  $.getScript( "/tarteaucitron/tarteaucitron.js", function( data, textStatus, jqxhr ) {  
    tarteaucitronForceLanguage = $("html").attr("lang") || "en";
    tarteaucitron.init({
      "hashtag": "#tarteaucitron", /* Ouverture automatique du panel avec le hashtag */
      "highPrivacy": false, /* désactiver le consentement implicite (en naviguant) ? */
      "orientation": "bottom", /* le bandeau doit être en haut (top) ou en bas (bottom) ? */
      "adblocker": false, /* Afficher un message si un adblocker est détecté */
      "showAlertSmall": false, /* afficher le petit bandeau en bas à droite ? */
      "cookieslist": true, /* Afficher la liste des cookies installés ? */
      "removeCredit": false, /* supprimer le lien vers la source ? */
      "handleBrowserDNTRequest": false /* Deny everything if DNT is on */            
    });

    tarteaucitron.user.googletagmanagerId = app.config.googletagmanagerId;
    (tarteaucitron.job = tarteaucitron.job || []).push('googletagmanager');
  });

});