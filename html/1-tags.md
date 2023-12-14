In HTML, the most fundamental piece of <b>syntax</b> (syntax is the set of rules behind a human language or programming language) is the <b>tag</b>.

A **tag** consists of a pointy bracket, a word or set of letters (the tag name), and another pointy bracket.

```html
<tagname>
```

In use, tags typically look like this:

```html
<p>This is a paragraph</p>
```

Some HTML elements <i>contain</i> content that goes between a <b>start tag</b> and an <b>end tag</b>. <b>End tags</b> consist of a pointy bracket, a SLASH, and a word.

Other tags are "self-closing" and don't need an end tag. These tags create content that does not have text, such as an image (&lt;img&gt;) or line break (&lt;br&gt;).

When tags contain only a little content, the whole
element (start tag, content and end tag) will usually 
be written on one line:
```html
<tagname>content</tagname>
```
When tags contain lots of content, it's normal to put
the start and end tags on their own line and to indent
the content in the middle to make it easier to read.
```html
<tagname>
   Lots
   of
   content
</tagname>
```

Go ahead and try editing the code below to try out some different tags:
{%capture code %}
<p>
  This content is inside of a tag 
</p>
<p>
  Notice that
  it doesn't matter how
  
  much
  
  
  
  space
 
  you leave between text content.
  One space is the same as               many spaces
  within your HTML. This allows you to use spacing
  to make your code easier to read.
</p>
<p>
  This is inside another tag. 
  Try changing the tag to something 
  different, such as: 
  i, b, blockquote, or li
</p>
{% endcapture %}
{% include codeeditor.html content=code %}

[Next up: structure](./2-structure.md)