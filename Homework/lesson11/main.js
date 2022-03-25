//                                      lesson11 homework

// створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage


let name = document.getElementById('name');
let age = document.getElementById('age')
let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', function () {
    let nameValue = document.forms[0].name.value;
    let ageValue = document.forms[0].age.value;
    let obj = {name: `${nameValue}`, age: `${ageValue}`};
    let key = 'Key';
    localStorage.setItem(key, JSON.stringify(obj))
})

// -створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let model = document.forms[1].model;
let type = document.forms[1].type;
let volume = document.forms[1].volume;

btn2.addEventListener('click', function () {
    let modelValue = model.value;
    let typeValue = type.value;
    let volumeValue = volume.value;
    let obj = {Model: `${modelValue}`, type: `${typeValue}`, volume: `${volumeValue}`}

    let cars = localStorage.getItem('cars');
    if (!cars) {
        cars = [];
        cars.push(obj);
        let stringifyArr = JSON.stringify(cars);
        localStorage.setItem('cars',stringifyArr);
    } else {
        let realCarsArr = JSON.parse(cars);
        realCarsArr.push(obj);
        localStorage.setItem('cars',JSON.stringify(realCarsArr))
    }

})

















