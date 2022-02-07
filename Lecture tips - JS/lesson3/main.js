//                              Цикл  'for'

// Щоб продублювати певну однотипну дію багато разів можна використати цикл "for"

// Наприклад побудуємо список

document.write('<ul>');

for (let i = 0; i < 5; i++) {
   document.write('<li>item</li>')
}

document.write('</ul>');

// Часто з допомогою циклів ітерують (виводять) масиви

let menu = ['About us', 'Main', 'Contacts'];


for (let i = 0; i < menu.length; i++) {
    document.write(`<div>${menu[i]}</div>`)
}

// Можна також викликати масиви з об`єктами

let actresses = [
    {
        name: 'Salma Hayek',
        age: 55,
        image: 'https://www.google.com/search?q=salma+hayek&sxsrf=APq-WBvBx-UPJar6mF6hTcn3ki2j8jaBig:1644071325556&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj41uD64uj1AhWYtqQKHanWBHQQ_AUoAXoECAIQAw&biw=1440&bih=732&dpr=2#imgrc=T6isB5Zpeq0OaM&imgdii=DzNxIw9BoFrQCM'
    },
    {
        name: 'Eva Green',
        age: 41,
        image: 'https://www.google.com/search?q=eva+green&sxsrf=APq-WBvXQOxaa5o_ZCp6O0L_ZTMtin5zJw:1644071507918&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjooNvR4-j1AhXCM-wKHXCTCGEQ_AUoAXoECAIQAw&biw=1440&bih=732&dpr=2#imgrc=6y1NMnSvpnd1xM'
    },
    {
        name: 'Lea Seydoux',
        age: 35,
        image: 'https://www.google.com/search?q=lea+seydoux&sxsrf=APq-WBtl5KhbVkq4jBXxaIYeNyeDHOAsrQ:1644071563634&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjjhqTs4-j1AhWDO-wKHf4yDTUQ_AUoAXoECAIQAw&biw=1440&bih=732&dpr=2#imgrc=SGdW0gNJdX1pgM'
    }
]


for (let i = 0; i < actresses.length; i++) {
    let actress = actresses[i];

    document.write(`<div class="target"> ${actress.name}, ${actress.age}, <img src="${actress.image}"></div>`)
}

//                      Цикл  "for of"

let music = [
    ['Pink Floyd', 'Nirvana', 'Metallica'],
    ['Eminem', 'DrDre'],
    ['Tina Karol']
]

for (let artists  of music) {
    console.log(artists)
    for (let artist of artists) {
        console.log(artist)
    }

}

//                  Цикл "while"
// По суті, виконує ту ж функцію, що і цикл "for", однак відрізняється формою подачі

let i = 0;
while( i < 10 ) {
    document.write(`<h3>Something</h3>`)
    i++;

}

// З допомогою циклу for of та for in виведемо весь масив

let users = [
    {name: 'Olga', age: 23, status: false},
    {name: 'Arina', age: 21, status: true},
    {name: 'Mary', age: 19, status: true},
    {name: 'Marta', age: 20, status: false}
];

for (let user of users) {
    document.write('<ul>')
    for (let key in user) {
        document.write(`<li>${key} - ${user[key]}`)
    }
    document.write('</ul>')
}

