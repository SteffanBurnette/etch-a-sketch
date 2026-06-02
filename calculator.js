function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    if(y === 0){
        alert("You cannot divide by zero baka");
        return x;
    }
    return x/y;
}

let userNum;
let userOperator;
let userOtherNum;
let calculation = [];
let currentCalcValue = document.getElementById("finalValue");
const btnDiv = document.getElementsByClassName("row");
const buttons = document.querySelectorAll(".number");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log(button.textContent);
        console.log("clicked");
        if(button.textContent !== "Clear" && button.textContent !== "=" && button.textContent !== "Backspace"){
            if(calculation.length === 0 && (button.textContent === "+" || button.textContent === "*" || button.textContent === "/")){
                alert(`Cannot put ${button.textContent} at the start.`)
                return;
            }else if(calculation.length >= 1 && (button.textContent === "+" || button.textContent === "*" || button.textContent === "/" || button.textContent === "-")){
                   if(calculation[calculation.length - 1] === "+" || calculation[calculation.length - 1] === "/" || calculation[calculation.length - 1] === "*" || calculation[calculation.length - 1] === "+" || calculation[calculation.length - 1] === "-"){
                        alert(`You cannot have two operators back to back: ${button.textContent + calculation[calculation.length - 1]}`);
                        return;
                   }
                 
            }

            calculation.push(button.textContent);
            currentCalcValue.textContent = calculation.join("");
            
        
        }else if(button.textContent === "Clear" && calculation.length > 0){
            alert("Cache Cleared");
            calculation = [];
            currentCalcValue.textContent = 0;
            console.log(calculation);
        }else if(button.textContent === "=" && calculation.length > 0){
            if(calculation[calculation.length - 1] === "+" || calculation[calculation.length - 1] === "-" || calculation[calculation.length - 1] === "*" || calculation[calculation.length - 1] === "/"){
                alert(`You cannot end the equation with an operand: ${calculation[calculation.length - 1]}`);
                return;
            }
            console.log("Performing Calculation:")
            calculation = [calculateNumber(calculation)];
            currentCalcValue.textContent = calculation;
            console.log(calculateNumber(calculation));
            

        }else if(button.textContent === "Backspace" && calculation.length > 0){
            calculation.pop();
            currentCalcValue.textContent = calculation.join("");
        }

    });
});

function operate(userNum, userOtherNum, userOperator){
    switch (userOperator){
        case "+":
            return add(userNum, userOtherNum);
            break;

        case "-":
            return subtract(userNum, userOtherNum);
            break;

        case "*":
            return multiply(userNum, userOtherNum);
            break;

        case "/":
            return divide(userNum, userOtherNum);
            break;
        default:
            return null;
            break;
    }
}

function calculateNumber(arr) {
    let total = 0;
    let wholeNumber = [];
    let currentOperator = "+";

    for (let i = 0; i < arr.length; i++) {
        const char = arr[i];

        // first character is a negative sign
        if (i === 0 && char === "-") {
            wholeNumber.push(char);
        } 
        else if (char === "+" || char === "-" || char === "*" || char === "/") {
            const num = Number.parseInt(wholeNumber.join(""));

            total = operate(total, num, currentOperator);

            wholeNumber = [];
            currentOperator = char;
        } 
        else {
            wholeNumber.push(char);
        }
    }

    const lastNum = Number.parseInt(wholeNumber.join(""));
    total = operate(total, lastNum, currentOperator);

    return total;
}