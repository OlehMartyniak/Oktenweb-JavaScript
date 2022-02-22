//                          lecture tips lesson 7

//                                      Додамо поля, які є у нас в певному масиві в порожній обʼєкт

let obj = {};
let fields = ['id','name','surname'];
for (let field of fields) {
    obj[field] = 'xxx';
}
console.log(obj) // обʼєкт - ссилочний тип даних, тому під час ітерації в порожній обʼєкт ми задали значення масиву

//                                      Наприклад у нас є два масиви. В одному є ключі, а в іншому значення ключів
//                                      Щоб поєднати їх, потрібно використати стандартний цикл

// let obj = {};
// let fields = ['id','name','surname'];
let values = [1,'Oleg','Martyniak'];

for (let i = 0; i < values.length; i++) {
    obj[fields[i]] = values[i]
}
console.log(obj)

//                                      Потрібно видалити один з ключів обʼєкта

let user = {id: 100500, name: 'Alfred', surname: 'Pennyworth'};
delete user.id;
console.log(user)

//                                      Функція поза обʼєктом

// let user = {id: 100500, name: 'Alfred', surname: 'Pennyworth'};

function greeting (obj) {
    return ` Hello my name is ${obj.name} and my surname is ${obj.surname}`
}
console.log(greeting(user))

//                                      Функція в обʼєкті

let user1 = {
    name: 'Vinona',
    surname: 'Rayder',
    greeting: function () {
        return `Hello my name is ${this.name} and my surname is ${this.surname}` // this дозволяє звернутись даного обʼєкту
    }
}
console.log(user1.greeting())

//                                      Замикання (closures) - створює закритий обʼєкт в функції, яким можна маніпулювати через внутрішні функції

function userCreator (name, age) {
    let obj = {name: name, age: age}
    return {
        getName: function () {
            return obj.name
        },
        getAge: function () {
            return obj.age
        }
    }
}
let manipulator = userCreator('Matthew',32);
console.log(manipulator.getName(),manipulator.getAge())

//                                      Конструктори. Якщо потрібно створити багато обʼєктів зі схожими ключами, використовують функцію - конструктор

function User (id,name,skills) {
    this ['id'] = id;
    this.name = name;
    this.skills = skills;
}

let user2 = new User (1,'Michelle');
console.log(user2);
let user3 = new User(2,'Viktoria')
console.log(user3)
let user4 = new User(3,'Natali', ['JS','React','Mongo'])
console.log(user4)

//                                      Класи. Таку ж саму функцію як конструктори виконують класи

class Users {
    constructor(id,name) {
        this.id = id;
        this.name = name;
    }
}
let user5 = new Users(5,'Emma');
console.log(user5 )

//                                      Суперкласи і чайлдкласи

class Car {
    constructor(model, power) {
        this.model = model;
        this.power = power;
    }
}










