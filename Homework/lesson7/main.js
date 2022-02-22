//                                      lesson 7 homework

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [
    new User('1','Layla','Smth','smth@gmail.com', 38084532095823),
    new User('2','Layla','Smth','smth@gmail.com', 38084532095823),
    new User('3','Layla','Smth','smth@gmail.com', 38084532095823),
    new User('4','Layla','Smth','smth@gmail.com', 38084532095823),
    new User('5','Layla','Smth','smth@gmail.com', 38084532095823),
    new User('7','Layla','Smth','smth@gmail.com', 38084532095823),
    new User('8','Layla','Smth','smth@gmail.com', 38084532095823),
    new User('9','Layla','Smth','smth@gmail.com', 38084532095823),
    new User('10','Layla','Smth','smth@gmail.com', 38084532095823)
    ];
console.log(users)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterID = users.filter((item) => {
    if (item.id % 2 === 0) {
        console.log(item)
    }
})

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sortID = users.sort((a,b) => {
//     return a.id - b.id
// })

console.log(users.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id,name,surname,email,phone,order) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clients = [
    new Client(1,'Bart','Simps','user1@gmail.com',342536,['book','eggs','tea']),
    new Client(2,'Bart','Simps','user1@gmail.com',342536,['book','eggs','tea','bread']),
    new Client(3,'Bart','Simps','user1@gmail.com',342536,['book','eggs','tea','fat','sweets']),
    new Client(4,'Bart','Simps','user1@gmail.com',342536,['book','eggs']),
    new Client(5,'Bart','Simps','user1@gmail.com',342536,['book','eggs','tea']),
    new Client(6,'Bart','Simps','user1@gmail.com',342536,['book','eggs','tea','chocolate']),
    new Client(7,'Bart','Simps','user1@gmail.com',342536,['book','eggs','tea','chocolate','ice-cream']),
    new Client(8,'Bart','Simps','user1@gmail.com',342536,['book','eggs']),
    new Client(9,'Bart','Simps','user1@gmail.com',342536,['book']),
    new Client(10,'Bart','Simps','user1@gmail.com',342536,['book','eggs','tea'])
    ];
console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clients.sort((a,b) => a.order.length - b.order.length));






