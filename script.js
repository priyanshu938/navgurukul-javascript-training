//var hoisting
console.log(a);
var a = 10;

//function hoisting
b();
function b() {
  console.log("hello b");
}

//function expression
// c();
var c = function () {
  console.log("hello c");
};

//let and const
console.log(x);
console.log("hello");
let x = 10;

//Temporal Dead Zone => time since when the variable is hoisted and when it is initialized
