function add(numFirst, numSecond) {
  result = parseFloat(numFirst) + parseFloat(numSecond);
  return result.toFixed(7);
}
function subtract(numFirst, numSecond) {
  result = parseFloat(numFirst) - parseFloat(numSecond);
  return result.toFixed(7);
}
function multiply(numFirst, numSecond) {
  result = parseFloat(numFirst) * parseFloat(numSecond);
  return result.toFixed(7);
}
function divide(numFirst, numSecond) {
  result = parseFloat(numFirst) / parseFloat(numSecond);
  return result.toFixed(7);
}

function operate(num1, num2, opr) {
  switch (opr) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return num2;
  }
}

let isSecond = false;
let firstNumber = "";
let secondNumber = "";
const inpFirst = document.querySelector(".input");
const inpSecond = document.querySelector(".input_2");
const numbers = document.querySelectorAll(".num");
const answer = document.querySelector(".answer");
const clear = document.querySelector(".clr");
numbers.forEach((num) =>
  num.addEventListener("click", function () {
    if (!isSecond) {
      if (firstNumber.length < 10) {
        firstNumber = firstNumber + this.textContent;
        console.log(firstNumber);
        inpFirst.textContent = firstNumber;
      }
    } else {
      if (secondNumber.length < 10) {
        secondNumber = secondNumber + this.textContent;
        inpFirst.textContent = secondNumber;
      }
    }
  })
);

let operator = "";
const operators = document.querySelectorAll(".sign");
operators.forEach((opr) =>
  opr.addEventListener("click", function () {
    if (secondNumber !== "") {
      if (secondNumber == "0" && operator == "/") {
        inpSecond.textContent = "Can not divide by zero";
      } else {
        firstNumber = operate(firstNumber, secondNumber, operator);
        inpFirst.textContent = firstNumber;
        secondNumber = "";
      }
    }
    operator = this.textContent;
    inpFirst.textContent = operator;
    isSecond = true;
  })
);

answer.addEventListener("click", function () {
  if (secondNumber !== "") {
    if (secondNumber == "0" && operator == "/") {
      inpSecond.textContent = "Can not divide by zero";
    } else {
      result = operate(firstNumber, secondNumber, operator);
      inpSecond.textContent = result;
      firstNumber = "";
      inpFirst.textContent = "";
      secondNumber = "";
      operator = "";
      isSecond = false;
    }
  } else {
    inpSecond.textContent = "Syntax Error";
  }
});

clear.addEventListener("click", function () {
  firstNumber = "";
  inpFirst.textContent = "";
  secondNumber = "";
  inpSecond.textContent = "";
  isSecond = false;
});
