---
title: "Some best practices for downloading links"
abstract: "How to make understandable downloading links"
date: "2020-09-01"
tags:
  - web
---

# Best practices for download links

There are different types of links: [classic links](/en/web/develop/general-navigation) allowing to reach a new page, [skip links] (/en/articles/skip-links-best-practices) allowing to move within the page and finally those which interest us in this article, the links allowing to download a file.

A link to download a file should respect the following rules:

- its title must be explicit, it must also specify the type and size of the file
- its title must specify the language of the document when it is written in a language different from that of the current page
- this link must be made using a `<a>` tag (and not a `<button>` tag)
- this link must open in the current window (no `target` attribute to open in a new tab)

In addition, to improve accessibility, providing these informations will allow the user to avoid unnecessary downloads, which is also eco-responsible (green) best practice.

## Valid examples

Here is an example of a link with the necessary information:
  
Download the <a href="#">complete review 2020 (PDF, 1.5 MB)</a>.

It is important that this additional information is present in the title of the link and not just after the link (especially for people who use a screen reader). That said, for aesthetic reasons, it is possible to ensure that the additional information is not underlined, for example:
  
Download the <a href="#" style="text-decoration:none"><span style="text-decoration:underline">complete review 2020</span> (PDF, 1.5Mo)</a>

## About the units

In English, the units used to express the weight of the files are written in capital letters (KbB, MB, GB...).

## File language

For the links allowing to download a document in a language other than that of the current page, it is important to specify it.

Examples of documents in French on a English site:
- <a href="#"><span lang="fr">Bilan complet</span> (French, DOC, 800 KB) </a>
- <a href="#"><span>Manuel utilisateur</span> (French, PDF, 1.2 MB) </a>

## A small image for decoration, but not only

If the file type is known, a small icon next to the file allows the user to identify it more quickly:
<a style="background-image: url (/images/icons/pdf-icon.svg); background-size:contain; background-repeat:no-repeat; padding-left:2rem;" href="#">complete review 2020 (PDF, 1.5 MB)</a>
