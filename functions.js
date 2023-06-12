console.log("hello");
let a = 3;
// function declaration/statement
function helloFunction() {
  //function body
  console.log("hello from functions");
}

helloFunction(); //function invocation / function call

// function expression
//Anonymous function expression => without any name
const helloFunctionExpressionAnonymous = function () {
  console.log("hello from function expression anonymous");
};
helloFunctionExpressionAnonymous();
console.log(helloFunctionExpressionAnonymous);

// Named function expression
const helloFunctionExpressionNamed = function xyz() {
  console.log("hello from function expression named");
};
helloFunctionExpressionNamed();
console.log(helloFunctionExpressionNamed);
// xyz(); => not allowed

//IIFEs => Immediately invoked function expression
(function () {
  console.log("hello from IIFES");
})();

//Parameters and arguments
function sum(a, b) {
  // Parameters => values passed at time of function declaration
  return a + b;
}
let sumValue = sum(2, 3); // Arguments=> values passed at time of calling the function
console.log(sumValue);

function sumParent(a, b) {
  //nested functions

  function sumChild(c, d, func) {
    console.log(func());
    return c + d;
  }
  console.log(sumChild);
  return sumChild(3, 3, function () {
    return 4;
  });
}

console.log(sumParent(2, 3));

/*
First Class Functions/Citizens => 
functions in js are called as first class citizens because they have the ability to be stored in variables, 
passed as parameters and arguments. 
They can also be returned in the function. 
*/
