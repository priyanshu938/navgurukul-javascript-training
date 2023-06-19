const box1 = document.getElementById("box-1");
box1.innerHTML = "<h1>Box 1</h1>";
box1.style.backgroundColor = "pink";
// box1.classList.remove("round-border"); //remove

const box2 = document.getElementById("box-2");
// box2.classList.add("round-border"); //remove
box1.classList.toggle("round-border");
box2.classList.toggle("round-border");
