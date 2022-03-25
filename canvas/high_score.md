# Adding a score to your canvas

Adding a score to your game involves three simple steps:

1. Create a variable to hold the score.
2. Update that variable when the player scores.
3. Show the score to the user.

## Creating a Variable

Creating a variable is as simple as using the word `let`. You probably want your variable at the *top level* of your game module, so you can access it anywhere in your code.

```javascript
let score = 0;
```

## Updating the variable

To add to the score, simply add one to your variable with a line like:

```javascript
score += 1;
```

## Displaying the score

You can display a score or other debug information very easily by using `ctx.fillText` somewhere in the drawing step of your animation code. If you use JavaScript template strings, with backticks (`) instead of quotes, you can insert any variable directly
into your string with the special $ + bracket syntax: `text with ${javascript}"`

```javascript
ctx.fillText(`Score: ${score}`, 50, 50);
```

## Putting it all together:

Here's an extremely simple codepen that gives you "points" for clicking:

{% codepen.html id="zYpZrNq" %}

