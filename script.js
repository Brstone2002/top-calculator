const numBtns = document.querySelectorAll(".num");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");
const displayScreen = document.querySelector(".current-display");

let firstOperand = '';
let secondOperand = '';
let operator = null;
let waitingForSecondOperand = false;
let justCalculated = false;

function updateDisplay(value) {
    displayScreen.textContent = value;
}

numBtns.forEach(button => {
    button.addEventListener("click", () => {
        if (justCalculated) {
            firstOperand = '';
            secondOperand = '';
            operator = null;
            waitingForSecondOperand = false;
            updateDisplay('');
            justCalculated = false;
        }
        if (!waitingForSecondOperand) {
            // Building first operand
            if (button.textContent === "0" && firstOperand === '') return;
            firstOperand += button.textContent; // start fresh after clear
            updateDisplay(firstOperand);
            waitingForSecondOperand = false;
        } else {
            // Building second operand
            if (button.textContent === "0" && secondOperand === '') {
                prompt("You can't divide by 0!");
                return;
            }
            secondOperand += button.textContent;
            updateDisplay(firstOperand + operator + secondOperand);
        }
    });
});
    if (justCalculated) {
        firstOperand = '';
        secondOperand = '';
        operator = null;
        waitingForSecondOperand = false;
        updateDisplay('');
        justCalculated = false;
    }

operatorBtns.forEach(button => {
    button.addEventListener("click", () => {
        if (firstOperand === '') return; // Don't allow operator before first number
        if (operator && secondOperand !== '') {
            // If already have two operands and operator, calculate first
            firstOperand = String(operate(Number(firstOperand), Number(secondOperand), operator));
            secondOperand = '';
            updateDisplay(firstOperand);
        }
        operator = button.textContent;
        updateDisplay(firstOperand + operator);
        waitingForSecondOperand = true;
    });
});

equalsBtn.addEventListener("click", () => {
    if (firstOperand !== '' && operator && secondOperand !== '') {
        const result = operate(Number(firstOperand), Number(secondOperand), operator);
        updateDisplay(result);
        firstOperand = String(result);
        secondOperand = '';
        operator = null;
        waitingForSecondOperand = false;
        justCalculated = true;
    }
});

clearBtn.addEventListener("click", clearDisplay);

function operate(num1, num2, op) {
    switch (op) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num2 !== 0 ? num1 / num2 : 'Error';
        default: return num1;
    }
}

function clearDisplay() {
    displayScreen.textContent = '_';
    firstOperand = '';
    secondOperand = '';
    operator = null;
    waitingForSecondOperand = false;
    justCalculated = false;
}