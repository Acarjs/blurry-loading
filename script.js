const text = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");
console.log(bg);

let load = 0;
let blurring = 30;

let int = setInterval(() => {
  load++;
  blurring -= 0.33;

  if (load > 99) {
    clearInterval(int);
  }
  text.innerText = `${load}%`;
  text.style.opacity = (100 - load) / 100;
  bg.style.filter = `blur(${blurring}px)`;
}, 50);
