# Accéder à la liste des titres de la page (balises `H1` à `H6`)

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Outils de test", "url": "./methodes-outils.html"},
        {"label":"Accéder à la liste des titres de la page"}]);
});</script>

<span data-menuitem="methodes-outils"></span>

Pour vérifier si des titres ont été correctement positionnés dans la page, il existe plusieurs solutions :
- Parcourir le code de la page à la main.
- Utiliser une extension telle que [HeadingsMap](https://addons.mozilla.org/fr/firefox/addon/headingsmap/) pour Firefox, [Wave pour Chrome](http://wave.webaim.org/extension/) ou [Web Developper Toolbar](http://chrispederick.com/work/web-developer/).
- Accéder à la liste des titres depuis un lecteur d'écran (cf. chapitre [lecteur d'écran](./methodes-outils-lecteur-ecran.html)).

La dernière solution reste la plus fiable, car les extensions ne prennent pas toujours en compte les CSS et les éventuels attributs ARIA positionnés sur les balises HTML.  
Vous pouvez trouver des informations complémentaires dans l'article : [navigation à l'aide d'un lecteur d'écran](./methodes-outils-lecteur-ecran.html).

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->