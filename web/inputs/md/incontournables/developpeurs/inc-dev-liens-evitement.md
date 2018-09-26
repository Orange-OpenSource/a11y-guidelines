# Fournir des liens d’évitement

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Critères incontournables", "url": "./incontournables.html#dev"},
        {"label":"Fournir des liens d’évitement"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>


**Cible&nbsp;:** utile pour les utilisateurs de mobile et tablette, les personnes déficientes visuelles et les personnes souffrant de handicap moteur ou en mobilité.  
**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**

Mettre en place des liens d’accès direct (liens d’évitement) permettant d’accéder aux principales zones de la page (navigation, contenu, pied de page, recherche…) grâce à des liens internes vers des ancres (balises `<a>` ou tout élément <abbr>HTML</abbr> possédant un attribut `id`). En cas de **fortes contraintes,** ces liens peuvent être cachés et affichés uniquement lors de la navigation clavier.

**À vérifier&nbsp;:**
Lorsqu’un lien d’évitement est activé, vérifier que le focus est bien déplacé (il ne s’agit pas uniquement de faire défiler la page au bon endroit).

**Objectif utilisateur&nbsp;:**
Faciliter la navigation pour des utilisateurs naviguant au clavier, des utilisateurs malvoyants, utilisateurs de loupe logicielle ou de téléphone mobile.
     
**Exemple&nbsp;:**  
Des liens d’évitement («&nbsp;Aller à la navigation&nbsp;», «&nbsp;Aller au contenu&nbsp;») sont disponibles sur ce site.
Pour les faire apparaître, placer le focus en haut de la page en cliquant sur la barre d’adresse de votre navigateur par exemple puis appuyer plusieurs fois sur la touche <kbd>TAB</kbd>.

![capture d’écran du site orange.com](images/skiplink.png)   

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#bypass-blocks">2.4.1 Bypass Blocks</a>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->