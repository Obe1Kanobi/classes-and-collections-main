const Worker = require('../gettersAndSetters');

describe('Тестирование задачи "gettersAndSetters"', () => {
    test('Конструктор', () => {
        const worker = new Worker('Николай', 'Александров', 13, 17);

        expect(worker.getName()).toBe('Николай');
        expect(worker.getSurname()).toBe('Александров');
        expect(worker.getRate()).toBe(13);
        expect(worker.getDays()).toBe(17);
        expect(worker.getSalary()).toBe(221);
    });

    test('Сеттеры', () => {
        const worker = new Worker('Федор', 'Михайлович', 15, 16);

        expect(worker.getRate()).toBe(15);
        expect(worker.getDays()).toBe(16);
        expect(worker.getSalary()).toBe(240);

        worker.setRate(18);
        expect(worker.getRate()).toBe(18);
        expect(worker.getSalary()).toBe(288);

        worker.setDays(10);
        expect(worker.getDays()).toBe(10);
        expect(worker.getSalary()).toBe(180);
    });
});
