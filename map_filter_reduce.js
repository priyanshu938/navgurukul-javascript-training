const arr = [5, 1, 3, 2, 6];

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
const output = arr.map((x) => 2 * x);
console.log(output);
