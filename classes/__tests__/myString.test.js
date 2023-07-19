const MyString = require('../myString');

describe('Тестирование задачи "myString"', () => {
    test('Метод "reverse"', () => {
        const str = new MyString();

        expect(str.reverse()).toBe(undefined);
        expect(str.reverse('')).toBe('');
        expect(str.reverse('abcde')).toBe('edcba');
    });

    test('Метод "ucFirst"', () => {
        const str = new MyString();

        expect(str.ucFirst()).toBe(undefined);
        expect(str.ucFirst('')).toBe('');
        expect(str.ucFirst('abcde')).toBe('Abcde');
        expect(str.ucFirst(' abcde')).toBe('Abcde');
    });

    test('Метод "ucWords"', () => {
        const str = new MyString();

        expect(str.ucWords()).toBe(undefined);
        expect(str.ucWords('')).toBe('');
        expect(str.ucWords('abcde')).toBe('Abcde');
        expect(str.ucWords('abcde abcde abcde')).toBe('Abcde Abcde Abcde');
        expect(str.ucWords(' abcde abcde abcde')).toBe('Abcde Abcde Abcde');
        expect(str.ucWords(' abcde    g   abcde abcde')).toBe('Abcde G Abcde Abcde');
    });
});
