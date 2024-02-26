// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// let arr;
// arr = [123,
//     'Hero',
//     0,
//     function (){ alert('Hello, friend'); },
//     "Cosmos",
//     true,
//     'Books',
//     -123,
//     88,
//     (22)];
// console.log(arr)
// console.log(arr[0])
// // alert(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// // arr[3]()
// console.log(arr[4])
// console.log(arr[5])
// console.log(arr[6])
// console.log(arr[7])
// console.log(arr[8])
// console.log(arr[9])
// console.log(typeof (22))
// arr[10] = 'I am going to drink coffee right now'
// console.log(arr[10])


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

// let arrBooks;
// arrBooks = [
//     {id: 0, title: 'It', pageCount: 1344, genre: 'horror'},
//     {id: 1, title: 'Rita Hayworth and Shawshank Redemption', pageCount: 560, genre: 'Fiction. Horror'},
//     {id: 2, title: 'The Blade Itself', pageCount: 529, genre: 'Fantasy fiction'}
// ];
// console.log(arrBooks[2])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

// let book1 =  {title: 'It', pageCount: 1344, genre: 'horror', authors:[{name: 'Stephen King'}, {age: 76}]};
// console.log(book1);
// console.log(book1.authors[0].name);
//
// let book2 =  {title: 'Rita Hayworth and Shawshank Redemption', pageCount: 560, genre: 'Fiction. Horror', authors:[{name: 'Stephen King'}, {age: 76}]};
// console.log(book2);
// console.log(book2.authors[1].age);
//
// let book3 =  {title: 'The Blade Itself', pageCount: 529, genre: 'Fantasy fiction', authors:[{name: 'Joe Abercrombie'}, {age: 49}]};
// console.log(book3);
// console.log(book3.authors);
// console.log(book3.authors[0]['name']);
// console.log(book3.authors[1]['age']);
//
// let books = [book1, book2, book3];//масиви в масиві
// console.log(books[0].genre)
// console.log(books[0].authors[0].name)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

// let users = [
//     {id:1, name: 'Volodymyr', username: 'vovk14', password: 'Vovk123#_'},
//     {id:2, name: 'Vladislav', username: 'rabbit915', password: 'Rab45600'},
//     {id:3, name: 'Vitalii', username: 'Aleister', password: 'DtlmvfrUthfkmn33'},
//     {id:4, name: 'Sergii', username: 'kokos', password: 'jrntycrek1878%0'},
//     {id:5, name: 'Sviatoslav', username: 'developer88', password: 'Ufhybqdbrkflfx808'},
//     {id:6, name: 'Oleh', username: 'Lock-dog34', password: 'Jktukj[gj;bpys77'},
//     {id:7, name: 'Artem', username: 'goleador18', password: 'Ujktfljhljd,br18'},
//     {id:8, name: 'Olha', username: 'olha263', password: 'rbwzcjctgbc.100'},
//     {id:9, name: 'Lesia', username: 'sunshine', password: 'Sjdhjv1818$5'},
//     {id:10, name: 'Svitlana', username: 'stopwar', password: 'Sjgdhhgdch22'},
// ]
// console.log(users[0].password);
// console.log(users[1].password);
// console.log(users[2].password);
// console.log(users[3].password);
// console.log(users[4].password);
// console.log(users[5].password);
// console.log(users[6].password);
// console.log(users[7].password);
// console.log(users[8].password);
// console.log(users[9].password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = 10;
// if (x !== 0) {
//     console.log('Вірно')
// } else {
//     console.log('Невірно')
// }
//
// let x = 10;
// if (x !== 0) {
//     document.write('<h1>Вірно</h1>')
// } else {
//     document.write('Невірно')
// }
//
// let a = 1;
// if (a !== 0) {
//     console.log('Вірно')
// } else {
//     console.log('Невірно')
// }
//
// let a = 0;
// if (a !== 0) {
//     console.log('Вірно')
// } else {
//     console.log('Невірно')
// }
//
// let a = -3;
// if (a !== 0) {
//     console.log('Вірно')
// } else {
//     console.log('Невірно')
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю чи четверту частину години).

// let time = +prompt('Enter number');
// if ( time >= 0 && time <= 15) {
//         console.log('first part of hour');
//     }
//     else if ( time >= 16 && time <=30){
//         console.log('second part of hour');
//     }
//     else if ( time >= 31 && time <=45){
//         console.log('third part of hour');
//     }
//     else if ( time >= 46 && time <=59){
//         console.log('fourth part of hour');
//     }
//     else {
//         console.log('WTF? Are you still alive?')
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = +prompt('Enter date');
// if ( day >= 1 && day <= 10) {
//     console.log('first decade');
// }
// else if ( day >= 11 && day <=20){
//     console.log('second decade');
// }
// else if ( day >= 21 && day <=31){
//     console.log('third decade');
// }
// else {
//     console.log('WTF?')
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let days = prompt('Enter number of day')
// switch (days){
//     case '1':
//         console.log('Monday');
//         break;
//     case '2':
//         console.log('Tuesday');
//         break;
//     case '3':
//         console.log('Wednesday');
//         break;
//     case '4':
//         console.log('Thursday');
//         break;
//     case '5':
//         console.log('Friday');
//         break;
//     case '6':
//         console.log('Saturday');
//         break;
//     case '7':
//         console.log('Sunday');
//         break;
// }

// let days = +prompt('Enter number of day')
// switch (days){
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
// }

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.



// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)



// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".