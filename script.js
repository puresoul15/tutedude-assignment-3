let buttonred = document.querySelector(".red");

buttonred.addEventListener("click", () => {
  document.querySelector(".red").style.backgroundColor = "red";
});
let buttonyellow = document.querySelector(".yellow");

buttonyellow.addEventListener("click", () => {
  document.querySelector(".yellow").style.backgroundColor = "yellow";
});
let buttonblue = document.querySelector(".blue");

buttonblue.addEventListener("click", () => {
  document.querySelector(".blue").style.backgroundColor = "blue";
});
let buttongreen = document.querySelector(".green");

buttongreen.addEventListener("click", () => {
  document.querySelector(".green").style.backgroundColor = "green";
});
let greeting = document.querySelector(".greetbutton");

greeting.addEventListener("click", () => {
  document.querySelector("#greet").innerHTML = 
    document.querySelector("#greet").innerHTML + 
    " " + 
    document.querySelector(".userdata").value;
});
