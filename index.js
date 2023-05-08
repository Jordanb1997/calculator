let inputArray = [];

let num1;
let operator;
let num2;

function addition(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1, num2;
}

function operate(num1, operator, num2) {
    if (operator === '+') {
        addition(num1, num2)
    } else if (operator === '-') {
        subtraction(num1, num2)
    } else if (operator === '*') {
        multiplication(num1, num2)
    } else if (operator === '/') {
        division(num1, num2)
    }
}