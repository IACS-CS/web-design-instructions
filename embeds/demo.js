let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;

let enemy = {
  x: 200,
  y: 400,
  size: 30,
  color: "green",
};

let player = {
  x: 100,
  y: 100,
  size: 20,
  color: "black",
  score: 0,
};

function checkForScore() {
  let distance = getDistance(player, enemy);
  let redness = 255 - distance;
  player.color = `rgb(${redness},0,0)`;
  if (distance < 5) {
    player.score += 1;
    enemy.x = Math.random() * canvas.width;
    enemy.y = Math.random() * canvas.height;
  }
}

/* Calculate the distance between a and b using the pythogorean theorem */
function getDistance(a, b) {
  return Math.sqrt(
    // the square root of
    (a.x - b.x) * (a.x - b.x) + // the horizontal side of the triangle squared // plus
      (a.y - b.y) * (a.y - b.y) // the vertical side of the triangle squared
  );
}

function updateEnemy() {
  enemy.x += 2 - Math.random() * 4;
  enemy.y += 2 - Math.random() * 4;
  if (enemy.x > canvas.width) {
    enemy.x = 0;
  } else if (enemy.x < 0) {
    enemy.x = canvas.width;
  }
  if (enemy.y > canvas.height) {
    enemy.y = 0;
  } else if (enemy.y < 0) {
    enemy.y = canvas.height;
  }
}

function updateObjects() {
  updateEnemy();
  checkForScore();
}

function animate() {
  updateObjects();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer();
  drawEnemy();
  requestAnimationFrame(animate);
}

function drawObject(o) {
  ctx.beginPath();
  ctx.fillStyle = o.color;
  ctx.arc(o.x, o.y, o.size, 0, Math.PI * 2);
  ctx.fill();
  /*  if (o.score) {
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText(
      `${o.score}`,
      o.x,o.y      
    );
  } */
}

function drawPlayer() {
  drawObject(player);
}
function drawEnemy() {
  drawObject(enemy);
}

let keys = {
  a: { x: -5 },
  s: { y: 5 },
  d: { x: 5 },
  w: { y: -5 },
  q: { x: -5, y: -5 },
  e: { x: 5, y: -5 },
  z: { x: -5, y: 5 },
  c: { x: 5, y: 5 },
};

window.addEventListener("keydown", function (e) {
  if (keys[e.key]) {
    let motion = keys[e.key];
    for (let prop in motion) {
      player[prop] += motion[prop];
    }
  }
});

animate();
