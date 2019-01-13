import { assert as _assert } from 'chai';
import rewire from 'rewire';
var eventParser = rewire('../eventparser');
var assert = _assert;


var eventIdJson = [{id: 45}, {id: 48}];

describe('EventParserTests', function(){
    describe('getDeckIds', function(){
        it('Should Extract Event Ids from MtgTop8', function(){
            var getDeckIds = eventParser.__get__('getDeckIds');
            var results = getDeckIds(eventIdJson);
            assert.equal(results[0], 45);
            assert.equal(results[1], 48);
        })
    })
    describe('getDecksFromEvent', function(){
        it('Should extract deck information after parsing event information')
    })
})