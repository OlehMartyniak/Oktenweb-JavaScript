//                                          lesson8 homework

// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
// - Напишіть код,  котрий :
//   -- отримує текст з параграфа з id "content"

let content = document.getElementById('content');
console.log(content);

//-- отримує текст з блоку з id "rules"

let rules = document.getElementById('rules');
console.log(rules)

//  -- замініть текст параграфа з id 'content' на будь-який інший

content.innerText = 'будь-який інший';

//    -- замініть текст параграфа з id 'rules' на будь-який інший

rules.innerText = 'будь-який інший';

// -- змініть кожному елементу колір фону на червоний

let allRed = document.body.children
for (let item of allRed) {
    item.style.background = 'red'
}

//  -- змініть кожному елементу колір тексту на синій

let allBlue = document.body.children
for (let item of allBlue) {
    item.style.background = 'blue'
}

//  -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let getClass = document.getElementById('rules');
console.log(getClass.classList);

//  -- поміняти колір тексту у всіх елементів fc_rules на червоний

let changeColor = document.getElementsByClassName('fc_rules');
for (let element of changeColor) {
    element.style.color = 'red'
}








