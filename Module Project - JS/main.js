//                                          Module Project JS

// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then((value) => value.json())
    .then(value => {
        let container = document.createElement('div');
        container.classList.add('container');
        document.body.appendChild(container);

        for (let obj of value) {
            let div = document.createElement('div');
            div.classList.add('user');
            let id = document.createElement('h4');
            let name = document.createElement('p');
            let anchor = document.createElement('a');

            id.innerText = `ID: ${obj.id}`;
            name.innerText = `${obj.name}`;
            anchor.innerText = `Details`;
            anchor.href = './details.html '

            container.appendChild(div);
            div.append(id,name,anchor);



        }


    });









