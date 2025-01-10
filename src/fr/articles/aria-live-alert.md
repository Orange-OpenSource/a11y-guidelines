---
title: "L'attribut aria-live et le role alert"
abstract: "Quand et comment utiliser les roles et attributs de type live"
titleBeforeTag: true
date: "2020-01-08"
tags:
  - web
  - intermediate
---
  
Les utilisateurs qui naviguent à l'aide d'un lecteur d'écran ne sont pas toujours au courant des modifications apportées dans la page. Lorsqu'une information est actualisée ou lorsqu'un message apparaît il est parfois nécessaire de faire parler le lecteur d'écran pour informer l'utilisateur. Pour ce faire, le language <abbr>ARIA</abbr> dispose du role `alert` et de l'attribut `aria-live`.

## Le role alert

Le rôle alert, appliqué à un élément HTML, informe le lecteur d’écran qu’il doit vocaliser automatiquement le contenu de cet élément dès sa création. Ce comportement, conçu pour attirer immédiatement l’attention de l’utilisateur, en fait un outil puissant, mais aussi potentiellement intrusif.

### Bonnes pratiques d'utilisation


L’utilisation du rôle alert doit être réservée à des cas spécifiques où une intervention immédiate de l’utilisateur est requise, comme :

- Une erreur critique dans un formulaire.
- Une alerte de sécurité ou de système.
- Une notification urgente nécessitant une action immédiate.


### Précautions à prendre

Documentation : Consultez la documentation officielle, comme celle de MDN Web Docs, pour des recommandations détaillées.
Parcimonie : Évitez d’utiliser le rôle alert pour des notifications fréquentes ou non essentielles, car cela peut perturber l’expérience utilisateur.

### Compatibilité et déclenchement

Le support des rôles et des attributs ARIA, dont alert, varie en fonction des combinaisons navigateur/lecteur d’écran. Pour garantir une expérience optimale :

- Testez sur plusieurs navigateurs et lecteurs d’écran.
- Adaptez les méthodes de déclenchement en fonction des environnements ciblés.

Pour en savoir plus, vous pouvez consulter l’article de Steve Faulkner (en anglais) qui détaille les comportements spécifiques liés à l’utilisation de ce rôle.

### Créer un nouvel élément dans le DOM

On peut déclencher une alerte en insérant un nouvel élément dans le <abbr>DOM</abbr> via Javascript.

<pre><code class="html">&lt;span role="alert"&gt;Ceci est un message d'alerte.&lt;/span&gt;</code></pre>

### Ajouter un role alert sur un élément existant
Le déclenchement d'une alerte peut également s'effectuer en ajoutant un `role="alert"`, à un élément existant, dynamiquement via Javascript.

<pre><code class="js">
document.getElementById('alert').setAttribute("role", "alert");
</code></pre>

### Utiliser innerHTML

Créer une alerte via la propriété innerHTML.
<pre><code class="js">
element.innerHTML = '&lt;div role="alert"&gt;Ceci est une alerte&lt;/div&gt;';
</code></pre>

## L'attribut `aria-live`

L’attribut aria-live, appliqué à un élément HTML, informe le lecteur d’écran que toute modification apportée à son contenu devra être vocalisée. Cet attribut est particulièrement utile pour gérer les mises à jour dynamiques sur une page, en assurant que les utilisateurs de lecteurs d’écran soient informés des changements importants.

Les valeurs possibles
L’attribut aria-live accepte trois valeurs principales, chacune ayant un impact différent sur le comportement du lecteur d’écran :

- off : 
Par défaut, aucune vocalisation ne sera effectuée pour les modifications de contenu.
À utiliser lorsque les mises à jour ne sont pas pertinentes pour l’utilisateur ou qu’elles n’ont pas besoin d’être annoncées.

- polite :
Le contenu mis à jour sera vocalisé uniquement lorsque le lecteur d’écran aura terminé de traiter sa tâche en cours (par exemple, lire un paragraphe ou une autre notification).
Idéal pour les messages d’information non urgents, tels que des confirmations ou des notifications mineures.

- assertive :
Le lecteur d’écran interrompt immédiatement sa tâche en cours pour annoncer le contenu mis à jour.
À utiliser avec prudence, uniquement pour des messages critiques ou urgents nécessitant une attention immédiate, comme des erreurs ou des alertes de sécurité.

### Bonnes pratiques d’utilisation

- Déclaration initiale : Il est fortement recommandé de positionner l’attribut aria-live sur l’élément dès le chargement de la page. Cela garantit une compatibilité optimale avec les différents navigateurs et lecteurs d’écran.
- Simplicité des mises à jour : Veillez à ce que les modifications apportées au contenu des zones live soient claires, concises et compréhensibles.
- Priorisation adaptée : Choisissez la valeur appropriée (polite ou assertive) en fonction de l’importance et de l’urgence des messages pour éviter de perturber inutilement l’utilisateur.

<pre><code class="html">
&lt;span aria-live="polite"&gt;5 éléments sélectionnés&lt;/span&gt;
</code></pre>
  
Des attributs supplémentaires permettent de modifier finement le comportement par défaut d'`aria-live`&nbsp;:

- **aria-atomic&nbsp;:**  true ou false (défaut), permet d'indiquer si la totalité de la zone live doit être lue (true) ou seulement la partie modifiée (false).
- **aria-relevant&nbsp;:** indique quel type de changement déclenche une vocalisation, valeurs possibles&nbsp;: additions (défaut), removals, all.

Enfin pour être complet, sachez que le langage <abbr>ARIA</abbr> prévoit également quelques roles spécifiques, **status** et **log** notamment qui peuvent s'avérer utiles dans certains cas (barre d'état, journalisation, chat…) et qui pour le moment doivent être utilisés en complément de l'attribut `aria-live` pour maximiser la prise en charge par les outils d'assistance. Vous trouverez plus d'infos sur ces roles dans les liens ci-dessous.


## Références
- [Utilisation du rôle alert](https://developer.mozilla.org/fr/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [Zones live ARIA](https://developer.mozilla.org/fr/docs/Accessibilit%C3%A9/ARIA/Zones_live_ARIA)
- [Utiliser le rôle log](https://developer.mozilla.org/fr/docs/Accessibilit%C3%A9/ARIA/Techniques_ARIA/Utiliser_le_role_log)
- [Utiliser le rôle status](https://developer.mozilla.org/fr/docs/Accessibilit%C3%A9/ARIA/Techniques_ARIA/Utiliser_le_role_status)
