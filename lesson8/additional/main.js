//написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let allCllases = document.body.children;
console.log(allCllases);
for (const item of allCllases) {
    console.log(item);
    item.classList.add('newClass')
}
console.log(document.getElementsByClassName('newClass'));
