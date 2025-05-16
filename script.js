function add(numFirst, numSecond){
    result = parseInt(numFirst) + parseInt(numSecond)
    return result;
}
function subtract(numFirst, numSecond){
    result = parseInt(numFirst) - parseInt(numSecond)
    return result;
}
function multiply(numFirst, numSecond){
    result = parseInt(numFirst) * parseInt(numSecond)
    return result;
}
function divide(numFirst, numSecond){
    result = parseInt(numFirst) / parseInt(numSecond)
    return result;
}

function operate(num1, num2, opr){
    switch(opr){
        case '+': return add(num1, num2);
        case '-': return subtract(num1, num2);
        case '*': return multiply(num1, num2);
        case '/': return divide(num1, num2);
        default: return num2;
    }
}

let isSecond = false
let firstNumber = ""
let secondNumber = ""
const inpFirst = document.querySelector(".input")
const inpSecond = document.querySelector(".input_2")
const numbers = document.querySelectorAll(".num")
const answer = document.querySelector('.answer')
numbers.forEach(num => num.addEventListener('click', function(){
    if(!isSecond){
        firstNumber = firstNumber + this.textContent
        console.log(firstNumber)
        inpFirst.textContent = firstNumber
    }
    else{
        secondNumber= secondNumber + this.textContent
        inpFirst.textContent = secondNumber;
    }
}))

let operator = "";
const operators = document.querySelectorAll(".sign")
operators.forEach(opr => opr.addEventListener('click', function(){
    if(secondNumber !== ""){
        firstNumber = operate(firstNumber, secondNumber, operator);
        inpFirst.textContent = firstNumber;
        secondNumber = "";
    }
    operator = this.textContent;
    inpFirst.textContent = operator
    isSecond = true;
}))

answer.addEventListener('click', function(){
    if(secondNumber !== ""){
        result = operate(firstNumber, secondNumber, operator);
        inpSecond.textContent = result;
        firstNumber = result;
        secondNumber = "";
        operator = "";
        isSecond = false;
    }
})




