const numBtns = document.querySelectorAll(".num");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");
const currentDisplay = document.querySelector(".current-display");
const previousDisplay = document.querySelector(".previous-display");

let num1;
let num2;
let operator;

numBtns.forEach(button => {
    button.addEventListener("click", () => {
        if(num1 === undefined && num2 === undefined) {
            num1 = Number(button.textContent);
            displayCurrent(num1);
        }
        else if (num1 !== undefined && num2 === undefined) {
            num2 = Number(button.textContent);
            displayCurrent(num2);
            displayPrevious(num1);
        }
        else {
            num1 = num2;
            num2 = Number(button.textContent);
            displayCurrent(num2);
            displayPrevious(num1);
        }
        console.log(num1);
        console.log(num2);
    });
});


function add(){
    return num1 + num2;
}


function subtract(){
    return num1 - num2;
}


function multiply(){
    return num1 * num2;
}


function divide(){
    return num1 / num2;
}


function calculate(num1, num2, operator){
    num1 = num1;
    num2 = num2;
    operator = operatorBtn.textContent;

    switch (operator){
        case "+":
            add();
        case "-":
            subtract();
        case "*":
            multiply();
        case "/":
            divide();
    }
}


function displayCurrent(value) {
    currentDisplay.textContent = value;
}


function displayPrevious(value) {
    previousDisplay.textContent = value;
}