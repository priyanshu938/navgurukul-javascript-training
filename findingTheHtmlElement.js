// const myBody = document.body;
// myBody.style.backgroundColor = "red"; //background-color : red
// console.log(myBody);

const box2 = document.getElementById("box-2"); // first method
// console.log(box2);

const divs = document.getElementsByTagName("div"); // second method
// console.log(divs[1]);

const boxes = document.getElementsByClassName("box"); // third method
console.log(boxes[1]);

const box1 = document.querySelectorAll(".box-1 #box2"); // fourth method
//allows u to select all elements with all the classes/ids multiple or single from the dom and returns u the array
const box3 = document.querySelector(".box-1 #box2");
//allows u to select all elements with all the classes/ids multiple or single from the dom and returns u the first element
