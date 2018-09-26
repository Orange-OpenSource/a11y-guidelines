# Ne pas utiliser la couleur ou l’information sensorielle comme seule source d’information

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Critères incontournables", "url": "./incontournables.html#dev"},
        {"label":"Ne pas utiliser la couleur ou l’information sensorielle comme seule source d’information"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>

**Cible&nbsp;:** tout le monde, en particulier les daltoniens et plus généralement les personnes malvoyantes ou ayant une déficience cognitive, auditive et les seniors.  
**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**  
Ne pas utiliser la couleur ou une information sensorielle (forme, taille, son, orientation, localisation visuelle…) comme la seule façon de véhiculer de l’information, d’indiquer une action, de solliciter une réponse ou de distinguer un élément. L’information fournie par un changement de couleur ou une information sensorielle doit être complétée par une information textuelle (alternative) ou/et structuration sémantique.

**À vérifier&nbsp;:**
- Faire une capture d’écran et la passer en noir et blanc. La perte des couleurs ne doit pas entraîner de difficulté dans la navigation, ni provoquer de perte d’information.
- Couper le son, le niveau d’information doit rester identique. 
- S'assurer que les liens sont identifiables par un autre moyen que la couleur (en général, le soulignement).

**Objectif utilisateur&nbsp;:**

Permettre aux utilisateurs ne distinguant pas les couleurs ou l’information sensorielle (les daltoniens, déficients visuels, déficients auditifs, utilisateurs de mobile en luminosité extérieure, en milieu bruyant…), d’accéder tout de même à l’information par d’autres moyens.

**Exemple&nbsp;:**      
Pour un graphique type camembert, où chaque partie est colorée différemment, ajouter par exemple une texture différente pour les identifier sans la couleur.
 
**Exemple valide&nbsp;:**  
![Exemple d’image valide n’utilisant pas que la couleur pour transmettre l’information](./images/couleur-ok.png)

**Exemple non-valide&nbsp;:**  
![Exemple non-valide utilisant uniquement des voyants de couleur pour transmettre l’information](./images/couleur-ko.png)

Cet exemple n’est pas valide, car l’information est transmise uniquement par la couleur.

**Référence <abbr>WCAG</abbr>&nbsp;:**
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#sensory-characteristics">1.3.3 Sensory Characteristics</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#use-of-color">1.4.1 Use of Color</a>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->