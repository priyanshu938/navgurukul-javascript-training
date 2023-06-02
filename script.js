// 1. String
const a = "hello",
  b = " ji"; //'hello'
// console.log(a);
const c = a + " uncle" + b;
// console.log(c);
const d = `${a} uncle ${b}`; //template literal
// console.log(d);

// 2. Number
const e = 1;
const f = 1.1;
const g = 1.1234567890123456789;
const h = 3e5; //3*10^5
const i = 3 / 0; //Infinity
console.log(i);
const j = 3 / "a"; //NaN
console.log(j);

//3. BigInt
const k = 1234567890123456789012345678901234567890n;

// 4. Boolean
const l = true;
const m = false;
console.log(m);

// 4. undefined
let n;
console.log(n);

//5. null
const o = null;
console.log(o);

//6. object
const p = {
  name: "ji",
  age: 20,
  check: true,
};
console.log(p.age); //2
console.log(p["check"]); //true

// 7. Symbol
const q = Symbol("id"); //unique identifier

const r = {
  [q]: "ji", // id :"ji"
  age: 20,
  check: true,
};
console.log(r);

//typeof
console.log(typeof p);
