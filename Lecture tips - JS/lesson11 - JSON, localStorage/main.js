//                                      lesson 11


//                                      location

// location - це URL адреса; при необхідності ми можемо задати нову адресу, яка буде відкриватись при натисканні кнопки

// location.reload - перезавантаження сторінки
// history.back - перейти назад
// history.forward - перейти вперед

// кнопка перенесе нас на сайт OktenWeb
let btn1 = document.getElementById('btn1');
btn1.onclick = function () {
    location.href = 'http://owu.com.ua'
}



//                                      JSON - Java Script object notation
//                                       (Джава скріптово подібні обʼєкти)

// JSON.stringify() використовується для того, щоб перетворити обʼєкти в стрінгу і таким чином передавати їх, наприклад,
// на сервер, а JSON.parse() щоб повернути таку стрінгу назад в обʼєкт

// У нас є обʼєкт
let user = {name: 'Anna', age: 25, status: true};

// Перетворимов його в стрінгу
let userS = JSON.stringify(user);

// А тепер перетворимо назад в обʼєкт
let parse = JSON.parse(userS);

console.log(user);
console.log(userS);
console.log(parse);



//                                      STORAGE

// Є 3 види сховищ:
// session  storage - діє впродовж відкритого вікна
// local storage - діє лише в межах браузера і певного його користувача
// cookie - сховище в межах сайту
// localStorage має два значення: key (ключ) i value (значення)

//  localStorage.setItem('key1','value');  // ми надали завантажили певні дані в storage

// У нас є масив з обʼєктами. Ми будемо вносити його в local storage та повертати. Є 2 способи щоб зробити це

//                                                   Спосіб 1
let users = [
    {id: 1,name: 'Anna',age: 22,status: true},
    {id: 2,name: 'Olga',age: 23,status: false},
    {id: 3,name: 'Sofia',age: 24,status: true},
    {id: 4,name: 'Maria',age: 25,status: false}
];

// Ми хочемо запушити всіх юзерів в local storage (цикл)
for (let user of users) {                                           // `user-${user.id}` буде задавати кожному елементу
    localStorage.setItem(`user-${user.id}`,JSON.stringify(user))    // ключ user- зі значенням його id,
}                                                                   // а JSON.stringify(user) буде пушити в value нашого storage власне обʼєкти

// Тепер ми дістанемо ці обʼєкти

for (let i = 0; i < localStorage.length; i++) {           // ітеруємо і вказуємо довжиною localStorage.length
    let key = localStorage.key(i);                        // звертаємось до localStorage і його значення key
    let userJSON = localStorage.getItem(key);             // звернемось до попередньої змінної key через localStorage.getItem, що виведе нам JSON обʼєкти
    console.log(JSON.parse(userJSON))                     // перетворимо JSON обʼєкти на звичайні
}

//                                                   Спосіб 2

let users2 = [
    {id: 1,name: 'Naruto',age: 22,status: true},
    {id: 1,name: 'Saske',age: 23,status: false},
    {id: 1,name: 'Hinata',age: 20,status: true},
];

localStorage.setItem('users', JSON.stringify(users2));
let usersJSON = localStorage.getItem('users');
console.log(usersJSON);
let parseUsers = JSON.parse(usersJSON);
console.log(parseUsers);



// Маємо масив з продуктами

let products = [
    {id: 1,title:'Milk',price: 25},
    {id: 2,title:'Juice',price: 36},
    {id: 3,title:'Tomato',price: 56},
    {id: 4,title:'Tea',price: 40}
];

for (let product of products) {

    // Виведемо назви і ціни продуктів в div блоки
    let divProduct = document.createElement('div');
    divProduct.innerText = `${product.title} - ${product.price}$`;
    document.body.append(divProduct);

    // Додамо блокам кнопки з функцією "додати" (add)
    let addButton = document.createElement('button');
    addButton.innerText = 'add';
    divProduct.append(addButton);

    // Додамо кнопці функціонал
    addButton.onclick = function () {
        let products = localStorage.getItem('products');      // звернемось до lS і до його ключа products (якщо такої ячейки немає, то нам поверне null/undefined)
        if (!products) {                                           // задамо умову, що якщо ячейки products немає, або вона порожня
            products = [];                                         // то products повинні виглядати як масив
            products.push(product);                                // і в цей масив ми будемо пушити той продукт, який ітеруємо
            let stringifyArr = JSON.stringify(products);           // тепер цей масив перетворюємо на стрінгу
            localStorage.setItem('products',stringifyArr);         // і кладемо його в localStorage
            // однак ця дія буде виконуватись один раз, бо після цього у нас буде масив products і протокол if не буде виконуватись; треба додати ще функціонал
        } else {
            let realProdArr = JSON.parse(products);                 // перетворюємос стрінгу (113 рядок) на звичайний обʼєкт
            realProdArr.push(product);                              // пушимо інформацію про продукт який ітерували
            localStorage.setItem('products',JSON.stringify(realProdArr)); // ! Це дозволить нам додавати до ключа products в його значення (value) інші продукти, а не
                                                                        // створювати нові
        }

    }
}






