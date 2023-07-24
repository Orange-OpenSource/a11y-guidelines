---
title: "How to test the accessibility of your Excel document"
abstract: "What should you check about the accessibility of your Excel documents?"
date: "2023-07-20"
---

# Accessibility checking

2 Actions :

<ul>
    <li>
        Check spelling :
        Review menu > Spellings
        <img src="/en/content-and-communication/images/excel_test.png" alt="" class="img-fluid my-2" />
    </li>
    <li>
    Use the integrated accessibility checker :
    Menu "Review" > "Check accessibility" 
    </li>
</ul>
Fix detected issues using proposed solutions.

<img src="/en/content-and-communication/images/excel_test2.png" alt="" class="img-fluid my-2" />



## Accessibility issue detection

Errors automatocally detected by the spelling and grammar option (File > Options > Profing) or accessibility checker

<table class="table">
 <caption class="h3">Are errors detected by Excel?</caption>
  <tr>
    <th scope="col">Issue</th>
    <th scope="col">Detected</th>
  </tr>
  <tr>
    <td>Sheet with default name (Sheet2)</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Data range not defined as table</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Font without serif</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Accent</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Text formatting</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Color contrasts</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Information given exclusively by color</td>
    <td>Only for negative numbers</td>
  </tr>
  <tr>
    <td>Hypertext link names</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Image without alternative text</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Image with irrelevant alternative text</td>
    <td>No</td>
  </tr>
</table>