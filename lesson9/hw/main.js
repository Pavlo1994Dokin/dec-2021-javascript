// //Все робити за допомоги js.
// // - створити блок,
// let div = document.createElement('div');
//
// // - додати йому класи wrap, collapse, alpha, beta
// div.classList.add('wrap');
// div.classList.add('collapse');
// div.classList.add('olpha');
// div.classList.add('betta');
//
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// div.style.background = 'silver';
// div.style.color = 'tomato';
// div.style.fontSize = '40px';
//
// // - додати цей блок в body.
// document.body.append(div);
//
// // - клонувати його повністю, та додати клон в body.
// let cloneDiv = div.cloneNode(true);


// - Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// let someArray = ['Main', 'Products', 'About us', 'Contacts']
// let menu = document.getElementsByClassName('menu')[0];
// for (const item of someArray) {
//     let li = document.createElement('li');
//     li.innerText = 'hello'
//     menu.append(li);
// }

// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const item of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     divElement.innerText = `${item.title}`, `${item.monthDuration};`
//     document.body.append(divElement)
// }


// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const item of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     divElement.classList.add('item');
//     let h1Element = document.createElement('h2');
//     h1Element.classList.add('heading');
//     h1Element.innerText = item.title;
//     let pElement = document.createElement('p');
//     pElement.classList.add('description');
//     pElement.innerText = item.monthDuration;
//     divElement.append(h1Element);
//     divElement.append(pElement);
//     document.body.append(divElement);
// }

