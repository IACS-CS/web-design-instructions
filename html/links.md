--- 
order : 6
---

# Links

Confusingly, the tag we use for links is called the *anchor* tag and is **a** (I'm sorry: I wish they called it "link", but that's actually a *different* tag we'll learn about later).

```html
<a href="https://www.google.com">Go to google</a>
```

To make a link that is underlined, you need to include an **href** attribute. **href** stands for "hypertext reference" and contains the
**URL** of the page you want to link to.

**Opening Links in New Tabs**

If you link to an *external* website, it's usually good practice to make the link open in a new page. You can do that by including a "target" attribute which will tell the browser to open the link in a different window or tab. By convention, the value you use for target is "_BLANK" which will always open a new window or tab.

```html
<a 
  href="https://www.google.com"
  target="_BLANK"
>
  Open google in a new tab
</a>
```

**Example Links**

Here are some example links

{%capture code %}
<p>
  This paragraph has some links.
  <a 
    href="https://www.iacs.mobi"
    target="_BLANK"
   >
    Here is our school webpage
  </a>
  and 
  <a 
    href="https://www.google.com"
    target="_BLANK"
   >
    here is the world's most popular search engine 
  </a>,
  and
  <a 
    href="https://www.w3schools.com/html/img_girl.jpg"
    target="_BLANK"
  >
    here is that image of the girl in the jacket from 
    w3schools that I keep using
  </a>.
{%endcapture %}
{%include codeeditor.html capture=code %}
