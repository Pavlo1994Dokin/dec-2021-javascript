// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// let txt = 'Hello';
// console.log(txt);
// alert(txt);
// document.write(`<div>${txt}</div>`);
//
// let xxx = 'owu';
// console.log(xxx);
// alert(xxx);
// document.write('owu');
//
// let zxc = 'com';
// console.log(zxc);
// alert(zxc);
// document.write(`<div>${zxc}</div>`);
//
// let asd = 'ua';
// console.log(asd);
// alert(asd);
// document.write('ua');
//
// let nmb = 1;
// console.log(nmb);
// alert(nmb);
// document.write('1');
//
// let aaa = 10;
// console.log(aaa);
// alert(aaa);
// document.write(`${10}`);
//
// let zzz = -999;
// console.log(zzz);
// alert(zzz);
// document.write(`${zzz}`);
//
// let sss = 123;
// console.log(sss);
// alert(sss);
// document.write(`${sss}`);
//
// let qqq = 3.14;
// console.log(qqq);
// alert(qqq);
// document.write(`${qqq}`);
//
// let www = 2.7;
// console.log(www);
// alert(www);
// document.write(`${www}`);
//
// let eee = 16;
// console.log(eee);
// alert(eee);
// document.write(`${eee}`);
//
// let ddd = 5 === 5;
// console.log(ddd);
// alert(ddd);
// document.write(`<div>${ddd}</div>`);
//
// let ccc = 5 > 6;
// console.log(ccc);
// alert(ccc);
// document.write(`${ccc}`);




// Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// txt = 'hi';
// console.log(txt);
// alert(txt);
// document.write(`<div>${txt}</div>`);
//
// xxx = 'bye';
// console.log(xxx);
// alert(xxx);
// document.write(`${xxx}`);
//
// zxc = 'okten';
// console.log(zxc);
// alert(zxc);
// document.write(`${zxc}`);
//
// asd = 'school';
// console.log(asd);
// alert(asd);
// document.write(`${asd}`);
//
// nmb = 11;
// console.log(nmb);
// alert(nmb);
// document.write(`11`);
//
// aaa = 1010;
// console.log(aaa);
// alert(aaa);
// document.write(`<div>${aaa}</div>`);
//
// zzz = -911;
// console.log(zzz);
// alert(zzz);
// document.write(`${zzz}`);
//
// sss = 321;
// console.log(sss);
// alert(sss);
// document.write(`${sss}`);
//
// qqq = 2.44;
// console.log(qqq);
// alert(qqq);
// document.write(`${qqq}`);
//
// www = 7.21;
// console.log(www);
// alert(www);
// document.write(`${www}`);
//
// eee = 1616;
// console.log(eee);
// alert(eee);
// document.write(`${eee}`);
//
// ddd = !!0;
// console.log(ddd);
// alert(ddd);
// document.write(`${ddd}`);
//
// ccc = 5 !== 6;
// console.log(ccc);
// alert(ccc);
// document.write(`<div>${ccc}</div>`);




// -Створити
// 3
// змінних
// firstName, middleName, lastName, наповнити
// їх
// своїм
// ПІБ.З
// 'єднати їх в одну змінну person. (Не об'
// єкт
// )

// let firstName = 'Dokin';
// console.log(firstName)
//
// let middleName = 'Pavlo';
// console.log(middleName);
//
// let lastName = 'Igorovuch';
// console.log(lastName);
//
// let person = [firstName,middleName,lastName];
// console.log(person);




// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// let name = prompt('Welcome', 'Pavlo');
// console.log(name);
// let middleName = prompt('middle name', 'Igorovuch');
// console.log(middleName);
// let age = prompt('Age', '27 years old');
// console.log(age);




// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль

// let a = 100;
// console.log(typeof a);
//
// let b = '100';
// console.log(typeof b);
//
// let c = true;
// console.log(typeof c);




// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     // В однакових виразах не використовувати однакові оператори!!!
// 5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true

// console.log(5 < 6);
// console.log(5 > 6);
// console.log(5 === 6);
// console.log(5 >= 6);
// console.log(10 === 10);
// console.log(10 >= 10);
// console.log(10 !== 10);
// console.log(10 > 10);
// console.log(10 < 10);
// console.log(123 !== 123);
// console.log(123 === 123);




// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?

let str = "20";
console.log(typeof str);
let a = 5;
console.log(typeof a);
document.write(str + a + "<br/>");
// просто з'єднює два значення, тому що "str"-це стрінга, 'а'-теж стає стрінгою
document.write(str - a + "<br/>");
// тому що таке є в JS )))))
document.write(str * "2" + "<br/>");
// дія множення
document.write(str / 2 + "<br/>");
// дія ділення