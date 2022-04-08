//                                          LT - lesson13 - promise, prototype, setTimeout

// Прототипи (prototype) - можливість збільшувати/розширювати функціонал певного класу

// Візьмемо існуючий бібліотечний клас Array
// Додамо  йому метод створений нами print (який буде прототипом) і буде виводити в консоль дані масиву

let nums = [1,3,6];                     // є певний масив

Array.prototype.print = function () {   // кажемо, що якщо наша змінна є масивом, то до неї можна застосувати прототип print, який є функцією
    for (let item of this) {            // надалі в функції прописуємо що цей прототип буде ітерувати масив і виводити його елементи
        console.log(item)
    }
}

nums.print()                            // застосуємо клас print до масиву



// setTimeout - асинхронна дія, яка визначає затримку перш ніж щось виконається

setTimeout( () => {
    console.log('Hello world');
},2000)                        // timeout вказує через скільки асу треба провести дію (2 сек )



// Наприклад нам потрібно зробити кілька дій за певний проміжок часу; як варіант, ми вставляємо один setTimeout в інший

setTimeout(() => {
    let counter = 1;
    console.log('Action', counter);
    setTimeout(() => {
        counter++;
        console.log('Action', counter);
        setTimeout(() => {
            counter++;
            console.log('Action', counter)
        }, 3000)
    }, 2000)
}, 2000)

// Однак попередня конструкція з setTimeout  один в одному при великій кількості є неправильною (callback hell);
// Для подібних дій створюють promise - це "обгортка", яка приймає колбек функцію з 2ма параметрами -
// resolve (якщо дія виконалась правильно) i reject (якщо неправильно); а всереднині ми можемо викликати асинхронну
//  функцію

let promise = new Promise(((resolve, reject) => {
    let counter = 0;
    setTimeout(() => {
        console.log('Do', counter);
        counter++;
        resolve(counter);
    },1000)
}))

let promise2 = promise.then((counter) => {
    console.log(counter);
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            console.log('Dooo',counter);
            counter++;
            resolve(counter);
        },2000)
    }))
})

// Ще один варіант цього запису

promise
    .then((counter) => {
    console.log(counter);
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            console.log('Do-do',counter);
            counter++;
            resolve(counter);
        },2000)
    }))
})
    .then((counter) => {
        return new Promise(((resolve, reject) => {
            setTimeout(() => {
                console.log('Do-do',counter);
                counter++;
                resolve(counter);
            },2000)
        }))
    })
    .then((counter) => {
        return new Promise(((resolve, reject) => {
            setTimeout(() => {
                console.log('Do-do',counter);
                counter++;
                resolve(counter);
            },2000)
        }))
    })



// Однак найпростіше є запакувати Promise в певну функцію

function timeoutFn (counter, seconds) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            console.log('Asinchron operation', counter);
            counter++;
            resolve(counter);
        },seconds);
    }));
};

timeoutFn(1,2000)
    .then(value => {
        return timeoutFn(value,3000)
    })
    .then(value => {
        return timeoutFn(value,3000)
    }) 