---
title: "Forms"
---

# Forms

<p class="lead">Ensure that the user can effectively complete the forms</p>




## Usable forms

**Target:** everyone and especially people with visual impairments, dyslexia and cognitive disabilities.  
**When:** during design and development.

**Description:**  
Each form input must be associated with a label identifying the function of the field, the type of data and the expected format. This label should be visually close to the field so we can easily mentally link them (especially for people using zoom or a software magnifier, or even for mobile users). 

Error messages should clearly identify the invalid field, and if necessary suggest a correction. This applies to input fields, but also to other types of fields (drop-down list, radio button, checkbox…). From the development perspective, this label must be associated with the form field to facilitate the navigation with a screen reader.

**Do:**  
![screenshot of a valid form](../../images/formulaire.png)
  
&nbsp;

**Don’t:**  
![screenshot of a form with a missing label](../../images/formulaire2.png)

&nbsp;

In some cases, it seems unnecessary to associate a label to a form field (search field accompanied by a magnifying glass button for example). In such case you can provide a hidden label, it will not be displayed on the screen but it will be associated with the form field programmatically for easy navigation with a screen reader.

Lastly, the wording of the error messages should be explicit.

**Do:**  
![screenshot of a form that displays relevant error messages](../../images/formulaire-ok.png)  

**Don’t:**  
![screenshot of a form displaying irrelevant error messages](../../images/formulaire-ko.png)
