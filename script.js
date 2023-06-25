const display = document.getElementById("display");
const buttons = document.getElementById("buttons");

buttons.addEventListener("click", (event) => {
  let target = event.target;
  if (target.innerHTML === "C") {
    display.value = "";
  } else if (target.classList.contains("number")) {
    display.value += target.innerHTML;
  } else if (target.classList.contains("operator")) {
    let lastChar = display.value[display.value.length - 1]; //last character of string
    if (["+", "-", "*", "/"].includes(lastChar)) {
      display.value = display.value.slice(0, -1) + target.innerHTML; //eliminates repeated operators
    } else {
      display.value += target.innerHTML;
    }
  } else if (target.innerHTML === "=") {
    if (display.value.length !== 0) {
      //handling unexpected syntax expressions
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Syntax Error!";
      }
    } else display.value = "";
  }
});

//we are adding key events to whole body
//keypress event tracks only main keys excluding shift,alt,ctrl,etc
//keydown event tracks all keys including shift,alt,ctrl,etc
document.body.addEventListener("keypress", (event) => {
  let target = event.key; //key pressed
  const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const operatorsArray = ["+", "-", "*", "/"];
  if (target === "c") {
    display.value = "";
  } else if (numbersArray.includes(event.key)) {
    display.value += target;
  } else if (operatorsArray.includes(event.key)) {
    let lastChar = display.value[display.value.length - 1]; //last character of string
    if (operatorsArray.includes(lastChar)) {
      display.value = display.value.slice(0, -1) + target; //eliminates repeated operators
    } else {
      display.value += target;
    }
  } else if (target === "=") {
    if (display.value.length !== 0) {
      //handling unexpected syntax expressions
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Syntax Error!";
      }
    } else display.value = "";
  } else {
    alert("Wrong key pressed!");
  }
});
