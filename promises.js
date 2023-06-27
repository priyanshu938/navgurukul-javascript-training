/*Scenario:
1. Register User
2. Send welcome email to user
3. Login User
4. Get User Data
5. Display user data
*/
function register() {
  setTimeout(() => {
    console.log("Register end");
  }, 3000);
}

function sendEmail() {
  setTimeout(() => {
    console.log("Email end");
  }, 1000);
}

function login() {
  setTimeout(() => {
    console.log("Login end");
  }, 2000);
}

function getUserData() {
  setTimeout(() => {
    console.log("Got user data");
  }, 1000);
}

function displayUserData() {
  setTimeout(() => {
    console.log("User data displayed");
  }, 1000);
}

register();
sendEmail();
login();
getUserData();
displayUserData();
