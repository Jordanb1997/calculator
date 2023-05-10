let result;
let resultString = "";
let enterClicked = false;

let number1 = '';
let number2 = '';
let operator = '';

//event listeners
const numpad = document.querySelectorAll('.numpad');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const decimalButton = document.getElementById('decimal');
const enterButton = document.getElementById('enter');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const resultsField = document.getElementById('results');

numberButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
        switch (true) {
            case (enterClicked == true):
                resultString = ""
                enterClicked = false
                break;

            default:
                break;
        }
        resultString = resultString + getValue(e.target.id)
        showOnScreen(resultString)
    })
})

operatorButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
        number1 = Number(resultString)
        resultString = ""
        operator = getValue(e.target.id)
        showOnScreen(operator)
    })
})

decimalButton.addEventListener("click", (e) => {
    if (resultString.includes(".") == false && resultString !== "") {
        resultString = resultString + getValue(e.target.id)
        showOnScreen(resultString)
    }
})

enterButton.addEventListener("click", () => {
    number2 = Number(resultString)
    operate(number1, operator, number2)
    showOnScreen(result)
    resultString = result
    enterClicked = true
})

clearButton.addEventListener("click", () => {
    resultString = ""
    showOnScreen(resultString)
})

deleteButton.addEventListener("click", () => {
    switch (true) {
        case (resultString !== ""):
            resultString = resultString.slice(0, (resultString.length - 1))
            showOnScreen(resultString)
            break;

        default:
            break;
    }
})


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
        result = addition(num1, num2);
    } else if (operator === '-') {
        result = subtraction(num1, num2);
    } else if (operator === '*') {
        result = multiplication(num1, num2);
    } else if (operator === '/') {
        result = division(num1, num2);
    }
}

function showOnScreen(string) {
    resultsField.innerHTML = "<p>" + string + "</p>"
}

function getValue(buttonId) {
    switch (true) {
        case (buttonId === "one"):
            return '1'
        case (buttonId === "two"):
            return '2'
        case (buttonId === "three"):
            return '3'
        case (buttonId === "four"):
            return '4'
        case (buttonId === "five"):
            return '5'
        case (buttonId === "six"):
            return '6'
        case (buttonId === "seven"):
            return '7'
        case (buttonId === "eight"):
            return '8'
        case (buttonId === "nine"):
            return '9'
        case (buttonId === "zero"):
            return '0'
        case (buttonId === "add"):
            return '+'
        case (buttonId === "subtract"):
            return '-'
        case (buttonId === "multiply"):
            return '*'
        case (buttonId === "divide"):
            return '/'
        case (buttonId === "decimal"):
            return '.'
        default:
            break;
    }
}