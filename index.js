// imports

const express = require('express');

const app = express();
// makes an instance of an app that uses the express package

const axios = require('axios');
// Home route

app.get('/', function(req,res){
    // what to do before returning data
    // send a response at the end
    res.send('Hello World!');
});

//first parameter will alway be the route, so home route is '/'

// app.get('/', (req,res) =>{
//     res.send('Hello World!')
// });
// another way to write this function

app.get('/sei', function(req,res){
    // what to do before returning data
    // send a response at the end
    res.send('SEI 412');
});

// '/sei' makes new location that you can get to with /sei at the end of url

app.get('/rockets', (req, res) => {
    // access an API and return some data
    axios.get('https://api.spacexdata.com/v3/rockets')
    .then(response => {
        // within this block of code
        // --start--
        console.log(response.data);
        res.send(response.data);
        // --finish--
    })
    .catch(error => {
        console.log(error);
    })
})


app.listen(8080, () => {
    console.log(`server is listening on PORT 8080`);
    // arrow function that checks to make sure server is active
});



const PORT = process.env.PORT || 8080;

// process.env.PORT will be the production location 

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});