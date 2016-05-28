var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var _trackData = {
    trackLength: 400,
    maxPace: 40,
    minPace: 10,
    paceSize: 5
};

var _horseNamePool = [
    "Agile", "Ferdinand", "Clyde", "Meridian", "Cannonade", "Apollo", "Fonso", "Chant", "Riley", "Cavalcade", "Swale", "Barbaro", "Rosebud", "Montrose", "Silver Charm", "Grindstone"
];

var _horseAvatarPool = [];

var _bettingData = {
    bettingPool: 0,
    bets: []
};

//TODO: Current config works with one socket, figure out how to manage and use multiple sockets.

io.on('connection', function(socket){
    //TODO:See how to get client data and assign id
    console.log('client app connected');

    socket.emit('getRaceData', null /*use race manager to process relevant data for client on initial connect*/);

    socket.on('lockBet', function (betData) {
       //use id to save bet amount and horse per user and increment betting pool
    });

    socket.on('pullOut', function () {
        //deregister client from bettingData
    });
});


http.listen(8080, function(){
    console.log('listening on *:8080');
});


