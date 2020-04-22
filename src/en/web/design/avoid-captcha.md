---
title: "Avoid captcha"
---

# Avoid captcha

**Target: ** everyone in particular, visually impaired people.  
**When: ** during design and development.

**Description **  
Captchas are often the source of difficulties for all users. If the implementation of an anti-spam system can not be avoided, it is advisable to move towards a more flexible solution for the user:
- Double authentication;
- Hidden form field left blank (honeypot technique), not visible to the user;
- Providing phone support to make sure the customer is a real person;
- A check to ensure that the same <abbr> IP </abbr> / User agent combination does not attempt to submit the form more than N times per second.

If no other alternative is possible, it is essential to provide an alternative for captcha only visual or sound by proposing a combination of captcha:
- an audio captcha + visual,
- logical tests (question whose answer is obvious, simple mathematical test ...) + classic visual captcha
- …
