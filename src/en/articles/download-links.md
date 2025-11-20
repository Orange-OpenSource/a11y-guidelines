---
title: "Some best practices for downloading links"
abstract: "How to make usable and understandable downloading links"
titleBeforeTag: true
date: "2020-09-01"
updateDate: "2025-11-14"
tags:
  - web
  - intermediate
---

There are different types of links: [classic links](/en/web/develop/common-navigation/) allowing users to reach a new page, [skip links](/en/articles/skip-links-best-practices) allowing users to move within the page and finally those which are the focus of this article, the links allowing users to download a file.

A link to download a file should, for both accessibility and usability reasons, adhere to the following guidelines:

- its title must be explicit and specify the file type and size
- its title must specify the language of the document when it is written in a language different from that of the current page
- this link must be created using a `<a>` tag (and not a `<button>` tag)
- this link must open in the current window (avoid using the `target` attribute to open it in a new tab)

In addition, to improve accessibility and usability, providing this information will allow the user to avoid unnecessary downloads, which is also an eco-sustainable best practice.

## Valid examples

Here is an example of a link with the necessary information:
  
Download the <a href="#">complete review 2020 (PDF, 1.5 MB)</a>.

It is important that this additional information is present in the title of the link and not just after the link (especially for people who use a screen reader). That said, for aesthetic reasons, it is possible to ensure that the additional information is not underlined, for example:
  
Download the <a href="#" style="text-decoration:none"><span style="text-decoration:underline">complete review 2020</span> (PDF, 1.5 MB)</a>

## About the units

In English, the units used to express the size of the files are written in capital letters (KB, MB, GB...).

## File language

For the links allowing to download a document in a language other than that of the current page, it is important to specify it.

Examples of documents in French on an English site:
- <a href="#"><span lang="fr">Bilan complet</span> (French, DOC, 800 KB) </a>
- <a href="#"><span>Manuel utilisateur</span> (French, PDF, 1.2 MB) </a>

## A small image for decoration, but not only

If the file type is known, a small icon next to the file helps users identify it more quickly:
<a style="background-image: url(/images/icons/pdf-icon.svg); background-size:contain; background-repeat:no-repeat; padding-left:2rem;" href="#">Complete review 2025 (PDF, 1.5 MB)</a>
or
<a href="#"><img src="/images/icons/pdf-icon.svg" alt="PDF file" width="16" height="16" /> Complete review 2025 (1,5 MB)</a>