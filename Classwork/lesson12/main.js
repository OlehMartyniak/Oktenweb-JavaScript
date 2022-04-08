//                                              CW lesson12

//Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((value) => value.json())
    .then(value => {
        let container = document.createElement('div');
        let innerContainer = document.createElement('div');
        let commentContainer = document.createElement('div');
        container.classList.add('container')
        innerContainer.classList.add('innerContainer');
        commentContainer.classList.add('commentContainer');
        container.append(innerContainer,commentContainer);
        document.body.append(container);

        for (let obj of value) {
            let div = document.createElement('div');
            let id = document.createElement('h3');
            let title = document.createElement('h4');
            let comment = document.createElement('p');
            let button = document.createElement('button');

            div.classList.add('innerBox')
            id.innerText = `User ID: ${obj.id}`;
            title.innerText = `${obj.title}`;
            comment.innerText = `${obj.body}`;
            button.innerText = 'Show comment';

            div.append(id,title,comment,button);
            innerContainer.append(div);

            button.onclick = function () {
                let chosenContainer = document.createElement('div');
                let chosenId = document.createElement('h3');
                let chosenTitle = document.createElement('h4');
                let chosenComment = document.createElement('p');

                chosenContainer.classList.add('chosenContainer');
                chosenId.innerText = `Used ID: ${obj.id}`;
                chosenTitle.innerText = `${obj.title}`;
                chosenComment.innerText = `${obj.body}`;

                chosenContainer.append(chosenId,chosenTitle,chosenComment);
                commentContainer.append(chosenContainer);

                let newId = document.getElementsByClassName('chosenContainer');
                
                if (chosenId.id === id.id) {
                    prompt('mistake')
                }

            }
        }
    });