# Themed WCAG index

<script>$(document).ready(function () {
    setBreadcrumb([{"label":"Themed WCAG index"}]);
    addSubMenu([
        {
            "label":"Design", "url":"", "expanded":false, "itemsQuery":"#incontournables-concepteurs h2", "className": "menuitem-conception",
            "onExpand": function () {
                $("#incontournables-concepteurs-tab").tab("show");
            }
        },
        {
            "label":"Development", "url":"", "expanded":false, "itemsQuery":"#incontournables-developpeurs h2", "className": "menuitem-development",
            "onExpand": function () {
                $("#incontournables-developpeurs-tab").tab("show");
            }
        }
    ]);
    $("#incontournables-concepteurs-tab").on("click", function() {
        expandCollapse($("#left-navigation .menuitem-conception"));
    })
    $("#incontournables-developpeurs-tab").on("click", function() {
        expandCollapse($("#left-navigation .menuitem-development"));
    })
    if (window.location.hash == "#dev") {
        $("#incontournables-developpeurs-tab").trigger("click");
    }
});</script>

<span data-menuitem="incontournables"></span>

This base criteria for the Orange websites and applications avoids the major accessibility errors. It is a subset of the accessibility requirements.   
Its implementation does not give you the guarantee to be 100% accessible, but is a clean bedrock so you can engage in a progressive accessibility implementation process.

Following the Orange guidelines (<cite>Design for digital platforms Guidelines</cite>), available on the [Orange brand site](http://design.orange.com/) is a prerequisite to the use of this base criteria. 
Some elements already present in the Orange Brand (such as the use of colours, text alignment...) have not been included in this list of criteria.

Two versions are available:
- **The design version** does not mention the code, it is aimed at product designers, designers, project managers, etc.
- **The development version** mentions the code and is aimed at developers, technical managers, validation teams, testers, etc.

<ul class="nav nav-tabs" role="tablist">
<li class="nav-item">
<a class="nav-link active" id="incontournables-concepteurs-tab" data-toggle="tab" href="#incontournables-concepteurs" role="tab" aria-controls="incontournables-concepteurs" aria-selected="true">Design</a>
</li>
<li class="nav-item">
<a class="nav-link" id="incontournables-developpeurs-tab" data-toggle="tab" href="#incontournables-developpeurs" role="tab" aria-controls="incontournables-developpeurs" aria-selected="false">Development</a>
</li>
</ul><div class="tab-content"><div class="tab-pane show active" id="incontournables-concepteurs" role="tabpanel" aria-labelledby="incontournables-concepteurs-tab">

## Textual content

Ensure that textual content is structured with the appropriate semantics

- [Set a title for each page](inc-con-titre-pages.html)
- [Start sections with headings](inc-con-titre-rubriques.html)

## Non-text content

Ensure that an alternative to non-text content is provided to the user

- [Define text alternatives](inc-con-equivalent-textuel.html)
- [Provide accessible audio or video tracks](inc-con-audio-video.html)
- [Avoid captcha](inc-con-captcha.html)

## Colors and contrasts

Ensure that the colors used are not a problem for the user

- [Make sure there is enough contrast between text and background](inc-con-contrastes.html)
- [Do not use colour or sensory characteristics as the unique source of information](inc-con-information-sensorielle.html)

## Common navigation

Make sure that the user easily navigate within page and more generally in the website

- [Link and button labels](inc-con-libelles.html)
- [Avoid dialogues and opening new windows](inc-con-nouvelles-fenetres.html)
- [Provide skip links](inc-con-liens-evitement.html)
- [Allowing control of animations](inc-con-controle-animations.html)
- [Explicitly locate the page in the site and provide several ways to access it](inc-con-acces-multiples.html)

## Keyboard navigation

Ensure the user can navigate using the keyboard only

- [Navigating with the keyboard](inc-con-navigation-clavier.html)
- [Focus visibility](inc-con-visibilite-focus.html)

## Layout

Make sure the layout is suitable for the user

- [Relative text size and responsive design](inc-con-adaptatif.html)
- [Allow text spacing](inc-con-aerer-texte.html)
- [Identify and maintain consistency of groupings and different regions of the page](inc-con-coherence-navigation.html)
- [Define sensitive areas of sufficient size](inc-con-zones-sensibles.html)

## Forms

Ensure that the user can effectively complete the forms

- [Usable forms](inc-con-formulaires.html)

## Touch and interactions

Ensure that the user keeps control over interactions, particularly tactile ones

- [Offer an alternative to complex gestures](inc-con-alternative-gestures.html)
- [Give access to the content regardless of the orientation of the screen](inc-con-orientation-ecran.html)

</div>
<div class="tab-pane" id="incontournables-developpeurs" role="tabpanel" aria-labelledby="incontournables-developpeurs-tab">
<h2 id="dev-contenu-textuel">Textual content</h2>

Ensure that textual content is structured with the appropriate semantics
<ul>
    <li>[Set a title for each page](inc-dev-titre-pages.html)</li>
    <li>[Give a title to headings](inc-dev-titre-rubriques.html)</li>
    <li>[Use HTML semantics](inc-dev-semantique-html.html)</li>
    <li>[Declaring the main language and language changes](inc-dev-changement-langue.html)</li>
    <li>[Structuring data tables](inc-dev-tableaux.html)</li>
</ul>

<h2 id="dev-contenu-non-textuel">Non-text content</h2>

Ensure that an alternative to non-text content is provided to the user
<ul>
    <li>[Set a text alternatives for images and frames](inc-dev-equivalent-textuel.html)</li>
    <li>[Provide accessible audio or video tracks](inc-dev-audio-video.html)</li>
    <li>[Avoid captcha](inc-dev-crit-captcha.html)</li>
</ul>

<h2 id="dev-couleurs-et-contrastes">Colors and contrasts</h2>

Ensure that the colors used are not a problem for the user
<ul>
    <li>[Provide enough contrast between text and background](inc-dev-contrastes.html)</li>
    <li>[Do not use colour or sensory characteristics as the unique source of information](inc-dev-information-sensorielle.html)</li>
</ul>

<h2 id="dev-navigation-generale">Common navigation</h2>

Make sure that the user easily navigate within page and more generally in the website
<ul>
    <li>[Link and button labels must be understandable out of context](inc-dev-intitules-hors-contexte.html)</li>
    <li>[Warn the user when opening a new window](inc-dev-nouvelle-fenetre.html)</li>
    <li>[Provide skip links](inc-dev-liens-evitement.html)</li>
    <li>[Ensure the user keeps control during interactions](inc-dev-controle-interactions.html)</li>
    <li>[Provide multiple access and location](inc-dev-acces-multiples.html)</li>
    <li>[Allow to know the result of a user interaction with status messages](inc-dev-message-contextuel.html)</li>
    <li>[Allowing animations control](inc-dev-controle-animations.html)</li>
</ul>

<h2 id="dev-navigation-clavier">Keyboard navigation</h2>

Ensure the user can navigate using the keyboard only
<ul>
    <li>[Allow the use of the main features of the application with the keyboard](inc-dev-utilisation-clavier.html)</li>
    <li>[The focus order must be sequential and logical without keyboard trap](inc-dev-parcours-focus.html)</li>
    <li>[Make the focus visible at all times](inc-dev-visibilite-focus.html)</li>
</ul>

<h2 id="dev-mise-en-page">Layout</h2>

Make sure the layout is suitable for the user
<ul>
    <li>[Use relative size to allow changing text size and responsive design](inc-dev-adaptatif.html)</li>
    <li>[Allow text spacing](inc-dev-aerer-texte.html)</li>
    <li>[Identify and maintain consistency of groupings and different regions of the page](inc-dev-coherence-navigation.html)</li>
    <li>[Define sensitive areas of sufficient size](inc-dev-taille-zones.html)</li>
</ul>

<h2 id="dev-formulaires">Forms</h2>

Ensure that the user can effectively complete the forms
<ul>
    <li>[Make form fields accessible](inc-dev-etiquette-formulaires.html)</li>
    <li>[Detect, identify errors and suggest corrections](inc-dev-identifier-erreurs.html)</li>
</ul>

<h2 id="dev-tactile-et-interactions">Touch and interactions</h2>

Ensure that the user keeps control over interactions, particularly tactile ones
<ul>
    <li>[Allow zooming](inc-dev-autoriser-zoom.html)</li>
    <li>[Allow to cancel the triggering of gestural interactions](inc-dev-annuler-gestuelle.html)</li>
    <li>[Offer an alternative to complex gestures](inc-dev-alternative-gestures.html)</li>
    <li>[Give access to the content regardless of the orientation of the screen](inc-dev-orientation-ecran.html)</li>
</ul>

<h2 id="dev-aides-techniques">Assistive technology</h2>

Allow the screen reader user access to the main features of the application, but also ensure for all users the usability of the application
<ul>
    <li>[Make sure the main features can be used with screen readers](inc-dev-lecteur-ecran.html)</li>
</ul>

</div>
</div>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->