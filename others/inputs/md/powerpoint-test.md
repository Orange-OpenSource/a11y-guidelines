# Comment tester l'accessibilité d'un document PowerPoint
<script>$(document).ready(function () {
    setBreadcrumb([
      {"label":"PowerPoint accessible"}
	  ]);
    addSubMenu([
        {"label":"Créer un document accessible","url":"powerpoint-create.html"}, 
        {"label":"Comment tester mon document","url":"powerpoint-test.html", "expanded": true}
    ]);
    
});</script>

<span data-menuitem="powerpoint"></span>

<style>code {font-weight: bold;}</style>

## Tests automatiques
Vous pouvez commencer vos tests avec l’outil de vérification de l’accessibilité de Microsoft Office.  
**Fichier > Vérifier la présence de problèmes > Vérifier l’accessibilité**

<img alt="capture d'écran du vérificateur d'accessibilité" src="./images/word_verification_fr.png" class="img-fluid" />  
**Attention :** Parfois, selon votre type de document, cet outil n’est pas disponible.

## Vérifications des contrastes de couleurs 
La vérification des contrastes de couleurs assure une bonne lisibilité des contenus pour tous.  
Le logiciel <a lang="en" href="https://developer.paciellogroup.com/resources/contrastanalyser/">Colour Contrast Analyser</a> indique si les contrastes de couleurs utilisés sont conformes. 

<img alt="capture d'écran de l'outil colour contrast analyser" src="./images/cca.png" class="img-fluid" />  



<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->