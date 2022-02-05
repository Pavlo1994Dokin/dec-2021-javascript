
// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let number = [123, 321, 12, 21, 22];
// console.log(number);
//
// let srt = ['hello', 'my', 'name', 'Pavlo', 'Dokin'];
// console.log(srt);
//
// let bool = [11, 22, 33, 44, 55, 'hi', 'okten', 'how', 'are', 'you', 2 === '2', 1 > '1', 2 === 2, 21 >= 21, '321' !== 321];
// console.log(bool);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let xxx = [21, 12, 33, 44, 21, [1, 'hello',  3]];
// console.log(xxx[5][1])


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// document.write('<ul>');
// for (let i = 0; i < 10; i++) {
// document.write('<div>heloo Okten</div>')
// }
// document.write('</ul>');

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// document.write('<ul>');
// for (let i = 0; i < 10; i++) {
//     document.write(`<div> hi ${i}</div>`)
// }
// document.write('</ul>');

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i < 20) {
//     document.write('<h1>hello okten</h1>');
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<h1>hi ${i}</h1>`);
//     i++;
// }


//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let number = [11, 22, 33, 44, 55, 66, 77, 88, 99, 12];
// for (let i = 0; i < number.length; i++) {
//     let numberElement = number[i];
//
// }
// console.log(number);


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let str = ['hello', 'okten', 'school', 'my', 'name', 'Pavlo', 'and', 'I', 'liveIn', 'Lviv'];
// for (let string of str) {
//     console.log(string);
// }


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arr = ['hi', 'my', 'mentor', 'in', 2022, 'year', [], 5, {}];
// for (let i = 0; i < arr.length; i++) {
//     let arrElement = arr[i];
//     console.log(arr[i]);
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let xxx = [11, 22, 33, 44, 'hello', 'my', 'friend', 5 === '5', 5 >= '6', 2 !== '3', 4 === 4];
// for (let i = 0; i < xxx.length; i++) {
//     if (typeof xxx[i]=== 'boolean') {
//         console.log(xxx[i]);
//
//     }
//
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let nmb = [11, 22, 33, true, 'hi', 'okten', 'and', [], {}]
// for (let i = 0; i < nmb.length; i++) {
//     if (typeof nmb[i] === 'number') {
//         console.log(nmb[i]);
//     }
//
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let str = [33, 44, 55, 'lets', 'go', 1 === 2, 5 === '5', {}, true, false];
// for (let i = 0; i < str.length; i++) {
//     let strElement = str[i];
//     if (typeof str[i] === 'string') {
//         console.log(str[i]);
//     }
//
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let xxx = [];
// xxx[0] = 'hello';
// xxx[1] = 'okten';
// xxx[2] = 11;
// xxx[3] = 22;
// xxx[4] = 33;
// xxx[5] = '5';
// xxx[6] = true;
// xxx[7] = false;
// xxx[8] = {};
// xxx[9] = [];
// for (let i = 0; i < xxx.length; i++) {
//     let xxx1 = xxx[i];
//     console.log(xxx[i]);
// }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write


// for (let i = 0; i < 10; i++) {
//     console.log(`поточний крок циклу `+i+``);
//     document.write(`поточний крок циклу `+i+``);
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

//
// for (let i = 0; i < 100; i++) {
//     console.log(`поточний крок циклу `+i+``);
//     document.write(`поточний крок циклу `+i+``);
// }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write


// for (let i = 0; i < 100; i += 2) {
//     console.log(`поточний крок циклу ` + i + ``);
//     document.write(`поточний крок циклу ` + i + ``);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write


// for (let i = 0; i < 100; i++) {
//     if(i % 2 === 0){
//         console.log(i);
//         document.write(i);
//     }
// }



// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write


// for (let i = 0; i < 100; i++) {
//     if(i % 2 !== 0){
//         console.log(i);
//         document.write(i);
//     }
// }