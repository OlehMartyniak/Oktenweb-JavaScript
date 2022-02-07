//  - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті
//  години попадає число (в першу, другу, третю или четверту частину години).

 let time = +prompt('Вкажіть час від 0 до 59');

 if (time >1 && time <= 15) {
     console.log('Перша чверть')
 } else if (time > 15 && time <= 30) {
     console.log('Друга чверть')
 } else if (time > 30 && time <= 45) {
     console.log('Третя чверть')
 } else if (time > 45 && time <= 59) {
     console.log('Четверта чверть')
 } else {
     console.log('Неправильно введені дані')
 }

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це
// число (у першу, другу чи третю).

 let day = +prompt('Вкажіть число місяця')

 if (day > 1 && day <= 10) {
     console.log('Це перша декада місяця')
 } else if (day > 10 && day <= 20) {
     console.log('Це друга декада місяця')
 } else if (day > 20 && day <= 31) {
     console.log('Це третя декада місяця')
 } else {
     console.log('Введено некоректні дані')
 }

//- У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта -
// з коротким записом(тернаркою)

let test = !!'something';

if (test === true) {
    console.log('Вірно')
} else if (test === false) {
    console.log('Неправильно')
} else {
    console.log('Error: перевірте правильність даних')
}

let testII = !!'' ? 'Вірно' : 'Неправильно';
console.log(testII);

let testIII = !!' ' ? 'Вірно' : 'Неправильно';
console.log(testIII);

//- Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let a = prompt('Введіть число 1, 0, -3');

if (a !=== 0) {
    console.log('Вірно')
} else {
    console.log ('Невірно')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день.

let dayOfWeek = +prompt('Введіть день тижня, щоб побачити розклад');

switch (dayOfWeek) {
    case '1':
        console.log({morning: 'exercising', midday: 'work', evening: 'reading a book'})
        break;
    case '2':
        console.log({morning: 'running', midday: 'work', evening: 'watching TV'})
        break;
    case '3':
        console.log({morning: 'making breakfast', midday: 'work', evening: 'going to GYM'})
        break;
    case '4':
        console.log({morning: 'exercising', midday: 'work', evening: 'reading a book'})
        break;
    case '5':
        console.log({morning: 'running', midday: 'work', evening: 'Foreing language courses'})
        break;
    case '6':
        console.log({morning: 'making breakfast', midday: 'house duties', evening: 'going to pool'})
        break;
    case '7':
        console.log({morning: 'exercising', midday: 'going to the picknick', evening: 'reading a book'})
    break;
    default:
        console.log('Error: перевірте правильність введених даних')
}

//- Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

let year = +prompt('Введіть рік');

if (year % 4 === 0) {
    console.log('Цей рік високосний')
} else {
    console.log('Цей рік не є високосним')
}

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let question = prompt('Яка «офіційна» назва JavaScript?')

if (question === 'ECMAScript') {
    console.log('Правильно!');
} else {
    console.log('Не знаєте? ECMAScript!')
}
