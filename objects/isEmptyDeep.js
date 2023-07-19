/**

 * Описание задачи: Напишите функцию, которая делает глубокую проверку на пустоту объекта.
 * Пустые значения: '', null, NaN, undefined, [], {}
 * Ожидаемый результат: ({}) => true,
 ({ a: { b: undefined } }) => true,
 ({ a: { b: [] } }) => true
 * @param {Object} object - любой объект
 * @returns {boolean}
 */

export const isEmptyDeep = (object) => {
    throw new Error(`Напишите здесь свое решение ${object}`);
};

const data = {a: {b: undefined}};
const data2 = {a: {b: 1}};
console.log(isEmptyDeep(data)); // true
console.log(isEmptyDeep(data2)); // false
