/*Scenario:
1. Register User
2. Send welcome email to user
3. Login User
4. Get User Data
5. Display user data
*/

function register() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Register end");
      res("Got registered");
    }, 3000);
  });
}

function sendEmail() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Email end");
      res();
      //   rej("Error from send email");
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
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("User data displayed");
      res();
    }, 3000);
  });
}

async function authenticate() {
  try {
    let response = await register();
    console.log(response);
    await sendEmail();
    await login();
    await getUserData();
    await displayUserData();
  } catch (error) {
    console.log(error);
  }
}
authenticate();
