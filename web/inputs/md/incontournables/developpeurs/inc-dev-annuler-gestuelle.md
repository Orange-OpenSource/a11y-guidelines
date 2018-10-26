# Permettre d'annuler le déclenchement des interactions gestuelles

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Critères WCAG par thème - Développeurs", "url": "./incontournables.html#dev"},
        {"label":"Permettre d'annuler le déclenchement des interactions gestuelles"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>


**Cible&nbsp;:** tout le monde en particulier les personnes souffrant de handicap moteur ou visuel, de troubles cognitifs ou d'apprentissage et en mobilité. Les utilisateurs qui ne peuvent pas (avec précision) effectuer des gestes complexes avec un pointeur. Les utilisateurs novices qui ignorent souvent la prise en charge de gestes de pointeur complexes. 
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**  
- Pour chaque interaction gestuelle complexe ou basée sur une trajectoire (<span lang="en">swipe, drag, pinch</span>...), une alternative doit être disponible (par exemple une alternative non gestuelle ou simplifiée) sauf si cette gestuelle ou cette trajectoire est essentielle (ex. : signature).
- De même, pour les interactions nécessitant un changement d'orientation de l'appareil ou un mouvement de l'utilisateur (basculement, rotation, secouement...),  cette fonctionnalité peut être désactivée et doit avoir une alternative dans l'interface.

**Gestuelles complexes**: tout geste multi-points (nécessitant plusieurs doigts), et/ou nécessitant de suivre une trajectoire précise.  
**Gestuelle simplifiée**: une alternative nécessitant un seul pointeur (un seul doigt) et sans trajectoire précise.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#pointer-gestures">2.5.1 Pointer Gestures</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#motion-actuation">2.5.4 Motion Actuation</a>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->