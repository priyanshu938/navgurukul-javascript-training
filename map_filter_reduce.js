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
