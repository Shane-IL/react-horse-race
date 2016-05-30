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

//TODO: Current config works with one socket, figure out how to manage and use multiple sockets.

io.on('connection', function(socket){
    //TODO:See how to get client data and assign id
    console.log('client app connected');

    socket.emit('getRaceData', null /*use race manager to process relevant data for client on initial connect*/);

    socket.on('setBet', function (betData) {
        BettingManager.setBet(socket.id, betData);
    });

    socket.on('lockBet', function () {
        BettingManager.lockBet(socket.id);
    });


    socket.on('pullOut', function () {
        BettingManager.deRegisterBet(socket.id);
    });
});


http.listen(8080, function(){
    console.log('listening on *:8080');
});


