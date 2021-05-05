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

app.get('/greet/:name', (req, res) => {
    console.log(req.params); // req.params(object) = :name
    res.send(`Hello ${req.params.name}`);
})


app.get('/github/:username', (req, res) => {
    const { username } = req.params; // destructuring
    axios.get(`https://api.github.com/users/${username}`)
    .then(response => {
        console.log(response.data);
        res.json(response.data);
    })
    .catch(error => {
        console.log(error);
    });
})

app.get('/*', (req, res) => {
    console.log(req.params);
    res.send('404');
})

// 404 needs to be last route



const PORT = process.env.PORT || 8080;

// process.env.PORT will be the production location 

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
     // arrow function that checks to make sure server is active
});

// all routes go BEFORE app.listen