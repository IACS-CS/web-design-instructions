---
order: 7
---

# Common Tags

There are *many* tags in HTML that have different purposes. I'll go over some of the most common ones here.


## Block Elements

Block elements start on their own line. Block elements
include all of the items you might expect to find in a typical
academic paper or document.

{%capture code %}
<h1>Heading 1</h1>
<p>There are 6 different levels of headings in HTML</p>
<h2>Heading 2</h2>
<p>By default each one is a little smaller than the prior</p>
<h3>Heading 3</h3>
<p>Most webpages just use one or two of these and don't
bother with all 6 levels deep of headers.</p>
<h4>Heading 4</h4>
<p>I'm running out of things to say about headings.</p>
<h5>Heading 5</h5>
<p>h5 and h6 also don't show up too often in the wild.</p>
<h6>Heading 6</h6>
<p>I like to spend time imagining the kind of complicated
documents that would require 6 different levels of headings.
Think of a really complicated technical manual and you
get the idea.</p>
{%endcapture %}
{%include codeeditor.html content=code %}

## Paragraphs
{%capture code %}
<p>
  Paragraphs just look like a p. You can't put a paragraph inside
  of a paragraph, so if you forget the end tag and start a new
  paragraph, the browser will assume you meant to make two paragraphs.
</p>
<p>For example I'm going to leave out an end tag in a second
<p>And this just makes a new paragraph anyway.</p>
<p>Still, it's better to put the end tags in for completeness
and clarity.</p>
{%endcapture %}
{%include codeeditor.html content=code %}

**Lists**
{%capture code %}
<ul>
  <li>Bulleted</li>
  <li>Lists</li>
</ul>
And also...
<ol>
  <li>Numbered</li>
  <li>Lists</li>
</ol>
And you can put lists inside of lists if you want to go crazy...
<ul>
  <li>
    Also I should note
  </li>
  <li>That if you wanted to
    <ol>
      <li>You could make</li>
      <li>Really complicated</li>
      <li>Hard-to-keep-track of
        <ul>
          <li>Deeply nested lists</li>
          <li>If you feel like it.</li>
        </ul>
      </li>
    </ol>
  </li>
  <li>One more item for kicks</li>
</ul>
 
 
    
        
{%endcapture %}
{%include codeeditor.html content=code %}

**Block Quotes**
{%capture code %}
<p>Here is a normal paragraph and then...</p>
<blockquote>
    Here is a blockquote! In traditional papers
    these were used for multi-line quotations.
    You can see in these elements that HTML began as
    a language for exchanging academic sorts of
    documents, before it evolved into a system for
    shopping, web applications, and more!
</blockquote>
{%endcapture %}
{%include codeeditor.html content=code %}

**High Level Structural Elements:**

There are number of high-level elements that usually would contain other block elements and are designed to designate the major sections a webpage would be broken into.

There are elements for menus (&lt;nav&gt;) and elements for organizing documents into sectons (&lt;header&gt;, &lt;footer&gt;, &lt;main&gt;, &lt;article&gt;). There's also the multipurpose tag &lt;div&gt; which is used for any kind of arbitrary division you want to make in a document.

{%capture code %}
<header>
    <nav>
      <a href="/page1.html">Page 1</a>
      <a href="/page1.html">Page 2</a>
      <a href="/page1.html">Page 3</a>
    </nav>
</header>
<main>
    <div>Div is used for generic sections / divisions of any type</div>
    <article>
      <h2>The article tag</h2>
      <p>The article tag is meant to contain a big section
      of text content, such as an article.</p>
    </article>
</main>
<footer>
   This is a footer. You'll notice these tags don't cause
   any special formatting to happen automatically.
</footer>
{%endcapture %}
{%include codeeditor.html content=code %}

**Inline Tags**

Inline tags are typically used to style text.

{%capture code %}
<p>
  This paragraph contains
  <b>bold text</b>
  which can also be written as
  <strong>strong text</strong>
  as well as text which is
  <i>italic</i>
  or
  <em>emphasized</em>
  and text that is
  <u>underlined.</u>.
  Also, it is worth noting that
  <a href="#">links</a> are inline
  items
  as are 
  <img 
    src="https://www.w3schools.com/html/img_girl.jpg" 
    width="18"
  >
  images which can look kind of
  funny when they are in the middle of
  a paragarph.
</p>
{%endcapture %}
{%include codeeditor.html content=code %}