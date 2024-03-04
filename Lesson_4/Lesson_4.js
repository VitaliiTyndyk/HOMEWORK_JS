// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function areaRectangle(a, b){
//     return (a * b);
// }
// let S1 = areaRectangle(6, 3);
// console.log(`Площа прямокутника = ${S1}`)

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function areaCircle(p, r){
//     return (Math.PI * r)**2;
// }
// let S2 = areaCircle(Math.PI, 3);
// console.log(`Площа кола = ${S2}`)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function areaCylinder(h, r) {
//     return 2*(h*r);
// }
// let S = areaCylinder(5, 3);
// console.log(`Площа циліндра = ${S}`);

// - створити функцію яка приймає масив та виводить кожен його елемент

// let users = [
//     {id:1, name: 'Volodymyr', age: 48, username: 'vovk14', password: 'Vovk123#_'},
//     {id:2, name: 'Vladislav', age: 22, username: 'rabbit915', password: 'Rab45600'},
//     {id:3, name: 'Vitalii', age: 38, username: 'Aleister', password: 'DtlmvfrUthfkmn33'},
//     {id:4, name: 'Sergii', age: 36, username: 'kokos', password: 'jrntycrek1878%0'},
//     {id:5, name: 'Sviatoslav', age: 32, username: 'developer88', password: 'Ufhybqdbrkflfx808'},
//     {id:6, name: 'Oleh', age: 41, username: 'Lock-dog34', password: 'Jktukj[gj;bpys77'},
//     {id:7, name: 'Artem', age: 30, username: 'goleador18', password: 'Ujktfljhljd,br18'},
//     {id:8, name: 'Olha', age: 29, username: 'olha263', password: 'rbwzcjctgbc.100'},
//     {id:9, name: 'Lesia', age: 33, username: 'sunshine', password: 'Sjdhjv1818$5'},
//     {id:10, name: 'Svitlana', age: 18, username: 'stopwar', password: 'Sjgdhhgdch22'},
// ]
//
// function arr(array) {
//     for (const objArrElement of array) {
//         document.write(`<div>
//                 <h6>
//                 id - ${objArrElement.id},
//                 ім'я - ${objArrElement.name},
//                 username - ${objArrElement.username},
//                 Пароль - ${objArrElement.password}
//                 </h6>
//             </div>`)
//     }
// }
//
// arr(users);

// function arr2(array2) {
//     for (const objArrElement of array2) {
//         console.log(objArrElement);
//         for (const key in objArrElement) {
//             console.log(key, objArrElement[key])
//         }
//     }
// }
// arr2(users);

// function arr3(array3) {
//     for (const objArrElement of array3) {
//         document.write(`<ul>`)
//         for (const key in objArrElement) {
//             document.write(`<li>${key} ${objArrElement[key]}</li>`)
//         }
//         document.write(`</ul>`)
//     }
// }
// arr3(users);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph(text){
//     document.write(`<p><h1>${text}</h1></p>`);
// }
// paragraph('Hello, World !');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function ulThreeLi(text){
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`)
//     document.write(`<ul>`)
// }
// ulThreeLi('Hello, my friend');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function ulThreeLi2(text = 'default', num = 3){
//     document.write(`<ul>`);
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`<ul>`)
// }
// ulThreeLi2('Hello, my dear friend!', 33);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let newArray = [33, 38, 3, 'Say hello', 'Excellent', 0, true, false];
//
// function arrElements(array){
//     document.write(`<ul>`);
//     for (let i = 0; i < array.length; i++) {
//     document.write(`<li>${array[i]}</li>`);
//     }
//     document.write(`</ul>`);
// }
// arrElements(newArray)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users2 = [
//     {id:1, name: 'Volodymyr', age: 48},
//     {id:2, name: 'Vladislav', age: 22},
//     {id:3, name: 'Vitalii', age: 38},
//     {id:4, name: 'Serhii', age: 36},
//     {id:5, name: 'Sviatoslav', age: 32},
//     {id:6, name: 'Oleh', age: 41},
//     {id:7, name: 'Artem', age: 30},
//     {id:8, name: 'Olha', age: 29},
//     {id:9, name: 'Lesia', age: 33},
//     {id:10, name: 'Svitlana', age: 18}
// ]
//
// function arr(array) {
//     for (const objArrElement of array) {
//         document.write(`<div>
//                 <h6>
//                 id - ${objArrElement.id},
//                 ім'я - ${objArrElement.name},
//                 age - ${objArrElement.age}
//                 </h6>
//             </div>`)
//     }
// }
//
// arr(users2);


// - створити функцію яка повертає найменьше число з масиву

// let arrayNumber = [33, 18, 69, 4623, 16000]
//
// function minNumArray(array){
//     let min = array[0];
//     let max = array[0];
//     for (const item of array) {
//         if(item < min){
//             min = item;
//         } else if(item > max){
//             max = item;
//         }
//     }
//     return min;
// }
// let result = minNumArray(arrayNumber);
// console.log(result)

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// let arrayNumber2 = [38, 18, 69, 88, 437]
// function arraySum(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//        sum += array[i];
//     }
//     console.log(sum)
// }
// arraySum([10,22,33,100500])

// function sum(arr){
//     let firstNum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         firstNum = firstNum + arr[i];
//     }return firstNum;
// }
// sum([11,22,33])
// console.log(sum([11,22,33]))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]



// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250