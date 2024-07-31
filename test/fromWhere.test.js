import assert from "assert";
import fromWhere from "../fromWhere.js";

describe('The fromWhere function', function () {
    it('returns the town the car is from. If the reg number starts with CY return Bellville, for CJ return Paarl, for CA return Cape Town otherwise return Some other place!', function () {
        assert.equal(fromWhere('CY 567489'), 'Bellville');
    })
    it('returns the town the car is from. If the reg number starts with CY return Bellville, for CJ return Paarl, for CA return Cape Town otherwise return Some other place!', function () {
        assert.equal(fromWhere('CJ 343502'), 'Paarl');
    })
    it('returns the town the car is from. If the reg number starts with CY return Bellville, for CJ return Paarl, for CA return Cape Town otherwise return Some other place!', function () {
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
    })
    it('returns the town the car is from. If the reg number starts with CY return Bellville, for CJ return Paarl, for CA return Cape Town otherwise return Some other place!', function () {
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    })
})

