// - Знайти та вивести довижину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let x = 'hello world';
// let stringLength = x.length;
// console.log(stringLength)
//
// let y = 'lorem ipsum'
// let stringLength2 = y.length;
// console.log(stringLength2)
//
// let z = 'java script is cool'
// let stringLength3 = z.length;
// console.log(stringLength3)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let x1 = 'hello world';
// let toUpperCase = x1.toUpperCase();
// console.log(toUpperCase);
//
// let y1 = 'lorem ipsum'
// let toUpperCase2 = y1.toUpperCase();
// console.log(toUpperCase2);
//
// let z1 = 'javascript is cool'
// let toUpperCase3 = z1.toUpperCase();
// console.log(toUpperCase3);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let x2 = 'HELLO WORLD';
// let toLowerCase = x2.toLowerCase();
// console.log(toLowerCase);
//
// let y2 = 'LOREM IPSUM'
// let toLowerCase2 = y2.toLowerCase();
// console.log(toLowerCase2);
//
// let z3 = 'JAVASCRIPT IS COOL'
// let toLowerCase3 = z3.toLowerCase();
// console.log(toLowerCase3);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   '
console.log(str.replaceAll(' ', '!'));
console.log(str.substring(str.indexOf(' ') + 1, str.lastIndexOf(' ')))