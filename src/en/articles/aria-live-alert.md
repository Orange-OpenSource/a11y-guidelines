---
title: "The aria-live attribute and the alert role"
abstract: "When and how to use live region roles and attributes"
titleBeforeTag: true
date: "2020-01-08"
updateDate: "2026-11-24"
tags:
  - web
  - intermediate
---

Users navigating with a screen reader are not always aware of dynamic changes on a page. When content updates or a new message appears, triggering a spoken announcement may be necessary to alert the user. To address this need, the <abbr>ARIA</abbr> standard provides the `alert` role and the `aria-live` attribute.

## The `alert` role

When applied to an HTML element, the `alert` role instructs the screen reader to automatically announce its content as soon as it is inserted into the page. Designed to capture immediate attention, this behavior makes it a powerful but potentially disruptive feature.

### Best practices

The `alert` role should be reserved for situations requiring immediate user intervention, such as:

- A critical form submission error.
- A security or system alert.
- An urgent notification requiring prompt action.

### Precautions

- **Documentation**: Refer to the official [MDN – ARIA: alert role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) documentation for detailed guidelines.
- **Moderate use**: Avoid using the `alert` role for frequent or non-critical messages to prevent disrupting the user experience.

### Compatibility and triggering

Support for <abbr>ARIA</abbr> attributes and roles, including `alert`, varies across browser and screen reader combinations. To ensure consistent behavior:

- Test across several browser and assistive technology combinations.
- Choose triggering mechanisms best suited to your target environments.

### Inserting a new element into the DOM

An alert can be triggered by inserting a new element into the <abbr>DOM</abbr> via JavaScript:

```html
<p role="alert">This is an alert message.</p>
```

### Adding the `alert` role to an existing element

An alert can also be triggered by dynamically adding `role="alert"` to an existing element:

```javascript
document.getElementById('alert').setAttribute("role", "alert");
```

### Using `innerHTML`

Create an alert via the `innerHTML` property.

```javascript
element.innerHTML = '<p role="alert">This is an alert</p>';
```

## The `aria-live` attribute

When added to an HTML element, the `aria-live` attribute informs the screen reader that updates within its content must be announced. This attribute is essential for managing dynamic updates on a page, ensuring that screen reader users are kept informed of important changes.

### Possible values

The `aria-live` attribute accepts three primary values, each having a distinct impact on the screen reader's behavior:

- `off`:
Content updates will not be announced by default.
Use this when updates are not relevant to the user or do not require an immediate announcement.

- `polite`:
The updated content will be announced only after the screen reader has finished its current task (such as reading a paragraph or another notification).
Ideal for non-urgent information, such as confirmations or minor notifications.

- `assertive`:
The screen reader interrupts its current task immediately to announce the updated content.
Use with caution, and only for critical or time-sensitive messages requiring prompt attention, such as errors or security alerts.

### Best practices for use

- Initial declaration: It is strongly recommended to define the `aria-live` attribute on the element when the page first loads. This ensures optimal compatibility across various browsers and screen readers.
- Simple updates: Ensure that any content changes inside live regions remain clear, concise, and easy to understand.
- Appropriate prioritization: Select the right value (`polite` or `assertive`) according to the urgency and importance of the message to avoid needlessly disrupting the user.

```html
<p aria-live="polite">5 items selected</p>
```

Additional attributes allow fine-tuning the default behavior of `aria-live`:

- `aria-atomic`: `true` or `false` (default value). Indicates whether the screen reader must read the entire live region (`true`) or only the modified nodes (`false`).
- `aria-relevant`: Defines which types of changes trigger an announcement. Possible values: `additions` (default value), `removals`, `all`.

Finally, the <abbr>ARIA</abbr> standard also defines specialized roles—notably `status` and `log`—which are useful in specific contexts (such as status bars, logging, or chat feeds). For optimal support across assistive technologies, they should currently be paired with the `aria-live` attribute. Additional details can be found in the references below.


## References

<ul>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role">MDN – ARIA: alert role</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live">MDN – ARIA: aria-live attribute</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/log_role">MDN – ARIA: log role</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/status_role">MDN – ARIA: status role</a></li>
  <li><a href="https://access42.net/live-regions-aria-live-analogues-alert-log-status/" lang="fr" hreflang="fr">Live regions ARIA : aria-live et ses analogues alert, log, status</a></li>
</ul>
