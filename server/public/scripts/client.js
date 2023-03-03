

console.log('this is a test to see if server works correctly')

$(document).ready(onReady);

function onReady () {
    // this is a listener so that when ever i click a number button
    // it will run the number input function
    $('.numberBtn').on('click', numberInput)

    // this is a listener that will give me the operator i click on.
    // then it will run the function operator input.
    $('.operatorBtn').on('click', operatorInput)


}

// this is a fucntion that will give me the value of the button i click on.
function numberInput () {
    pickedNumber = $(this).text()
    console.log(pickedNumber);
}

// this is my operator function to where it will give me the operator i licked on
function operatorInput () {
    pickedOperator = $(this).text()
    console.log(pickedOperator);
}

let firstInput = '';
let secondInput = '';
let operator = operatorInput();
let answer = '';
let pastInputs = '';