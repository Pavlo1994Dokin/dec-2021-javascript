//Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) додає клас з назвою групи, елементу з ід main_header
//     b) робить шириниу елементу ul 400px
//     c) робить шириниу всіх елементів з класом linkList шириною 50%
//     d) отримує текст який зберігається в елементі з класом listElement2
//     e) отримує всі елементи li та змінює ім колір фону на сірий
//     f) отримує всі елементи 'a' та додає їм клас anchor
//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//     l) отримати елементи p та змінити їм padding на 20px
//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)


//     a) додає клас з назвою групи, елементу з ід main_header
let someClassByMainHeader = document.getElementById('main_header');
someClassByMainHeader.classList.add('main_header')

//     b) робить шириниу елементу ul 400px
// let ulHeader = document.getElementsByTagName('ul')
// console.log(ulHeader);
// ulHeader[0].style.width = '400px';
// ulHeader[0].style.border = '1px solid black'


////     c) робить шириниу всіх елементів з класом linkList шириною 50%
// let widthLinkList = document.getElementsByClassName('linkList');
// for (const widthLinkListElement of widthLinkList) {
//     widthLinkListElement.style.width = '50%'
//     widthLinkListElement.style.border = '1px solid red '
//
// }


//     d) отримує текст який зберігається в елементі з класом listElement2
// let textListElement2 = document.getElementsByClassName('listElement2');
// textListElement2[0].innerHTML = '<a href=""><b>hello</b></a>';

// //     e) отримує всі елементи li та змінює ім колір фону на сірий
// let someLi = document.getElementsByTagName('li')
// for (const someLiElement of someLi) {
//     someLiElement.style.background = 'silver'
// }


//     f) отримує всі елементи 'a' та додає їм клас anchor
// let a = document.getElementsByTagName('a');
// for (const aElement of a) {
//     aElement.classList.add('anchar')
//     console.log(aElement);
// }


//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let aTxt = document.getElementsByTagName('a');
// for (const aTxtElement of aTxt) {
//     if (aTxtElement.innerText === 'link3') {
//         aTxtElement.style.fontSize = '40px'
//         console.log(aTxtElement);
//     }
// }


//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let aClassXxx = document.getElementsByTagName('a');
// console.log(aClassXxx);
// for (const aClassXxx1 of aClassXxx) {
//     console.log(aClassXxx1);
//     let element_xxx = aClassXxx1.innerText
//     aClassXxx1.classList.add('element_$(element_xxx');
// }


//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let colorSubHeader = document.getElementsByClassName('sub-header');
// for (const item of colorSubHeader) {
//     item.style.background = prompt('color: (silver, tomato)')
// }


//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let elementSub = document.getElementsByClassName('sub-header');
// console.log(elementSub);
// for (const item of elementSub) {
//     console.log(item);
//     if (item.innerText === 'content 2 segment') {
//         item.style.color = prompt('color : (red,silver,tomato')
//     } else {
//         item.style.color = 'black'
//     }
// }


//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//
// let content1SomeTxt = document.getElementsByClassName('content_1');
// console.log(content1SomeTxt);
// for (const item of content1SomeTxt) {
//     item.innerHTML = prompt('change text')
// }


//     l) отримати елементи p та змінити їм padding на 20px
// let pElement = document.getElementsByTagName('p');
// console.log(pElement);
// for (const item of pElement) {
//     item.style.padding = '20px'
// }


//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let text2All = document.getElementsByClassName('text2');
// console.log(text2All);
// for (const item of text2All) {
//     item.innerHTML = 'mon-year. Пример sep-2021'
// }
