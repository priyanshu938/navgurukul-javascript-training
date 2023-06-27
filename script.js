//Asynchronous JS
// console.log("Hello");

// setTimeout(() => {
//   console.log("I am from setTimeout");
// }, 3000);

// console.log("JS");

/*Scenario:
1. Register User
2. Send welcome email to user
3. Login User
4. Get User Data
5. Display user data
*/
function register(cb) {
  setTimeout(() => {
    console.log("Register end");
    cb();
  }, 3000);
}

function sendEmail(cb) {
  setTimeout(() => {
    console.log("Email end");
    cb();
  }, 1000);
}

function login(cb) {
  setTimeout(() => {
    console.log("Login end");
    cb();
  }, 2000);
}

function getUserData(cb) {
  setTimeout(() => {
    console.log("Got user data");
    cb();
  }, 1000);
}

function displayUserData() {
  setTimeout(() => {
    console.log("User data displayed");
  }, 1000);
}

//Callback Hell or Pyramid of Doom
register(function () {
  sendEmail(function () {
    login(function () {
      getUserData(function () {
        displayUserData();
      });
    });
  });
});
