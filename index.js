let result;
let resultString;
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
        resultString = resultString + e.target.id
        showOnScreen(resultString)
    })
})

operatorButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
        number1 = Number(resultString)
        resultString = ""
        operator = e.target.id
        showOnScreen(operator)
    })
})

decimalButton.addEventListener("click", (e) => {
    if (resultString.includes(".") == false && resultString !== "") {
        resultString = resultString + e.target.id
        showOnScreen(resultString)
    }
})

enterButton.addEventListener("click", () => {
    number2 = Number(resultString)
    operate(operator, number1, number2)
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
        return addition(num1, num2);
    } else if (operator === '-') {
        return subtraction(num1, num2);
    } else if (operator === '*') {
        return multiplication(num1, num2);
    } else if (operator === '/') {
        return division(num1, num2);
    }
}

function showOnScreen(string) {
    resultsField.innerHTML = "<p>" + string + "</p>"
}