function add(a, b, c) {
  return a + b + c;
}
function multiply(a, b, c) {
  return a * b * c;
}
function sub(a, b) {
  return a - b;
}
const X = 23;

function division(a, b) {
  return a / b;
}

export { add, multiply, sub, X };
export default division; //default exports only one function/variable from a file
