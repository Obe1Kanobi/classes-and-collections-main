const invoke = require('../invoke');

describe('Тестирование задачи "invoke"', () => {
test('Базовые случаи', () => {
        expect(invoke({a: {b: [1, 2, 3]}}, 'a.b', 'splice', [1, 2])).toMatchObject([2,3]);
        expect(invoke({a: 'asfaf'}, 'a', 'includes', ['sf'])).toBe(true);
        expect(invoke({a: 'asfaf'}, 'a', 'includes', ['b'])).toBe(false);
        expect(invoke({a: {b: [1, 2, 3], c: {d: {}}}}, 'a.c', 'hasOwnProperty', ['d'])).toBe(true);
        expect(invoke({a: {b: [1, 2, 3], c: {d: [1, 2, 3]}}}, 'a.c.d', 'filter', [item => item < 2])).toMatchObject([1]);
    });
});
