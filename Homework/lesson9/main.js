//                                                      lesson9 homework

// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати цей блок в body.

let createBlock = document.createElement('div');
document.body.appendChild(createBlock)
createBlock.classList.add('wrap','collapse','alpha','beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

createBlock.innerText = 'Hello World';
createBlock.style.background = 'lightgrey';
createBlock.style.color = 'orange';
createBlock.style.fontSize = '30px';
createBlock.style.marginBottom = '5px'

// - клонувати його повністю, та додати клон в body.

let blockClone = createBlock.cloneNode(true);
document.body.appendChild(blockClone)

//- Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let arr = ['Main','Products','About us','Contacts'];

let getArr = document.body.getElementsByClassName('menu')[0];
for (let item of arr) {
    let li = document.createElement('li');
    li.innerText = item;
    getArr.appendChild(li)
}

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (let obj of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.innerText = `${obj.title}, ${obj.monthDuration}`;
    document.body.appendChild(div)
}

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.