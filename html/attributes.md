--- 
order : 4
---

# Attributes

Start tags can have extra information added to them in the form of attributes. Some tags, such as images and links, require attributes to be useful (attributes show what image to display and what to link to).

You can have many attributes on a given tag, with each attribute having a unique name and then a value assigned to it with an equal sign. The value
should always go in quotes (it doesn't *have* to, but it's best practice to put quotation marks there)

For example:

{%capture code %}
<img 
   src="https://www.w3schools.com/html/img_girl.jpg"
   alt="Image of a girl in a jacket"
   width="80"
>
{%endcapture %}
{%include codeeditor.html content=code %}
The **&lt;img&gt;** tag above has *three* attributes.
* **src** gives the location of the image.
* **alt** gives text to display if the image fails to load or if the user is using a screen reader.
* **width** gives the number of pixels wide the image should be.

All attributes are written in the form:
```html
<tagname attributename="value">
```

If a tag has many attributes, you can write the tag
itself on multiple lines. Usually coders use indentation
to help keep their tags easy to read
```html
<tagname
   attribute1="value"
   attribute2="value"
   attribute3="value"
   attribute4="some really long value that looks like   
      this and goes on and on and on and on"
   attribute5="another value"
>
   tag content
</tagname>
```

Attribute *values* can be text, as in the case of the **alt** attribute on an **img** tag, they can be numbers, as in the **width** attribute, or they can be URLs, as in the **src** attribute. They should always
be put inside quotation marks.

