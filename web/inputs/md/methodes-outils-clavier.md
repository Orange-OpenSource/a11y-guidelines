# Navigation à l'aide du clavier

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Outils de test", "url": "./methodes-outils.html"},
        {"label":"Navigation à l'aide du clavier"}]);
});</script>

<span data-menuitem="methodes-outils"></span>

La navigation dans une page web doit être possible à l'aide du clavier seul, notamment pour les personnes qui ne peuvent pas utiliser de souris. Cette fonctionnalité est prise en charge directement par le navigateur. Il est tout de même important de vérifier son fonctionnement, car certains développements peuvent entraîner des difficultés pour naviguer correctement dans la page.
  
Pour tester si votre service est accessible à l'aide du clavier, vous pouvez tenter de naviguer sans votre souris. Toutes les fonctionnalités disponibles habituellement doivent rester accessible.  
** Rappel : **le focus doit rester suffisamment visible sur tous éléments recevant le focus.

## Liste des raccourcis clavier principaux : 
- La touche `TAB` : pour faire avancer le focus.
- Les touches `maj+TAB` : pour faire reculer le focus.
- La touche entrée pour activer l'élément qui a le focus (lien, bouton, menu...).
- La barre espace pour cocher/décocher une case à cocher.
- Les flèches directionnelles pour modifier la sélection des boutons radio, pour se déplacer dans une liste déroulante, ou faire défiler les ascenseurs (scrollbar) lorsque ceux-ci sont présents.

** Remarque sur mac la navigation au clavier doit être activée au préalable : **  
Dans Safari : Edition > Préférences ... > Avancées  
Puis cocher la case *"La touche TAB permet de naviguer parmi les objets des pages web"*.
<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->