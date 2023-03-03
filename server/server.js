const express = require('express');
const bodyParser = require('body-parser')

// here we have to call express to the funciton runs and gives us an object
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

// we use static file serving and use the public folder
app.use(express.static('server/public'))


// this is the variable that hosts our total result
let totalResult = [{
    part1: '',
    operator: '',
    part2: '',
    total: 'test total',
    historical: ['1+2', '1+4'],
}]

// my add function
function addInputs (num1, num2) {
    let total = num1 + num2
    return total;
}

// my subtract function
function subtractInputs (num1, num2) {
    let total = num1 - num2;
    return total;
}

// my multiply function
function multiplyInputs ()

// my divide function



// this is our post on our sever side to recieve the posts sent from the client.
app.post('/calculator', (req, res) => {
    console.log('this is our post request.')

    // taking the all inputs object and seperating the properties into individual values to use for other functions

    console.log('this is the object from the client', req.body)
    let inputOne = req.body.part1
    let operator = req.body.operator1
    let inputTwo = req.body.part2

    // this is a check for the individual parts work properly
    console.log('my obhect as individual parts', inputOne, operator, inputTwo)

    // next i will need to create a switch statement 


    


    // add the total to the 
    totalResult.total.push(total)

    // in our post we need to be able to take the inputs and then have it calculate the answers

    res.sendStatus(201)
})

app.get('/calculator', (req, res) => {
    console.log('get request was made!!')
    res.send(totalResult)
})



// then we start up our server
app.listen(port, () => {
    console.log('listening on port', port)
})