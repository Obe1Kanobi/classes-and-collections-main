/**

 * Описание задачи: Напишите функцию, которая поверхностно сравнивает два объекта.
 * Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
 * @param {Object<string | number>} firstObject - объект с примитивами
 * @param {Object<string | number>} secondObject - объект с примитивами
 * @returns {boolean}
 */

export const isEqual = (firstObject, secondObject) => {
    throw new Error(`Напишите здесь свое решение ${firstObject} ${secondObject}`);
};

const data = {a: 1, b: 1};
const data2 = {a: 1, b: 1};
const data3 = {a: 1, b: 2};
console.log(isEqual(data, data2)); // true
console.log(isEqual(data, data3)); // false
