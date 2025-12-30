const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (value === "C") {
      expression = "";
      display.value = "";
    } 
    else if (value === "=") {
      try {
        expression = expression.replace("×", "*").replace("÷", "/").replace("−", "-");
        display.value = eval(expression);
        expression = display.value;
      } catch {
        display.value = "Error";
        expression = "";
      }
    } 
    else {
      expression += value;
      display.value = expression;
    }
  });
});

/* 🔑 Keyboard Support */
document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (!isNaN(key) || "+-*/.".includes(key)) {
    expression += key;
    display.value = expression;
  }
  if (key === "Enter") {
    try {
      display.value = eval(expression);
      expression = display.value;
    } catch {
      display.value = "Error";
      expression = "";
    }
  }
  if (key === "Backspace") {
    expression = expression.slice(0, -1);
    display.value = expression;
  }
  if (key === "Escape") {
    expression = "";
    display.value = "";
  }
});
