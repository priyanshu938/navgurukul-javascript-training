// let a = 3;
// function one() {
//   //   let a = 4;
//   function two() {
//     // let a = 5;
//     console.log(a);
//   }
//   two();
// }
// one();
//Closures=>Functions bundled together along with it's lexical scope
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  a = 8;
  return y;
}
var z = x();
z();
//A closure can remember and access variables and arguments reference of its outer function even after the function has returned.
