

console.log('this is a test to see if server works correctly')

$(document).ready(onReady);

function onReady () {
    // this is a listener so that when ever i click a number button
    // it will run the number input function
    $('.numberBtn').on('click', numberInput)

    // this is a listener that will give me the operator i click on.
    // then it will run the function operator input.
    $('.operatorBtn').on('click', operatorInput)

    // this is a listener for when i click '=' it will send the data to the server
    // where it will then be computed
    $('.equalBtn').on('click', sendInputs);


}

//this is a fucntion that will give me the value of the button i click on.
function numberInput () {
    pickedNumber = $(this).text()
    console.log(pickedNumber);
}

// this is my operator function to where it will give me the operator i licked on
function operatorInput () {
    pickedOperator = $(this).text()
    console.log(pickedOperator);

}

// these are the inputs i will need to append later on.
let firstInput = $('#firstNumber').val();
let secondInput = $('#secondNumber').val();
let operator = '';
let answer = '';
let pastInputs = '';


console.log(firstInput)
console.log(secondInput)
console.log(operator)


function sendInputs () {
    console.log('inside send inputs function.')

    // this is delaring the variables that get put into the 
    let firstInput = $('#firstNumber').val();
    let secondInput = $('#secondNumber').val();
    let operator = pickedOperator;



    let allInputs = {
        part1: firstInput,
        operator1: operator,
        part2: secondInput,
    }
    // this is a console.log() to see what the allinputs is
    console.log(allInputs)

    // now i will make the post ajax to send the inputs to the server
    $.ajax({
        method: 'POST',
        url: '/calculator',
        data: allInputs
    }).then((response) => {
        console.log('the post worked!')
    }).catch((response) => {
        alert('post did not work')
    })
}

