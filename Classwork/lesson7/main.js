//                                      lesson7 classwork

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
//  виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, producer, manufactured, maxSpeed, engineVolume) {
    this.model = model;
    this.producer = producer;
    this.manufactured = manufactured;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    };

    // this.info = function () {
    //     const information = {
    //         model: this.model,
    //         producer: this.producer,
    //         manufactured: this.manufactured,
    //         maxSpeed: this.maxSpeed,
    //         engineVolume: this.engineVolume
    //     }
    //     for (const key in information) {
    //         console.log(`${key}: ${information[key]}`)
    //     }
    // }

    this.info = function () {
        for (let carKey in this) {
            if (typeof this[carKey] !== "function") {
                console.log(`${carKey}: ${this[carKey]}`)
            }
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        return this.maxSpeed = newSpeed
    }
    this.changeYear = function (newYear) {
        return this.manufactured = newYear;
    }
    this.addDriver = function (driver) {
        return this.driver = driver
    }

}

let car1 = new Car('Volvo', 'Sweden', 2012, '150 km/h', 160);
car1.info()
console.log(car1.increaseMaxSpeed('200 km/h'))
console.log(car1.changeYear(2016))
console.log(car1.addDriver('Mario'))

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//  максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Carr {
    constructor(model, producer, manufactured, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.manufactured = manufactured;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
        this.drive = function () {
            console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
        }
        this.info = function () {
            for (let carrKey in this) {
                if (typeof this[carrKey] !== "function") {
                    console.log(`${carrKey}: ${this[carrKey]}`)
                }
            }
        }
        this.increaseMaxSpeed = function (newSpeed) {
            console.log(this.maxSpeed = newSpeed)
        }
        this.changeYear = function (newYear) {
            console.log(this.manufactured = newYear)
        }
        this.addDriver = function (driver) {
            console.log(this.driver = driver)
        }
    }
}

let car2 = new Carr('Ford', 'General Motors', 2005, '170 km/h', 180)
car2.drive()
car2.info()
car2.increaseMaxSpeed('220 km/h')
car2.changeYear(2010)
car2.addDriver('Luidgi')

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Cinderella(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let Cinderellas = [
    new Cinderella('Marge', 22, 35),
    new Cinderella('Lisa', 23, 35),
    new Cinderella('Lila', 24, 36),
    new Cinderella('Vika', 25, 36),
    new Cinderella('Olga', 26, 37),
    new Cinderella('Nastia', 27, 37),
    new Cinderella('Anna', 28, 38),
    new Cinderella('Inna', 29, 38),
    new Cinderella('Joanne', 30, 40),
    new Cinderella('Lana', 31, 39)
]

class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}
let prince = new Prince('Vovka',68,40)
console.log(prince);

let findCinderella = (Cinderellas,prince) => {
    for (let cinderella of Cinderellas) {
        if (cinderella.footSize === prince.foundShoe) {
            console.log (`${prince.name}, your Cinderella's name is ${cinderella.name}`)
        }
    }
}
findCinderella(Cinderellas,prince);

// let findTheCinderella = Cinderellas.find(item) => item.footSize === prince.foundShoe;
// console.log(findTheCinderella)
 let findTheCinderella = Cinderellas.find((item) => item.footSize === prince.foundShoe);
 console.log(findTheCinderella);


