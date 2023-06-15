const arr = [5, 1, 30, 2, 6, 21, 18];

//double the values
const doubleValues = (arr) => {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(2 * arr[i]);
  }
  return output;
};
console.log(doubleValues(arr));

//map method
const outputMap = arr.map((x) => 2 * x);
console.log(outputMap);

//filter method
const outputFilter = arr.filter((x) => x % 2 === 0); //for even number
console.log(outputFilter);

//sum of array elements
const arr1 = [5, 1, 30, 2, 6, 21, 18];
const sum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]; //5,6,
  }
  return sum;
};
console.log(sum(arr1));

//reduce method
const outputReduce = arr.reduce((acc, curr) => acc + curr, 0);
console.log(outputReduce);
