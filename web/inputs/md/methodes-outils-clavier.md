# Navigation à l’aide du clavier

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Outils de test", "url": "./methodes-outils.html"},
        {"label":"Navigation à l’aide du clavier"}]);
});</script>

<span data-menuitem="methodes-outils"></span>

La navigation dans une page web doit être possible à l’aide du clavier seul, notamment pour les personnes qui ne peuvent pas utiliser de souris. Cette fonctionnalité est prise en charge directement par le navigateur. Il est tout de même important de vérifier son fonctionnement, car certains développements peuvent entraîner des difficultés pour naviguer correctement dans la page.
  
Pour tester si votre service est accessible à l’aide du clavier, vous pouvez tenter de naviguer sans votre souris. Toutes les fonctionnalités disponibles habituellement doivent rester accessible.  
** Rappel&nbsp;: **le focus doit rester suffisamment visible sur tous les éléments recevant le focus lors de la navigation clavier.

## Liste des raccourcis clavier principaux&nbsp;: 

![capture d’écran de l’outil colour contrast analyser](./images/keyboard.png)

<table class="table">
<caption class="sr-only">Liste des raccourcis clavier principaux</caption>
   <thead>
      <tr>
         <th>Interactions</th>
         <th>Raccourcis</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>Faire avancer le focus</td>
         <td>`Tab`</td>
      </tr>
      <tr>
         <td>Faire reculer le focus</td>
         <td>`Shift + Tab`</td>
      </tr>
      <tr>
         <td>Activer l'élément qui a le focus (lien, bouton, menu)</td>
         <td>`Entrée`</td>
      </tr>
      <tr>
         <td>Cocher / décocher une case à cocher</td>
         <td>`Barre espace`</td>
      </tr>
      <tr>
         <td>Sélectionner un bouton radio dans groupe</td>
         <td>flèche directionnelles `Haut`&nbsp;/&nbsp;`Bas` ou `Gauche`&nbsp;/&nbsp;`Droite`</td>
      </tr>
      <tr>
         <td>Sélectionner une option dans une liste déroulante </td>
         <td>flèche directionnelles `Haut`&nbsp;/&nbsp;`Bas`, puis `Barre espace`</td>
      </tr>
	  <tr>
         <td>Déplacer un ascenceur (<i lang="en">scrollbar</i>)</td>
         <td>flèche directionnelles `Haut`&nbsp;/&nbsp;`Bas` pour un ascenceur vertical,<br> flèche directionnelles `Gauche`&nbsp;/&nbsp;`Droite` pour un ascenceur horizontal </td>
      </tr>
   </tbody>
</table>



** Remarque&nbsp;: sur Mac la navigation au clavier doit être activée au préalable. **  
Dans Safari&nbsp;: Edition &gt; Préférences… &gt; Avancées  
Puis cocher la case *«&nbsp;La touche TAB permet de naviguer parmi les objets des pages web&nbsp;»*.
<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->