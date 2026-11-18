---
title: "The aria-live attribute and the role alert"
abstract: "When and how to use roles and attributes of live content type"
titleBeforeTag: true
date: "2020-01-08"
updateDate: "2026-11-19"
tags:
  - web
  - intermediate
---

Users who navigate using a screen reader are not always aware of changes made on the page. When information is updated or when a message appears, it is sometimes necessary to make the screen reader speak to inform the user. To do this, the <abbr>ARIA</abbr> standard has the role `alert` and the attribute `aria-live`.

## The `alert` role

Positioned on an HTML element, this allows you to tell the screen reader to vocalize the element automatically when it is created. However, be sure to use this role only in appropriate cases, as clearly stated in the [Mozilla MDN documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role). Due to its intrusive nature, role alert should be used sparingly and only in situations where the user's attention is immediately required. Less urgent dynamic changes should use a less aggressive method, such as `aria-live="polite"` or other live region roles.

Here are some examples of methods that are well supported.

### Create a new element in the DOM

You can trigger an alert by inserting a new element in the <abbr>DOM</abbr> via JavaScript.

```html
<p role="alert">This is an alert message.</p>
```

### Add a role alert on an existing element

The triggering of an alert can also be done by adding a `role="alert"` dynamically to an existing element via Javascript.

```javascript
document.getElementById('alert').setAttribute("role", "alert");
```

### Using `innerHTML`

Create an alert via the `innerHTML` property.

```javascript
element.innerHTML = '<p role="alert">This is an alert</p>';
```

## The `aria-live` attribute

Positioned on an HTML element, the `aria-live` attribute is used to indicate to the screen reader that any modification made to its content will result in vocalization by the screen reader.

Three values ​​are possible:
- `off`: no vocalization
- `polite`: the vocalization will take place when the screen reader has finished the current task
- `assertive`: the screen reader interrupts the current task to inform the user

It is strongly recommended that the `aria-live` attribute be set on the element as soon as the page is loaded to maximize compatibility with different browsers and screen readers.

```html
<p aria-live="polite">5 items selected</p>
```

Additional attributes allow fine modification of the default behavior of `aria-live`:

- `aria-atomic`: `true` or `false` (default value), used to indicate whether the whole live region must be read (`true`) or only the modified part (`false`).
- `aria-relevant`: indicates which type of change triggers a vocalization, possible values: `additions` (default value), `removals`, `all`.

Finally, to be complete, note that the <abbr>ARIA</abbr> standard also provides some specific roles, `status` and `log` in particular which can be useful in certain cases (status bar, logging, chat…) and which, for the moment, must be used in addition to the `aria-live` attribute to maximize support by the different tools. You can find more info on these roles in the links below.


## References

<ul>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role">MDN – ARIA: alert role</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live">MDN – ARIA: aria-live attribute</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/log_role">MDN – ARIA: log role</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/status_role">MDN – ARIA: status role</a></li>
  <li><a href="https://access42.net/live-regions-aria-live-analogues-alert-log-status/" lang="fr" hreflang="fr">Live regions ARIA : aria-live et ses analogues alert, log, status</a></li>
</ul>
