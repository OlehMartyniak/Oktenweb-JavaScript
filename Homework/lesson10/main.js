//                                          lesson 10 homework

// Завдання 1
// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let chBoxOne = document.getElementById('btnOne');
let text = document.getElementById('text');

chBoxOne.onclick = function () {
    if (chBoxOne.checked) {
        text.style.display = 'none'
    }
};

// Завдання 2
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let chBoxTwo = document.getElementById('btnTwo');

chBoxTwo.onclick = function () {
    if (chBoxTwo.checked) {
        chBoxTwo.style.display = 'none';
    }
}

// Завдання 3
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
//   з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let input3 = document.getElementById('input3');
let btn3 = document.getElementById('btn3');

btn3.onclick = function () {
    if (input3.value < 18) {
        alert('You are not old enought')
    } else if (input3.value >= 18) {
        alert('Welcome to our website!')
    } else {
        alert('Check the info you put down')
    }
}

// Завдання 4
// - Создайте меню, которое раскрывается/сворачивается при клике

// p.s. дозволяє розгорнути/згорнути меню лише один раз; далі потрібно перезавантажувати
let btn4 = document.getElementById('btn4');

btn4.onclick = function () {
    let hideMenu = document.getElementsByClassName('menu')[0];
    hideMenu.style.display = 'none';
    if (hideMenu.style.display === 'none') {
        btn4.onclick = function () {
            hideMenu.style.display = 'block'
        }
    }
}

// Завдання 5
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
let taskTitle5 = document.createElement('h4');
taskTitle5.innerText = 'Завдання 5';
document.body.appendChild(taskTitle5);

let comments = [
    {title: 'UserOne', body: 'I speak English'},
    {title: 'UserTwo', body: 'I speak German'},
    {title: 'UserThree', body: 'I speak Italian'}
]

// Вывести список комментариев в документ, каждый в своем блоке.
// Добавьте каждому комментарию по кнопке для сворачивания его body

for (let obj of comments) {
    let div = document.createElement('div');
    div.innerText = `${obj.title}: "${obj.body}"`;
    document.body.appendChild(div)

    let btn = document.createElement('button');
    btn.innerText = 'Hide comments';
    document.body.appendChild(btn);

    btn.onclick = function () {
        if (div.innerText === `${obj.title}: "${obj.body}"`) {
            div.innerText = `${obj.title}`} else if (div.innerText === `${obj.title}`) {
            div.innerText = `${obj.title}: "${obj.body}"`
        }
    }
}









