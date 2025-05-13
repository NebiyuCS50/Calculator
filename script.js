let result = "";
function add(fNum, sNum){
    result = parseInt(fNum) + parseInt(sNum);
    return parseInt(result);
}
function sub(fNum, sNum){
    result = parseInt(fNum) - parseInt(sNum);
    return parseInt(result);
}
function mul(fNum, sNum){
    result = parseInt(fNum) * parseInt(sNum);
    return parseInt(result);
}
function divide(fNum, sNum){
    result = parseInt(fNum) / parseInt(sNum);
    return parseInt(result);
}




let firstNumber = "";
let secondNumber = "";
let isSecondNumber = false;
const fNumbers = document.querySelectorAll(".num").forEach(button=>
button.addEventListener('click', function(){
    if(!isSecondNumber){
        firstNumber = firstNumber + this.textContent;
        console.log(`firstNumber: ${firstNumber}`)
    }
    else{
        secondNumber = secondNumber + this.textContent
        console.log(`secondNumber: ${secondNumber}`)
    }
}))

let operator = "";
const operators = document.querySelectorAll(".sign").forEach(button=>{
    button.addEventListener('click', function(){
        operator = this.textContent;
        isSecondNumber = true;
        console.log(operator)
        secondNumber = "";
    })
})

const equals = document.querySelector(".answer");
equals.addEventListener('click', function(){
    if(firstNumber && secondNumber && operator=="+"){
        console.log(add(firstNumber, secondNumber));
        firstNumber="";
        secondNumber="";
        isSecondNumber= false;
    }
    else if(firstNumber && secondNumber && operator=="-"){
        console.log(sub(firstNumber, secondNumber));
        firstNumber="";
        secondNumber="";
        isSecondNumber= false;
    }
    else if(firstNumber && secondNumber && operator=="X"){
        console.log(mul(firstNumber, secondNumber));
        firstNumber="";
        secondNumber="";
        isSecondNumber= false;
    }
    else if(firstNumber && secondNumber && operator=="/"){
        if(secondNumber != '0'){
        console.log(divide(firstNumber, secondNumber));
        firstNumber="";
        secondNumber="";
        isSecondNumber= false;
        }
        else{
            console.log("syntax error")
        }
    }
    else{
        console.log("syntax error");
        firstNumber="";
        secondNumber="";
        isSecondNumber= false;
    }
})

