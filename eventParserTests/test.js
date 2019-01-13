var chai = require('chai');
var rewire = require('rewire'), eventParser = rewire('../eventparser');
var assert = chai.assert;


var sampleJson = [{id: 45}, {id: 48}];

describe('EventParserTests', function(){
    describe('getDeckIds', function(){
        it('Should Extract Event Ids from MtgTop8', function(){
            var getDeckIds = eventParser.__get__('getDeckIds');
            var results = getDeckIds(sampleJson);
            assert.equal(results[0], 45);
            assert.equal(results[1], 48);
        })
    })
})