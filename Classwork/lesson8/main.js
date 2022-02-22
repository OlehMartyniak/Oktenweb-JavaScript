//                                      lesson8 classwork

// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//  a) додає клас з назвою групи, елементу з ід main_header

let addClass = document.getElementById('main_header');
addClass.classList.add('dec-2021');

//  b) робить шириниу елементу ul 400px

let ulWidth = document.getElementsByTagName('ul');
ulWidth[0].style.background = 'lightgrey'
ulWidth[0].style.width = '400px'

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let linkListWidth = document.getElementsByClassName('linkList');
for (let link of linkListWidth) {
    link.style.width = '50%'
}

// d) отримує текст який зберігається в елементі з класом listElement2

let infoLE2 = document.getElementsByClassName('listElement2');
infoLE2[0].innerText = 'Some new text'

//  e) отримує всі елементи li та змінює ім колір фону на сірий

let getLI = document.getElementsByTagName('li');
for (let li of getLI) {
    li.style.background = 'grey'
}

// f) отримує всі елементи 'a' та додає їм клас anchor

let getA = document.getElementsByTagName('a');
for (let a of getA) {
    a.classList.add('anchor')
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

for (let a of getA) {
    if (a.innerText === 'link3') {
        a.style.fontSize = '40px'
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let classA = document.getElementsByTagName('a');
for (let a of classA) {
    a.classList.add(`${a.innerText}`)
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let subHeaderBackground = prompt('Enter background color');
let subHeader = document.getElementsByClassName('sub-header');
for (let sub of subHeader) {
    sub.style.background = subHeaderBackground
};

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

let subTextColor = prompt('Enter text color');
for (let sub of subHeader) {
    if (sub.innerText === 'content 2 segment') {
        sub.style.color = subTextColor
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let setContent1 = prompt('Enter text');
let getContent1 = document.querySelectorAll('.content_1 > p');
for (let cont of getContent1) {
    cont.innerText = setContent1;
}

// l) отримати елементи p та змінити їм padding на 20px

let getP = document.getElementsByTagName('p');
for (let p of getP) {
    p.style.padding = '20px'
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let getText2 = document.getElementsByClassName('text2');
for (let item of getText2) {
    item.innerText = 'dec-2021'
}




