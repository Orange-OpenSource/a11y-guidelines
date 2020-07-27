# Keyboard navigation

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Test tools", "url": "./methodes-outils.html"},
        {"label":"Keyboard navigation"}]);
});</script>

<span data-menuitem="methodes-outils"></span>

Navigation in a web page should be possible using only the keyboard, particularly for people who cannot use a mouse. This feature is supported directly by the browser. It is important to verify it is operating correctly, as some developments can lead to difficulties to properly navigate the page.
  
To test if your service is accessible using the keyboard, you can try to navigate without your mouse. All available features must be accessible.  
** Reminder: **the focus must be visible enough on all focusable elements.

## List of keyboard shortcuts:
![keyboard shortcuts illustration](./images/keyboard.png)


<table class="table">
<caption class="sr-only">List of keyboard shortcuts</caption>
   <thead>
      <tr>
         <th>Interactions</th>
         <th>Shortcuts</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>To move the focus</td>
         <td>`Tab`</td>
      </tr>
      <tr>
         <td>To move backwards the focus</td>
         <td>`Shift + Tab`</td>
      </tr>
      <tr>
         <td>To activate the element that has the focus (link, button, menu…)</td>
         <td>`Return` key</td>
      </tr>
      <tr>
         <td>To check / uncheck a checkbox</td>
         <td>`Spacebar`</td>
      </tr>
      <tr>
         <td>To select of the radio buttons into a radio group</td>
         <td>arrow keys `Up`&nbsp;/&nbsp;`Down` ou `Left`&nbsp;/&nbsp;`Right`</td>
      </tr>
      <tr>
         <td>To move in a drop-down list</td>
         <td>arrow keys `Up`&nbsp;/&nbsp;`Down`, then `Spacebar`</td>
      </tr>
	  <tr>
         <td>To scroll(scrollbar)</td>
         <td>arrow keys `Up`&nbsp;/&nbsp;`Down` for a vertical scrollbar,<br> arrow keys `Left`&nbsp;/&nbsp;`Right` for a horizontal scrollbar</td>
      </tr>
   </tbody>
</table>

** Note: on Mac, keyboard navigation must be enabled first: **  
In Safari: Edit > Preferences… > Advanced  
Then check the box *“Press tab to highlight each item on a webpage”*.

&nbsp;
<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->