# Exigences accessibilité web Orange
<script>$(document).ready(function () {
    setBreadcrumb([{"label":"Ensemble des exigences"}]);
});</script>
## Introduction et contexte

Pour les exigences d’accessibilité interne d’Orange, nous avons choisi de nous appuyer sur les [Web Content Accessibility Guidelines v2](http://www.w3.org/Translations/WCAG20-fr/) (WCAG 2). Il s'agit des recommandations internationales éditées par le groupe de travail Web Accessibility Initiative (WAI) du World Wide Web Consortium (W3c) qui sont aussi les normes ISO 40500:2012.

Le niveau d’accessibilité demandé à toute interface HTML par le groupe Orange est **le respect des critères du niveau AA des Web Content Accessibility Guidelines (WCAG) 2.0, sans point bloquant** du point de vue utilisateur suite à un test utilisateur d’aide technique pour les principaux scénarios d’utilisation des fonctionnalités du site ou de l’application.

Pour la partie, solutions techniques, nous avons pointé vers un contenu externe que sont les [notices Accede-Web](http://www.accede-web.com/notices/). En effet, ces notices sont très pratiques, pédagogiques et émanent de la société Atalan, d’un collectif de grandes entreprises ainsi que d’écoles et d’associations de personnes en situation de handicap.

Ces notices ont été traduites en anglais et font consensus dans le domaine de l’accessibilité numérique comme une source de bonnes pratiques, complète et de qualité. Ces notices sont mises à jour régulièrement pour coller à l’évolution des technologies (navigateurs, aides techniques…).

De plus, pour ce qui est des tests associés, nous avons utilisé le [Référentiel Général d’Accessibilité de l’Administration version 3](http://references.modernisation.gouv.fr/referentiel) (RGAA3). C’est le référentiel officiel permettant de s’assurer qu’un site d'état et de collectivités territoriales est en conformité avec l’[article 47 de la loi de février 2005 pour l'égalité des droits et des chances, la participation et la citoyenneté des personnes handicapées](http://www.legifrance.gouv.fr/affichTexteArticle.do?idArticle=JORFARTI000001290363&cidTexte=JORFTEXT000000809647).

Le RGAA3 est méthode d’implémentation des Web Content Accessibility Guidelines v2 (WCAG 2). Un site conforme au RGAA3 est également conforme aux WCAG2.  
Le RGAA3 est basé sur des tests spécifiques rangés par grandes thématiques (présentation, formulaire, contenu non-textuel…) permettant de valider la conformité du site ou de l’application.

## Liste des chapitres du RGAA

1. [Images](https://references.modernisation.gouv.fr/rgaa-accessibilite/criteres.html#images)
2. [Cadres](https://references.modernisation.gouv.fr/rgaa-accessibilite/criteres.html#cadres)
3. [Couleurs](https://references.modernisation.gouv.fr/rgaa-accessibilite/criteres.html#couleurs)
4. [Multimédia](https://references.modernisation.gouv.fr/rgaa-accessibilite/criteres.html#multimedia)
5. [Tableaux](https://references.modernisation.gouv.fr/rgaa-accessibilite/criteres.html#tableaux)
6. [Liens](https://references.modernisation.gouv.fr/rgaa-accessibilite/criteres.html#liens)
7. [Scripts](https://references.modernisation.gouv.fr/rgaa-accessibilite/criteres.html#scripts)
8. [Eléments obligatoires](https://references.modernisation.gouv.fr/rgaa-accessibilite/criteres.html#elements)
9. [Structuration de l'information](https://references.modernisation.gouv.fr/rgaa-accessibilite/criteres.html#structure)
10. [Présentation de l'information](https://references.modernisation.gouv.fr/rgaa-accessibilite/criteres.html#presentation)
11. [Formulaires](https://references.modernisation.gouv.fr/rgaa-accessibilite/criteres.html#formulaire)
12. [Navigation](https://references.modernisation.gouv.fr/rgaa-accessibilite/criteres.html#navigation)
13. [Consultation](https://references.modernisation.gouv.fr/rgaa-accessibilite/criteres.html#consultation)

**Tests associés** : les tests RGAA v3 (niveau A et AA) associés à cette thématique permettant de valider l’accessibilité.

## Les exemples

Des exemples didactiques pour certains types de composants ou d’éléments d’interface particulièrement délicats à rendre accessible et fréquemment utilisés sont disponibles dans la section [exemples](./exemples.html).
Ces exemples utilisent la librairie [boosted](http://boosted.orange.com/). Cette librairie basée sur [bootstrap](http://getbootstrap.com/) permet de réaliser rapidement un site web responsive et accessible aux couleurs de la charte Orange, la Brand.

## Rappel : les notices accede-web

Les recommandations d'accessibilité web Orange font référence aux notices accessibilité du site [accede-web](http://accede-web.com/). 
Ce site propose d'excellentes notices sur l'accessibilité au format Web et PDF.

<p class="row">  
    <div class="perso col-sm-12 col-md-6 col-lg-3">
        ![](./images/perso1.png) 
        <a href="http://www.accede-web.com/notices/graphique/" class="btn btn-info">Notice d’accessibilité pour la conception fonctionnelle et graphique</a>
    </div>
    <div class="perso col-sm-12 col-md-6 col-lg-3">
        ![](./images/perso2.png)    
        <a href="http://www.accede-web.com/notices/editoriale/" class="btn btn-info">Notice d’accessibilité éditoriale (modèle)</a>
    </div>
    <div class="perso col-sm-12 col-md-6 col-lg-3">
        ![](./images/perso3.png)  
        <a href="http://www.accede-web.com/notices/html-css-javascript/" class="btn btn-info">Notice d’accessibilité HTML, CSS et JavaScript</a>
    </div>
    <div class="perso col-sm-12 col-md-6 col-lg-3">
        ![](./images/perso4.png)  
        <a href="http://www.accede-web.com/notices/interface-riche/" class="btn btn-info">Notice d’accessibilité pour les composants d’interface riche</a>
    </div>      
</p>

<br>&nbsp;
<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->
