/**

 * Описание задачи: Напишите функцию, которая возвращает новый объект без указанных значений.
 * Ожидаемый результат: ({ a: 1, b: 2 }, 'b') => { a: 1 }
 * @param {Object} object - любой объект
 * @param {?} args - список значений для удаления
 * @returns {Object} - новый объект без удаленных значений
 */

export const without = (object, ...args) => {
    throw new Error(`Напишите здесь свое решение ${object} ${args}`);
};

const data = {a: 1, b: 2, c: 3};
console.log(without(data, 'b', 'c')); // { a: 1 }
