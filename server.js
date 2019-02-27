// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



// http://expressjs.com/en/starter/basic-routing.html
app.get("/json", function (request, response) {
    console.log(request.headers);
    console.log(request.connection.remoteAddress);
    sleep(2000).then(() => {
        response.sendFile(__dirname + '/public/response.json');
    });
});
// http://expressjs.com/en/starter/basic-routing.html
app.get("/amp", function (request, response) {
    console.log(request.headers);
    console.log(request.connection.remoteAddress);
    response.sendFile(__dirname + '/public/amp.html');

});
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
    console.log(request.headers);
    console.log(request.connection.remoteAddress);
    response.sendFile(__dirname + '/public/amp.html');

});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});


async function init(){
    console.log(1)
    await sleep(10000)
    console.log(2)
}
function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}