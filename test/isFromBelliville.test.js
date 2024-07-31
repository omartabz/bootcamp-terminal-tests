import assert from "assert";
import isFromBelliville from "../isFromBelliville.js";

describe('The isFromBelliville function', function () {

    it('should return true if it is from Belliville', function () {
        assert.equal(isFromBelliville('CY 123'), true);
    });


    it('should return false if it is not from Belliville', function () {
});
    assert.equal(isFromBelliville('CJ 123'), false);
});