---
order: 9
---
# Style and Content 

When you're just starting out, you'll often want to find a tag to make an item look right. For example, you use &lt;i&gt; for italics and &lt;b&gt; for bold.

However, an important principle of modern web development is that tags should describe what things **are** and not how they **look**. For example, think about a typical menu on a webpage. 

The purpose of the menu doesn't change whether the menu is a dropdown menu, a sidebar, or a list of links across the top. If a screen reader were trying to help a blind user navigate the page, the important point would be that a menu is a list of links that helps the user navigate the site. For this reason, a menu will typically be coded as a **list** of **links** inside a **nav** *regardless* of how the designer wants the menu to appear.

If you don't add any style rules, the menu will at least be usable (this is what happens for users on a screen reader, with a very old browser, or who have a slow internet connection that fails to load all the style rules a design team has created &mdash; you may have seen websites look like this temporarily when your internet was bad before the styles loaded and everything popped into place as designed)

{%capture code %}
<nav>
  Menu
  <ul>
    <li>
      <a href="page1.html">Page 1</a>
    </li>
    <li>
      <a href="page1.html">Page 2</a>
    </li>
    <li>
      <a href="page1.html">Page 3</a>
    </li>
  </ul>
</nav>
<main>
    The rest of the page would go here blah blah blah...
    The rest of the page would go here blah blah blah...
    The rest of the page would go here blah blah blah...
    The rest of the page would go here blah blah blah...
    The rest of the page would go here blah blah blah...
</main>
{%endcapture %}
{%include codeeditor.html content=code %}

The "style" information about a webpage is contained in its own language we will learn about separately called **css**.

That information can go in a **style** tag in the **head** or it can be in a separate file that is loaded independently.

The style rules can let designers make items look any way they like.

Here are a few different examples of menus to give you an idea of how styling can work &mdash; the key thing to understand is that the tags are the same for all three examples with only the style code changing:


{%capture html %}  
  <body>
    <nav>
      Menu
      <ul>
        <li>
          <a href="#">Page 1</a>
        </li>
        <li>
          <a href="#">Page 2</a>
        </li>
        <li>
          <a href="#">Page 3</a>
        </li>
      </ul>
    </nav>
    <main>
        The rest of the page would go here blah blah blah...
        The rest of the page would go here blah blah blah...
        The rest of the page would go here blah blah blah...
        The rest of the page would go here blah blah blah...
        The rest of the page would go here blah blah blah...
    </main>

{%endcapture %}
{%capture css %}

       nav ul {
           padding-left: 0; /* remove indent on list */
           display: flex;
           flex-direction: row; /* left to right */
           font-family: cursive;
       }
       
       li {
           list-style: none; /* remove bullets from list */
           border-left: 1px solid grey; /* lines between items */
           padding: 5px;
       }
       li:first-child {
           border-left: none; /* no line on last item */
       }
       a {
           color : #555;
           text-decoration: none; /* remove underlining from links */
       }
       li:hover {
           text-decoration: underline;
       }
       li:hover a {
          color: #1212d2;
          transition: 300ms;
       }
{%endcapture %}
{%include editor3.html html=html css=css startTab="css" disableTabs="js" %}


{%capture html %}
<html>    
  <head>
  <body>
    <nav>
      Menu
      <ul>
        <li>
          <a href="#">Page 1</a>
        </li>
        <li>
          <a href="#">Page 2</a>
        </li>
        <li>
          <a href="#">Page 3</a>
        </li>
      </ul>
    </nav>
    <main>
        The rest of the page would go here blah blah blah...
        The rest of the page would go here blah blah blah...
        The rest of the page would go here blah blah blah...
        The rest of the page would go here blah blah blah...
        The rest of the page would go here blah blah blah...
    </main>
  </body>
</html>
{%endcapture %}
{%capture css %}
 nav ul {
      display:none
  }
  nav:hover ul {
      display: block;
      position: absolute;
      top: 0px;
      padding-top: 16px;

  }
  nav {
      font-family : Futura;
      font-size: 14px;
      width: 300px;
      border: 1px solid #444;
      min-height: 18px;
      
  }
  nav ul {
      padding-left: 0; /* remove indent on list */
  }
  
  nav li {
      list-style: none; /* remove bullets from list */
      padding: 5px;
      border-bottom: 1px solid #efefef;
      width: 300px;
  }
  a {
      color : #ccc;
      text-decoration: none; /* remove underlining from links */
  }
  li {
      background-color: #444;
  }
  li:hover {
      background-color: #333;
      transition: 500ms; /* animate color change on hover */
  }
  li:hover a {
    color: white;
  }
{%endcapture %}
{%include editor3.html html=html css=css  startTab="css" disableTabs="js" %}


{%capture css %}

       nav {
           width: 150px;
           float: left;
           margin-right: 18px;
           font-family: Verdana;
       }
       nav ul {
           padding-left: 0; /* remove indent on list */
           width: 150px;
       }
       
       li {
           list-style: none; /* remove bullets from list */
           border: 1px solid #822;
           border-radius: 20px;
           margin-bottom: 10px;
           padding: 5px;
           text-align: center;
           
       }
       a {
           color : #822;
           text-decoration: none; /* remove underlining from links */
       }
       li:hover {
           background-color: #822;
           transition: 500ms; /* animate color change on hover */
       }
       li:hover a {
          color: white;
       }
       
{%endcapture}
{%capture html}
  
    <nav>
      Menu
      <ul>
        <li>
          <a href="#">Page 1</a>
        </li>
        <li>
          <a href="#">Page 2</a>
        </li>
        <li>
          <a href="#">Page 3</a>
        </li>
      </ul>
    </nav>
    <main>
        The rest of the page would go here blah blah blah...
        The rest of the page would go here blah blah blah...
        The rest of the page would go here blah blah blah...
        The rest of the page would go here blah blah blah...
        The rest of the page would go here blah blah blah...
    </main>
  

{%endcapture %}
{%include editor3.html html=html css=css startTab="css" disableTabs="js" %}


