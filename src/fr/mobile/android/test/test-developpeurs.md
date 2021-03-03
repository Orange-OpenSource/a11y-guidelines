---
title: "Tests des développeurs : analyse du code"
---

# Tests des développeurs : analyse du code

Cette étape permet de remonter directement des problèmes d’accessibilité pendant la phase de développement et provoque des erreurs de build de l’application, ou divers warnings. Le développeur doit ainsi les corriger directement pour pouvoir builder son application et la faire fonctionner, ce qui la rend d’office plus accessible avant même de la faire passer par des tests manuels, ou par des outils d’analyse. De plus, cela évite les possibles régressions d’accessibilité.

## <span lang="en">Lint</span>
Le développeur peut en premier lieu utiliser l’outil <span lang="en">Lint</span> dans Android Studio, sur son application, afin de faire une première passe sur les problèmes d’accessibilités.
5 problèmes d’accessibilités peuvent être remontés grâce à <span lang="en">Lint</span> :

- **<span lang="en">ClickableViewAccessibility </span>**: Si une vue surcharge  <span lang="en">onTouchEvent </span> ou utilise une surcharge <span lang="en">onTouchListener</span> , mais n’implémente pas <span lang="en">performClick</span>
- **<span lang="en">ContentDescription</span>** : les widgets non textuels ne portant aucune <span lang="en">contentDescription</span>
- **<span lang="en">KeyboardInaccessibleWidget</span>** : les widgets étant déclarés comme clickables mais non focusables. 
- **<span lang="en">LabelFor</span>** : un <span lang="en">EditText</span> doit contenir soit un <span lang="en">hint</span>, soit la référence d’un label associé avec <span lang="en">labelFor</span>
- **<span lang="en">GetContentDescriptionOverride</span>** : surcharger <span lang="en">getContentDescription</span> peut poser des problèmes d’accès aux services d’accessibilité. Dans le cas où on a besoin de modifier la description, il faut plutôt faire appel à la fonction : <span lang="en">setContentDescription</span>

**Exemple de rapport Lint sous Android Studio :**   

<img src="../../../images/lint.png" alt="capture d’écran présentant un rapport de l'outil Lint, qui affiche une erreur d'accessibilité" width="80%">


## Tests automatisés : Espresso

Espresso est un framework permettant de tester son UI sous Android. On peut alors y intégrer le framework ATF (<span lang="en">Accessibility Test Framework</span>), qui va ajouter une couche de tests concernant l’accessibilité. 

Aucun test explicite n’a besoin d’être écrit. Une fois ATF intégré aux tests Expresso, les vérifications d’accessibilité se rajoutent automatiquement. ATF fonctionne cependant avec les <span lang="en">ViewAction</span>, c’est-à-dire qu’il va effectuer automatiquement la vérification d’accessibilité sur les interactions <span lang="en">ViewAction</span> mis en place dans les tests Espresso. De plus, pour activer les vérifications d’accessibilité, il faut faire appel à la fonction `AccessibilityChecks.enable()` dans la suite de tests. 

Voici comment l’intégrer :

<pre>
<code class="java">
@Before
    public static void enableAccessibilityChecks() {
        AccessibilityChecks.enable();
    }
</code></pre>

<pre>
<code class="kotlin">
companion object {
    @BeforeClass @JvmStatic
    fun enableAccessibilityChecks() {
        AccessibilityChecks.enable()
    }
}
</code></pre>

C’est ainsi que, dans le cas où l’on réalise dans la suite de test un `ViewAction.click()` sur un bouton qui ne correspond pas à la taille requise pour un élément interactif, le test apparaitra en erreur jusqu’à ce que le problème d’accessibilité soit résolu.

Orange propose son propre framework basé sur Espresso pour réaliser des vérifications automatique d'accessibilité. Des règles supplémentaires y sont notamment ajoutées. Il est donc recommandé d'utiliser ce framework disponible sur [<span lang="en">gitlab</span>](https://gitlab.tech.orange/soft_a11y/espresso-accessibility-orange).
### Réaliser les tests automatisés d’accessibilité sur l’ensemble de l’écran

L’automatisation du test d’accessibilité selon les <span lang="en">ViewAction</span> peut cependant devenir limitant. C’est pourquoi, on peut indiquer lors de l’activation de ATF, que l’on souhaite faire les validations depuis la vue racine. Ainsi, toutes les vues seront testées, sans besoin d’ajouter de <span lang="en">ViewActions</span>. Pour ce faire, il faut remplacer  `AccessibilityChecks.enable()` par `AccessibilityChecks.enable().setRunChecksFromRootView(true)`

### Loguer les erreurs d’accessibilité plutôt que de provoquer l'échec des tests

Il est possible de loguer les erreurs d’accessibilité afin de les voir apparaitre dans le logcat d’Android Studio, plutôt que de provoquer l'échec des tests Espresso, même si cela n’est pas conseillé. Cela ne doit être utilisé que dans un cadre temporaire. Pour ce faire, il faut ajouter la fonction suivante : `AccessibilityChecks.enable().setThrowExceptionForErrors(false)`

### Créer une whitelist 

Plutôt que d'afficher toutes les erreurs d’accessibilité dans le logcat, il est possible de créer une <span lang="en">whitelist</span> pour ne loguer que celles que l’on souhaite, tout en conservant les autres en erreur. Pour cela, il faut ajouter la fonction suivante : 
`AccessibilityChecks.enable().setRunChecksFromRootView(true).setSuppressingResultMatcher(matchesView(anyOf(withId(R.id.buttonPlus))))`

Dans cet exemple, la vue ayant pour id **<span lang="en">buttonPlus</span>** ne sera pas indiquée en erreur en cas de problème d’accessibilité, mais sera affichée dans le logcat.

<span class="licence" lang="en">These images are licensed under a Creative Commons Share Alike 2.0 license. Photo credit: <a href="http://www.flickr.com/people/27512715@N02/" hreflang="en">openexhibits</a></span>
