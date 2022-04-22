// - створити функцію яка обчислює та повертає площу прямокутника висотою

let triangleArea = (a, b) => a * b;

triangleArea(3, 5);

// - створити функцію яка обчислює та повертає площу кола

let circleArea = (r) => 3.14 * r ** 2;

circleArea(5);

// - створити функцію яка обчислює та повертає площу циліндру

let cylinderArea = (r, h) => (2 * 3.14) * r * h;

cylinderArea(3, 8);

// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = [101, 'volvo', true, 202, 'ford', false, 303, 'dodge', true];

let getArrayItems = (arguments) => {
    for (let item of arguments) {
        console.log(item)
    }
}
getArrayItems(arr);

//- створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let createParagraph = (x) => {
    document.write(`<p>${x}</p>`)
};

createParagraph('It`s a paragraph');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let createUL = (x) => {
    document.write(`<ul>`)
    document.write(`<li>${x}</li>`)
    document.write(`<li>${x}</li>`)
    document.write(`<li>${x}</li>`)
    document.write(`</ul>`)
}
createUL('Item')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//  Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let createManyLI = (a, b) => {
    document.write(`<ul>`);
    for (let i = 0; i < b; i++) {
        document.write(`<li>${a}</li>`)
    }
    document.write(`</ul>`)
}
createManyLI('Some list item', 5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let createListOfEl = (arguments) => {
    for (let item of arguments) {
        if (typeof item === 'number') {
            document.write(`<ul>List of numbers: `)
            document.write(`<li>${item}</li>`)
            document.write(`</ul>`)
        } else if (typeof item === 'string') {
            document.write(`<ul>List of strings: `)
            document.write(`<li>${item}</li>`)
            document.write(`</ul>`)
        } else if (typeof item === 'boolean') {
            document.write(`<ul>List of boolean elements: `)
            document.write(`<li>${item}</li>`)
            document.write(`</ul>`)
        }
    }
}
createListOfEl(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let bigArray = [{id: 'card', name: 'volvo', age: 5}, {id: 'card', name: 'ford', age: 7}, {
    id: 'card',
    name: 'dodge',
    age: 10
}];

let createBlock = (arg) => {
    for (let item of arg) {
    document.write(`<div>`)
        for (let key in item) {
            document.write(`<p>${item[key]}</p>`)
        }
        document.write(`</div>`)
    }
}
createBlock(bigArray)




// let writeInfo = (arg) => {
//     for (let item in arg) {
//         if (typeof arg[item] === 'object') {
//             for (let i in arg[item]) {
//                 document.write(`<p>${i} - ${arg[item][i]}</p>`)
//                 if (typeof arg[item][i] === 'object') {
//                     for (let iKey in arg[item][i]) {
//                         document.write(`<p>${iKey} - ${arg[item][i][iKey]}</p>`);
//                         if (typeof arg[item][i][iKey] === 'object') {
//                             for (let x in arg[item][i][iKey]) {
//                                 document.write(`<p>${x} - ${arg[item][i][iKey][x]}</p>`);
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//         document.write(`<p>${item} - ${arg[item]}</p>`)
//     }
// }
// writeInfo(user);








