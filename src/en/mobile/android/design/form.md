---
title: "Input screen"
---

# Input screen

## Have explicit input fields

**Target&nbsp;:** everyone and in particular the visually impaired.  
**When&nbsp;:** during design and development.

**Description&nbsp;:**

Linking input fields with their labels provides additional vocalisation that makes the field easier for the user to understand.
  
There are 2 techniques to do this linkage:
 - `labelFor` &nbsp;: indicate that a label is linked to another view.  
 - `hint`&nbsp;: add an example text when the text field is empty. This method only works for `EditText`.

It is essential to indicate to the user, for a good understanding of the input screen, the required fields, the expected format, or errors made on fields.

**To be verified&nbsp;:**

- Input fields must be linked to a label if it is visible, otherwise a `hint` is present.
- Required fields are identifiable
- The data format of the "complex" fields is indicated to the user


**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#headings-and-labels">2.4.6 Headings and labels</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#labels-or-instructions">3.3.2 Labels or instructions</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#identify-input-purpose">1.3.5 Identify input purpose</a>


## Identify input errors in the form

**Target&nbsp;:** everyone and in particular the visually impaired.  
**When&nbsp;:** during design and development.

**Description&nbsp;:**

If an error is made when entering input screen, it is important to clearly indicate to the user what the errors are, so that the user can correct the fields.

It is also recommended to provide the user with a correction suggestion.

**To be verified&nbsp;:**

- Error fields are clearly identifiable
- Error messages are self-explanatory
- A suggestion of correction is proposed to the user


**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#error-identification">3.3.1 Error identification</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#error-suggestion">3.3.3 Error suggestion</a>
