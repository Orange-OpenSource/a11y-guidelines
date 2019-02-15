# Rendre les intitulés des liens et des boutons accessibles

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Critères WCAG par thème - Développeurs", "url": "./incontournables.html#dev"},
        {"label":"Rendre les intitulés des liens et des boutons accessibles"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, cognitives ou ayant un déficit d’attention et les utilisateurs de commande vocale.  
**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**

Il faut satisfaire à ces deux impératifs pour qu'un lien ou un bouton soit accessible :
- Tout d'abord, rendre les intitulés des liens et des boutons compréhensibles hors contexte, en particulier pour les déficients visuels. Lors de la navigation avec un lecteur d’écran, il est possible d’accéder à la liste des liens de la page pour naviguer rapidement. Si votre page contient plusieurs liens «&nbsp;en savoir plus&nbsp;», il sera impossible de les différencier les uns des autres. 
S’il n’est pas possible de rendre un lien ou un bouton plus explicite par l'intitulé, faute de place, mais que l’intitulé actuel est suffisant dans son contexte, on doit utiliser **un attribut `title`** pour faire apparaître une info-bulle, reprenant l'ensemble de l'information nécessaire, au survol avec la souris, mais également compléter l'intitulé par un contenu supplémentaire, au choix, via :
    - un morceau de texte caché par <a href="./exemples/masquage/index.html">masquage accessible</a> via CSS 
    - en utilisant un attribut `aria-label` ou `aria-labelledby` reprenant l'intégralité du contenu du `title` (cf. [les attributs ARIA qui peuvent vous sauver](./label-ledby-describedby.html)).

- De plus, le texte de l'étiquette affichée (l'intitulé textuel ou texte de l'image visible à l'écran) pour tout composant d'interface (lien, bouton...) doit être présent (en premier, si possible) dans le nom (accessible) de ce composant (pour aller plus loin, [Le nom accessible en HTML](./a11y-name.html).

Par exemple dans l’image ci-dessous, les deux éléments «&nbsp;valider&nbsp;» ne sont pas suffisamment explicites pour une personne utilisant un lecteur d’écran et ne bénéficiant pas obligatoirement du contexte. En revanche, quand on voit l’écran, le contexte fait qu’il n’y a pas d’ambiguïté sur leur rôle.

![capture d’écran présentant deux liens «&nbsp;valider&nbsp;» dont le libellé doit être explicité](./images/liens-valider.png)

**Solutions&nbsp;:**  

Ajouter un `span` en <a href="./exemples/masquage/index.html">masquage accessible</a> pour compléter l’intitulé. Il ne sera pas affiché à l’écran mais sera vocalisé par les outils d’assistance.

<pre><code class="html">
&lt;a href="…" title="Valider le paiement en plusieurs fois"&gt;valider&lt;span class="masquage-accessible"&gt; le paiement en plusieurs fois&lt;/span&gt;&lt;/a&gt;
&lt;a href="…" title="Valider le paiement en une seule fois"&gt;valider&lt;span class="masquage-accessible"&gt; le paiement en une seule fois&lt;/span&gt;&lt;/a&gt;
</code></pre>

Une autre solution consiste à utiliser un attribut `aria-label` ou `aria-labelledby` pour préciser l’intitulé (cf. [les attributs ARIA qui peuvent vous sauver](./label-ledby-describedby.html)).  

<pre><code class="html">
&lt;a href="…" title="Valider le paiement en plusieurs fois" aria-label="Valider le paiement en plusieurs fois"&gt;valider&lt;/span&gt;&lt;/a&gt;
&lt;a href="…" title="Valider le paiement en une seule fois" aria-label="Valider le paiement en une seule fois"&gt;valider&lt;/span&gt;&lt;/a&gt;
</code></pre>

**À vérifier&nbsp;:**
S’assurer que la sémantique <abbr>HTML</abbr> soit respectée&nbsp;:
- un lien doit permettre de changer d’<abbr>URL</abbr>, de page, de télécharger un fichier, de faire apparaître/disparaître du contenu, d’aller à un ancre.
- un bouton doit permettre de soumettre/réinitialiser un formulaire, d’ouvrir une fenêtre modale, de faire apparaître un sous-menu, de piloter un media, de déclencher une action via <abbr>JS</abbr>.

S’assurer que les liens et les boutons isolés du contenu donnent une bonne information sur l’action déclenchée ou sa destination.

Une page ne doit pas avoir plusieurs liens ou boutons dont l’intitulé est le même, mais pointant sur des destinations/actions différentes.

**Objectif utilisateur&nbsp;:**
Permettre à un utilisateur n’ayant pas accès au contexte visuel de connaître la destination du lien ou l’action du bouton.
 
Notamment important pour les utilisateurs navigant grâce à une liste de liens extraite de la page (lecteurs d’écran) ou les utilisateurs de loupe logicielle qui ne voient qu’une fraction de la page. 

Permettre de conserver une cohérence entre le texte visible d'une étiquette et son nom accessible qui lui est restitué aux <abbr>AT</abbr>

**Objectif technique&nbsp;:**
Expliciter les liens et les boutons permet d’améliorer le référencement naturel.

**Exemple valide&nbsp;:**      
Associer à un lien «&nbsp;cliquer ici&nbsp;», un texte caché hors écran&nbsp;: «&nbsp;commander votre téléphone&nbsp;».
 
**Exemple non-valide&nbsp;:**      
Liens «&nbsp;Cliquez ici&nbsp;» ou «&nbsp;Lire la suite…&nbsp;» sans plus de précision.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#link-purpose-link-only"> 2.4.9 Link Purpose (Link Only)</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#label-in-name"> 2.5.3 Label in Name</a>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->