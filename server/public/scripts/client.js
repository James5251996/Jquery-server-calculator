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

    // creating a listener for the clear button
    $('#clearBtn').on('click', clearHistory)


}

// here is my function to clear the history array
function clearHistory () {
    let allEquations = [];
    let finalResult = [];
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
        getAllEquations();
        getFinalResult();
        inputReset();
    }).catch((response) => {
        alert('post did not work')
    })
}

// have to make the get request for the all equations array
function getAllEquations () {
    console.log('inside the get all equations function')
    $.ajax({
        method: 'GET',
        url: '/calculator'
    }).then((response) => {
        console.log('we got a response', response)
        renderAllEquations(response);
    }).catch((response) => {
        alert('get all equations did not work.')
    })
}

// have to make a get request for the final result
function getFinalResult() {
    console.log('inside get final result finction')
    $.ajax({
        method: 'GET',
        url: '/justfinalresult',
    }).then((response) => {
        console.log('we got our final response');
        renderFinalResult(response);
    }).catch((response) => {
        alert('get final result did not work')
    })
}


// have to make a render function to append the all equations array
function renderAllEquations (allEquations) {
    console.log('inside render all ')
    // now to append the results to show the history below.
    for (let i = 0; i < allEquations.length; i++) 
    $('#historicalInputs').append(`
    <li>${allEquations[i].firstInput} ${allEquations[i].operatorUsed} ${allEquations[i].secondInput} = ${allEquations[i].total}</li>
    `)
}


// have to make a render fucntion to append the final result.
function renderFinalResult (finalResult) {
    console.log('inside render final result');
    $('#displayTotal').append(`<h2>${finalResult[0]}</h2>`);
}


// a function to empty the input fields
function inputReset () {
    let firstInput = $('#firstNumber').val('');
    let secondInput = $('#secondNumber').val('');
}