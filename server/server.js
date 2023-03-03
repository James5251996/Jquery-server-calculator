const express = require('express');
const bodyParser = require('body-parser')

// here we have to call express to the funciton runs and gives us an object
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

// we use static file serving and use the public folder
app.use(express.static('server/public'))


// this is the variable that hosts our total result
let totalResult = {
    total: 'test total',
    historical: ['1+2', '1+4'],
}



// this is our post on our sever side to recieve the posts sent from the client.
app.post('/calculator', (req, res) => {
    console.log('this is our post request.')

    // in our post we need to be able to take the 2 inputs and then have it calculate the answers

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