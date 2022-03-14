let c = document.querySelector("canvas");
let ctx = c.getDrawingContext("2d");
ctx.strokeRect(10, 10, 100, 100);
ctx.strokeText("100x100 box at 10,10", 10, 110);

setInputForProp("style-width", (v) => (c.style.width = v));
setInputForProp("style-height", (v) => (c.style.height = v));
setInputForProp("width", (v) => (c.width = Number(v)));
setInputForProp("height", (v) => (c.height = Number(v)));

function setInputForProp(id, setter) {
  document
    .getElementById(id)
    .addEventListener("input", (e) => setter(e.target.value));
}
