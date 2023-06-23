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
