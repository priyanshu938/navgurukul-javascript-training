//if and if-else
let a = 2;
let b = 4;
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}
// if..else if...else
let c = 2;
let d = 4;
if (c > d) {
  console.log("c is greater than d");
} else if (c == d) {
  console.log("c is equal to d");
} else {
  console.log("c is less than d");
}

//switch case
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Sunday");
    break;
}

// execution of more than case in absence of break keyword is called fall through

//ternary operator
let age = 18;
let x = "name";
// if else
if (age >= 18) {
  console.log("yes");
} else {
  console.log("no");
}
// ternary operator => if...else alternative
console.log(age >= 18 ? "yes" : "no");

// if part
if (age >= 18) {
  console.log("yes");
}
// && operator => if alternative
console.log(age >= 18 && "yes");
