const newPara = document.createElement("p");
newPara.textContent = "This is a new paragraph";
//<p>This is a new paragraph</p>

const container = document.getElementById("container");
// container.appendChild(newPara);

const button = document.createElement("button");
button.innerHTML = "submit";
// container.appendChild(button);

//inserting html
const divBox = `
<div class="box" id="box-5">box-5</div>
<div class="box" id="box-6">box-6</div>
`;

container.insertAdjacentHTML("beforeend", divBox);
// container.insertAdjacentHTML("beforebegin", divBox);
// container.insertAdjacentHTML("afterbegin", divBox);
// container.insertAdjacentHTML("afterend", divBox);
