const Student = require('../student');

describe('Тестирование задачи "student"', () => {
    test('Конструктор', () => {
        const student = new Student('Николай', 'Александров', 2020);

        expect(student.name).toBe('Николай');
        expect(student.surname).toBe('Александров');
        expect(student.getFullName()).toBe('Николай Александров');
        expect(student.year).toBe(2020);
    });

    test('Метод "getCourse"', () => {
        const student = new Student('Василий', 'Олегович', 2021);

        expect(student.getCourse()).toBe(new Date().getFullYear() - 2021);
    });
});
