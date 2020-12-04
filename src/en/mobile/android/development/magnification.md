---
title: "Element Magnification"
---

# Element magnification

## Enlarge texts without loss of information

**Target:** everyone and in particular the visually impaired.  
**When:** during design and development.

**Description:** 

The text size must be able to be multiplied by 2 (zoom the text to 200% from the phone's accessibility settings). At this zoom level, the presentation can be altered, but the information must remain legible (no truncated or overlapped text).

The application must implement dynamic text sizes, ensure that display areas react properly to text magnification (containers that adapt to the size of their content).
  
To allow the "large character" option, several points must be respected during development:
- Use a dynamic font size: the "sp". This unit, specific to Android, allows to obtain a font size according to the pixel density of the screen.  
- Manage content overflows: a common mistake is to use a dynamic text size ("sp" therefore) without adapting the container. If the text gets bigger, the container must do the same so that there is no overflow. You can use the `min-height` and `height` of the containers to get a correct result (the `height` at `wrap_content` and the `min-height` at the default height).


**To be verified:**

- The application reacts correctly to the text magnification option

**Tool:**
The text size magnification accessibility option, in the phone settings.

**Valid example:** 

<pre><code class="xml">&lt;TextView
    android:layout_width="200dp"
    android:layout_height="wrap_content"
    android:minHeight="100dp"
    android:textSize="14sp"
    android:text="Exemple"
&#47;&gt;</code></pre>

**Reference <abbr>WCAG</abbr>:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#resize-text">1.4.4 Resize text</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#reflow">1.4.10 Reflow</a>
