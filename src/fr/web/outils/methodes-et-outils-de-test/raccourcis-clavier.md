---
title: "Vérifier la présence de raccourcis clavier"
abstract: "Vérifier la présence de raccourcis clavier"
---

# Vérifier la présence de raccourcis clavier

Le bookmarklet historiquement utilisé pour vérifier les raccourcis clavier (<a href="http://3needs.org/en/testing/code/kb-shortcuts.html" lang="en" hreflang="en">character keys shortcut bookmarklet</a>) ne permet pas de vérifier tous les caractères imprimables, en particulier les caractères accentués et les caractères non latins.

Le bookmarklet proposé ci-dessous permet de couvrir plus de caractères imprimables, voici la plage des codes UTF-8 vérifiés :
- C0 Control (0 - 31)
- Basic Latin (32 - 126)
- Latin Supplement (160 - 255)
- Latin Extended A (256 - 383)
- Latin Extended B (384 - 591)
- Modifier Letters (688 - 767)
- Diacritical Marks (768 - 879)
- Greek And Coptic (880 - 1023)
- Cyrillic (1024 - 1279)
- Cyrillic Supplement (1280 - 1327)
- Armenian (1328 - 1423)
- Hebrew (1424 - 1535)
- Arabic (1536 - 1791)
- Arabic Supplement (1872 - 1919)
- Euro symbol (€) 8364


Copier et coller le code suivant dans un marque-page de votre navigateur préféré :

```
javascript:(function(){var n=32;var end=8365;key();function key(){console.log(n+': '+String.fromCharCode(n));e=document.createEvent('Event');e.initEvent('keydown', true, false);e.key=String.fromCharCode(n);e.which = n;e.keyCode=n;e.charCode=n;document.getElementsByTagName('BODY')[0].dispatchEvent(e);e=document.createEvent('Event');e.initEvent('keypress', true, false);e.key=String.fromCharCode(n);e.which = n;e.keyCode=n;e.charCode=n;document.getElementsByTagName('BODY')[0].dispatchEvent(e);e=document.createEvent('Event');e.initEvent('keyup', true, false);e.key=String.fromCharCode(n);e.which = n;e.keyCode=n;e.charCode=n;document.getElementsByTagName('BODY')[0].dispatchEvent(e); n++; if(n<end){if(n==256) n=8364; x=window.setTimeout(key, 20);}}})();

```
