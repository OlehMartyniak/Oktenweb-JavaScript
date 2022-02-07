//1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let result = (arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7] + arr[8] + arr[9]);
console.log(result);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book = {
    name: 'Dracula',
    pageCount: 418,
    genre: 'novel'
}

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

let book2 = {
    name: 'Shantaram',
    pageCount: 936,
    genre: 'novel',
    author: 'Gregory David Roberts'
}

// 4. Створити масив об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу
// як окремий об'єкт

let bookArray = [
    {
        name: 'Dracula',
        pageCount: 418,
        genre: 'novel',
        author: 'Bram Stoker'
    },
    {
        name: 'Shantaram',
        pageCount: 936,
        genre: 'novel',
        author: 'Gregory David Roberts'
    }
];

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значення площі зберігати в змінній s.

let  height = 23;
let width = 10;
let s = (height * width);
console.log(s);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//    результат помістіть у змінну v.

let heightC = 10;
let dC = 4;
let radius = dC / 2;
let v = (3.14 * radius**2 * heightC);
console.log(v);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор
// зведення в ступінь **).

let n = 3;
let m = 4;
let p = n**2 + m**2;
let k = Math.sqrt(p);

console.log(k)