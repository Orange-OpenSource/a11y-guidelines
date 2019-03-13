# Detect, identify errors and suggest corrections

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"WCAG criteria by project phase - Developers", "url": "./incontournables.html#dev"},
        {"label":"Detect, identify errors and suggest corrections"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>

**Target: **everyone and particularly people with visual impairments, cognitive limitations, reading or attention difficulties and elderly people.  
**When: **as of design and during development.

**Description: **

The errors are automatically detected, the user is warned by a page title change, the error of the form field is clearly identified and the error is described with words to the user. If necessary, a correction is suggested.

Finally, the wording of the error messages should be explicit.

For web pages that involve important actions (legal commitment, financial transaction, modification or deletion of important data, response to a test or examination ...), the action must be reversible or go through a confirmation step to verify or correct the entry in case of error.

**Checklist: **

Identifying the invalid field, as well as displaying a suggestion of correction can be dynamically added to the `label` tag, but also to the `title` tag or `aria-label` and `aria-labelledby` tags (see [ARIA attributes that can save you](./label-ledby-describedby.html)) depending on the needs.

**Users’ goal: **

Guide users when errors happen to improve the understanding and help them correct the errors, especially for internet beginners, elderly people and cognitively deficient.

**Do: **  
![screenshot of a form that displays relevant error messages](images/formulaire-ok.png)  

**Don’t: **  
![screenshot of a form displaying irrelevant error messages](images/formulaire-ko.png)

&nbsp;  
**Example of an accessible form: **
  
See [the accessible form example](./exemples/formulaire/index.html) for more details.

**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a href="https://www.w3.org/TR/WCAG21/#error-identification">3.3.1 Error Identification</a>
- <a href="https://www.w3.org/TR/WCAG21/#error-suggestion">3.3.3 Error Suggestion</a>
- <a href="https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data">3.3.4 Error Prevention (Legal, Financial, Data)</a>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->