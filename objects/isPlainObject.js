/**

 * Описание задачи: Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null
 и т.п.
 * Ожидаемый результат: true если это объект, false в противном случае. ({ a: 1 }) => true, ([1, 2, 3]) => false
 * @param element - элемент для проверки
 * @returns {boolean}
 */

export const isPlainObject = (element) => {
    throw new Error(`Напишите здесь свое решение ${element}`);
};

const data = { a: 1 };
console.log(isPlainObject(data)); // true
