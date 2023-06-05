//1. looping control structures
// for
for (let i = 0; i < 10; i = i + 10) {
  console.log(i); //0
}

//while
let j = 11; //initialization
while (j < 10) {
  //body + updation
  console.log(j); //0 1
  j++; //0 1 ...10
}
// for and while : entry controlled loop

//do...while
let k = 110; //initialization
do {
  //body + updation
  console.log(k); //0 1
  k++; //0 1 ...10
} while (k < 10);
//exit controlled loop

//2. jumping control structures

//break
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i); //0 1 2 3 4
}
console.log("outside loop");

//continue
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // skip particular condition
  }
  console.log(i); //0 1 2 3 4...6 7 8 9
}
console.log("outside loop");

// return
