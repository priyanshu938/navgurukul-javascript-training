const personObj = {
  name: "XYZ",
  age: 34,
  location: ["Delhi", "Lucknow", "Jaipur"],
};
const json = JSON.stringify(personObj); //to convert JS object into JSON object
console.log(json);
const parseObj = JSON.parse(json); //to convert JSON object into JS object
console.log(parseObj);
