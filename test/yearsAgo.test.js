import assert from "assert";
import yearsAgo from "../yearsAgo.js";

describe('The yearsAgo function', function () {
    it('should return the difference between the full year and how many years', function () {
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
    })

    it('should return the difference between the full year and how many years', function () {
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    })

});