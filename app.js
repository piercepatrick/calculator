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
    if (operator == '+') add(num1,num2);
    if (operator == '-') subtract(num1,num2);
    if (operator == '*') multiply(num1,num2);
    if (operator == '/') divide(num1,num2);
}

// loop through number buttons adding event listeners to each so that when they are clicked h3 changes to that number

// buttons is a node list. It looks and acts much like an array.
const numbers = document.querySelectorAll('.numbers');
const displayText = document.querySelector("h3");
// we use the .forEach method to iterate through each button
numbers.forEach((number) => {

  // and for each one we add a 'click' listener
  number.addEventListener('click', () => {
      //displayText.append(number.innerHTMLl);
    displayText.innerHTML = number.innerHTML;
    let displayValue = number.innerHTML;
  });
});