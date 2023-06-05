//1.assignment operators
let a = 4;
a = a + 2;
a += 2; //a=a+2
a -= 2; //a=a-2
a *= 2;
a /= 2;
a %= 2; // remainder
a **= 2; //exponentiation

//2.arithmetic operators-: +,-,*,/,%,**,++,--
let b = 4;
let c = 2;
console.log(++b); //pre increment -5
console.log(b++); //post increment -5
console.log(--b); //pre decrement -5
console.log(b--); //post decrement -5

//3.comparison operators-: ==,===,!=,!==,>,<,>=,<=
let d = 4;
let e = 4;
console.log(d == e); //false
let f = "4";
console.log(d == f); //true
console.log(d === f); //false => !important; checks both type and value
console.log(d != f); //false
console.log(d !== f); //true => !important; checks both type and value
console.log(d > e); //false
console.log(d < e); //false
console.log(d >= e); //true
console.log(d <= e); //true

//4.logical operators-: &&,||,!
const x = 5,
  y = 3;
console.log(x < 6 && y > 2); //true
console.log(x < 6 || y > 2); //true
console.log(!(x < 6 && y > 2)); //false

//5.bitwise operators-: &,|,^,~,<<,>>

//6.string operators-: +,+=
let g = "hello";
let h = "world";
console.log(g + h); //helloworld
console.log((g += h)); //helloworld

//typeof operator=> return the data type of the operand
