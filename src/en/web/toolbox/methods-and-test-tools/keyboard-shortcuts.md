---
title: "Check the presence keyboard shortcuts"
abstract: "Check the presence keyboard shortcuts"
---

# Check the presence of keyboard shortcuts

Historically, the bookmarklet used to check keyboard shortcuts (<a href="http://3needs.org/en/testing/code/kb-shortcuts.html">character keys shortcut bookmarklet</a>) does not allow for the verification of all printable characters, particularly accented characters and non-Latin characters.

The bookmarklet proposed below covers more printable characters; here is the range of verified UTF-8 codes:

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


Copy-paste the following code into your favorite browser's bookmarks:

```
javascript:(function(){var n=32,end=8365,key=function(){var char=String.fromCharCode(n);console.log(n+': '+char);var e=document.createEvent('Event');e.initEvent('keydown',true,false);e.key=char;e.which=n;e.keyCode=n;e.charCode=n;document.getElementsByTagName('BODY')[0].dispatchEvent(e);e=document.createEvent('Event');e.initEvent('keypress',true,false);e.key=char;e.which=n;e.keyCode=n;e.charCode=n;document.getElementsByTagName('BODY')[0].dispatchEvent(e);e=document.createEvent('Event');e.initEvent('keyup',true,false);e.key=String.fromCharCode(n);e.which = n;e.keyCode=n;e.charCode=n;document.getElementsByTagName('BODY')[0].dispatchEvent(e); n++; if(n<end){if(n==256) n=8364; x=window.setTimeout(key, 20);}}})();

```
