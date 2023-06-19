const box1 = document.getElementById("box-1");
box1.innerHTML = "<h1>Box 1</h1>";
box1.style.backgroundColor = "pink";
// box1.classList.remove("round-border"); //remove

const box2 = document.getElementById("box-2");
// box2.classList.add("round-border"); //remove
// box1.classList.toggle("round-border"); // if class is present then removes else adds
// box2.classList.toggle("round-border");

const container = document.querySelectorAll(".box");
// console.log(container);
for (let i = 0; i < container.length; i++) {
  container[i].classList.add("round-border");
}
