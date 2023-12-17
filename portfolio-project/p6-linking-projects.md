# Linking Projects in a Portfolio

To link your project in a portfolio, you first of course have to make sure the project is already published
and live at a URL you can visit. For this example we will work with our Zen Garden project which is live
at

<code>https://iacs-zen-garden.netlify.app/</code>

Note that if you have a specific design on that project, you can link to it directly by first going to it and then copying
the URL with the correct hashtag on the end, like this:

<code>https://iacs-zen-garden.netlify.app/#block-party</code>

## Option One: Add a Link

To show the project itself, we can simply include a link. We'll want to make sure it opens in a new page by including
a URL, like this:

```html
<a href="https://iacs-zen-garden.netlify.app/#block-party" target="_blank">See my Zen Garden Page</a>
```

## Option Two: Embed in an IFrame

To include the project in an iFrame, you can use the `<iframe>` element like this:

```html
<iframe id="zen-iframe" src="https://iacs-zen-garden.netlify.app/#block-party">
</iframe>
```

You can then include some CSS to customize the iFrame, like so:

```css
#zen-iframe {
    width: 880px;
    height: 600px;
    border: 2px solid #eee;
}

```

{%include local.html page="iframe-example.html" width=1080 height=650 %}
