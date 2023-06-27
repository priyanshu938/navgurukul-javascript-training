/*Scenario:
1. Register User
2. Send welcome email to user
3. Login User
4. Get User Data
5. Display user data
*/

/*
- Promise => A Promise is an object representing the eventual completion or failure of an asynchronous operation.
- A promise object has two properties - state and result. You cannot access these two properties.
- A JS promise object has three states : Pending, Fulfilled, Rejected.
*/
function register() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Register end");
      //   res();
      rej("Error comes");
    }, 3000);
  });
}

function sendEmail() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Email end");
      res();
    }, 1000);
  });
}

function login() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Login end");
      res();
    }, 2000);
  });
}

function getUserData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Got user data");
      res();
    }, 1000);
  });
}

function displayUserData() {
  setTimeout(() => {
    console.log("User data displayed");
  }, 1000);
}

register()
  .then(sendEmail)
  .then(login)
  .then(getUserData)
  .then(displayUserData)
  .catch((err) => console.log(err));
