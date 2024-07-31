import assert from "assert";
import countRegNumber from "../countRegNumber.js";

describe('The countRegNumbers function', function () {

    it('should return the number of registration numbers', function () {
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
    });


    it('should return the number of registration numbers', function () {
    });
    var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
    assert.equal(regCount, 3);
});








