function add(a, b)
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

function multiply(a, b)
{
    return a * b;
}

function divide(a, b)
{
    return a / b;
}

function operate(num1, num2, operator)
{
    if (operator == '+') return add(num1,num2);
    if (operator == '-') return subtract(num1,num2);
    if (operator == '*') return multiply(num1,num2);
    if (operator == '/') return divide(num1,num2);
}

let firstValue = '';
let operatorValue;
let displayValue = '';
// buttons is a node list. It looks and acts much like an array.
const numbers = document.querySelectorAll('.numbers');
const displayText = document.querySelector("h3");

// we use the .forEach method to iterate through each button
numbers.forEach((number) => {
  // and for each one we add a 'click' listener
  number.addEventListener('click', () => {
    if (displayText.innerHTML.length >= 9)
    {
        alert('No more than 9 characters!');   
    } 
    else
    {
    displayText.innerHTML = displayText.innerHTML+number.innerHTML;
    displayValue = displayText.innerHTML;
    }
  });
});



const operators = document.querySelectorAll('.operators');

operators.forEach((operator) => {
    // and for each one we add a 'click' listener
    operator.addEventListener('click', () => {
      firstValue = displayText.innerHTML;
      operatorValue = operator.innerHTML;
    });
  });



const equals = document.querySelector('.equals');

   
equals.addEventListener('click', () => {
    if (firstValue != '' && displayValue != '')
    {
        displayText.innerHTML = operate(firstValue, displayValue, operatorValue);
    }
});

// next up: make strings ints
// first value is always displayed, display second value after it is clicked and then display total after equal sign is pushed.
