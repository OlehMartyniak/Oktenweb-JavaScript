

// В даному випадку з допомогою if/else ми створили умову, за якою якщо клієнту більше 18 років, виводиться одна
// інформація, а якщо менше то інша

let age = 17;

if (age >= 18) {
    document.write('Congrdadulations, you can visit our website')
} else {
    document.write('Sorry, only 18 y.o. can visit our website')
}

// В цьому випадку ми також додали додаткові умови в перший блок if - наприклад інформацію про гендер і варіанти
// іншого виводу інформації
let age1 = 19;
let gender = 'male'; // female, unknown

if (age1 >= 18) {
    console.log('Congrdadulations, you can visit our website');
    if (gender === 'male') {
        console.log('Pay attention to visit our newest models pictures')
    } else if (gender === 'female') {
        console.log('Pay attention to visit our parfume topic')
    } else if (gender === 'unknown') {
        console.log('Please, state your gender in order to proceed')
    }
} else {
    console.log('Sorry, only 18 y.o. can visit our website')
}

// В цьому випадку ми скоротимо запис вище за допомогою строго і нестрогого операторів
// Строгий - && вказує, що обидві умови мають дорівнювати значенню true
// Нестрогий - || (or) вказує, що одна з умов може дорівнювати true

if (age1 >= 18 && gender === "female") {
    console.log('Pay attention to visit our newest models pictures')
} else {
    console.log('You have to be male in order to proceed')
}

if (age1 >= 20 || gender === 'male') {
    console.log('Pay attention to visit our newest models pictures')
} else {
    console.log('You have to be male in order to proceed')
}

// Схожу функцію виконують блоки switch (case, break)

let value = 'b '; // a, c, default

switch (value) {
    case 'a':
        console.log('case a');
        break;
    case 'b':
        console.log('case b');
        break;
    case 'c':
        console.log('case c')
    default:
        console.log('default')
};