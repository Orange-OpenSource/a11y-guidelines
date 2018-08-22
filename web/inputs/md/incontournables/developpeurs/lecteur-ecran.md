# S’assurer que les principales fonctionnalités sont utilisables avec les lecteurs d’écran

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Critères incontournables", "url": "./incontournables.html"},
        {"label":"S’assurer que les principales fonctionnalités sont utilisables avec les lecteurs d’écran"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>

**Cible&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;: **lors du développement.

**Description&nbsp;:**

Respecter les recommandations générales d’accessibilité, utiliser en priorité les composants standards <abbr>HTML</abbr>, sinon, utiliser <abbr>ARIA</abbr> (<i lang="en">Accessible Rich Internet Applications</i>) pour les composants d’interface complexes.

**À vérifier&nbsp;:**

S’assurer de l’absence de point bloquant avec les couples navigateur/lecteur d’écran (Firefox/<abbr>NVDA</abbr>, <abbr>IE</abbr>/Jaws, Safari/VoiceOver) dans les parcours utilisateurs (scénarios d’utilisation des principales fonctionnalités de l’application).
En effet, les utilisateurs de lecteur d’écran sont les plus impactés par un manque d’accessibilité, on repère un grand nombre de problèmes en vérifiant cette exigence.

**Objectif utilisateur&nbsp;:**
Permettre à l’utilisateur de lecteur d’écran d’accéder aux principales fonctionnalités de l’application, mais aussi s’assurer pour tous les utilisateurs de l’utilisabilité de l’application.

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->