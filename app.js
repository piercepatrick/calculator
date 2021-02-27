function operate(num1, num2, operator)
{
    if (operator == '+') return num1 + num2;
    if (operator == '-') return num1 - num2;
    if (operator == '*') return num1 * num2;
    if (operator == '/') return num1 / num2;
}

let firstValue = '';
let operatorValue;
let displayValue = '';
let operatorClicked = false;
let displayValueChars = 0;
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
        if (operatorClicked == false)
        {
            displayText.innerHTML = displayText.innerHTML+number.innerHTML;
            displayValue = displayText.innerHTML;
        }
        else if (operatorClicked == true && displayValueChars == 0)
        {
            displayValueChars++;
            displayText.innerHTML = '';
            displayText.innerHTML = number.innerHTML;
            displayValue = displayValue.innerHTML;
        }
        else 
        {
            displayText.innerHTML = displayText.innerHTML+number.innerHTML;
            displayValue = displayText.innerHTML;
        }
    }
  });
});



const operators = document.querySelectorAll('.operators');

operators.forEach((operator) => {
    // and for each one we add a 'click' listener
    operator.addEventListener('click', () => {
      operatorClicked = true;
      firstValue = displayText.innerHTML;
      operatorValue = operator.innerHTML;
    });
  });



const equals = document.querySelector('.equals');

   
equals.addEventListener('click', () => {
    if (firstValue != '' && displayValue != '')
    {
        firstValue = parseFloat(firstValue);
        displayValue = parseFloat(displayValue);
        displayText.innerHTML = operate(firstValue, displayValue, operatorValue);
    }
});

// next up: make strings ints - check
// first value is always displayed, display second value after it is clicked and then display total after equal sign is pushed.
// when writing clear listener, make operator clicked false. reset displayvaluechars to 0