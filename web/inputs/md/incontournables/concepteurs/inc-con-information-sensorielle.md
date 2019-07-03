# Ne pas utiliser la couleur ou l’information sensorielle comme seule source d’information

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Critères WCAG par thème - Concepteurs", "url": "./incontournables.html"},
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
- S'assurer que les liens sont identifiables par un autre moyen que la couleur (en général, le soulignement). S'ils ne sont pas soulignés, sur le focus et le survol souris, fournir un autre moyen que le couleur pour les distinguer.

**Exemple valide&nbsp;:**  

![illustration utilisant des icônes de couleurs avec des formes différenciées pour transmettre l’information](images/couleur-ok.png)

**Exemple non-valide&nbsp;:**
  
![illustration utilisant des icônes de couleurs avec des formes identiques pour transmettre l’information](images/couleur-ko.png)  

Cet exemple n’est pas valide, car l’information est transmise uniquement par la couleur.

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->