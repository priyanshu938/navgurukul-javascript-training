//global scope
// var a = 10;
// console.log(window.a);

// let b = 10;
// console.log(window.b);

//block scope
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
// }
// console.log(a); //10
// console.log(b); //error
// console.log(c);

//function scope
var a = 10;
let b = 20;
const c = 30;
// var a=9;
// console.log(a)
function abc() {
  a = 100;
  b = 200;
  x = 1000; //works as a global variable
  const c = 300;
  console.log(a, b, c, x);
  //lexical environment => inner function can access outer function variable
}
abc();
console.log(a, b, c, x);
