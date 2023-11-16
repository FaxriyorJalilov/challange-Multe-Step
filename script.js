let button = document.querySelector(".btn");
let box_right = document.querySelector(".box_right");
let step_2 = document.querySelector(".step_2");
let circle_1 = document.querySelector(".circle_1");
let circle_2 = document.querySelector(".circle_2");
let circle_3 = document.querySelector(".circle_3");
let circle_4 = document.querySelector(".circle_4");
circle_1.style.backgroundColor = "red";

button.addEventListener("click", () => {
  step_2.style.display = "block";
  box_right.style.display = "none";
  circle_1.style.backgroundColor = "unset";
  circle_2.style.backgroundColor = "red";
});

let btn_Back = document.querySelector(".btn_Back");
btn_Back.addEventListener("click", () => {
  step_2.style.display = "none";
  box_right.style.display = "block";
  circle_1.style.backgroundColor = "red";
  circle_2.style.backgroundColor = "unset";
});
let btn_Next = document.querySelector(".btn_Next");
let step_3 = document.querySelector(".step_3");
btn_Next.addEventListener("click", () => {
  step_2.style.display = "none";
  step_3.style.display = "block";
  circle_3.style.backgroundColor = "red";
  circle_2.style.backgroundColor = "unset";
});
let btn_Back_3 = document.querySelector(".btn_Back_3");
btn_Back_3.addEventListener("click", () => {
  step_3.style.display = "none";
  step_2.style.display = "block";
  circle_2.style.backgroundColor = "red";
  circle_3.style.backgroundColor = "unset";
});
let btn_Next_3 = document.querySelector(".btn_Next_3");
let step_4 = document.querySelector(".step_4");
btn_Next_3.addEventListener("click", () => {
  step_3.style.display = "none";
  step_4.style.display = "block";
  circle_4.style.backgroundColor = "red";
  circle_3.style.backgroundColor = "unset";
});
let btn_Back_4 = document.querySelector(".btn_Back_4");
btn_Back_4.addEventListener("click", () => {
  step_4.style.display = "none";
  step_3.style.display = "block";
  circle_3.style.backgroundColor = "red";
  circle_4.style.backgroundColor = "unset";
});
let Confirm = document.querySelector(".Confirm");
let step_5 = document.querySelector(".step_5");
Confirm.addEventListener("click", () => {
  step_4.style.display = "none";
  step_5.style.display = "block";
  // circle_4.style.backgroundColor = "red";
  circle_4.style.backgroundColor = "unset";
});
