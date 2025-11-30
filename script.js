const numBtns = document.querySelectorAll(".num");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");
const currentDisplay = document.querySelector(".current-display");
const previousDisplay = document.querySelector(".previous-display");

let previousNum;
let currentNum;
let operator;

numBtns.forEach(button => {
    button.addEventListener("click", () => {
        display(button.textContent);
        if(previousNum === undefined && currentNum === undefined) {
            previousNum = Number(button.textContent);
        }
        else if (previousNum !== undefined && currentNum === undefined) {
            currentNum = Number(button.textContent);
        }
        else {
            previousNum = currentNum;
            currentNum = Number(button.textContent);
        }
        console.log(previousNum);
        console.log(currentNum);
    });
});


function add(){
    return previousNum + currentNum;
}


function subtract(){
    return previousNum - currentNum;
}


function multiply(){
    return previousNum * currentNum;
}


function divide(){
    return previousNum / currentNum;
}


function calculate(num1, num2, operator){
    num1 = previousNum;
    num2 = currentNum;
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