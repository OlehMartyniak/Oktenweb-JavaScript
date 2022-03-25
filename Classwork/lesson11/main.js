//                                      classwork lesson11

// Є масив - users; створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт
// потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (let user of users) {
    let div = document.createElement('div');
    let button = document.createElement('button');
    div.innerText = `${user.name} - ${user.age} y.o. - ${user.status}`;
    button.innerText = 'add';
    document.body.append(div);
    div.append(button);

    button.onclick = function () {
        let usersArr = localStorage.getItem('favorites');
        if (!usersArr) {
            usersArr = [];
            usersArr.push(user);
            let stringifyArr = JSON.stringify(usersArr);
            localStorage.setItem('favorites',stringifyArr);
        } else {
            let realUsersArr = JSON.parse(usersArr);
            realUsersArr.push(user);
            localStorage.setItem('favorites',JSON.stringify(realUsersArr))
        }
    }
}

// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let redirectBtn = document.createElement('button');

redirectBtn.innerText = 'Show favorite users';
document.body.append(redirectBtn);

redirectBtn.onclick = function () {
    location.href = "./favorites.html"
}