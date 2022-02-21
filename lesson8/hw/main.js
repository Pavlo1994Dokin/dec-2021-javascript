// Напишіть код,  котрий :
//     -- отримує текст з параграфа з id "content"
//     -- отримує текст з блоку з id "rules"
//     -- замініть текст параграфа з id 'content' на будь-який інший
//     -- замініть текст параграфа з id 'rules' на будь-який інший
//     -- змініть кожному елементу колір фону на червоний
//     -- змініть кожному елементу колір тексту на синій
//     -- отримати весь список класів елемента з id=rules і вивести їх в console.log
//     -- поміняти колір тексту у всіх елементів fc_rules на червоний


//     -- отримує текст з параграфа з id "content"
// console.log(document.getElementById('content'));



//     -- отримує текст з блоку з id "rules"
// let rulesId = document.getElementById('rules');
// console.log(rulesId);


//     -- замініть текст параграфа з id 'content' на будь-який інший
// let contentId = document.getElementById('content');
// contentId.innerHTML = '<p> hello okten</p>'


//     -- замініть текст параграфа з id 'rules' на будь-який інший
// let rulesId = document.getElementById('rules');
// rulesId.innerHTML = '<p>hello my dear frend</p>'


//     -- змініть кожному елементу колір фону на червоний
// let colorElements = document.body.children
// for (const colorElement of colorElements) {
//     colorElement.style.background = 'red'
// }


// //     -- змініть кожному елементу колір тексту на синій
// let colorTxt = document.body.children
// for (const colorTxtElement of colorTxt) {
//     colorTxtElement.style.color = 'blue'
// }


//     -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// let rulesClass = document.getElementById('rules')
// console.log(rulesClass.classList);


//     -- поміняти колір тексту у всіх елементів fc_rules на червоний
// let colorTxtElements = document.getElementsByClassName('fc_rules');
// for (const colorTxtElement of colorTxtElements) {
//     colorTxtElement.style.color = 'red'
// }

