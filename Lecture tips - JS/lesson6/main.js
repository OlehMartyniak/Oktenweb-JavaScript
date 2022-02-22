//                                      lesson6 методи стрігів і методи масивів

let str = 'okten'

console.log(str.length) // length виведе числову кількість букв в стрінзі
console.log(str[0])    // [0] виведе першу букву стрінги
console.log(str.toUpperCase()) // toUpperCase() виведе всі букви великими
console.log(str.toLowerCase()) // toLowerCase() виведе всі букви маленькими

let email = 'oleg.martyniak@yahoo.com'
let endsWith = email.endsWith('@yahoo.com') // endsWith()визначає чим закінчується стрінга і виводить true / false
console.log(endsWith)

console.log(email.charAt(3)) // charAt(3) дозволяє вказати індекс, і за ним вивести значення під цим індексом
console.log(email.indexOf('@')) // indexOf('@') дозволяє вивести

let str2 = 'Hello World'

console.log(str2.replace('o','!')) // replace дозволяє замінити вказаний елемент стрінги на інший
console.log(str2.replaceAll('o','!')) // replaceAll дозволяє замінити всі вказані елементи

console.log(str.slice(1,3)) // slice(1,3) дозволяє нарізати стрінгу і залишити виділений діапазон індексів
console.log(str2.split()) // split() виводить значення стрінги і пакує в різні індекси масиву
console.log(str2.substr(1,2)) // substr схоже на slice, однак ви вказуєте з якого індексу хочете нарізати та скільки індексів треба нарізати

let numbers = [10,20,30,40,50]

console.log(Array.isArray(numbers)) // Array.isArray перевіряє чи є елемент масивом, виводить true/false

numbers.push('something') // push дозволяє додатково засунути щось в  масив (запушити)
console.log(numbers)

numbers.unshift('!!!') // unshift пушить елементи на початок масиву
console.log(numbers)

numbers.pop() // pop буде видаляти останній елемент масиву
console.log(numbers)

numbers.shift() // shift видаляє перший індекс з початку масиву
console.log(numbers)

let concat = numbers.concat(true,false) // concat бере за основу один масив і створює на його основі новий, додаючи вказані елементи
console.log(concat)

let splice = numbers.splice(1,2, 'smth','anth') // в масиві splice вирізає вказані елементи і дозволяє замість них вставити інші
console.log(splice)

numbers.forEach(function (value) { // forEach дозволяє застосувати до всіх елементів масиву колбек функцію, яка буде виводити наприклад всі значення масиву
    console.log(value)
})

numbers.filter((item,index) => { // filter дозволяє виводити наприклад значення масиву, або його індекси
    console.log(item,index)
})

let map = numbers.map (value => { // map дозволяє проводити різні маніпуляції з масивами, наприклад в цьому випадку ми перетворили числові значення масиву на стрінгові
    return value + ''
})
console.log(map)

let join = numbers.join('-') // join повертає масив стрінгою і зєднує його елементи між собою вказаним значенням
console.log(join)







