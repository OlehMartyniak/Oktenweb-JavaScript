// Функції

        // назва функції
function listCreator () {
    document.write(`<ul>`);
    document.write(`<li>item</li>`);
    document.write(`<li>item</li>`);         // всередину поміщаємо те, що ми хочемо, щоб вона виконувала
    document.write(`<li>item</li>`);
    document.write(`</ul>`);
}
        // Щоб функція відпрацювала її потрібно викликати

listCreator();

        // Функції можна надавати аргументи, до яких згодом можна звертатись

function listCreator2 (a) {
    document.write(`<ul>`);
    document.write(`<li>${a}</li>`);
    document.write(`<li>${a}</li>`);
    document.write(`<li>${a}</li>`);
    document.write(`</ul>`);
};

listCreator2(`another item`);

        // за допомогою аргументів можна визначити і кількість повторюваних елементів, застосувавши for

function listCreator3 (size) {
    for (let i = 0; i < size; i++) {
        document.write(`<li>next item ${i + 1}</li>`)
    }
}
listCreator3(7 );

        // Інколи функція повинна повертати певні значення

function calc (c,d) {
    let result = c + d;
    return result;
}

let result = calc(15,20);
console.log(result);

        // Якщо у нас є кількість аргументів буде мінятись при різних викликах функції, то можна застосувати
        // arguments (створиться псевдомасив)

function calc2 () {
    let res = 0;
    for (let arg of arguments) {
        console.log(arg)
    }
}

calc2(10,20);
calc2(100,200);

        //

function calculator (action, f,g) {

    let result;                             // просто оголошуємо змінну без значення

    if (action === '+') {
        result = f + g;
    } else if (action === '-') {
        result = f - g;
    }
    return result;                          // функція буде повертати значення, але не виводити його
}

let calculatorResult1 = calculator('+',12,30);
let calculatorResult2 = calculator('-',33,12);
console.log(calculatorResult1,calculatorResult2);

        // Також в одну функцію можна вкладати іншу функцію
        // Наприклад, до вже існуючої функції calculator додамо таку, яка буде перевіряти чи всі введені дані є числами

function numberChecker () {
    if (typeof x === 'number' && typeof y === 'number') {
        return true;
    } else {
        return false;
    }
}



function calculator2 (act, x,y) {

    let results;                             // просто оголошуємо змінну без значення

    if (act === '+' && numberChecker(x,y)) {
        results = x + y;
    } else if (act === '-' && numberChecker(x,y)) {
        results = x - y;
    }
    return results;                          // функція буде повертати значення, але не виводити його
}

let calculatorResult3 = calculator2('+',12,30);
let calculatorResult4 = calculator2('-',33,12);
console.log(calculatorResult1,calculatorResult2);






