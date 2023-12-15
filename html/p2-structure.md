# Structure 

In HTML, tags can be <b>nested</b> like nesting dolls, creating a complex structure. This will often mirror the structure of a document: for example, a menu contains menu items, a table contains cells, and a paragraph might contain words in <i>italics</i> or <a href="#">links</a>.

{% capture code %}
<p>
  This is a
  <i>paragraph</i>
  containing some
  <b>different</b>
  tags within it.
</p>
{% endcapture %}
{% include codeeditor.html content=code %}

****Page Structure****

At the highest level, HTML pages contain elements that lay out the basic structure of a document. 
```html
<html>
   <head>
     <!-- Information ABOUT the page -->
   </head>
   <body>
     <!-- The content of the page itself -->
   </body>
</html>
```
The first element is **html** which contains the whole document.
**html** contains a **head** and a **body**. The **head** contains information *about* the page, such as the title that is shown in the tab on the browser and styling information. The **body** contains the actual content of the page (text, images, etc) that will be displayed.

{% capture code %}
<html>
   <head>
      <title>My Page</title>
      <style>
        body {
            width : 100px;
            background-color: black;
            color: white;
        }
      </style>
    </head>
    <body>
      <h1>This is a heading</h1>    
      <p>This is a paragraph</p>
    </body>
</html>
{% endcapture %}
{% include codeeditor.html content=code %}

Every page you create should contain at the very least **html**, **head**, **title** and **body**. 
