# Audit WCAG
<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Critères WCAG par thème", "url": "./incontournables.html"},
        {"label":"Audit WCAG"}
        ]);
    addSubMenu([
        {
            "label":"Conception", "url":"incontournables.html#", "itemsQuery":"#incontournables-concepteurs h2", "className": "menuitem-conception",
        },
        {
            "label":"Développement", "url":"incontournables.html#dev", "itemsQuery":"#incontournables-developpeurs h2", "className": "menuitem-development",
        },
        {
            "label":"Tests", "url":"incontournables.html#test", "itemsQuery":"#incontournables-testeurs section h2", "className": "menuitem-test",
        },
        {
            "label":"Audit WCAG", "url":"audit-wcag.html"
        }
    ]);    
});</script>

<span data-menuitem="incontournables"></span>

L’audit WCAG a pour objectif de calculer les taux de conformité mentionnés sur les déclarations d’accessibilité des sites Web d’Orange.

Orange a mis en place une grille de questions nommée la va11ydette.  Cette grille reprend les 50 critères du standard WCAG version 2.1 de niveau A et AA en 67 questions. Chaque question permet de valider ou d’invalider un ou plusieurs critères, un critère peut être traité par une ou plusieurs questions. 

La grille calcule un taux de conformité par page auditée : ce taux est égal à la somme des critères conformes divisée par le nombre de critères applicables. Elle calcule aussi le taux moyen de conformité qui correspond à la moyenne des taux de conformité de chaque page de l’échantillon.

## Accéder à la va11ydette

Le lien ci-dessous entraine l'ouverture de la grille dans un nouvel onglet du navigateur.  

<a href="./la-vallydette/" target="_blank" class="btn btn-secondary" style="text-decoration: none">Ouvrir la va11ydette<span class="sr-only"> (nouvelle fenêtre)</span></a>

&nbsp;
<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->