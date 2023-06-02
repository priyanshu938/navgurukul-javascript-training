// implicit conversion - automatic type conversion
//string implicit conversion
let a = "3" + 2;
console.log(a); // "32"
let b = "3" + true;
console.log(b); // "3true"

//number implicit conversion
let c = 4 / "20"; // *,-
console.log(c); // 2

//NaN
let d = "abc" - 2;
console.log(d);

//boolean
let e = true + 2;
console.log(e); //3

//explicit conversion - manual type conversion
//boolean conversion
let f = Boolean(-12); //0 -> false else true
console.log(f); //true

//number conversion
let g = Number("12");
console.log(typeof g); //12

//string conversion
let h = String(12);
console.log(typeof h); //"12"

console.log(Boolean(""));
