//Create a function that takes an array of numbers and returns a promise that resolves to the sum of all numbers.

function sumArray(numArray) {
  return new Promise((res, rej) => {
    if (numArray.length === 0) rej("Array is empty");
    const sum = numArray.reduce((acc, curr) => acc + curr, 0);
    res(sum);
  });
}

const wrapperFunction = async () => {
  try {
    const numbers = [1, 2, 3, 4, 5];
    // let sum = await sumArray([]);
    let sum = await sumArray(numbers);
    console.log(sum);
  } catch (error) {
    console.log(error);
  }
};
wrapperFunction();
