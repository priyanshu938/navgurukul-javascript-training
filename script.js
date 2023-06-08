//template literal (template string)
let str = `hello ${2 + 3}`;
console.log(str);

//Escape notation
console.log("hello \nworld"); //new line
console.log("hello\tworld"); //tab
console.log('hello"world"'); //single quote

//String methods
let email = "abc@def";
console.log(email[3]); //email.at(3)
console.log(email.at(-1));
console.log(email.length); //length of string
console.log(email.toUpperCase()); //convert to uppercase
console.log(email.toLowerCase()); //convert to lowercase
console.log(email.indexOf("@d")); //3
console.log(email.lastIndexOf("d")); //4
console.log(email.includes("@d")); //true
console.log(email.startsWith("a")); //true
console.log(email.endsWith("f")); //true

//slice
console.log(email.slice(1, 3)); //bc
console.log(email.slice(3)); //@def
console.log(email.slice(-3)); //def
console.log(email.slice(3, 1)); //empty string

//substring
console.log(email.substring(1, 3)); //bc
console.log(email.substring(3)); //@def
console.log(email.substring(-3)); //negative values are treated as 0
console.log(email.substring(3, 1)); //bc

//strings are immutable in JS
email[3] = "d"; //error
console.log(email); //does not work

// iterating over string
for (let i of email) {
  console.log(i);
}
