# Multiple Objects and Classes

For something like a player, where we only expect a single instance of an object, using object literals works pretty well. Once we get to something more complicated, however, it can be worthwhile to use the `class` syntax which is favored by TypeScript, which allows us to describe a *class* of object and then make as many of those objects as we like.

I'll start with a very simple object: the rain drop:

```