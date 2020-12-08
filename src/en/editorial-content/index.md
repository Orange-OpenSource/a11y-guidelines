---
title: "General recommendations for content"
---

# General recommendations 

## Introduction
This section presents general recommendations to ensure the accessibility of your content regardless of the medium used (email, PPT, PDF, Word, etc.).

## Check colours

* Make sure [color is not the only means used to convey information](/en/web/design/colors-and-contrasts/#do-not-use-colour-or-sensory-characteristics-as-the-unique-source-of-information).
* Ensure a level of [sufficient contrast between the color of the text and that of the background](/en/web/design/colors-and-contrasts/#make-sure-there-is-enough-contrast-between-font-and-background-colors). This is valid for your texts but also for icons, buttons and other graphic elements. Contrast can be checked using the tool [Color Contrast Analyser](https://www.paciellogroup.com/resources/contrastanalyser/) for example:
  * 4.5:1 for normal size text.
  * 3:1 for [large text](/en/glossary/#large-text) and interface components or graphical elements that convey information.

## Make reading easier

* Align texts to the left (avoid justifying).
* Put a capital letter at the beginning of a sentence but avoid whole sentences in capital letters.
* Avoid italics.
* Use simple, sans serif fonts: Arial, Calibri or [accessible font Dfa](https://opensource.orange.com/fr/category/actualites/ow2-fr/osai-fr/accessible_dfa-fr/), having a size of at least 10 points.
* Set up simple punctuation.
* Avoid textured backgrounds (images).
* Do not make repeated carriage returns or tabulation to space (but the “Paragraph & Spacing” or “Indent” function in Word, for example).
* Avoid layout tables or complex data tables (except in HTML if the [table structure is accessible](/en/web/develop/textual-content/#structuring-data-tables)).
* Avoid “image” content that conveys information: graphs, diagrams, diagrams (except in HTML if a [textual alternative is available](/en/web/design/non-textual-content/)).
* Use clear turns of phrase, short sentences and simple construction. One idea per sentence.
* Avoid words that are too complicated or specific to a domain as much as possible, and if not, explain them.
* Use proper typographic characters: dash -, em-dash —, “rounded quotes”.
* Avoid foreign words, abbreviations except those that are genuinely used.
* Signal the end of the document (for instance, an image saying “End of email”, or a white-on-white text “End of document”).

## Layout with tables

Knowing that email clients (Outlook included) still sometimes require to use a [table layout](/en/editorial-content/emails/): add a `role="presentation"` to your table tags so that text-to-speeches understand it's just formatting.

## Accessible data tables

In order for your data tables to be accessible, simplify them as much as possible from their design:
* Avoid nested tables one inside the other (maximum 2 levels of nesting).
* Avoid merging cells, using too many empty cells, adding background images.
* Ensure sequential reading (we must be able to read from left to right and top to bottom).

And for the implementation in a web page for example, see <a href="/en/web/develop/textual-content/#structuring-data-tables" title="Structuring data tables">our dedicated article</a>.
