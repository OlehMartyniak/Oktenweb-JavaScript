//                                      lesson6 classwork

// - Дано список імен

let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'

// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let getNameProreply = (str,symbol) => {
   return str.replaceAll(symbol,' ');
}
console.log(getNameProreply(n1,'..'))

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let randomArray = (quantity,minNum,maxNum) => {
   let emptyArr = [];
   for (i = 0; i < quantity; i++) {
      emptyArr.push(Math.round(Math.random()*(maxNum - minNum) + minNum))
   }
   return emptyArr;
}
console.log(randomArray(10,0,100))

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let randomSort = (quantity,maxNumber) => {
   let emptyArr = [];
   for (let i = 0; i < quantity; i++) {
      emptyArr.push(Math.round(Math.random()*maxNumber))
   }
   return emptyArr.sort((current,next) => current - next);
}
let quant = randomSort(10,100);
console.log(quant)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//  відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let randomFilter = (quantity,maxNumber) => {
   let emptyArr = [];
   for (let i = 0; i < quantity; i++) {
      emptyArr.push(Math.round(Math.random()*maxNumber))
   };
   return emptyArr.filter((item) => item % 2 === 0);
}
let quant1 = randomFilter(10,100);
console.log(quant1);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let arrToString = (quantity,maxNumber) => {
   let emptyArr = [];
   for (let i = 0; i < quantity; i++) {
      emptyArr.push(Math.round(Math.random()*maxNumber))
   }
   return emptyArr.map(item => item.toString());
}
console.log(arrToString(10,100))

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.

let nums = [11,21,3];

let sortNums = (arr,direction) => {
   if (direction === 'ascending') {
      return arr.sort((current,next) => current - next)
   } else if (direction === 'descending') {
      return arr.sort((current,next) => next - current)
   }
}
console.log(sortNums(nums,'descending'))

// - є масив;-- відсортувати його за спаданням за monthDuration

let coursesAndDurationArray = [
   {title: 'JavaScript Complex', monthDuration: 5},
   {title: 'Java Complex', monthDuration: 6},
   {title: 'Python Complex', monthDuration: 6},
   {title: 'QA Complex', monthDuration: 4},
   {title: 'FullStack', monthDuration: 7},
   {title: 'Frontend', monthDuration: 4}
];

let sortMonth = (arr) => {
   return arr.sort((current,next) => next.monthDuration - current.monthDuration)
}
console.log(sortMonth(coursesAndDurationArray))

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filterMonthDuration = (arr) => {
   return arr.filter((item) => item.monthDuration > 5)
}
console.log(filterMonthDuration(coursesAndDurationArray))

























