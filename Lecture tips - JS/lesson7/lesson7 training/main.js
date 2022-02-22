//                                      lesson7 training lesson

//                                    OBJECT, ADD OBJECT - ОБʼЄКТ, ДОДАВАННЯ ПОЛЯ В ОБʼЄКТ

//                                       Поля в обʼєкти можна додавати двома способами

// 1)

let user1 = {name: 'Vinona'};
user1.surname = 'Rider';
console.log(user1);

// 2) цей варіант є більш динамічним, так як в цьому випадку можна додавати в ключі обʼєкти за якимось посиланням

let user2 = user1;
user2['age'] = 33;
console.log(user2);

// 3) З допомогою циклу закладемо значення елементів в порожній обʼєкт

let user3 = {};                                 // У нас є порожній обʼєкт
let fields = ['name','surname','age'];          // Тут ми зазначили поля, які ми хочемо додати в обʼєкт
for (let field of fields) {                     // Ми проітерували масив fields, щоб мати можливість звернутись до кожного ключа
    user3[field] = 'smth'                       // Ми вкладаємо кожне значення field з масиву fields як ключ в обʼєкт user3
}                                               // На цьому етапі є можливість значенням надати посилання,які будуть заповнюватись
console.log(user3)                              // В певній формі

// 4) З допомогою циклу поєднаємо масив з ключами обʼєкта та масив з значеннями ключів

let user4 = {};
let keys = ['name','surname','age'];
let values = ['Salma','Hayek',50];

for (let i = 0; i < values.length; i++) {
    user4[keys[i]] = values[i]
}
console.log(user4)

//                                          FUNCTION IN OBJECTS - ФУНКЦІЇ В ОБʼЄКТАХ

// Наприклад, нам потрібна функція, яка б використовувала значення обʼєкта для привітання

let user5 = {name: 'Vanessa',surname: 'Paradis', age: 32};

function greeting (object) {
    return `Hello, my name is ${object.name} ${object.surname} and I'm ${object.age}`
}
console.log(greeting(user5));

// Однак, подібну функцію можна зробити внутрішньою, тобто частиною або ключем обʼєкта, щоб вона викликалась лише ним
// І звертатись до неї з допомогою this, який належить тільки батьківському обʼєкту (! однак this не працює зі стрілочною ф-цією)

let user6 = {
    name: 'Vanessa',
    surname: 'Paradis',
    age: 32,
    greetings: function () {
        return `Hi there, my name is ${this.name} ${this.surname}`
    }
};
console.log(user6.greetings());

//                                                 CLOSURES - ЗАМИКАННЯ

//                              Замикання - це можливість функції мати в собі внутрішню функцію, яка зберігає
//                                                посилання на зовнішню змінну

function user7 (name,age) {                              // створюємо функцію user, яка буде приймати в себе значення name i age
    let object = {name: name, age: age}                 // прийняті значення вона буде переносити в новий обʼєкт, а саме в його ключі name i age
    return object;
}
console.log(user7('Vanessa',30));



function userCreator (name,age) {                              // створюємо функцію user, яка буде приймати в себе значення name i age
    let object = {name:name,age:age}                           // прийняті значення вона буде переносити в новий обʼєкт, а саме в його ключі name i age
    return {                                                   // задаючи return ми вказуємо що повертаємо обʼєкт, в якому є функція getName, що дозволяє
        getName: function () {                                 // нам повернути задане імʼя
            return object.name
        },
        setAge: function (newAge) {                             // функцією setAge ми будемо приймати нове значення age
            return object.age = newAge;                         // та заміняти те, яке існує в нашому обʼєкті
        }
    }
}
let manipulator = userCreator('Vinona',32);         // змінна маніпулятор буде викликати функцію userCreator
console.log(manipulator.getName())                             // і звернувшись до маніпулятора і його функції getName можна вивести задане імʼя
console.log(manipulator.setAge(35))                    // функція setAge виведе нам нове значення age


//                                                             CONSTRUCTORS - ФУНКЦІЇ-КОНСТРУКТОРИ

function User (name,surname,age) {                            // ф-ції конструктору User ми надаємо майбутні значення ключів, які ф-ція прийматиме - name,surname,age
    this.name = name;                                          // далі через this.name ми називаємо ключі обʼєкта, який буде приймати значення занесене в функцію
    this.surname = surname;
    this.age = age;
}

let user8 = new User('Clariss','Starling',30); // для занесення даних створюємо нову змінну, яка буде дорівнювати new User і приймати вказані знач.
console.log(user8);


//                                                      CLASSES - КЛАСИ (шаблони)

// 1) створимо клас Userr який працюватиме аналогічно функції - констуктору

class Userr {
    constructor(name,surname,age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    greeting () {
        return `Hello, my name is ${this.name} ${this.surname}. I'm ${this.age}`
    }
}

let user9 = new Userr('Kirsten','Danst',35);
console.log(user9);
console.log(user9.greeting());

// 2) створимо в класі додатковий обʼєкт wife, який в свою чергу прийматиме додаткові ключі обʼєкта

class UserWithWife {
    constructor(name,surname,age,wife) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.wife = wife;
    }
}

class Wife {
    constructor(name,surname,age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
}

let wife = new Wife('Ashley','Williams',33);
let user10 = new UserWithWife('Kaiden','Allenko',35,wife)
console.log(user10);

// 3) Ще один варіант додавання внутрішніх обʼєктів, без посилань на окремі змінні

class Wife1 {
    constructor(name,surname,age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
}
class UserWithWife1 {
    constructor(name,surname,age,wifeName, wifeSurname, wifeAge) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.wife = new Wife1(wifeName, wifeSurname, wifeAge);
    }
}

let user11 = new UserWithWife1('John','Johnson',60,'Anna', 'Khila',23)
console.log(user11)

// 4) !!! Наприклад, якщо у нас є один клас, який практично повністю відповідає іншому, за вийнятком кількох характеристик
//        то можна використати таку властивість як extends - тобто створити чайлд клас, в який додамо відмінну характеристику
//        тоді як основні братимутьься з батьківського класу

class Car {
    constructor(model,produced) {
        this.model = model;
        this.produced = produced;
    }
}

class OutroadCar extends Car {
    constructor(model,produced,color) {
        super(model,produced);
        this.color = color;
    }
}

let userCar = new OutroadCar('volvo',2009,'silver')
console.log(userCar)