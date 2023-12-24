/* Given the finished width [fw], finished height [fh], and 
boxed corner [bc], returns the dimensions of the outer layer of
material needed to make it. */

function endToOuter(fw, fh) {
  return [fw + 1, fh + 2.5];
}

/* Given the finished width [fw], finished height [fh], and 
boxed corner [bc], returns the dimensions of the inner layer
needed to make it. */

function endToInner(fw, fh) {
  return [fw + 1, fh + 0.5];
}

/* Given the finished width [fw], finished height [fh], and 
boxed corner [bc], returns the dimensions of the cover
needed to make it. */

function endToCover(fw) {
  return [fw * 2 + 1, (((fw * 2) / Math.PI) + 2.5).toFixed(1)];
}

let outer_output = document.querySelector("#o-layer");
let inner_output = document.querySelector("#i-layer");
let cover_output = document.querySelector("#cover");

function compute(fw, fh) {
  let outerw = endToOuter(fw, fh)[0];
  let outerh = endToOuter(fw, fh)[1];
  let innerw = endToInner(fw, fh)[0];
  let innerh = endToInner(fw, fh)[1];
  let coverw = endToCover(fw, fh)[0];
  let coverh = endToCover(fw, fh)[1];
  outer_output.textContent =
    outerw.toString() + " in.  x  " + outerh.toString() + " in.";
  inner_output.textContent =
    innerw.toString() + " in.  x  " + innerh.toString() + " in.";
  cover_output.textContent =
    coverw.toString() + " in.  x  " + coverh.toString() + " in.";
}

let width = document.querySelector("#width");
let height = document.querySelector("#height");
let boxed_corner = document.querySelector("#boxed-corner");
let make_bag_button = document.querySelector('#make-bag');

make_bag_button.addEventListener('click', () => {
  let width = parseFloat(document.getElementById("width").value);
  let height = parseFloat(document.getElementById("height").value);
  let boxed_corner = parseFloat(document.getElementById("boxed-corner").value);
  if (isNaN(width) || isNaN(height) || isNaN(boxed_corner)) {
  } else {
    compute(width, height);
  }
})