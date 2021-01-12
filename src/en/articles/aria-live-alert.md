---
title: "The aria-live attribute and the role alert"
abstract: "When and how to use roles and attributes of live type "
date: "2020-01-08"
tags:
  - web
---

# The aria-live attribute and the role alert
  
Users who navigate using a screen reader are not always aware of changes made on the page. When information is updated or when a message appears, it is sometimes necessary to make the screen reader speak to inform the user. To do this, the <abbr>ARIA</abbr> language has the role `alert` and the attribute` aria-live`.

## The role alert

Positioned on an HTML element, this allows you to tell the screen reader to vocalize the element automatically when it is created. However, be sure to use this role only in appropriate cases, as clearly stated in the [Mozilla MDN] documentation (https://developer.mozilla.org/fr/docs/Accessibilit%C3%A9/ARIA/Techniques_ARIA/ Use_the_r% C3% B4le_alert). Due to its intrusive nature, role alert should be used sparingly and only in situations where the user's attention is immediately required. Less urgent dynamic changes should use a less aggressive method, such as `aria-live="polite"` or other live zone roles.

To trigger an alert, several methods are possible, with a support that differ depending on the browser and screen reader pair used. You can read [Steve Faulkner's article] (https://developer.paciellogroup.com/blog/2017/04/aria-alert-support/) on this subject.

Here are some examples of methods that are well supported.

### Create a new element in the DOM

You can trigger an alert by inserting a new element in the <abbr>DOM</abbr> via Javascript.

<pre> <code class="html"> &lt;span role="alert"&gt; This is an alert message. &lt;/span&gt; </code> </pre>

### Add a role alert on an existing element
The triggering of an alert can also be done by adding a `role="alert"` dynamically to an existing element via Javascript.

<pre> <code class="js">
document.getElementById('alert').setAttribute("role", "alert");
</code> </pre>

### Using innerHTML

Create an alert via the `innerHTML` property.
<pre> <code class="js">
element.innerHTML = '&lt;div role ="alert"&gt;This is an alert&lt;/div&gt;';
</code> </pre>

## The `aria-live` attribute

Positioned on an HTML element, the `aria-live` attribute is used to indicate to the screen reader that any modification made to its content will result in vocalization by the screen reader.

Three values ​​are possible:
- Off: no vocalization
- Polite: the vocalization will take place when the screen reader has finished the current task
- Assertive: the screen reader interrupts the current task to inform the user

It is strongly recommended that the `aria-live` attribute be set on the element as soon as the page is loaded to maximize compatibility with different browsers and screen readers.

<pre> <code class = "html">
&lt;span aria-live="polite"&gt;5 selected items&lt;/span&gt;
</code> </pre>
  
Additional attributes allow fine modification of the default behavior of `aria-live`:

- **aria-atomic:** true or false (default), used to indicate whether the whole of the live zone must be read (true) or only the modified part (false).
- **aria-relevant:** indicates which type of change triggers a vocalization, possible values: additions (default), removals, all.

Finally, to be complete, know that the <abbr>ARIA</abbr> language also provides for some specific roles, **status** and **log** in particular which can be useful in certain cases (status bar, logging, chat...) and which, for the moment, must be used in addition to the `aria-live` attribute to maximize support by the different tools. You can find more info on these roles in the links below.


## References
- [Use of the alert role](https://developer.mozilla.org/fr/docs/Accessibilit%C3%A9/ARIA/Techniques_ARIA/Utiliser_le_role_alert)
- [ARIA live zones](https://developer.mozilla.org/fr/docs/Accessibilit%C3%A9/ARIA/Zones_live_ARIA)
- [Use the log role](https://developer.mozilla.org/fr/docs/Accessibilit%C3%A9/ARIA/Techniques_ARIA/Utiliser_le_role_log)
- [Use the status role](https://developer.mozilla.org/fr/docs/Accessibilit%C3%A9/ARIA/Techniques_ARIA/Utiliser_le_role_status)
