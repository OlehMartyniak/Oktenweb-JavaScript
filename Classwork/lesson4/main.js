//                  lesson 4 classwork

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function minValue (a,b,c) {
    if (a < b && a < c) {
        console.log(a)
    } else if (b < a && b < c) {
        console.log(b)
    } else if (c < a && c < b) {
        console.log(c)
    } else {
        console.log('check the numbers you put')
    }
}
minValue(3,6,9)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function maxValue (a,b,c) {
    if (a > b && a > c) {
        console.log(a)
    } else if (b > a && b > c) {
        console.log(b)
    } else if (c > a && c > b) {
        console.log(c)
    }
}
maxValue(15,10,5)

// - створити функцію яка повертає найбільше число з масиву

let arr = [101, 202, 303, 404, 505]

function maxArrValue (array) {
    let maxValue = array[0];
    for (let i = 0; i < arr.length; i++ ) {
        if (arr[i] > maxValue) {
            maxValue = arr[i]
        }
    }
    return maxValue
}
console.log(maxArrValue(arr));

// - створити функцію яка повертає найменьше число з масиву

function minArrValue (array) {
    let minValue = array[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i]
        }
    }
    return minValue
}
console.log(minArrValue(arr))

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [101, 202, 303, 404, 505]

function arrSum (array) {
    let sum = 0;
    for (let item of array) {
        sum = sum + item;
    }
    return sum;
}
console.log(arrSum(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function midValue (array) {
    let sum = 0;
    for (let item of array) {
        sum = sum + item;
    }
    return sum / arr.length
}
console.log(midValue(arr));

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function retMinLogMax (array) {
    let minValue = array[0];
    let maxValue = array[0];
    for (let item of array) {
        if (item < minValue) {
            minValue = item;
        }
        if (item > maxValue) {
            maxValue = item;
        }
    }
    console.log(maxValue);
    return minValue;
}
console.log(retMinLogMax(arr));

// - створити функцію яка заповнює масив рандомними числами

function randomDigits (quantity) {
    let emptyArray = [];
    for (let i = 0; i < quantity; i++) {
        emptyArray.push(Math.round(Math.random()*100))
    }
    return emptyArray;
}
console.log(randomDigits(15));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

function randomLimit (quantity, minNum, maxNum) {
    let emptyArray = [];
    for (let i = 0; i < quantity; i++) {
        emptyArray.push(Math.round(Math.random()*(maxNum - minNum) + minNum))
    }
    return emptyArray
}
console.log(randomLimit(15,50, 60));

//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function arrReverse (array) {
    let newArr = [];
    for (let item of array) {
        newArr.unshift(item)
    }
    return newArr
}
console.log(arrReverse(arr));

//                  Additional tasks ( Ще працюю над виконанням цього завдання)

//- створити функцію, яка якщо приймає один аргумент, просто виводить його, якщо два аргументи - складає або конкатенує їх між собою.

// function add1 (arguments) {
//   for (i = 0; i < arguments.length; i++) {
//       if ()
//   }
// }
// console.log(add1(12, 13));
//









