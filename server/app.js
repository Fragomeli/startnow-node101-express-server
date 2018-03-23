// import files and packages up here
const express = require("express");
const data = require('./data.json');
// create your express server below
var app = express();

//app.use()
// THIS ONE BELOW IS IMPORTANT 
app.get("/", (req, res) => {
    res.send("Today is the first day of the rest of your life! Today is " + new Date());
});
// add your routes and middleware below

// finally export the express application
module.exports = app;

app.use(express.static(__dirname + '/public'));
app.get('/data',(req, res) => {
    res.send(data);
});

// app.post ('/ajax', (req, res)=>{
//     res.type('json');
//     res.end(JSON.stringify());
// });

var server = app.listen(8080);