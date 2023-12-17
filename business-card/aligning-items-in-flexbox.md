In my examples so far, I've only been moving items in a single dimension: left-to-right in a row layout or top-to-bottom in a column layout.

To move items in the *second* dimension (i.e. up and down in a row), you use **alignment**. The *container* can align its items using the **align-items** property, or any given item can align itself using the **align-self** property.

To see alignment in action, it helps to have items of different sizes. Let's imagine a menu.

```html.run
<style>
  nav {
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    margin-bottom: 5px;
  }
  nav * {
      margin: 3px;
      padding: 3px;
      border: 1px solid grey;
      display: block;
  }
 </style>
 <nav style="align-items:start">
    <a href="#">Home</a>
    <a href="#eat">Order<br>Food!</a>
    <button>Log Out</button>
    <div>align-items: start</div>
 </nav>
 <nav style="align-items:center">
    <a href="#">Home</a>
    <a href="#eat">Order<br>Food!</a>
    <button>Log Out</button>
    <div>align-items: center</div>
 </nav>
 <nav style="align-items:end">
    <a href="#">Home</a>
    <a href="#eat">Order<br>Food!</a>
    <button>Log Out</button>
    <div>align-items: end</div>
 </nav>
 <nav style="align-items:stretch">
    <a href="#">Home</a>
    <a href="#eat">Order<br>Food!</a>
    <button>Log Out</button>
    <div>align-items: stretch</div>
 </nav>
```

Now with your justify and align properties, you can move items on either a left-right or top-bottom axis.

```html.run
<style>
    section {
        display: flex;
        height: 70px;
        border: 1px solid grey;
        margin-bottom: 10px;
    }
    div {
        width: 30px;
        height: 30px;
        background-color: black;
        color: white;
        margin: 5px;
    }
    p {
        margin: 5px;
    }
</style>

<section style="
    justify-content: center; 
    align-items: center
    ">
    <p>justify-content: center; <br>align-items: center</p>
   <div></div>
   <div></div>
   <div></div>
</section>
<section style="
    justify-content: end; 
    align-items: center
    ">
   <p>justify-content: end; <br>align-items: center</p>
   <div></div>
   <div></div>
   <div></div>
</section>
<section style="
    justify-content: flex-start; 
    align-items: end">
   <p>justify-content: flex-start; <br>align-items: end</p>
   <div></div>
   <div></div>
   <div></div>
</section>
<section style="
    justify-content: space-between; 
    align-items: start
    ">
   <p>justify-content: space-between; <br>align-items: start</p>
   <div></div>
   <div></div>
   <div></div>
</section>
```
