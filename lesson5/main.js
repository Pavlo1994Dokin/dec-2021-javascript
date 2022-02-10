//- створити функцію яка обчислює та повертає площу прямокутника висотою

// let calc1 = (a, b) => {
//     return a * b;
// }
// console.log(calc1(5, 10));
//
// let calc2 = (a, b) => a * b;
// console.log(calc2(5, 10));
// document.write('Площа прямокутника: ' + calc2(5, 10));

//- створити функцію яка обчислює та повертає площу кола

// let calculator = (p, r) => {
//     r = r * r;
//     return p * r;
// }
// console.log(calculator(3.14, 5));
//
//
// let calc = (p, r) => p * (r * r);
// console.log(calc(3.14, 5));
// document.write('Площа кола: ' + calc(3.14, 5));

//- створити функцію яка обчислює та повертає площу циліндру

// let culinder = (p, r, h) => 2 * p * r * h;
// console.log(culinder(3.14, 10, 5));
// document.write('Плащо циліндра: ' + culinder(3.14, 10, 5));

// let culinder2 = (p, r, h) => {
//     return 2 * p * r * h;
// }
// console.log(culinder2(3.14, 10, 5));

//- створити функцію яка приймає масив та виводить кожен його елемент

// let nmb = [11, 22, 33, 44, 550, 'hello', 'okten'];
//
// let SomeArray = (nmb) => {
//     for (let i = 0; i < nmb.length; i++) {
//         console.log(nmb[i]);
//     }
// }
// SomeArray(nmb);


//- створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let SomeTxt = (p) => {
//     document.write(`<p>${p}</p>`);
// }
// SomeTxt('Hello Okten');


//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let SomeTxt = (text) => {
//     document.write('<ul>');
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write('<ul>');
// }
// SomeTxt('Hello my friends');


//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let SomeTxt = (text, l) => {
//     document.write('<ul>');
//     for (let i = 0; i < l; i++) {
//         document.write(`<li>${text}</li>`);
//
//     }
//     document.write('</ul>');
// }
// SomeTxt('Hello okten', 3);


//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = [11, 22, 33, 'okten', 'school', true, false];
// let SomeArray = (arr) => {
//     document.write('<ul>');
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`);
//     }
//     document.write('</ul>');
// }
//
// SomeArray(array);


//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let last = [{id: 1, name: 'Hello', age: 21}, {id: 2, name: 'Okten', age: 32}, {id: 3, name: 'school', age: 22}];
// let SomeArray = (array) => {
//     for (let arrayKey of array) {
//         document.write(`<div>${arrayKey.id}. ${arrayKey.name} - ${arrayKey.age}</div>`);
//     }
// }
// SomeArray(last);