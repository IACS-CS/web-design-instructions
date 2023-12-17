---
order: 11
---
# Validation

**About Errors**

In most programming languages, any **error** in syntax (the rules of the language, usually involving picky bits of punctuation) will result in your code not working at all. In HTML, the browser will always display something, so it's not obvious when you have mistakes in your code.

The result is that errors you make in HTML will not be as obvious. Rather than the browser spitting out a big "error" message, you will just have something you didn't expect happen, like half your page disappear because you forgot a quotation mark or a slash.

**Validation Tools**

You can use a tool from w3.org to validate your code and tell you about errors. You can copy and paste code into the textbox [here](https://validator.w3.org/#validate_by_input).

I recommend using the validator in two instances: (1) if something unexpected is happening on your page that you don't understand (for example, if all of the text disappears after you add a style rule, the validator might point out that you forgot to close your style tag). (2) when you are finishing up a project and want to *perfect* your code.

**About HTML Errors**
You can make a lot of errors in HTML without the browser caring. Your content should be in the body, for example, but if you type content in the head, it will display anyway.

If you forget a &gt; or a quotation mark in an attribute, it can result it content disappearing in a way that can be confusing. Take a look at the following error-ridden HTML and notice which errors result in an obvious problem and which don't.

{%capture code %}
<html>
  <head>
    <h1>This heading should be inside of Body</h1>
    <p>This paragraph should too, but it will display just fine.</p>
  </head>
  <body>
    <p>This paragraph should have an end tag.
    <p>This paragraph does have an end tag.</p>
    <p>The next errors will create bigger problems!
    <h1 I forgot to type the pointy bracket on h1</h1>
    <a href="www.google.com>and I forgot the end quotation mark on my link.</a>
    <p>Sometimes errors show up in unexpected ways.</p>
  </body>
</html>
{%endcapture %}
{%include codeeditor.html content=code %}

**About CSS Errors**

CSS, the language used for **style** information, is much fussier than HTML. Generally, the computer reads style rules from start to finish. If you make an error in CSS syntax, everything from the error down will stop working.

**hint**: if you can't figure out why something is failing in CSS, try looking at the lines *before* the error

{%capture code %}
<html>
<head>
<style>
  h1 { 
      color : green;  
  body {
      color: purple;
  }
  p {
      color : red;
  }
  a {
      color : orange
      }
</style>
</head>
<body>
  <h1>The heading works</h1>
  <div>Some other text that should be purple.</div>
  <p>Text that should be red.</p>
  <p>The rules below <b>h1</b> will fail
   because I forgot
  to type the } after the rules for h1 on line 9.
  
  <a href="#">(this should be orange, by the way!)</a>
  </p>
</body>
</html>
{%endcapture %}
{%include codeeditor.html content=code %}