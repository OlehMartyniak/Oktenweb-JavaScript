//                                      lesson5 classwork

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let minNumber = (a, b, c) => {
    if (a < b && a < c) {
        return a
    } else if (b < a && b < c) {
        return b
    } else if (c < a && c < b) {
        return c
    }
}
console.log(minNumber(3, 7, 9))

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let maxNumber = (a, b, c) => {
    if (a > b ** a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else if (c > b && c > a) {
        return c;
    }
}
console.log(maxNumber(3, 7, 9))

// - створити функцію яка повертає найбільше число з масиву

let arr = [101, 202, 303, 404, 505, 606, 707, 808]

let maxArrayValue = (arg) => {
    let maxValue = arg[0];
    for (let i = 0; i < arg.length; i++) {
        if (arg[i] > maxValue) {
            maxValue = arg[i];
        }
    }
    return maxValue;
}
console.log(maxArrayValue(arr))

// - створити функцію яка повертає найменьше число з масиву

let minArrayValue = (arg) => {
    let minValue = arg[0];
    for (i = 0; i < arg.length; i++) {
        if (arg[i] < minValue) {
            minValue = arg[i]
        }
    }
    return minValue
}
console.log(minArrayValue(arr))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sumOfArray = (arg) => {
    let sum = 0;
    for (let item of arg) {
        sum = sum + item
    }
    return sum
}
console.log(sumOfArray(arr))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let midValue = (arg) => {
    let sum = 0;
    for (let item of arg) {
        sum = sum + item
    }
    return sum / arg.length
}
console.log(midValue(arr))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

let retMinLogMax = (arg) => {
    let minValue = arg[0];
    let maxValue = arg[0];
    for (let item of arg) {
        if (item < minValue) {
            minValue = item
        }
        if (item > maxValue) {
            maxValue = item
        }
    }
    console.log(maxValue)
    return minValue
}
console.log(retMinLogMax(arr))

// - створити функцію яка заповнює масив рандомними числами

let randomNumbers = (quantity) => {
    let emptyArray = [];
    for (let i = 0; i < quantity; i++) {
        emptyArray.push(Math.round(Math.random()*100))
    }
    return emptyArray
}
console.log(randomNumbers(5))

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let limitRandomNumbers = (quantity,limit) => {
    let emptyArray = []
    for (let i = 0; i < quantity; i++) {
        emptyArray.push(Math.round(Math.random()*limit))
    }
    return emptyArray
}
console.log(limitRandomNumbers(5,8))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let arrReverse = (arg) => {
    let emptyArray = [];
    for (let item of arg) {
        emptyArray.unshift(item)
    }
    return emptyArray
}
console.log(arrReverse(arr))













