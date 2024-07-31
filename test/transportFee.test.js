import assert from "assert";
import transportFee from "../transportFee.js";


describe('the transportFee function',function (){
    it('If you are working morning shift the transport cost is R20, afternoon shift is R10 then nightshift you pay nothing', function () {
    assert.equal(transportFee('morning'), 'R20');
    })
    it('If you are working morning shift the transport cost is R20, afternoon shift is R10 then nightshift you pay nothing', function () {
    assert.equal(transportFee('afternoon'), 'R10');
    })
    it('If you are working morning shift the transport cost is R20, afternoon shift is R10 then nightshift you pay nothing', function () {
    assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    })
})