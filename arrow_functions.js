//normal function
let sum = function (a, b) {
  let res = a + b;
  return res;
};

console.log(sum(2, 3));

//arrow function
let sumArrow = (a, b) => {
  let res = a + b;
  return res;
};
console.log(sumArrow(2, 3));

//arrow function with one parameter
let square = (a) => a * a;

console.log(square(2));

//arrow function with no parameter
let sayHello = () => console.log("hello");
sayHello();

//arrow function with multiple parameters
let multiply = (a, b) => a * b;
console.log(multiply(2, 3));

//with object
const myFunc = () => ({
  a: 10,
});
