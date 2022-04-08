---
title: "Input screen"
abstract: "Input fields, accessibility dev recommandations with Android"
---

# Input screen

## Explicitly label input fields

**Target:** everyone and in particular the visually impaired.  
**When:** during design and development.

**Description:**

Linking input fields with their labels provides additional vocalisation that makes the field easier for the user to understand.
  
There are 2 techniques to achieve this:
 - `labelFor` &nbsp;: indicate that a label is linked to another view.  This method takes as parameter the id of the view that we label. You can use this method with almost any type of input field. It can be used from the <abbr>XML</abbr> `android:labelFor` or the `setLabelFor` method.
 - `TextInputLayout`: allows to link directly the text field with its label within the same layout, which will have the effect to vocalize correctly the field while making it prettier.

It is essential to indicate to the user, for a good understanding of the input screen, the required fields, the expected format, or errors made on fields.

**To be verified:**

- Input fields must be linked to a label if it is visible, otherwise a `hint` is present.
- Required fields are identifiable
- The format expected for "complex" fields is indicated to the user

**Example** 

<pre><code class="xml">

&lt;TextView
   android:id="@+id/usernameLabel" ...
   android:text="@string/username"
   android:labelFor="@+id/usernameEntry" /&gt;

&lt;EditText
   android:id="@+id/usernameEntry" ... /&gt;
</code></pre>

<pre><code class="xml">&lt;com.google.android.material.textfield.TextInputLayout
   android:id="@+id/addressLine"
   android:hint="@string/adress" ... &gt;

&lt;com.google.android.material.textfield.TextInputEditText
   ... /&gt;

&lt;/com.google.android.material.textfield.TextInputLayout&gt;
</code></pre>

<pre>
<code class="kotlin">
// With Jetpack Compose
var username by remember { mutableStateOf("") }
TextField(
        value = username,
        onValueChange = { username = it },
	label = { Text("Field") }
    )

</code>
</pre>

**Reference <abbr>WCAG</abbr>:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#headings-and-labels">2.4.6 Headings and labels</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#labels-or-instructions">3.3.2 Labels or instructions</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#identify-input-purpose">1.3.5 Identify input purpose</a>