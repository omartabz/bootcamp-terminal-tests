import assert from 'assert';
import regCheck from '../regCheck.js';

describe('The regCheck function', function () {
    it('should return true if it is a registration number from GP, L, EC, MP', function () {
assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    })

    it('should return false if it is a registration number from GP, L, EC, MP ', function () {
 
assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
});

it('should return true if it is a registration number from GP, L, EC, MP ', function () {
assert.equal(regCheck('5566 L', 'L'), true);
});

it('should return false if it is a registration number from GP, L, EC, MP ', function () {
assert.equal(regCheck('5566 L', 'M'), false);
});

it('should return true if it is a registration number from GP, L, EC, MP', function () {
assert.equal(regCheck('ERT 123 EC', 'EC'), true);
})
it('should return false if it is a registration number from GP, L, EC, MP ', function () {
assert.equal(regCheck('ERT 123 EC', 'GP'), false);
});

it('should return true if it is a registration number from GP, L, EC, MP', function () {
assert.equal(regCheck('FGT 123 MP', 'MP'), true);
});
it('should return false if it is a registration number from GP, L, EC, MP', function () {
assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    })
});