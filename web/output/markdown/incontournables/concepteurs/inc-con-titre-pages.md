# Donner un titre aux pages

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Critères WCAG par thème - Concepteurs", "url": "./incontournables.html"},
        {"label":"Donner un titre aux pages"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>
  

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** dès la conception et pendant le développement.

**Description&nbsp;:**  
Donner à chaque page un titre qui lui est spécifique et qui reflète son contenu ou sa fonction (balise `<title>`).  
Le titre de la page est le premier élément lu par la synthèse vocale, il doit permettre d’identifier formellement la page sur laquelle on se trouve.

**À vérifier&nbsp;:**
- Bien qu’il n’y ait pas de règle, en général (ouverture de nombreux onglets de multiples applications), on va de l’information la plus spécifique vers la moins spécifique (ex&nbsp;: nom de la page courante - nom du site). Pour le fenêtrage d’une multitude d’applications, le contexte d’utilisation est différent&nbsp;; dans ce cas, on préférera aller de l’information la moins spécifique vers la plus spécifique.
- Lorsque le contenu de la page est modifié dynamiquement (affichage du résultat d’une recherche, erreurs dans un formulaire, action utilisateur ajoutant du contenu…), le titre de la page doit refléter cette modification du contenu.

**Exemple valide&nbsp;:**  
`Accueil - Espace client Orange`
 
**Exemple non-valide&nbsp;:**  
`Accueil`

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->