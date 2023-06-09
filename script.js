// Errors
//Syntax Error => compile time caught by compiler
// console.log('Hello, World!);
//Runtime error or Exceptions => run time caught by interpreter
const a = 2,
  b = 0;

try {
  console.log(a / b);
  console.log(c);
} catch (error) {
  console.log(error);
} finally {
  console.log("finally");
}
console.log("dh");
