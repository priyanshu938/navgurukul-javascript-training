const users = [
  { fName: "John1", lName: "Doe1", age: 34 },
  { fName: "John2", lName: "Doe2", age: 35 },
  { fName: "John3", lName: "Doe3", age: 34 },
  { fName: "John4", lName: "Doe4", age: 45 },
];

// ['John1 Doe1', 'John2 Doe2','John3 Doe3', 'John4 Doe4' ]
const fullNames = users.map((user) => `${user.fName} ${user.lName}`);
console.log(fullNames);

//{34:2,35:1,45:1}
const ageCount = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(ageCount);

// returns fName of users whose age is less than 40
const filter = users.filter((user) => user.age < 40);
const map = filter.map((user) => user.fName);
console.log(map);
