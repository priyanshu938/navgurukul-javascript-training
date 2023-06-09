let arr = ["I", "go", "home"];
console.log(arr[2]);
//length
console.log(arr.length);

//push()=>add an element to the end
arr.push("to");
console.log(arr);

//pop()=>extract an element from the end
console.log(arr.pop());
console.log(arr);

//shift()=>extract an element from the beginning
console.log(arr.shift());
console.log(arr);

//unshift()=>add an element to the beginning
arr.unshift("Let's");
console.log(arr);

//splice()=>delete, replace, insert an element
let arr1 = ["I", "study", "JavaScript"];
arr1.splice(1, 2); // from index 1 remove 2 elements
console.log(arr1);
arr1.splice(2, 0, "complex", "language"); //from index 2 delete 0 elements and insert "complex" and "language"
console.log(arr1);

//slice()=>create a new array from a part of the array
let arr2 = ["t", "e", "s", "t"];
console.log(arr2.slice(1, 3)); // e,s (copy from 1 to 3)
console.log(arr2.slice(-2)); // s,t (copy from -2 till the end)

//concat()=>merge arrays
let arr3 = [1, 2];
console.log(arr3.concat([3, 4])); // 1,2,3,4

//indexOf/lastIndexOf and includes
let arr4 = [1, false, 0, false];
console.log(arr4.indexOf(0)); // 2
console.log(arr4.lastIndexOf(false)); // 3
console.log(arr4.includes(1)); // true

//sort() => sort elements
let arr5 = [1, -2, 15];
arr5.sort();
console.log(arr5);

//reverse() => reverse elements
let arr6 = [1, 2, 3, 4, 5];
arr6.reverse();
console.log(arr6); // 5,4,3,2,1

//split() => split a string into an array by a separator
let names = "I am learning JS";
let arr7 = names.split(" ");
console.log(arr7);

//join() => join an array into a string using a separator
let arr8 = ["I", "am", "learning", "JS"];
let str = arr8.join(" ");
console.log(str);
