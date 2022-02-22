//                                          lecture tips lesson8

// 1) Щоб звернутись до елемента HTML з певним id викор. getElementById

let xxxElement = document.getElementById('xxx')
console.log(xxxElement);

// 2) Щоб змінити текст елемента, звертаємось до його змінної та innerText та задаємо нове значення

xxxElement.innerText = 'Some new text';

// 3) Щоб змінити стиль елемента, звертаємось до його змінної та викор. style

xxxElement.style.background = 'silver';
xxxElement.style.height = '100px';

// 4) Щоб звернутись до певного класу використовують getElementsByClassName; це поверне нам псевдомасив
// (HTML колекцію), з якою можна поводитись як з масивом. Наприклад з допомогою console.log виведемо індекси

let targets = document.getElementsByClassName('target');
console.log(targets[0]);
console.log(targets[1]);

// 5) Якщо елементів багато то можна використовувати цикл

let cycles = document.getElementsByClassName('target2')
for (let item of cycles) {
    item.style.background = 'lightgrey'
    item.style.margin = '5px'
}

// 6) Можна звертатись до тегів з допомогою getElementsByTagName; це виведе також псевдомасив (HTML колекцію),
// з якою можна поводитись як з масивом.

let tags = document.getElementsByTagName('div');
for (let tag of tags) {
    tag.style.fontWeight = '900'
}

// 7) Можна звернутись до блоку в якому є інші блоки

let wrapList = document.getElementsByClassName('wrap1');
let wrap1 = wrapList[0];
wrap1.style.border = '1px solid black';
let wrapDiv = wrap1.getElementsByTagName('div');
console.log(wrapDiv);

// 8) Також до всіх внутрішніх елементів можна звертатись з допомогою селектора children - відповідає
// за всі внутрішні елементи

let wrapList2 = document.getElementsByClassName('wrap2');
let wrap2 = wrapList2[0];
let children = wrap2.children;

for (let child of children) {
     child.style.background = 'red'
}

// 9) Також усі елементи можна знаходити за допомогою querySelector (знайде перший елемент в body)
// та querySelectorAll (виведе всі елементи в NodeList - список вузлів)

let selector = document.querySelectorAll('.wrap3 > div');
console.log(selector);

for (let element of selector) {
    element.style.background = 'green'; 
}















