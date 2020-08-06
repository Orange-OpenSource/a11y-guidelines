# Audit WCAG
<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Critères WCAG par thème", "url": "./incontournables.html"},
        {"label":"Audit WCAG"}
        ]);
    addSubMenu([
        {
            "label":"Conception", "url":"incontournables.html#", "itemsQuery":"#incontournables-concepteurs h2", "className": "menuitem-conception",
        },
        {
            "label":"Développement", "url":"incontournables.html#dev", "itemsQuery":"#incontournables-developpeurs h2", "className": "menuitem-development",
        },
        {
            "label":"Tests", "url":"incontournables.html#test", "itemsQuery":"#incontournables-testeurs section h2", "className": "menuitem-test",
        },
        {
            "label":"WCAG audit", "url":"audit-wcag.html"
        }
    ]);    
});</script>

<span data-menuitem="incontournables"></span>

The purpose of the WCAG audit is to calculate the compliance rates found in the accessibility statements which are available on Orange websites. 

Orange has developed a grid of questions called the va11ydette. This grid consists of 64 questions, that between them cover the 50 criteria of the WCAG version 2.1 levels A and AA. Each question is used to validate or invalidate one or more criteria, and any given criterion can be addressed by one or more questions. 

The grid calculates a compliance rate per page audited: this rate is equal to the sum of the criteria that are compliant, divided by the number of criteria that are applicable. It also calculates the average compliance rate, which corresponds to the average of the compliance rates of the pages tested. 

## Go to the va11ydette

The link below opens the grid in a new browser window.   

<a href="../../web/la-vallydette/?lang=en" target="_blank" class="btn btn-secondary" style="text-decoration: none">Open the va11ydette <span class="sr-only"> (new windows)</span></a>

&nbsp;
<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->