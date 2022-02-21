//написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
//


let a = [];
console.log(a);
let f = (rules) => {
    if (rules.children.length) {
        for (const item of rules.children) {
            f(item);
        }
        if (rules.className.includes(' ')) {
            let c = rules.className.split(' ')
            a.push(c[1])
        }
    }
}
f(document.body)
