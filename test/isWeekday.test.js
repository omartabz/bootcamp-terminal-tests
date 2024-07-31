import assert from "assert";
import isWeekday from "../isWeekday.js";

describe('The isWeekday function', function () {
    it('should return false if it not a weekday', function () {
        assert.equal(isWeekday('Saturday'), false);
    })
    it('should return false if it not a weekday', function () {
        assert.equal(isWeekday('Sunday'), false);
    })
    it('should return true if it a weekday', function () {
        assert.equal(isWeekday('Monday'), true);
    })
    it('should return true if it is a weekday', function () {
        assert.equal(isWeekday('Tuesday'), true);
    })
    it('should return true if it is a weekday', function () {
        assert.equal(isWeekday('Wednesday'), true);
    })
    it('should return true if it is a weekday', function () {
        assert.equal(isWeekday('Thursday'), true);
    })
    it('should return true if it is a weekday', function () {
        assert.equal(isWeekday('Friday'), true);
    });
})