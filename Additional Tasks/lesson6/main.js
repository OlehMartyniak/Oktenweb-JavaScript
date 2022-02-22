//                                      additional tasks lesson 6

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString = (str,n) => {
    return str.substr(0,n)
}
console.log(cutString('наслаждение',3))