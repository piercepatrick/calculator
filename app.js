const numbers = document.querySelectorAll('.numbers');
const displayText = document.querySelector("h3");
const operators = document.querySelectorAll('.operators');
const equals = document.querySelector('.equals');
const clear = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');

let firstValue = '';
let operatorValue;
let secondValue = '';
let operatorClicked = false;
let displayValueChars = 0;
let shouldResetScreen = false;

equals.addEventListener('click', evaluate);
clear.addEventListener('click', clearScreen);
deleteButton.addEventListener('click', deleteNumber);


numbers.forEach((number) => {
  number.addEventListener('click', () => {
    if (displayText.innerHTML.length >= 9)
    {
        alert('No more than 9 characters!');   
    } 
    else
    {
        if (operatorClicked == false)
        {
            displayText.innerHTML = displayText.innerHTML+number.innerHTML;
            secondValue = displayText.innerHTML;
        }
        else if (displayValueChars == 0)
        {

            displayValueChars++;
            displayText.innerHTML = '';
            displayText.innerHTML = number.innerHTML;
            secondValue = displayText.innerHTML;
            
        }
        else 
        {
            displayText.innerHTML = displayText.innerHTML+number.innerHTML;
            secondValue = displayText.innerHTML;
        }
    }
  });
});





operators.forEach((operator) => {
    operator.addEventListener('click', () => {
      operatorClicked = true;
      firstValue = displayText.innerHTML;
      operatorValue = operator.innerHTML;
    });
  });



   
function evaluate() {
    if (firstValue != '' && secondValue != '')
    {
        firstValue = parseFloat(firstValue);
        secondValue = parseFloat(secondValue,10);
        displayText.innerHTML = operate(firstValue, secondValue, operatorValue);
    }
    else 
    {
        alert('Enter A Valid Calculation')
        document.getElementById("clear").click();
    }
}

   
function clearScreen() {
    firstValue = '';
    operatorValue = '';
    secondValue = '';
    operatorClicked = false;
    displayValueChars = 0;
    displayText.innerHTML = '';
}



   
function deleteNumber() {
    displayText.innerHTML = displayText.innerHTML.substring(0, displayText.innerHTML.length - 1);
    secondValue = displayText.innerHTML;
};


function operate(num1, num2, operator)
{
    if (operator == '+') return num1 + num2;
    if (operator == '-') return num1 - num2;
    if (operator == 'x') return num1 * num2;
    if (operator == '÷') return num1 / num2;
}

// trying to fix multiple operators being clicked and first value not reseting.
// 