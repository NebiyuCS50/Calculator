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
const output = document.querySelector('.input')
const output_2= document.querySelector('.input_2')
const fNumbers = document.querySelectorAll(".num").forEach(button=>
button.addEventListener('click', function(){
    if(!isSecondNumber){
        firstNumber = firstNumber + this.textContent;
        // console.log(`firstNumber: ${firstNumber}`)
        output.textContent = firstNumber
    }
    else{
        secondNumber = secondNumber + this.textContent
        // console.log(`secondNumber: ${secondNumber}`)
        output.textContent +=secondNumber
        if(operator == '+'){
            firstNumber = add(firstNumber, secondNumber);
            // console.log(`newFnum: ${firstNumber}`)
            output_2.textContent = firstNumber
        }
        else if (operator == '-'){
            firstNumber = sub(firstNumber, secondNumber);
            // console.log(`newFnum: ${firstNumber}`)
            output_2.textContent = firstNumber
        }
        else if (operator == '*'){
            firstNumber = mul(firstNumber, secondNumber);
            // console.log(`newFnum: ${firstNumber}`)
            output_2.textContent = firstNumber
        }
        else if (operator == '%'){
            firstNumber = divide(firstNumber, secondNumber);
            // console.log(`newFnum: ${firstNumber}`)
            output_2.textContent = firstNumber
            if(secondNumber =='0'){
                // console.log("Syntax Error")
                output_2.textContent = "Syntax Error"
            }
        }
        else{
            // console.log("Syntax Error")
            output_2.textContent = "Syntax Error"
        }
    }
}))

let operator = "";
const operators = document.querySelectorAll(".sign").forEach(button=>{
    button.addEventListener('click', function(){
        operator = this.textContent;
        isSecondNumber = true;
        // console.log(operator)
        output.textContent += operator
        secondNumber = ""; 
    })
})

const equals = document.querySelector(".answer");
equals.addEventListener('click', function(){
    if(firstNumber && secondNumber && operator=="+"){
        output.textContent=result;
        output_2.textContent = ""
        firstNumber=result;
        secondNumber="";
        isSecondNumber= false;
    }
    else if(firstNumber && secondNumber && operator=="-"){
        output.textContent=result;
        output_2.textContent = ""
        firstNumber=result;
        secondNumber="";
        isSecondNumber= false;
    }
    else if(firstNumber && secondNumber && operator=="*"){
        output_2.textContent ="";
        output.textContent = result;
        firstNumber=result;
        secondNumber="";
        isSecondNumber= false;
    }
    else if(firstNumber && secondNumber && operator=="/"){
        if(secondNumber != '0'){
        output_2.textContent = "";
        output.textContent =result;
        firstNumber=result;
        secondNumber="";
        isSecondNumber= false;
        }
        else{
            output_2.textContent = "Syntax Error"
        }
    }
    else{
        output_2.textContent = "Syntax Error";
        firstNumber="";
        secondNumber="";
        isSecondNumber= false;
    }
})

const clear = document.querySelector(".clr");
clear.addEventListener('click', function (){
    firstNumber="";
    secondNumber ="";
    output.textContent = "";
    output_2.textContent=""
})

document.addEventListener('keydown', function(event) {
    console.log('Key pressed: ' + event.key);
});