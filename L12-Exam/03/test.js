const companyAdministration = require(`./companyAdministration`);
const {expect} = require(`chai`);


describe(`Company Administration`, () => {
    describe(`Hiring Employee`, () => {
        it(`work with correct inputs`, () => {
            expect(companyAdministration.hiringEmployee(`Boris`, `Programmer`, 4)).to.equal(`Boris was successfully hired for the position Programmer.`);
        });
        it(`return succesfull hired message`, () => {
            expect(companyAdministration.hiringEmployee(`Aleks`, `Programmer`, 5)).to.equal(`Aleks was successfully hired for the position Programmer.`);
        });
        it(`return not aprovel answer`, () => {
            expect(companyAdministration.hiringEmployee(`Boris`, `Programmer`, 2)).to.equal(`Boris is not approved for this position.`);
        });
        it(`throw erroe if not programmer`, () => {
            expect(() => companyAdministration.hiringEmployee(`Boris`, `Player`, 2)).to.be.throw();
        });
        
    });

    describe(`Calculate Salary`, () => {
        it(`work with number as value`, () => {
            expect(companyAdministration.calculateSalary(10)).to.equal(150);
        });
        it(`work with if hours are grater than 160`, () => {
            expect(companyAdministration.calculateSalary(200)).to.equal(4000);
        });
        it(`throw error if input is not a number type`, () => {
            expect(() => companyAdministration.calculateSalary(`Test`)).to.throw(`Invalid hours`);
        });
        it(`throw error if input is not a neagtive number`, () => {
            expect(() => companyAdministration.calculateSalary(-10)).to.throw(`Invalid hours`);
        });
    
    });

    describe(`Fired Employee`, () => {
        it(`removes if all parameters are correct`, () => {
            expect(companyAdministration.firedEmployee([`Bobi`, `Aleks`], 1)).to.equal(`Bobi`);
        });
        it(`removes first element`, () => {
            expect(companyAdministration.firedEmployee([`Bobi`, `Aleks`, `Ani`], 0)).to.equal(`Aleks, Ani`);
        });
        it(`removes last element`, () => {
            expect(companyAdministration.firedEmployee([`Bobi`, `Aleks`, `Ani`], 2)).to.equal(`Bobi, Aleks`);
        });
        it(`removes mid element`, () => {
            expect(companyAdministration.firedEmployee([`Bobi`, `Aleks`, `Ani`], 1)).to.equal(`Bobi, Ani`);
        });
        it(`throw if index is negative`, () => {
            expect(() => companyAdministration.firedEmployee([`Bobi`, `Aleks`, `Ani`], -1)).to.throw();
        });
        it(`throw error if index is not a number`, () => {
            expect(() => companyAdministration.firedEmployee([`Bobi`, `Aleks`], `a`)).to.throw();
        });
        it(`throw error if array is not array`, () => {
            expect(() => companyAdministration.firedEmployee(`Bobi`, 1)).to.throw();
        });
        it(`throw error if index is out of bound`, () => {
            expect(() => companyAdministration.firedEmployee([`Bobi`], 7)).to.throw();
        });
    });
});