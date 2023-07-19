const intersection = require('../intersectionDeep');

describe('Тестирование задачи "intersectionDeep"', () => {
    test('Невалидные параметры функции', () => {
        expect(intersection({a: 3, b: 2})).toMatchObject({});
        expect(intersection(undefined, {c: 5, b: 2})).toMatchObject({});
    });

    test('Базовые случаи', () => {
        expect(intersection({a: 1, b: 2}, {c: 1, b: 2})).toMatchObject({ b: 2 });
        expect(intersection({a: 1, b: 0}, {c: 1, b: 0})).toMatchObject({ b: 0 });
        expect(intersection({a: 1, b: ''}, {c: 1, b: ''})).toMatchObject({ b: '' });
        expect(intersection({a: 1, b: '', c: false}, {a: 1, b: '', c: false})).toMatchObject({ a: 1, b: '', c: false });
        expect(intersection({a: 0, b: true, c: false}, {a: 1, b: true, c: false})).toMatchObject({ b: true, c: false });
        expect(intersection({a: 1, b: 2, c: 1}, {c: 1, b: 2})).toMatchObject({ c: 1, b: 2 });
        expect(intersection({a: 1, b: 2, c: 1}, {d: 1, e: 2})).toMatchObject({});
        expect(intersection({a: 1, b: 2, c: 1}, {c: 1, a: 2, b: 2})).toMatchObject({c: 1});
        expect(intersection({a: 1, b: 2}, {})).toMatchObject({});
    });

    test('Сложные случаи', () => {
        expect(intersection({a: 1, b: {a: 1, b: 2}}, {c: 1, b: {a: 1}})).toMatchObject({ b: {a: 1} });
        expect(intersection({a: 1, b: {a: {a: 0}}}, {c: 1, b: {a: {a: 1}}})).toMatchObject({});
        expect(intersection({a: 1, b: {a: {a: 0, b: 0}}}, {c: 1, b: {a: {a: 1, b: 0}}})).toMatchObject({b: {a: {b: 0}}});
        expect(intersection({a: 1, b: null}, {c: 1})).toMatchObject({});
        expect(intersection({a: 1, b: null}, {c: 1,  b: null})).toMatchObject({b: null});
        expect(intersection({c: 1, b: null}, {c: 1,  b: {}})).toMatchObject({c: 1});
    });
});
