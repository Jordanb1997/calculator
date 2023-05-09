let input = [];
let number1 = '';
let number2 = '';
let resetScreen = false;

const numpad = document.querySelectorAll('numpad');
const numberButtons = document.querySelectorAll('number');
const operatorButtons = document.querySelectorAll('operator');
const decimal = document.getElementById('decimal');
const enter = document.getElementById('enter');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const resultsField = document.getElementById('results');

//enter.addEventListener('click', evaluate);
//clearButton.addEventListener('click', clearCalculator);
//deleteButton.addEventListener('click', deleteNumber);
//decimal.addEventListener('click', addDecimal);

numberButtons.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
)

operatorButtons.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent))
)

function appendNumber(number) {
    if (currentOperationScreen.textContent === '0' || shouldResetScreen)
        resetScreen()
    currentOperationScreen.textContent += number
}

function roundResult(num) {
    return Math.round(num * 1000) / 1000;
}

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
    return num1 / num2;
}

function operate(num1, operator, num2) {
    if (operator === '+') {
        return addition(num1, num2);
    } else if (operator === '-') {
        return subtraction(num1, num2);
    } else if (operator === '*') {
        return multiplication(num1, num2);
    } else if (operator === '/') {
        return division(num1, num2);
    }
}