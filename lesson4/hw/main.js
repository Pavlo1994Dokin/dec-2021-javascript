//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function calc(a, b) {
//     return a * b;
// }
//
// console.log(calc(4, 5));


//- створити функцію яка обчислює та повертає площу кола з радіусом r

// function cirecle() {
//     let r = 4 * 2;
//     let pCirecle = 3.14 * r;
//     return pCirecle;
// }
//
// console.log(cirecle());
// document.write('Площа кола :' + cirecle());

// function circle(p, r) {
//     r = r * r;
//     return p * r;
// }
// console.log(circle(3.14, 4));


//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r S=2pRH

// function cylinder (r, h){
//     let sCylinder = 2*3.14*r*h;
//     return sCylinder;
// }
// console.log(cylinder(5,  12));

// function culinder(h, r) {
//     let p = 3.14;
//     return 2 * p * h * r;
// }
// console.log(culinder(10, 5));


//- створити функцію яка приймає масив та виводить кожен його елемент

// let array = [1,2,3, 'okten', 'school'];
// function allArray (array){
//     for (let i=0; i<array.length; i++){
//         document.write(array[i])
//     }
// }
// allArray(array);

// let array=[1,2,3, 'hi', 'okten', 'paha']
// function SomeArray(array) {
//     for (let arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
// SomeArray(array)


//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function txt(text){
//     document.write(`<p>${text}</p>`);
// }
// txt('hello');

// function Paragraf(txt){
//     document.write(`<p>${txt}</p>`);
// }
// Paragraf('Hello Okten');


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function listCreated(a) {
//     document.write('<ul>');
//     document.write(`<li>${a}</li>`);
//     document.write(`<li>${a}</li>`);
//     document.write(`<li>${a}</li>`);
//     document.write('</ul>');
// }
//
// listCreated('hello')

// function SomeTxt(text){
//     document.write('<ul>');
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write('</ul>');
// }
// SomeTxt('Hi Okten school');


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function listCreated (text, num){
//     document.write('<ul>');
//     for (let i=1; i<=num;i++){
//         document.write(`<li>${text}</li>`);
//
//     }
//     document.write('</ul>');
// }
//
// listCreated('hello', 3);

// function someArray(txt, nmb) {
//     document.write('<ul>');
//     for (let i = 0; i < nmb; i++) {
//         document.write(`<li>${txt}</li>`);
//
//     }
//     document.write('</ul>');
// }
//
// someArray('hi', 5);


//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let nmb = [11, 22, 33, 'hello ', 'okten', true, false];
//
// function any(array) {
//     document.write('<ol>');
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`);
//     }
//     document.write('</ol>');
// }
//
// any(nmb);

// let elements = [11, 22, 33, 'hi', 'okten', 'school', true, false];
//
// function SomeArray(elements) {
//     document.write('<ul>');
//     for (let i = 0; i < elements.length; i++) {
//         document.write(`<li>${elements[i]}</li>`);
//     }
//     document.write('</ul>');
// }
//
// SomeArray(elements);


//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let last = [{id: 1, name: 'Hello', age: 21}, {id: 2, name: 'Okten', age: 32}, {id: 3, name: 'school', age: 22}];
//
// function some(array) {
//     for (el of array) {
//         document.write(`<div>${el.id}.${el.name} - ${el.age}</div`);
//     }
// }
//
// some(last);

// let last = [{id: 1, name: 'Hello', age: 21}, {id: 2, name: 'Okten', age: 32}, {id: 3, name: 'school', age: 22}];
//
// function SomeArray(last) {
//     for (element of last) {
//         document.write(`<div>${element.id}. ${element.name} - ${element.age}</div>`);
//     }
// }
//
// SomeArray(last)