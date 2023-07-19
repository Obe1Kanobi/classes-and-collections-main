// Как создавать классы

class MyClass {
    // методы класса
    constructor() { ... }
    method1() { ... }
    method2() { ... }
    method3() { ... }
    ...
  }

  //Пример класса и его вызова
  class User {

    constructor(name) {  // конструктор в классе
      this.name = name;
    }
  
    sayHi() {  //метод в классе
      alert(this.name);
    }
  
  }

  // ещё пример класса
  
  // Использование:
  let user = new User("Иван");
  user.sayHi();

  class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
  }
  
  // класс - это функция
  alert(typeof User); // function
  
  // ...или, если точнее, это метод constructor
  alert(User === User.prototype.constructor); // true
  
  // Методы находятся в User.prototype, например:
  alert(User.prototype.sayHi); // sayHi() { alert(this.name); }
  
  // в прототипе ровно 2 метода
  alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi


  /////////////////////////////////////////////////Пример геттеров(сеттеров)
  class User {

    constructor(name) {
      // вызывает сеттер
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        alert("Имя слишком короткое.");
        return;
      }
      this._name = value;
    }
  
  }
  
////////При объявлении класса геттеры/сеттеры создаются на User.prototype, вот так:

  let user = new User("Иван");
  alert(user.name); // Иван
  
  user = new User(""); // Имя слишком короткое.


  Object.defineProperties(User.prototype, {
    name: {
      get() {
        return this._name
      },
      set(name) {
        // ...
      }
    }
  });

///////////////  Пример с вычисляемым свойством в скобках [...]:

class User {

  ['say' + 'Hi']() {
    alert("Привет");
  }

}

new User().sayHi();

////////////////////////////////Базовый синтаксис для классов выглядит так:

class MyClass {
    prop = value; // свойство
    constructor(...) { // конструктор
      // ...
    }
    method(...) {} // метод
    get something(...) {} // геттер
    set something(...) {} // сеттер
    [Symbol.iterator]() {} // метод с вычисляемым именем (здесь - символом)
    // ...
  }


  class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }
  
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();

  
/////////////////////////////////////////В следующем примере приведены основные операции со словарём:
//// Словари, тип Map
JS 

var sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow").set("elephant", "toot");
//вызов функции .set возвращает Map, поэтому set можно объединять в цепочки

sayings.set("dog", "гав-гав"); // заменить значение по ключу

sayings.size; // 3
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");

for (var [key, value] of sayings) {
  console.log(key + " goes " + value);
}
// "cat goes meow"
// "elephant goes toot"