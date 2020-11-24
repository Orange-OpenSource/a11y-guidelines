---
title: "Element Magnification"
---

# Element magnification

## Enlarge texts without loss of information

**Target&nbsp;:** everyone and in particular the visually impaired.  
**When&nbsp;:** during design and development.

**Description&nbsp;:** 

The text size must be able to be multiplied by 2 (zoom the text to 200% from the phone's accessibility settings). At this zoom level, the presentation can be altered, but the information must remain legible (no truncated or overlapped text).

The application must implement dynamic text sizes, ensure the good reactivity of the display areas to text magnification (containers that adapt to the size of their content).
  
To allow the "large character" option, several points must be respected during development:
- Use a dynamic font size: the "&nbsp;sp&nbsp;". This unit, specific to Android, allows to obtain a font size according to the pixel density of the screen.  
- Manage content overflows: a common mistake is to use a dynamic text size ("sp&nbsp;sp&nbsp;" therefore) without adapting the container. If the text gets bigger, the container must do the same so that there is no overflow. You can use the `min-height' and `height' of the containers to get a correct result (the `height' at `wrap_content' and the `min-height' at the default height).


**To be verified&nbsp;:**

- The application reacts correctly to the text magnification option

**Tool&nbsp;:**
The text size magnification accessibility option, in the phone settings.

**Valid example&nbsp;:** 

<pre><code class="xml">&lt;TextView
    android:layout_width="200dp"
    android:layout_height="wrap_content"
    android:minHeight="100dp"
    android:textSize="14sp"
    android:text="Exemple"
&#47;&gt;</code></pre>

**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#resize-text">1.4.4 Resize text</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#reflow">1.4.10 Reflow</a>
