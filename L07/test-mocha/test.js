
const { expect } = require(`chai`);
const { sum } = require(`./myFormulas`);

describe(`Demo Test`, () => {
    it(`works with 5 and 3`, () => {
        expect(sum(5, 3)).to.equal(8);
    });
});