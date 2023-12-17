---
order : 11
---

# Building Transitions

When you create an interactive page, it can be very helpful to add animations and transitions to show the user what is happening, rather than just suddenly having the page change.

Here's a quick example of what I mean:

{%capture html %}

<div class="">
Click to Change: <button onclick="event.target.parentElement.classList.toggle('animate')">
  Turn Transitions <span class="placeholder">off<span class="on">on</span><span class="off">off</span></span> 
</button> and be impressed.
</div>
{%endcapture %}


{%capture css %}
  .animate {
      background-color: #efefef;
  }
  .placeholder {
     color: transparent;
     position: relative;
  }
  .placeholder span {
      transition: opacity 300ms;
  }
  .placeholder span {
      position: absolute;
      top: 0;
      left: 0;
      color: black;
  }
  .placeholder .off {
    opacity: 0;
  }
  .placeholder .on {
      opacity: 1;
  }
  .animate .placeholder .on {
    opacity: 0;
  }
  .animate .placeholder .off {
      opacity: 1;
  }
{%endcapture %}
{%include editor3.html css=css html=html disableTabs="js" startTab="html" %}

## Tricky Transitions

Getting transitions to look smooth is deceptively hard. The little example above for example required more than just adding an "off" and an "on" button.

Let's break it down:

