var $ = require('jquery');

var BettingManager = new function () {
    var _bettingData = {
        bettingPool: 0,
        bets: {},
        betsPerHorse: {}
    };

    this.setBet = function(clientId, betData){
        _bettingData.bettingPool += betData.betAmount;
        _bettingData.bets[clientId] = {horse: betData.horse, betAmount: betData.betAmount, locked: false}
        if (!_bettingData.betsPerHorse[betData.horse]) {
            _bettingData.betsPerHorse[betData.horse] = 1;
        }
        else{
            _bettingData.betsPerHorse[betData.horse]++;
        }
    };

    this.lockBet = function(clientId){
        _bettingData.bets[clientId].locked = true;
    };


    this.deRegisterBet = function (clientId) {
        var bet =  _bettingData.bets[clientId];
        if (!bet.locked) {
            _bettingData.bettingPool -= bet.betAmount;
            delete _bettingData.bets[clientId];
        }
    };

    function getResults(winningHorse){
        var resultsData = {winners: []};
        //TODO: handle case where horse has no bets
        var winnings = _bettingData.bettingPool/ _bettingData.betsPerHorse[winningHorse];
        $.each(_bettingData.bets, function (clientId, betData) {
            if($.inArray(betData.horse, winningHorse)){
                resultsData.winners.push({clientId: clientId, winnings: winnings})
            }
        });
    }
}();