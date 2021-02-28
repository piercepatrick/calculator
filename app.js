function operate(num1, num2, operator)
{
    if (operator == '+') return num1 + num2;
    if (operator == '-') return num1 - num2;
    if (operator == 'x') return num1 * num2;
    if (operator == '÷') return num1 / num2;
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
        else if (displayValueChars == 0)
        {

            displayValueChars++;
            displayText.innerHTML = '';
            displayText.innerHTML = number.innerHTML;
            displayValue = displayText.innerHTML;
            
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
      console.log(operatorValue)
    });
  });


const equals = document.querySelector('.equals');

   
equals.addEventListener('click', () => {
    if (firstValue != '' && displayValue != '')
    {
        firstValue = parseFloat(firstValue);
        displayValue = parseFloat(displayValue,10);
        displayText.innerHTML = operate(firstValue, displayValue, operatorValue);
    }
    else 
    {
        alert('Enter A Valid Calculation')
        document.getElementById("clear").click();
    }
});

const clear = document.querySelector('#clear');

   
clear.addEventListener('click', () => {
    firstValue = '';
    operatorValue = '';
    displayValue = '';
    operatorClicked = false;
    displayValueChars = 0;
    displayText.innerHTML = '';
});

const deleteButton = document.querySelector('#delete');

   
deleteButton.addEventListener('click', () => {
    displayText.innerHTML = displayText.innerHTML.substring(0, displayText.innerHTML.length - 1);
});

// next up:
// delete button bug
// 