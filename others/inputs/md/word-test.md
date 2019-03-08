# Comment tester l'accessibilité d'un documents Word
<script>$(document).ready(function () {
    setBreadcrumb([      
      {"label":"Microsoft Word","url":"word.html"},
      {"label":"Comment tester mon document"}
    ]);
    addSubMenu([
      {"label":"Créer un document accessible","url":"word-create.html"}, 
      {"label":"Comment tester mon document","url":"word-test.html", "expanded":true}
    ]);
});</script>


<span data-menuitem="word"></span>

<style>code {font-weight: bold;}h2{padding-top: 1.5rem;}</style>
## Tests automatiques
Vous pouvez commencer vos tests avec l’outil de vérification de l’accessibilité de Microsoft Office.  
**Fichier > Vérifier la présence de problèmes > Vérifier l’accessibilité**

<img alt="capture d'écran du vérificateur d'accessibilité" src="./images/word_verification_fr.png" class="img-fluid" />  
**Important :** si vous n’avez pas l’option « Vérifier l’accessibilité » dans le document ouvert, faites la manipulation suivante pour la rendre active : enregistrez votre document depuis une version d’Office supérieure (ou égale) à 2010 et au format ".docx" avec la case « compatibilité avec les versions précédentes » décochée. 

## Vérifications des contrastes de couleurs 
Le logiciel <a lang="en" href="https://developer.paciellogroup.com/resources/contrastanalyser/">Colour Contrast Analyser</a> indique si les contrastes de couleurs utilisés sont conformes. 

<img alt="capture d'écran de l'outil colour contrast analyser" src="./images/cca.png" class="img-fluid" />  

## Tests avec les synthèses vocales JAWS et NVDA
Afin de poursuivre vos vérifications, vous pouvez tester avec une synthèse vocale.
Ces tests permettent de naviguer dans la même configuration que les personnes malvoyantes et non-voyantes.

[Apprendre la navigation vocale avec JAWS 2018 et NVDA 2018](https://a11y-guidelines.orange.com/web/methodes-outils-lecteur-ecran.html)

## Autres tests manuels
Les grilles suivantes au format Excel permettant de vérifier l’accessibilité de vos documents Word et PowerPoint :
- [Grille d'évaluation Word](./grille_eval_AXS_WORD_V1.xlsx) (16 Ko)
- [Grille d'évaluation PowerPoint](./grille_eval_AXS_PPT_V2.xlsx) (16 Ko)




<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->