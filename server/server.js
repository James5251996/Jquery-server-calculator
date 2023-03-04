const express = require('express');
const bodyParser = require('body-parser')

// here we have to call express to the funciton runs and gives us an object
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

// we use static file serving and use the public folder
app.use(express.static('server/public'))


// this is the variable that hosts our total result
let allEquations = []

let finalResult = [];


// my add function
function addInputs (num1, num2) {
    let total = num1 + num2;
    console.log(total);
    return total;
};

// my subtract function
function subtractInputs(num1, num2) {
    let total = num1 - num2;
    console.log(total);
    return total;
}

// my multiply function
function multiplyInputs(num1, num2) {
    let total = num1 * num2
    console.log(total)
    return total
}

// my divide function
function divideInputs(num1, num2) {
    let total = num1 / num2;
    console.log(total)
    return total;
}



// this is our post on our sever side to recieve the posts sent from the client.
app.post('/calculator', (req, res) => {
    console.log('this is our post request.')

    // taking the all inputs object and seperating the properties into individual values to use for other functions

    console.log('this is the object from the client', req.body)
    let inputOne = Number(req.body.part1)
    let operator = req.body.operator1
    let inputTwo = Number(req.body.part2)

    // this is a check for the individual parts work properly
    console.log('my obhect as individual parts', inputOne, operator, inputTwo)

    // next i will need to create a switch statement 
    switch (operator) {
        case '+':
            total = addInputs(inputOne, inputTwo);
            console.log('add fucntion worked');
            break;
        case '-':
            total = subtractInputs(inputOne, inputTwo);
            console.log('subtract function worked');
            break;
        case '*':
            total = multiplyInputs(inputOne, inputTwo);
            console.log('multiply function worked');
            break;
        case '/':
            total = divideInputs(num1, num2);
            console.log('divide funciton worked')
            break;
    };

    // console.log to test that the switch worked.
    console.log(total)




    // add the total to the object and add total to a new variable. and add the variable back to object.
    const allInputsToAddToArray = {
        firstInput: inputOne,
        operatorUsed: operator,
        secondInput: inputTwo,
        total: total,
    }
    
    allEquations.push(allInputsToAddToArray);
    console.log(allEquations)

    // here i will be sending the result to a seperate variable to be called later.

    finalResult.unshift(total)
    console.log('the total is:', finalResult)

    // in our post we need to be able to take the inputs and then have it calculate the answers

    res.sendStatus(201)
})

app.get('/calculator', (req, res) => {
    console.log('get request was made!!');
    res.send(allEquations);
})

app.get('/justfinalresult', (req, res) => {
    console.log('second get request worked');
    res.send(finalResult);
})



// then we start up our server
app.listen(port, () => {
    console.log('listening on port', port)
})