const container = document.getElementById("container");
container.addEventListener(
  "click",
  () => {
    console.log("container clicked");
  },
  true //this is the capture phase
);
const box1 = document.getElementById("box-1");
box1.addEventListener("click", () => {
  console.log("box1 clicked");
});
//u can also use multiple event listeners on the same element
// box1.addEventListener("click", (e) => {
//   console.log("second", e);
// });

const inputBox = document.getElementById("inputBox");
inputBox.addEventListener("keydown", (e) => {
  console.log(e.key);
});
