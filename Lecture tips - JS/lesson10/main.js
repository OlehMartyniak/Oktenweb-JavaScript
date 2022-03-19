//                                      lesson 10 - events



//                                      click...event listener



// У нас є кнопка btn1; тепер ми з допомогою змінної получимо до неї доступ і з допомогою події onclick задамо  функцію
// яка надає певний функціонал

let btn1 = document.getElementById('btn1');

btn1.onclick = function () {
    console.log('you clicked me ')
}

// Якщо при нажатті клавіші потрібно виконати кілька дій, потрібно додати слухача подій (addEventListener), де в дужках
// першим елементом буде задаватись дія (click), а другим - функція яка повинна виконуватись

let btn2 = document.getElementById('btn2');

btn2.addEventListener('click',function () {
    console.log('Some click 1')
})

btn2.addEventListener('click',function () {
    console.log('Some click 2')
})

// Наприклад, створимо функцію, яка буде виводити положення нашої мишки по осі Х та У

let title = document.getElementById('title');

document .onmousemove = function (e) {
    title.innerText = `x = ${e.clientX} y = ${e.clientY}`
}



//                                      preventDefault



// preventDefault дозволяє не перезавантажувати сторінки при натисканні клавіші (для форм використовують івент onsubmit
// а не onclick)

let form = document.forms[0];
form.onsubmit = function (e) {
    e.preventDefault();

    console.log(e.target.login.value);                  // дозволить вивести логін (target цк всеодно що this)
    console.log(e.target.password.value);               // дозволить вивести пароль
}

// Ускладнимо попереднє завдання. Будемо  пакувати введені пароль і логін в певний обʼєкт, а ці обʼєкти в масив

let users = [];

let form2 = document.forms[1];
form2.onsubmit = function (e) {
    e.preventDefault();

    users.push({Login: e.target.login2.value, Password: e.target.password2.value});

    console.log(users)
}

// Зробимо так, щоб при введенні слова "fuck" виникав alert "Don`t use bad words"

let form3 = document.forms[2];              // Звернулись до третьої форми

let inputLogin = form3.login3;              // Створили змінну яка звертається тільки до поля логіну

inputLogin.addEventListener('input', (e) => {
    if (e.target.value.includes('fuck')) {
        alert('Don`t use bad words!')
    }
})



//                                      filter by ...



// Нехай у нас є масив з даними, і нам потрібно серед нього знайти і вивести конкретних користувачів

let usersArr = [
    {name: 'Olga',age: '20', status: true},
    {name: 'Anna',age: '21', status: false},
    {name: 'Olga',age: '27', status: false},
    {name: 'Alina',age: '25', status: true},
    {name: 'Mary',age: '23', status: false},
    {name: 'Julia',age:  '19', status: true},
    {name: 'Mary',age: '33', status: false},
];
console.log(usersArr)

let formSearch = document.forms[3];             // спочатку через змінну звертаємось до потрібної нам форми

let usernameInput = formSearch.findName;     // доступаємось до назви інпуту

formSearch.onsubmit = function (e) {     // скажемо, що при натисканні кнопки не будемо перезавантажувати сторінку
    e.preventDefault();

    let usernameValue = usernameInput.value;         // скажемо, що під час відправляння інформації ми будемо зчитувати інформацію з username

    let filterName = usersArr.filter(value => value.name === usernameValue); // звернемось до масиву і відфільтруємо його з умовою: отримаємо кожного користувача (value)
    console.log(filterName);                                                 //  і будемо фільтрувати лише тих, чиє імʼя відповідає запиту
};

// А тепер зробимо так, щоб знайдені нами дані виводились у певні <li>

// У нас є масив usersArr. Тепер з допомогою змінної ми звертаємось до потрібної нам форми
let searchForm = document.forms[4];
// Далі з допомогою змінної звертажмось до конкретного проіменованого інпуту "findName2" через попередню змінну, яка уже має доступ до потрібної форми
let searchName = searchForm.findName2;
// В HTML ми створили <ul> з id = "results"; звернемось до нього через змінну
let results = document.getElementById('results');
// Створимо ф-цію, при нажатті клавіші буде виконуватись функціонал форми: заборона перезавантажень
searchForm.onsubmit = function (e) {
    e.preventDefault();
    // Щоб при повторному введені дані замінялись, а не додавались, потрібно замінити наповнення нашого <ul>
    results.innerText = '';
    // Створимо змінну, яка буде казати, що під час відправляння інформації ми будемо зчитувати інформацію яка відправляється
    let searchNameValue = searchName.value;
    // Звернемось до масиву і відфільтруємо його з умовою: отримаємо кожного користувача (value) і скажемо, якщо його name еквівалентний searchNameValue то воно нам підходить
    let filterSearch = usersArr.filter(value => value.name === searchNameValue);
    console.log(filterSearch) // не обовʼязково (повторення з попереднього прикладу)
    // В змінну results (<ul>) будемо апендити елементи. Але спочатку до них треба звернутись через цикл і створити для них <li> і передати те, що ми будемо вкладати в ці <li>
    for (let item of filterSearch) {
        let li = document.createElement('li');
        li.innerText = `${item.name} ${item.age} ${item.status}`
        // Звернемось до нашого <ul> через змінну results і скажемо що будемо всередину вставляти (append) певні елементи (наші <li>)
        results.append(li)
    }
}



//                                              checkbox



let chBoxTrue = document.getElementById('chBox-true');
chBoxTrue.onclick = function () {
    let resultArr = [];
    if (chBoxTrue.checked) {
        resultArr = usersArr.filter(value => value.status)
    }
    for (let item of resultArr) {
        console.log(item)
    }
}

let chBoxFalse = document.getElementById('chBox-false');
chBoxFalse.onclick = function () {
    let resultArr = [];
    if (chBoxFalse.checked) {
        resultArr = usersArr.filter(value => !value.status)
    }
    for (let item of resultArr) {
        console.log(item)
    }
}













