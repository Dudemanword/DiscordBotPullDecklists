var mtg = require('mtgtop8');

var parseDeckPercentage = function(events){
    var eventIds = getDeckIds(events);
    var deckNames = getDecksFromEvent(eventIds);
}

var getDeckIds = function(events){
    var idArray = [];
    events.forEach(element => {
        idArray.push(element.id);
    });
    return idArray;
}

var getDecksFromEvent = function(eventIds){
    var deckInformation;
    eventIds.forEach(element => {
        mtg.eventInfo(element, function(err, event){
            event.forEach(element => {
                deckInformation.push(element);
            })
        })
    })
}

module.exports = {parseDeckPercentage: parseDeckPercentage};