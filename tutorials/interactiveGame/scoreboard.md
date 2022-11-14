# Scoring

Adding text to a canvas is as simple as calling `ctx.fillText` like this:

```typescript
ctx.fillText(
  "Hello World", // text to write
  20,  // x coordinate
  50, // y coordinate
)
```

Using `ctx.fillText` along with *template strings* in JavaScript makes creating scoreboards and showing debug information about your game on screen easy tasks.

[Here's a 12-minute video walkthrough](https://www.youtube.com/watch?v=OTU9vEpDjxE), or read on below for the quicker text summary.

### Template Strings
*Template strings* in JavaScript allow us to mix text and code freely. Template strings start with backticks (\`\`) instead of quotes (the key next to the 1 on your keyboard). In template strings, you can include any JavaScript you want to be evaluated inside of braces prefixed with a dollarsign, like this: `${}`.

Example template string use:
```typescript
let txt = `Current ${score}. 
Current health: ${player.health}.`; 
```

## Making Our Scoreboard
To create a simple scoreboard for a game, we will want to:

1. Create a scoreboard object
2. Add a score property to the object
3. Add a write method that writes the score to the canvas.
4. Call the write method in our animation code.

### The basic object setup...

*scoreboard.ts*
```typescript
export let scoreboard = {
  score : 0,
  function write () {
    ctx.font = '48px Futura';
    ctx.fillText(
      `Score: ${this.score}`,
      10,50
    )
  }
}
```

We then just need to call `scoreboard.write()` inside our animation code when we are drawing to the canvas and we will see the current score.

Wherever we want to change the score, we can just assign to our score using `scoreboard.score += 1` to add one, for example.

## Adding Debug Info

It is also easy to use `ctx.fillText` to add debugging information to your game so you can see things like object properties in real time as you play your game.

Imagine I had a player and enemy object and wanted to see their positions as I played. Here's what a module to write that debug info might look like:

*debug.ts*
```typescript
import {player} from './player';
import {enemy} from './enemy';

export const debugInfo = {
  y : 60,
  write () {
    ctx.font = '16px Courier'
    // Y position of text
    this.y = 60;
    ctx.fillText(
      "Debug:",
      10,this.y
    );
    this.writePlayerDebug();
    this.writeEnemyDebug();
  },
  writePlayerDebug () {    
    this.y += 20; // move 1 line down
    ctx.fillText(
      `Player: ${player.x.toFixed(2)},${player.y.toFixed(2)}`,
      10,this.y
    )
  },
  writeEnemyDebug () {
    this.y += 20; // move 1 line down
    ctx.fillText(
      `Enemy: ${enemy.x.toFixed(2)},${enemy.y.toFixed(2)}`,
      10,this.y
    )
  }
}
```