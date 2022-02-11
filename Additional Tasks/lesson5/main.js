// //                                      Additional Tasks lesson 5
//
// // - Дано натуральное число n. Выведите все числа от 1 до n.
//
// let natNumber = (n) => {
//     let natNumbers = 0;
//     for (let i = 1; i < n; i++) {
//         console.log(i)
//     }
// }
// natNumber(10)
//
// // - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
//
// let growOrFallNumbers = (a, b) => {
//     if (a < b) {
//         for (let i = a; i <= b; i++) {
//             console.log(i)
//         }
//     } else if (a > b) {
//         for (let i = a; i >= b ; i--) {
//             console.log(i)
//         }
//     }
// }
// growOrFallNumbers(5,1)
// //growOrFallNumbers(1, 5)
//
// // -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//
// let array = [101,'volvo', true, {name: 'ford'}];
//
// let getArray = (arg, i) => {
//     const a= arg[i]
//     arg[i]= arg[i+1]
//     arg[i+1] = a
//
//     return arg
// }
// console.log(getArray(array, 0));
//
// // - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// // Двожина масиву від 2 до 100
//
// let zeroToEnd = (quantity) => {
//     let filledArr = [];
//     let zeroArr = [];
//
//     for (let i = 0; i <= quantity; i++ ) {
//         const num = Math.round(Math.random()*10)
//         if(num === 0) {
//             zeroArr.push(num)
//         } else {
//             filledArr.push(num)
//         }
//     }
//     return [...filledArr, ...zeroArr]
// }
// console.log(zeroToEnd(Math.random() * 100));



let filledArr = [0,22,45,0,0,0,0,0,6,6,9,0,0,7,4,43,24,24,4];

let endZero = (arg) => {
    let numbArr = [];
    let zeroArr = [];

    for (let i = 0; i < arg.length; i++) {
        if (arg[i] === 0) {
            zeroArr.push(arg[i])
        } else {
            numbArr.push(arg[i])
        }
    }
    return [...numbArr,...zeroArr]
}
console.log(endZero(filledArr))









