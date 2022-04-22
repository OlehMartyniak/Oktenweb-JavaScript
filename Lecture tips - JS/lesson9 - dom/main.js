//                                          lesson9 tips

// Через JS можна створювати HTML елементи, а також заповнювати їх; якщо це один елемент, то його можна додати функцією
// appendChild, а якщо їх багато, то з допомогою ф-ціїї append, яка додає вузли

//                                                append, appendChild

let create_h1 = document.createElement('h1'); // створ. змінну і вказуємо їй ф-цію створити елемент
document.body.appendChild(create_h1);                  // з доп. appendChild (додати) додаємо змінну в body
create_h1.innerText = 'Hello World';                   // звертаючись до змінної, задаємо їй внутрішній текст

// Однак, якщо нам потрібно додати кілька однакових елементів, то просто скопіювати їх не вийде; потрібно створити
// клон нашого елемента(cloneNode) через нову змінну, і тоді додавати його (appendChild); при чому клон буде без
// наповнення, однак cloneNode має параметр deep, який за замовчуванням false; якщо змінити на true, то клон перенесе і
// внутрішній контент

let create_h1_clone = create_h1.cloneNode(true);
document.body.appendChild(create_h1_clone);

// Наприклад, у нас є div class = 'target', і ми хочемо в нього додати елемент h2

create_h2 = document.createElement('h2');
create_h2.innerText = 'h2 - target'
let target = document.getElementsByClassName('target')[0]; // getElementsByClassName повертає псевдомасив,
target.append(create_h2);                                             // тому ми звертаємось до [0] індекса (і єдиного,
                                                                        // бо елементів з класом target є лише один )

// Також через JS можна завати позицію елемента, зокрема через функцію insertBefore(), де в дужках будемо першим
// аргументом записувати той, якому треба змінити позицію, а другим - той, вище якого треба поставити

let create_h3 = document.createElement('h3');
create_h3.innerText = 'h3 position changed';

document.body.insertBefore(create_h3,target);

//                                                  classList

// З допомогою тегу classList можна виводити класи елементів, а також додавати елементам нові класи з допомогою
// classList.add

// 1) перевіряємо класи в елемента target

console.log(target.classList);

// 2) додаємо клас в елемент target

target.classList.add('xxx');

// 3) видаляємо клас

target.classList.remove('xxx')

//                                                  toggle

// метод toggle працює як перемикач; якщо з допомогою toggle додати до елемента клас, він його отримає; а якщо з доп.
// toggle прописати вже існуючий клас, то він його прибере

target.classList.toggle('yyy'); // додасть клас 'yyy'
target.classList.toggle('target_2'); // видалить клас 'target_2', бо він у нас уже є прописаним

//                                                  nextElementsSibling
// дозволяє звернутись до наступного елемента

console.log(target.nextElementSibling) // виведе div class = box_1

//                                                  forms
// forms дозволяє звернутись до всіх форм в HTML, не зважаючи в те де вони знаходяться (у нас вони в дівах), при чому
// звертатись до них можна через індекси, як через псевдомасив

console.log(document.forms);

// також можна звертатись за їхнім id/name

console.log(document.forms.form2)
















