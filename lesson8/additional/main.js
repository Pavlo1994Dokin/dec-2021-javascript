//написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
//


let a = [];
let f = (rules) => {
        if (rules.getElementsByClassName('rules')) {
            a.push(rules.getElementsByClassName('rules'));
        }

    return a
}
console.log(a);
f(document.body)
