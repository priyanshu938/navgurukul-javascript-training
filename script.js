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
