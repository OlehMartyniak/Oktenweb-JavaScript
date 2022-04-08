//                                          LT lesson12 - fetch

// API  - прикладний інтерфейс програмування - інформація, яку ми отримуємо по запиту (get) з сервера
// Щоб отримати API інформацію використовують метод fetch (звернемось до навчального сайту jsonplaceholder)

fetch('https://jsonplaceholder.typicode.com/posts')            // Зробили запит на сайт
    .then((response) => response.json())                   // Отримали відповдь (response), яку перетворили на json обʼєкт
    .then(jsonResponse => console.log(jsonResponse ))                // Перетворили цей json-обʼєкт на звичайний (jsonResponse)



// В попередньому варіанті за завмовчуванням стоїть метод "GET" (він не записується)
// Однак, якщо нам потрібно не отримати інформацію, а надіслати, використовують метод "POST"
// Звернемось до розділу users з jsonplaceholder і додамо ще одного користувача (наразі їх 10) з доп. методу "POST"

fetch('https://jsonplaceholder.typicode.com/users', {     // end-point (кінцева точка), на яку реагує запит
    method: 'POST',                                                 // метод POST, який дозволить віддавати інформацію
    headers: {                                                      // в headers вкладається мета-інформація для сервера
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({                                   // в body ми вказуємо,яку інформацію будемо відправляти на сервер, відповідно перетворюємо її в JSON
        name: 'Vinona',
        username: 'vin_rider',
        email: 'smth@gmail.com'
    })
})
    .then(value => value.json())                                   // перевіримо, що ми створили новий 11 обʼєкт до вже існуючих 10
    .then(value => console.log(value))



// Тепер створемо схожу конструкцію, але інформацію в ключі - name,username,email будемо надсилати зі створеної html-форми

let form = document.forms.saveUserForm;
form.onsubmit = (e) => {
    e.preventDefault();

    let name = form.name.value;
    let username = form.username.value;
    let email = form.email.value;

    fetch('https://jsonplaceholder.typicode.com/users', {     // end-point (кінцева точка), на яку реагує запит
        method: 'POST',                                                 // метод POST, який дозволить віддавати інформацію
        headers: {                                                      // в headers вкладається мета-інформація для сервера
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({                                   // в body ми вказуємо,яку інформацію будемо відправляти на сервер, відповідно перетворюємо її в JSON
            name: name,
            username: username,
            email: email
        })
    })
        .then(value => value.json())                                   // перевіримо, що ми створили новий 11 обʼєкт до вже існуючих 10
        .then(value => console.log(value))

}
