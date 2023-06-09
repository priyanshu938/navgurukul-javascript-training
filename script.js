//Object destructuring
const person = {
  name: "John",
  age: 26,
  gender: "M",
};

const { name, age, gender } = person;
console.log(name, age, gender);

//Array destructuring
const arr = ["one", "two", "three", "four", "five"];
const [a, , b, c] = arr;
console.log(a, b, c); //one three four

//default values
const arr2 = ["one", "two"];
const [x, y, z = "three"] = arr2;
console.log(x, y, z); //one two three

//rest operator
const arr3 = ["one", "two", "three", "four", "five"];
const [p, q, ...r] = arr3;
console.log(p, q, r); //one two [ 'three', 'four', 'five' ]

const object = {
  name1: "John",
  age: 26,
  gender: "M",
};
const { name1: m, ...rest } = object;
console.log(m, rest);

//spread operator
const arr4 = ["one", "two", "three", "four", "five"];
const arr5 = ["six", ...arr4, "seven"];
console.log(arr5);
