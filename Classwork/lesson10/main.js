//                                              lesson 10 classwork

// Завдання 1
//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let formOne = document.getElementById('formOne');
let formTwo = document.getElementById('formTwo');

let btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    console.log(document.forms.formOne.inputOne.value);
    console.log(document.forms.formOne.inputTwo.value);
    console.log(document.forms.formTwo.inputThree.value);
    console.log(document.forms.formTwo.inputFour.value);
})

// Завдання 2
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let form3 = document.forms[2];
let a = document.getElementById('ul');
let b = document.getElementById('li');
let c = document.getElementById('info');
let btn3 = document.getElementById('btn3')

btn3.addEventListener('click',function () {
    let ul = a.value;
    let li = b.value;
    let info = c.value;
    function createLists (ul,li,info) {
        for (let i = 0; i < ul; i++) {
            let ul = document.createElement('ul');
            document.body.appendChild(ul)
            for (let i = 0; i < li; i++) {
                let li = document.createElement('li');
                li.innerText = `${info}`;
                ul.appendChild(li);
            }
        }
    }
    createLists(ul,li,info)
})

// Завдання 3
// - Сворити масив не цензцрних слів. Сворити інпут текстового типу. Якщо людина вводить слово і воно міститься
// в масиві не цензурних слів, кинути алерт з попередженням. Перевірку робити при натисканні на кнопку

let badWords = ['moron','thug','asshole'];
let btn4 = document.getElementById('btn4');
let form4 = document.forms[3].badWords;

btn4.addEventListener('click', function () {
    let input = form4.value;
    for (let item of badWords) {
        if (input === item) {
            alert('Don`t use bad words!')
        } else {
            console.log(input)
        }
    }
})

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

// let badWords = ['moron','thug','asshole'];
let btn5 = document.getElementById('btn5');
let form5 = document.forms[4].badSentence;

btn5.addEventListener('click', function () {
    let input = form5.value;
    let stringToArray = (str) => {
        return str.split(' ');
    }
    let inputObj = stringToArray(input);
    for (let word of inputObj) {
        for (let badWord of badWords) {
           if (word === badWord) {
               alert('Don`t use bad words in this sentence!')
           } else {
               console.log(input)
           }
        }
    }

})







