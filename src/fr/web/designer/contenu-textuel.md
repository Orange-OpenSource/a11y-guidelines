---
title: "Contenu textuel"
---

# Contenu textuel

<p class="lead">S’assurer que les contenus textuels soient structurés avec la sémantique appropriée</p>


## Donner un titre aux pages

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** dès la conception et pendant le développement.

**Description&nbsp;:**  
Donner à chaque page un titre qui lui est spécifique et qui reflète son contenu ou sa fonction (balise `<title>`).  
Le titre de la page est le premier élément lu par la synthèse vocale, il doit permettre d’identifier formellement la page sur laquelle on se trouve.

**À vérifier&nbsp;:**
- Bien qu’il n’y ait pas de règle, en général (ouverture de nombreux onglets de multiples applications), on va de l’information la plus spécifique vers la moins spécifique (ex&nbsp;: nom de la page courante - nom du site). Pour le fenêtrage d’une multitude d’applications, le contexte d’utilisation est différent&nbsp;; dans ce cas, on préférera aller de l’information la moins spécifique vers la plus spécifique.
- Lorsque le contenu de la page est modifié dynamiquement (affichage du résultat d’une recherche, erreurs dans un formulaire, action utilisateur ajoutant du contenu…), le titre de la page doit refléter cette modification du contenu.

**Exemple valide&nbsp;:**  
`Accueil - Espace client Orange`
 
**Exemple non-valide&nbsp;:**  
`Accueil`



## Donner des titres aux rubriques

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes cognitives, ayant des difficultés pour lire ou déficientes visuelles.  
**Quand&nbsp;:** dès la conception, à la rédaction du contenu et pendant le développement.

**Description&nbsp;:**  
Identifier les balises de titres à utiliser (balises <abbr>HTML</abbr> `h1` jusqu’à `h6`) pour structurer le contenu des pages.
Les personnes malvoyantes naviguant à l’aide d’un lecteur d’écran peuvent accéder à la liste des titres de la page pour naviguer rapidement. 
Tout comme dans un fichier Word, il est possible d’utiliser la table des matières si des titres ont correctement été positionnés à l’intérieur du document.  

**À vérifier&nbsp;:**

- Les titres doivent être pertinents, refléter la structure de l’information contenue dans la page.
- Il ne doit pas exister de saut dans la hiérarchie des titres (on ne passe pas directement d’un titre `h2` à un titre `h4`).
- On peut mettre plusieurs `h1` par page (se limiter tout de même à deux dans la majorité des cas).

**Exemple valide&nbsp;:**  
    
Un titrage de page cohérent et pertinent&nbsp;:

```
(Titre 1) Accueil - Orange
	(Titre 2) Les actualités
	(Titre 2) La fibre arrive&nbsp;!
		(Titre 3) Êtes-vous éligible&nbsp;?
```
