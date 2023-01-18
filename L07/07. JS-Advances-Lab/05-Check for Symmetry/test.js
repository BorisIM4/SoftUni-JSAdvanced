
const { expect } = require(`chai`);
const isSymmetric = require(`./05.symmetry`);

describe(`Symmetry Checker`, () => {
    it(`return true for symetric array`, () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it(`returns false for non-symetric array`, () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    }); 
});