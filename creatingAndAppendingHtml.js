const newPara = document.createElement("p");
newPara.textContent = "This is a new paragraph";
//<p>This is a new paragraph</p>

const container = document.getElementById("container");
container.appendChild(newPara);

const button = document.createElement("button");
button.innerHTML = "submit";
container.appendChild(button);
