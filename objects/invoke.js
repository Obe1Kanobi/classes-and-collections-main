/**

 * Описание задачи: Напишите функцию, которая вызывает метод массива на заданный путь объекта.
 * Ожидаемый результат: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]
 * @param {Object} object
 * @param {String} path - путь в объекте
 * @param {String} func - метод массива для исполнения
 * @param {Array} [args] - список аргументов
 * @returns {?}
 */

const invoke = (object, path, func, args) => {
    throw new Error(`Напишите здесь свое решение ${object} ${path} ${func} ${args}`);
};

const data = {a: {b: [1, 2, 3]}}
console.log(invoke(data, 'a.b', 'splice', [1, 2])); // [2, 3]

module.exports = invoke;
