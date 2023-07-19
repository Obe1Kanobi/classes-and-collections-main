const Worker = require('../worker');

describe('Тестирование задачи "worker"', () => {
    test('Конструктор', () => {
        const worker = new Worker('Илья', 'Ушаков', 9, 21);

        expect(worker.name).toBe('Илья');
        expect(worker.surname).toBe('Ушаков');
        expect(worker.rate).toBe(9);
        expect(worker.days).toBe(21);
        expect(worker.getSalary()).toBe(189);
    });
});
