// variables

/* const add = document.querySelector(".add");
const resetCount = document.querySelector(".reset");
const sub = document.querySelector(".subtract"); */
const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

//this will  add or subtract numbers when we click on buttons

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    count.innerHTML++;
    setColor()
  }
  if (e.target.classList.contains("subtract")) {
    count.innerHTML--;
    setColor()
  }
  if (e.target.classList.contains("reset")) {
    count.innerHTML = 0;
    setColor()
  }
});

//this will also add or subtract numbers when we click on buttons,
// just diferent method

/* add.addEventListener("click", () => {
count.innerHTML++;
});
sub.addEventListener("click", () => {
count.innerHTML--;
});
resetCount.addEventListener("click", () => {
count.innerHTML = 0;
}); */

//this function changes colour. if number is greater than 0,
// then changes to yellow if less the orangered

function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = "yellow";
  } else if (count.innerHTML < 0) {
    count.style.color = "orangered";
  } else {
    count.style.color = "#fff";
  }
}
