---
title: "L'attribut aria-live et le role alert"
abstract: "Quand et comment utiliser les roles et attributs de type live"
date: "2020-01-08"
tags:
  - web
---

# L'attribut aria-live et le role alert
  
Les utilisateurs qui naviguent à l'aide d'un lecteur d'écran ne sont pas toujours au courant des modifications apportées dans la page. Lorsqu'une information est actualisée ou lorsqu'un message apparaît il est parfois nécessaire de faire parler le lecteur d'écran pour informer l'utilisateur. Pour ce faire, le language <abbr>ARIA</abbr> dispose du role `alert` et de l'attribut `aria-live`.

## Le role alert

Positionné sur un élément HTML, celui-ci permet d'indiquer au lecteur d'écran de vocaliser l'élément automatiquement lors de sa création. Veiller toutefois à utiliser ce rôle uniquement dans les cas appropriés, comme il est clairement indiqué dans la documentation [MDN de Mozilla](https://developer.mozilla.org/fr/docs/Accessibilit%C3%A9/ARIA/Techniques_ARIA/Utiliser_le_r%C3%B4le_alert). De fait de sa nature intrusive, le role alert doit être utilisé avec parcimonie et uniquement dans les situations où l’attention de l’utilisateur est immédiatement requise. Les changements dynamiques de moindre urgence devraient utiliser une méthode moins agressive, telle que `aria-live="polite"` ou autres rôles de zone live.

Pour déclencher une alerte, plusieurs méthodes sont possibles, avec des supports qui différent en fonction du couple navigateur et lecteur d'écran utilisé. Vous pouvez consulter [l'article de Steve Faulkner (en anglais)](https://developer.paciellogroup.com/blog/2017/04/aria-alert-support/) à ce sujet.

Voici quelques exemples de méthodes qui sont bien supportées.

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

Positionné sur un élément HTML, l'attribut `aria-live` permet d'indiquer au lecteur d'écran que toute modification apportée à son contenu entraînera une vocalisation par le lecteur d'écran.  

Trois valeurs sont possibles : 
- Off : aucune vocalisation
- Polite : la vocalisation aura lieu lorsque le lecteur d'écran aura fini la tâche en cours
- Assertive : le lecteur d'écran interrompt la tâche en cours pour informer l'utilisateur

Il est fortement recommandé que l'attribut `aria-live` soit positionné sur l'élément dès le chargement de la page pour maximiser la compatibilité avec les différents couples navigateurs et lecteurs d'écran.

<pre><code class="html">
&lt;span aria-live="polite"&gt;5 éléments sélectionnés&lt;/span&gt;
</code></pre>
  
Des attributs supplémentaires permettent de modifier finement le comportement par défaut d'`aria-live`&nbsp;:

- **aria-atomic&nbsp;:**  true ou false (défaut), permet d'indiquer si la totalité de la zone live doit être lue (true) ou seulement la partie modifiée (false).
- **aria-relevant&nbsp;:** indique quel type de changement déclenche une vocalisation, valeurs possibles&nbsp;: additions (défaut), removals, all.

Enfin pour être complet, sachez que le langage <abbr>ARIA</abbr> prévoit également quelques roles spécifiques, **status** et **log** notamment qui peuvent s'avérer utiles dans certains cas (barre d'état, journalisation, chat…) et qui pour le moment doivent être utilisés en complément de l'attribut `aria-live` pour maximiser la prise en charge par les outils d'assistance. Vous trouverez plus d'infos sur ces roles dans les liens ci-dessous.


## Références
- [Utilisation du rôle alert](https://developer.mozilla.org/fr/docs/Accessibilit%C3%A9/ARIA/Techniques_ARIA/Utiliser_le_role_alert)
- [Zones live ARIA](https://developer.mozilla.org/fr/docs/Accessibilit%C3%A9/ARIA/Zones_live_ARIA)
- [Utiliser le rôle log](https://developer.mozilla.org/fr/docs/Accessibilit%C3%A9/ARIA/Techniques_ARIA/Utiliser_le_role_log)
- [Utiliser le rôle status](https://developer.mozilla.org/fr/docs/Accessibilit%C3%A9/ARIA/Techniques_ARIA/Utiliser_le_role_status)
