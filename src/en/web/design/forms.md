---
title: "Web design - Forms"
abstract: "Forms, web accessibility design recommandations"
---

# Web design - Forms

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

## Limit redundant entries

**Target:**  People with cognitive disabilities (especially with memory difficulties).

**When:** During design and development.

**Description:**  
The intent of this criteria is to reduce the cognitive effort required by filling out forms with redundant entries.

People with memory problems may have difficulty if a form asks to enter information that has already been entered before. For example: having to enter your email address a second time.
 
Forcing the user to enter the same information several times can cause stress or cognitive fatigue with the risk of generating incorrect entries.
The user may find it impossible to continue the customer journey, or even abandon the task.

Information previously entered by or provided to the user that is required to be entered again in the same process is either auto-populated, or available for the user to select.

**Checklist:**
In a process that requires entering information several times (for example, in a multi-step form), check that at least one of the following conditions is met:

* Fields whose data has already been entered are filled automatically.
* User can select data already entered from a list.
* User can check a box to automatically fill a form field with data already entered.

Using the autocomplete feature from the browser is not considered sufficient.

**Exceptions:**
* Essential uses of input re-entry for things like memory games.
* Security measures such as preventing a password string from being shown or copied. 
* When the previously entered information is no longer valid (expired session).

**Benefits:**
Simplify filling out a form for all users, especially those with cognitive and/or motor problems.

**Valid example:**
In the case of a purchase form that needs to enter a billing address and a delivery address, if the user has already entered the billing address and the delivery address is the same, then it must be possible to automatically fill in the delivery address based on the information entered for the billing address.
For example, this could be a check box that automatically duplicate information already entered.

**Non-valid example:**
On an e-commerce website, a user launches a search with the keyword 'coat' and consults the results page.
After consulting the details of an item included in the list of results, if the user returns to the search page, the word 'coat' no longer appears in the search field and no search history is available.

**<abbr>WCAG reference</abbr>:**  
<a href="https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html">3.3.7 Redundant Entry</a>