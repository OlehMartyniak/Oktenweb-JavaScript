// Homework lesson1 //
//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write

let  a = ['hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false ];
let b = ['hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false ];

console.log(a,b);
//alert (a);
document.write(a,b);

//Переприсвоїти кожній змінній з завдання значення на довільне.
//Вивести кожну змінну за допомогою: console.log , alert, document.write

a[0] = 'goodbye';
a[1] = 'uwo';
a[2] = 'moc';
a[3] = 'au';
a[4] = 2;
a[5] = 20;
a[6] = 1000;
a[7] = 321;
a[8] = 14.3;
a[9] = 7.2;
a[10] = 61;
a[11] = false;
a[12] = true;

console.log(a);
//alert(a);
document.write(a)

b[0] = 'see you';
b[1] = 'wou';
b[2] = 'omc';
b[3] = 'usa';
b[4] = 3;
b[5] = 30;
b[6] = 2000;
b[7] = 213;
b[8] = 41.3;
b[9] = 9.2;
b[10] = 661;
b[11] = false;
b[12] = true;

console.log(b);
//alert(b);
document.write(b);

//Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

let firstName = 'Oleg';
let middleName = 'Juri';
let lastName = 'Martyniak';

let person = (firstName + ' ' + middleName + ' ' + lastName);
console.log(person);


//За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

//let userName = prompt('Вкажіть ваше ім`я');
//let userFatherName = prompt('Вкажіть ваше ім`я по-батькові');
//let userAge = prompt('Вкажіть ваш вік');

//let userGreeting = ('"Вітаю ' + userName + ' ' + userFatherName + '.' + ' Тобі ' + userAge + ' років".' );
//console.log(userGreeting);
//document.write(userGreeting);

//За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let e = 100;
let d = '100';
let c = true;

console.log(typeof e);
console.log(typeof d);
console.log(typeof c);

//Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!

console.log(5 < 6); //true
console.log(5 > 6); //false
console.log(5 >= 6); //false
console.log(5 == 6); //false
console.log(10 >= 10); //true
console.log(10 == 10); //true
console.log(10 < 10); //false
console.log(10 > 10); //false
console.log(10 != 10); //false (≠ записується != в JS)
console.log(123 === '123'); //false
console.log(123 == '123'); //true

//Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?

let str = "20";
let h = 5;
document.write(str + h + "<br/>"); //( число 5 стає стрінговим і просто "дописується" поруч з 20 - виходить 205 стрінг )
document.write(str - h + "<br/>"); // (20 )
document.write(str * "2" + "<br/>"); // ( 40  )
document.write(str / 2 + "<br/>"); // (  10  )




