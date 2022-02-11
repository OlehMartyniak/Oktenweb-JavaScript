//                              Homework lesson 4

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangleArea(a, b) {
    let rectangleAreaResult = a * b;
    return rectangleAreaResult;
}

console.log(rectangleArea(5, 3))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circleArea(r) {
    let circleAreaResult = 3.14 * r ** 2;
    return circleAreaResult;
}

console.log(circleArea(5));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderArea(r, h) {
    let cylinderAreaResult = (2 * 3.14) * r * h;
    return cylinderAreaResult;
}

console.log(cylinderArea(4, 10));

// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = [105, 'Hello World', true, 106];

function getArrayItem(arguments) {
    for (let item of arguments) {
        console.log(item);
    }
}

console.log(getArrayItem(arr));

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createParagraph(x) {
    document.write(`<p>${x}</p>`)
}

createParagraph('Hello world!')

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createUl(x) {
    document.write(`<ul>`)
    document.write(`<li>${x}</li>`)
    document.write(`<li>${x}</li>`)
    document.write(`<li>${x}</li>`)
    document.write(`</ul>`)
}

createUl('World, hello to you!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createManyLi(a, b) {
    document.write(`<ul>`)
    for (let i = 0; i < b; i++) {
        document.write(`<li>${a}</li>`)
    }
    document.write(`</ul>`)
}

createManyLi('Hi guys', '10')

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function getPrimitiveElements(arguments) {
    for (let item of arguments) {
        if (typeof item === 'number') {
            document.write(`<ul> List of numbers:`)
            document.write(`<li>${item}</li>`)
            document.write(`</ul>`)
        } else if (typeof item === 'string') {
            document.write(`<ul> List of string elements:`)
            document.write(`<li>${item}</li>`)
            document.write(`</ul>`)
        } else if (typeof item === 'boolean') {
            document.write(`<ul> List of boolean elements:`)
            document.write(`<li>${item}</li>`)
            document.write(`</ul>`)
        }
    }
}

let randomArr = [122, 'volvo', true, 145, 'ford', false, 204, 'audi', true, 505, 'bmw', false];

getPrimitiveElements(randomArr);

// function getPrimitiveElements (a) {
//     if (typeof a === 'number') {
//         document.write(`<ul> List of numbers`)
//         document.write(`<li>${a}</li>`)
//         document.write(`</ul>`)
//     } else if (typeof a === 'string') {
//         document.write(`<ul> List of string elements`)
//         document.write(`<li>${a}</li>`)
//         document.write(`</ul>`)
//     } else if (typeof a === 'boolean') {
//         document.write(`<ul> List of boolean elements`)
//         document.write(`<li>${a}</li>`)
//         document.write(`</ul>`)
//     }
// }






