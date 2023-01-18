const testNumbers = require(`./testNumbers`);
const {expect} = require(`chai`);

describe(`Test Numbers`, () => {

    describe(`sumNumbers`, () => {
        it(`works with valid numbers`, () => {
            expect(testNumbers.sumNumbers(3, 5)).to.equal(`8.00`);
        });

        it(`works with negativ number`, () => {
            expect(testNumbers.sumNumbers(3, -5)).to.equal(`-2.00`);
        });

        it(`works with floating point`, () => {
            expect(testNumbers.sumNumbers(1.5555,0.3333)).to.equal(`1.89`);
        });

        it(`returns undefind with string parameters`, () => {
            expect(testNumbers.sumNumbers(`1`, `2`)).to.equal(undefined);
            expect(testNumbers.sumNumbers(1, `2`)).to.equal(undefined);
            expect(testNumbers.sumNumbers(`1`, 2)).to.equal(undefined);
        });

        it(`returns undefind with invalid parameters`, () => {
            expect(testNumbers.sumNumbers(null, null)).to.equal(undefined);
            expect(testNumbers.sumNumbers(1, null)).to.equal(undefined);
            expect(testNumbers.sumNumbers(null, 2)).to.equal(undefined);
        });
    })

    describe(`numberChecer`, () => {
        it(`works with odd value`, () => {
            expect(testNumbers.numberChecker(1)).to.contains('odd');
        });

        it(`works with even value`, () => {
            expect(testNumbers.numberChecker(2)).to.contains('even');
        });

        it(`works with odd string`, () => {
            expect(testNumbers.numberChecker(`1`)).to.contains('odd');
        });

        it(`works with even string`, () => {
            expect(testNumbers.numberChecker(`2`)).to.contains('even');
        });

        it(`works with empty string`, () => {
            expect(testNumbers.numberChecker(``)).to.contains('even');
        });

        it(`detects invalid parameter`, () => {
            expect(() => testNumbers.numberChecker(`a`)).to.throw;
        });

        it(`detects invalid parameter`, () => {
            expect(() => testNumbers.numberChecker(`a`)).to.throw();
        });
    })

    describe(`AverageSumArray`, () => {
        it(`works with integers`, () => {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
        });

        it(`works with floats`, () => {
            expect(testNumbers.averageSumArray([1.5, 2.5, 3.5])).to.equal(2.5);
        });
    })

});