let moon = document.querySelector("#moon");
let river = document.querySelector("#river");
let grass = document.querySelector("#grass");
let trees = document.querySelector("#trees");
let text = document.querySelector("#text");

// text.style.right = -100 + "px";
console.log(text.style.right);

window.addEventListener("scroll", () => {
  wH = window.innerHeight;
  wW = window.innerWidth;
  let value = window.scrollY;
  console.log(value);

  moon.style.top = value * 2.2 - 20 + "px";
  text.style.right = value + "px";
  if (wH > wW && wW < 500) {
    trees.style.transform = "translateX(" + (value - 800) / 10 + "px)";
  }
  if (wW > wH && wW > 1000) {
    trees.style.transform = "translateX(" + (value - 1800) / 10 + "px)";
    grass.style.transform = "translateX(" + (value - 1800) / 10 + "px)";
  }
  //   river.style.right = value - 100 + "px";
});
