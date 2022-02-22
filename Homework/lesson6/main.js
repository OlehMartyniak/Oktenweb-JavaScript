//                                      lesson 6 homework
//- Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 ='hello world';

let str2 ='lorem ipsum';

let str3 ='javascript is cool';

console.log(str1.length)
console.log(str2.length)
console.log(str3.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(str1.toUpperCase())
console.log(str2.toUpperCase())
console.log(str3.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

str1 = 'HELLO WORLD';
str2 = 'LOREM IPSUM';
str3 = 'JAVASCRIPT IS COOL';

console.log(str1.toLowerCase())
console.log(str2.toLowerCase())
console.log(str3.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str4 = ' dirty string   '

console.log(str4.trim())

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

let str5 = 'Каждый охотник желает знать';
// let arr = stringToArray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let stringToArray = (arr) => {
    return arr.split(' ')
}
console.log(stringToArray(str5))

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
//    При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let str6 = "HTML JavaScript PHP";

let insert_dash = (str) => {
    return str.replaceAll(' ',' - ') && str.toUpperCase();
}
console.log(insert_dash(str6))
document.write(insert_dash(str6))

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

 let upperLetter = (str) => {
     return str.charAt(0).toUpperCase() + str.slice(1)
 }
 console.log(upperLetter('hello world!'))

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = (str) => {
    return str.split(' ').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(' ')
}
console.log(capitalize('hello my beautiful world'))






