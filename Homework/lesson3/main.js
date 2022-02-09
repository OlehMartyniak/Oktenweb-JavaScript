// lesson3 homework


// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let arrNumber = [1,2,3,4,5];
let arrString = ['One','Two','Three','Four','Five'];
let arrMix = [11, 'eleven', true, 12, 'twelve', false, 13, 'thrirteen', true, 14, 'fourteen', false, 15, 'fifteen', true]

console.log(arrNumber, arrString, arrMix);

//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arrEmpty = [];

arrEmpty[0] = 101;
arrEmpty[1] = 'vault';
arrEmpty[2] = true;
arrEmpty[3] = 112;
arrEmpty[4] = 'city';
arrEmpty[5] = false;
arrEmpty[6] = 1984;
arrEmpty[7] = 'George Orwell';
arrEmpty[8] = true;
arrEmpty[9] = 'dystopian social science fiction novel';

console.log(arrEmpty)

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>random text</div>`)
}

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let b = 0; b < 10; b++) {
    document.write(`<div>${b} random text and index</div>`)
}

//- За допомогою циклу while вивести в документ 20 блоків h3 c довільним текстом всередині.

let c = 0;
while (c < 20) {
    document.write(`<h3>h1 with random text</h3>`)
    c++;
}

//- За допомогою циклу while вивести в документ 20 блоків h3 c довільним текстом і індексом всередині.

let d = 0;
while (d < 20) {
    document.write(`<h3>${d} h3 with random text and index</h3>`)
    d++;
}

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arrA = [101,102,103,104,105,106,107,108,109,110];

for (let f = 0; f < arrA.length; f++) {
    console.log( arrA[f] );
}

//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arrB = ['Austria','Netherlands','Ireland','Greenland','Norway','Denmark','Sweden','Finland','Argentina','India'];

for (let g = 0; g < arrB.length; g++) {
    console.log(arrB[g]);
}

//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arrC = [101,'Volkswagen', true, 202, 'Volvo', false, 303, 'Dodge', true, 404];

for (let j = 0; j < arrC.length; j++) {
    console.log(arrC[j]);
}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let arrD = [1001,'Prague', true, 2002, 'Brussels', false, 3003, 'Rotterdam', true, 4004]

for (let h = 0; h < arrD.length; h++) {
    if (typeof arrD[h] === 'boolean') {
        console.log(arrD[h])
    }
}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

for (let g = 0; g < arrD.length; g++) {
    if (typeof arrD[g] === 'number') {
        console.log(arrD[g])
    }
}

//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

for (let k = 0; k < arrD.length; k++) {
    if (typeof arrD[k] === 'string') {
        console.log(arrD[k])
    }
}

//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let arrF = [];

arrF[0] = 11111;
arrF[1] = 'shelter';
arrF[2] = true;
arrF[3] = 22222;
arrF[4] = 'Budapest';
arrF[5] = false;
arrF[6] = 1900;
arrF[7] = 'Bram Stoker';
arrF[8] = true;
arrF[9] = 'thriller novel';

for (let z = 0; z < arrF.length; z++) {
    console.log(arrF[z])
}

//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let v = 0; v < 10; v++) {
    console.log('поточний номер кроку: '+ v +' ');
    document.write('<p>поточний номер кроку: '+ v +'</p> ');
}

//- Створити цикл for на 10 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let s = 0; s < 10; s++) {
    console.log('поточний номер кроку: '+ s +' ')
    document.write('<p>поточний номер кроку: '+ s +'</p> ');
}

//- Створити цикл for на 10 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let z = 0; z < 10; z +=2) {
    console.log('поточний номер кроку: '+ z +' ')
    document.write('<p>поточний номер кроку: '+ z +'</p> ');
}

//- Створити цикл for на 10 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let q = 0; q < 10; q++) {
    if (q % 2 === 0) {
        console.log('поточний номер кроку: '+ q +' ')
        document.write('<p>поточний номер кроку: '+ q +'</p> ');
    }
}

//- Створити цикл for на 10 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let u = 0; u < 10; u++) {
    if (u % 2 === 1) {
        console.log('поточний номер кроку: '+ u +' ')
        document.write('<p>поточний номер кроку: '+ u +'</p> ');
    }
}




















