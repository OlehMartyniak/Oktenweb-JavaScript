//                                      HW lesson12

// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((value) => value.json())
    .then(value => {
        
        let container = document.createElement('div');
        container.classList.add('container');
        document.body.appendChild(container);

        for (let obj of value) {
            let div = document.createElement('div');
            div.classList.add('div_post');
            container.appendChild(div);

            let id = document.createElement('h3');
            let title = document.createElement('h4');
            let body = document.createElement('p');

            id.innerText = `${obj.id}`;
            title.innerText =`${obj.title}`;
            body.innerText = `${obj.body}`;

            div.appendChild(id);
            div.appendChild(title);
            div.appendChild(body);
        }
    })

// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then((value) => value.json())
    .then(value => {
        let containerTwo = document.createElement('div');
        containerTwo.classList.add('containerTwo');
        document.body.appendChild(containerTwo);

        for (let obj of value) {
            let div = document.createElement('div');
            div.classList.add('div_comment');

            let id = document.createElement('h3');
            let name = document.createElement('h4');
            let email = document.createElement('p');
            let body = document.createElement('p');

            id.innerText = `User ID: ${obj.id}`;
            name.innerText = `User name: ${obj.name}`;
            email.innerText = `Email: ${obj.email}`;
            body.innerText = `Comment: ${obj.body}`;

            containerTwo.appendChild(div);
            div.append(id,name,email,body);
        }
    })















