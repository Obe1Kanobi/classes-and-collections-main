const Validator = require('../validator');

describe('Тестирование задачи "validator"', () => {
    test('Метод "isEmail"', () => {
        const validator = new Validator();

        expect(validator.isEmail('phphtml@mail.ru')).toBe(true);
        expect(validator.isEmail('ed@gmail.com')).toBe(true);
        expect(validator.isEmail('ed@gmail.')).toBe(false);
        expect(validator.isEmail('edfg@gmail')).toBe(false);
        expect(validator.isEmail('eagad@')).toBe(false);
        expect(validator.isEmail('')).toBe(false);
        expect(validator.isEmail()).toBe(false);
        expect(validator.isEmail('asfasf')).toBe(false);
    });

    test('Метод "isDomain"', () => {
        const validator = new Validator();

        expect(validator.isDomain('phphtml.net')).toBe(true);
        expect(validator.isDomain('phpml.com')).toBe(true);
        expect(validator.isDomain('phphtml.ru')).toBe(true);
        expect(validator.isDomain('')).toBe(false);
        expect(validator.isDomain()).toBe(false);
        expect(validator.isDomain('asafsa')).toBe(false);
    });

    test('Метод "isDate"', () => {
        const validator = new Validator();

        expect(validator.isDate('12.05.2020')).toBe(true);
        expect(validator.isDate('30.06.2023')).toBe(true);
        expect(validator.isDate('29.02.2023')).toBe(false);
        expect(validator.isDate('29.02.2020')).toBe(true);
        expect(validator.isDate('31.06.2020')).toBe(false);
        expect(validator.isDate('30.06')).toBe(false);
        expect(validator.isDate('31.2020')).toBe(false);
        expect(validator.isDate('31')).toBe(false);
        expect(validator.isDate('31.')).toBe(false);
        expect(validator.isDate('')).toBe(false);
        expect(validator.isDate()).toBe(false);
    });

    test('Метод "isPhone"', () => {
        const validator = new Validator();

        expect(validator.isPhone('+79715281517')).toBe(true);
        expect(validator.isPhone('89715281517')).toBe(true);
        expect(validator.isPhone('+7-971-528-15-17')).toBe(true);
        expect(validator.isPhone('+7(971) 528 15 17')).toBe(true);
        expect(validator.isPhone('+7(971)5281517')).toBe(true);
        expect(validator.isPhone('+7(971) 528-15-17')).toBe(true);
        expect(validator.isPhone('8 (971) 528-15-17')).toBe(true);
        expect(validator.isPhone('+7(971) 528-15-7')).toBe(false);
        expect(validator.isPhone('+7(71) 528-15-17')).toBe(false);
        expect(validator.isPhone('7(971) 528-15-17')).toBe(false);
    });
});
