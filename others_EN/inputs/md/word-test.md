# Check accessibility in Word
<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Microsoft Word", "url":"./word.html"},
        {"label":"How to test my document"}
    ]);
    addSubMenu([
        {"label":"Create an accessible document","url":"word-create.html"}, 
        {"label":"How to test my document","url":"word-test.html", "expanded": true}
    ]);
});</script>

<style>code {font-weight: bold;}h2{padding-top: 1.5rem;}</style>
<span data-menuitem="word"></span>

## Automated tests
### Office Accessibility Verification Tool

Start your tests with the Office Accessibility Verification Tool: 
**File > Info > Check for Issues > Check Accessibility**

<img alt="Accessibility checker screenshot" src="./images/word_verification_en.png" class="img-fluid" />  

**Important:** if you encounter some difficulties, try to save your document from within Word 2010 in ".docx" format. The option to "Maintain compatibility with previous versions of Word" has to remains unchecked. 

### Color contrasts
[Download Colour Contrast Analyser](https://developer.paciellogroup.com/resources/contrastanalyser/)

<img alt="colour contrast analyser screenshot" src="./images/cca.png" class="img-fluid" />  

### Screen reader: JAWS & NVDA
To complete the verification, you can test with a screen reader. 
It helps you to simulate the configuration as the visually impaired and blind people.
[For further information to navigate with JAWS & NVDA](https://a11y-guidelines.orange.com/web/methodes-outils-lecteur-ecran.html)

### Self-Assessment Grids 
- <a href="AXS_assess_grid_WORD_EN.xlsx">Accessibility Assessment Grid for Word (16 ko)</a>
- <a href="AXS_assess_grid_PPT_EN.xlsx">Accessibility Assessment Grid for PowerPoint (16 ko)</a>

These Grids are designed for self-assessment of the accessibility of Word and PowerPoint documents: 
<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->