const numbers = document.querySelectorAll('.numbers');
const displayText = document.querySelector("h3");
const operators = document.querySelectorAll('.operators');
const equals = document.querySelector('.equals');
const clear = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');

let firstValue = '';
let operatorValue = null;
let secondValue = '';
let shouldResetScreen = false;

equals.addEventListener('click', evaluate);
clear.addEventListener('click', clearScreen);
deleteButton.addEventListener('click', deleteNumber);


numbers.forEach((number) => {
  number.addEventListener('click', () => {
        appendNumber(number.textContent) 
  });
});


operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        setOperation(operator.textContent);
    });
  });

function appendNumber(number) {
    if (displayText.textContent === "0" || shouldResetScreen) resetScreen();
    displayText.textContent += number;
  }


function resetScreen() {
    displayText.textContent = "";
    shouldResetScreen = false;
}

   
function evaluate() {
    if (operatorValue === null || shouldResetScreen) return;
    if (operatorValue === "÷" && displayText.textContent === "0") {
      alert("You can't divide by 0!");
      clearScreen();
      return;
    }
    secondValue = displayText.textContent;
    displayText.textContent = roundResult(
      operate(firstValue, secondValue, operatorValue)
    );
    operatorValue = null;
  }



function roundResult(number) {
    return Math.round(number * 1000) / 1000;
}  

function clearScreen() {
    displayText.textContent = "0";
    firstValue = "";
    secondValue = "";
    operatorValue = null;
}


function setOperation(operator) {
    if (operatorValue !== null) evaluate();
    firstValue = displayText.textContent;
    operatorValue = operator;
    shouldResetScreen = true;
  }

   
function deleteNumber() {
    displayText.textContent = displayText.textContent.toString().slice(0, -1);
};


function operate(num1, num2, operator)
{
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (operator == '+') return num1 + num2;
    if (operator == '-') return num1 - num2;
    if (operator == 'x') return num1 * num2;
    if (operator == '÷') return num1 / num2;
}

