//- Знайти та вивести довижину настипних стрінгових значень

// let str = 'hello world';
// console.log(str.length);
// let str1 = 'lorem ipsum';
// console.log(str1.length);
// let str2 = 'javascript is cool';
// console.log(str2.length);


// - Перевести до великого регістру наступні стрінгові значення

// let str = 'hello world';
// let upStr = str.toUpperCase();
// console.log(upStr);
//
// let str1 = 'lorem ipsum';
// let upStr1 = str1.toUpperCase();
// console.log(upStr1);
//
// let str2 = 'javascript is cool';
// let upSet2 = str2.toUpperCase();
// console.log(upSet2);

//- Перевести до нижнього регістру настипні стрінгові значення

// let toStr = upStr.toLowerCase();
// console.log(toStr);
//
// let toStr1 = upStr1.toLowerCase();
// console.log(toStr1);
//
// let toStr2 = upSet2.toLowerCase();
// console.log(toStr2);


//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// let trim= str.trim();
// console.log(trim);


//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']


// let stringToArray = (str) => {
//     return str.split('');
// }
// let str = 'Каждый охотник желает знать';
// let arr = stringToArray(str);
// console.log(arr);


//- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать';
// let delete_characters = (str, length) => {
//     return str.slice(0, length);
// };
// console.log(delete_characters(str, 7));


//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'


// let insert_dash = (str) => {
//     let SomeArray = str.split(' ').join('-').toUpperCase();
//     return SomeArray;
// }
// let str = "HTML JavaScript PHP";
// console.log(insert_dash(str));


//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let SomeArray = (arr) => {
//     return arr[0].toUpperCase() + arr.slice(1);
// }
// console.log(SomeArray('hello okten'));


//- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let capitaLize = (str) => {
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }
// console.log(capitaLize('hello okten school'));